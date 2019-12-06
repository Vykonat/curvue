<template lang="pug">
  article.DatePicker
    lvql-input(
      :name="name",
      :id="id",
      :placeholder="placeholder",
      :required="required",
      :disabled="disabled",
      :readonly="readonly",
      :message="message",
      @click="onFocus",
    ) 
    
    span {{ date | datePicker }}

    lvql-modal( :is-shown="show", @close="show=false" )
      calendar.calendar(
        :min-date="minDate",
        :max-date="maxDate",
        :first-day-of-week="firstDayOfWeek",
        :selected-date="date",
        :start-date="startDate",
        :end-date="endDate",
        @close="show = false",
        @change="onChange"
      )

</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';

@Component({
  filters: {
    datePicker(value) {
      const date = new Date(value);
      return date.toLocaleDateString(['en-us'], {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    }
  }
})
export default class DatePicker extends Vue {
  @Provide() show: Boolean = false;
  @Provide() selectedDate: Date = new Date();

  @Prop({ default: 'date' }) name!: string;
  @Prop({ default: 'date' }) id!: string;
  @Prop() minDate: Date | undefined;
  @Prop() maxDate: Date | undefined;
  @Prop({ default: 0 }) firstDayOfWeek!: number;
  @Prop({ default: '' }) placeholder!: string;
  @Prop() startDate: Date | undefined;
  @Prop() endDate: Date | undefined;
  @Prop() currentDate!: Date;
  @Prop({ default: false }) required!: Boolean;
  @Prop({ default: false }) disabled!: Boolean;
  @Prop({ default: true }) readonly!: Boolean;
  @Prop({ default: '' }) message!: string;

  get inputValue() {
    return this.date === null ? '' : this.date;
  }

  get date() {
    if (this.currentDate) {
      return this.currentDate;
    }

    return this.selectedDate;
  }

  onFocus(el: any) {
    el.currentTarget.blur();
    this.show = true;
  }

  onChange(date: Date): void {
    this.selectedDate = date;
    this.$emit('change', this.selectedDate);
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/app';

.DatePicker {
  display: block;
}

.calendar {
  margin: 0;
  max-width: 480px;

  @include media(tabletPortrait) {
    table {
      tr {
        td {
          font-size: fontSize();

          span {
            top: 25%;
          }
        }
      }
    }
  }
}
</style>
