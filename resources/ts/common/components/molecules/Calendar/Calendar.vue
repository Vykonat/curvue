<template lang='pug'>
  article.calendar
    section.header
      h4( 
        :native = "false", 
        @keypress.enter.space.stop.prevent="setSelecting('year')", 
        @click = "setSelecting('year')", 
        role = "button", 
        tab-index = "0", 
        :aria-label = "selectedYear"
      ) {{ selectedYear }}
      h5( 
        :native = "false"
        @click = "setSelecting('date')",
        @keypress.enter.space.stop.prevent="setSelecting('date')",
        role = "button", 
        tab-index = "0", 
        :aria-label = "calculatedDate | calendarHeaderDate"
      ) {{ calculatedDate | calendarHeaderDate }}

    section.body( v-if = "selecting === 'date'")
      .date
        span.arrow( 
          @click="setByMonth(currentMonth - 1)"
          @keypress.enter.space.stop.prevent="setByMonth(currentMonth - 1)"
          role="button"
          :aria-label="$t('calendar.previousMonth' /* previous month */)"
          tabindex="0"
        )
        span.currentDate {{ new Date(currentYear, currentMonth, 1) | calendarMonthlyNav}}
        span.arrow( 
          @click="setByMonth(currentMonth + 1)"
          @keypress.enter.space.stop.prevent="setByMonth(currentMonth + 1)"
          role="button"
          :aria-label="$t('calendar.nextMonth' /* next month */)"
          tabindex="0"
        )

      table
        thead
          tr
            td.disabledDay( v-for = "(weekday, idx) in weekdays", :key = "`weekday-${idx}`")
              span {{ $t('calendar.' + weekday + '_short') }}
            
        tbody( v-if = "calendar" )
          tr( v-for = "(days, idx) in calendar", :key = "`days-${idx}`" )
            td(
              :class = "[day.currentDay ? 'currentDay' : '', day.disabled ? 'disabledDay' : '', day.selected ? 'selectedDay' : '']"
              v-for = "(day, idx) in days",
              :key = "`day-${idx}`",
              :tabindex = "day.day ? 0 : null",
              :aria-label = "day.day",
              @keydown.enter.stop.prevent="setByDay(day)",
              @keydown.space.stop.prevent="setByDay(day)",
              @click="setByDay(day)",
            )
              span {{ day.day }}
    
    section.year( v-if = "selecting === year" )
      span(
        :class="[year.selected ? 'selected' : '']",
        :id="`${year.year}-calendar-year`",
        :key="year.year",
        v-for="year in years",
        @click="setByYear(year.year)",
        @keypress.enter.space.stop.prevent="setByYear(year.year)"
        :aria-label="year.year"
        tabindex="0"
      ) {{ year.year }}

    section.footer
      lvql-button( variant="danger", @click.stop.prevent="onClose", :is-ghost="true" ) {{ ($t('core.cancel')) }}
      lvql-button( variant="accent", @click.stop.prevent="onChange" ) {{ ($t('core.confirm')) }}
</template>

<script lang='ts'>
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import chunk from 'lodash/chunk';

interface Day {
  day: number;
  currentDay: boolean;
  selected: boolean;
  disabled: boolean;
}

interface Year {
  year: number;
  selected: boolean;
}

@Component({
  filters: {
    calendarHeaderDate(value) {
      const date = new Date(value);
      return date.toLocaleDateString(['en-us'], {
        month: 'long',
        weekday: 'long',
        day: 'numeric'
      });
    },

    calendarMonthlyNav(value) {
      const date = new Date(value);
      return date.toLocaleDateString(['en-us'], {
        month: 'long',
        year: 'numeric'
      });
    }
  }
})
export default class Calendar extends Vue {
  @Prop({ default: () => new Date() }) today!: Date;
  @Prop() minDate: Date | undefined;
  @Prop() maxDate: Date | undefined;
  @Prop({ default: 0 }) firstDayOfWeek!: number;
  @Prop() startDate: Date | undefined;
  @Prop() endDate: Date | undefined;
  @Prop() selectedDate: Date | undefined;

  @Provide() selecting: string = 'date';
  @Provide() currentMonth: number = 0;
  @Provide() currentYear: number = 0;
  @Provide() selectedDayOfWeek: number = 0;
  @Provide() selectedDay: number = 0;
  @Provide() selectedMonth: number = 0;
  @Provide() selectedYear: number = 0;
  @Provide() year: number = 0;

  get calculatedDate(): Date {
    return new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
  }

  get calendar(): Day[][] {
    let days: number[] = [];

    const paddingLeft =
      new Date(this.currentYear, this.currentMonth, 1).getDay() -
      this.firstDayOfWeek;
    const daysInMonth =
      32 - new Date(this.currentYear, this.currentMonth, 32).getDate();

    if (paddingLeft >= 0) {
      days = days.concat(Array(paddingLeft).fill(null));
    }

    for (let i = 0; i < daysInMonth; i++) {
      days.push(i + 1);
    }

    const paddingRight = Math.ceil(days.length / 7) * 7 - days.length;
    days = days.concat(Array(paddingRight).fill(null));

    const dayObjects: Day[] = days.map(
      (day: number): Day => {
        const date: Date = day
          ? new Date(this.currentYear, this.currentMonth, day)
          : new Date(0, 0, 0);
        const currentDay: boolean =
          date.getTime() ===
          new Date(
            this.today.getFullYear(),
            this.today.getMonth(),
            this.today.getDate()
          ).getTime();
        let disabled: boolean = this.dayDisabled(day, date);
        let selected: boolean =
          date.getTime() === this.calculatedDate.getTime();

        if (this.startDate) {
          disabled = date.getTime() < this.startDate.getTime();
          selected =
            date.getTime() >= this.startDate.getTime() &&
            date.getTime() <= this.calculatedDate.getTime();
        }

        if (this.endDate) {
          selected =
            date.getTime() <= this.endDate.getTime() &&
            date.getTime() >= this.calculatedDate.getTime();
        }

        if (day === null) {
          selected = false;
        }

        return { day, currentDay, selected, disabled } as Day;
      }
    );

    return chunk(dayObjects, 7);
  }

  get years(): Year[] {
    // returns all the data for the calendar years
    let firstYear;

    if (this.minDate) {
      firstYear = this.minDate.getFullYear();
    } else {
      firstYear = new Date().getFullYear();
    }

    let through = this.maxDate
      ? this.maxDate.getFullYear() + 1 - firstYear
      : 101;

    let years: any[] = [];

    for (let i = firstYear, len = firstYear + through; i < len; i++) {
      years.push(i);
    }

    return years.map(year => {
      return { year, selected: year === this.selectedYear } as Year;
    });
  }

  get weekdays(): string[] {
    const weekdays: string[] = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday'
    ];
    const orderedDays: string[] = [];
    let startDay: number = this.firstDayOfWeek;

    for (let i = 0; i < 7; i++) {
      orderedDays.push(weekdays[startDay]);
      startDay++;
      if (startDay === 7) {
        startDay = 0;
      }
    }

    return orderedDays;
  }

  setSelecting(value: string): void {
    this.selecting = value;
  }

  setByDay(day: Day): void {
    if (day.disabled) {
      return;
    }

    this.selectedYear = this.currentYear;
    this.selectedDay = day.day;
    this.selectedMonth = this.currentMonth;
    this.selectedDayOfWeek = new Date(
      this.selectedYear,
      this.selectedMonth,
      this.selectedDay
    ).getDay();
  }

  setByMonth(month: number): void {
    if (month === 12) {
      this.currentYear = this.currentYear + 1;
      this.currentMonth = 0;

      return;
    }

    if (month === -1) {
      this.currentYear = this.currentYear - 1;
      this.currentMonth = 11;

      return;
    }

    this.currentMonth = month;
  }

  setByYear(year: number): void {
    this.selectedYear = year;
    this.currentYear = year;
    this.selecting = 'date';
  }

  setDate(): void {
    let date: Date = this.today;
    this.selectedDay = date.getDate();

    if (this.minDate) {
      date = this.minDate;
      this.selectedDay = this.minDate.getDate() + 1;
    }

    if (this.startDate) {
      date = this.startDate;
      this.selectedDay = this.startDate.getDate();
    }

    if (this.selectedDate) {
      date = this.selectedDate;
      this.selectedDay = this.selectedDate.getDate();
    }

    this.selectedDayOfWeek = date.getDay();
    this.selectedMonth = date.getMonth();
    this.currentMonth = date.getMonth();
    this.selectedYear = date.getFullYear();
    this.currentYear = date.getFullYear();
  }

  dayDisabled(day: number, date: Date): boolean {
    let disabled: boolean = false;

    if (!day) {
      disabled = true;
    } else if (this.minDate && date.getTime() < this.minDate.getTime()) {
      disabled = true;
    } else if (this.maxDate && date.getTime() > this.maxDate.getTime()) {
      disabled = true;
    }

    return disabled;
  }

  onChange(): void {
    this.$emit('change', this.calculatedDate);
    this.onClose();
  }

  onClose(): void {
    this.$emit('close');
  }

  created() {
    this.setDate();
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';
@import '~styles/components/calendar';

.calendar {
  width: 100%;
  max-width: $calendar-max-width;
  position: relative;
  background: $calendar-bg;
  margin: $calendar-margin;
  display: inline-block;
}

.header {
  color: $calendar-header-color;
  padding: $calendar-header-padding;
  background: $calendar-header-bg;
  text-shadow: $calendar-header-text-shadow;

  cursor: pointer;

  * {
    margin: 0;
    font-weight: $calendar-header-font-weight;
    color: $calendar-header-color;
  }
}

.body {
  border: $calendar-body-border;
  padding: $calendar-body-padding;

  table {
    display: block;

    thead,
    tbody {
      display: block;
    }

    tr {
      display: flex;
      flex-wrap: wrap;

      td {
        border-radius: $calendar-day-border-radius;
        flex: 1;
        text-align: center;
        padding: space(12);

        &:before {
          content: '';
          float: left;
        }

        &:hover {
          background: $calendar-day-hover;
          cursor: pointer;
        }

        span {
          position: relative;
        }
      }
    }
  }
}

.date {
  display: flex;
  flex-direction: row;
}

.arrow {
  flex: 1 0 15%;
  cursor: pointer;
  background: $calendar-arrow-bg;
  position: relative;

  &:hover {
    background: $calendar-arrow-hover-bg;
  }

  &:before,
  &:after {
    content: '';
    transition: all 0.25s ease-in-out;
    position: absolute;
    background-color: $calendar-arrow-color;
    width: space(2);
    height: space(12);
    left: 50%;
    margin-left: -(space() - space(2));
    top: space(4);
  }

  &:before {
    transform: translate(space(4), 0) rotate(45deg);
  }

  &:after {
    transform: translate(space(4), space()) rotate(135deg);
  }

  &:last-child {
    &:before {
      transform: translate(space(4), 0) rotate(-45deg);
    }

    &:after {
      transform: translate(space(4), space()) rotate(-135deg);
    }
  }
}

.currentDate {
  cursor: default;
  text-align: center;
  flex: 1 0 70%;
  font-weight: $calendar-current-day-font-weight;
}

.currentDay {
  font-weight: $calendar-current-day-font-weight;
  background: $calendar-current-day-bg;
  color: $calendar-current-day-color;

  &:hover {
    background-color: $calendar-current-day-bg !important;
  }
}

.selectedDay {
  font-weight: $calendar-selected-day-font-weight;
  background-color: $calendar-selected-day-bg;
  color: $calendar-selected-day-color;

  &:hover {
    background-color: $calendar-selected-day-bg !important;
  }
}

.disabledDay {
  opacity: 0.4;
  user-select: none;
  outline: transparent;
}

.year {
  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.075);
  max-height: 312px;
  overflow-y: scroll;
  text-align: center;

  div {
    cursor: pointer;
    padding: space() 0;
    transition: background-color 0.15s;

    &:hover {
      background-color: color('background');
    }
  }

  .selected {
    font-size: fontSize(h4);
  }
}

.footer {
  padding: space(12);
  display: flex;
  justify-content: flex-end;
  border: $calendar-body-border;
  border-top: none;

  button {
    margin-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>