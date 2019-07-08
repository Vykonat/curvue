<template lang='pug'>
thead.DataTableHeader
    tr
        th.column( v-for="(column, i) in visibleColumns" :key="i", @click="onClick(column)" ) {{ column.title }}
            div.icons( v-if="column.sortable" )
                i.fas.fa-sort( v-if="!sortKey && !isActive(column.sortkey)" )
                i.fas.fa-sort-up( v-if="isActive(column.sortKey) && sortDirection === 'asc'" )
                i.fas.fa-sort-down( v-if="isActive(column.sortKey) && sortDirection === 'desc'" )
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IDataTableHeaderItem } from '../interfaces';

@Component
export default class DataTableHeader extends Vue {
    /**
     * Data table header props
     */
    @Prop({required: true}) columns!: IDataTableHeaderItem[];
    @Prop() sortKey: string | undefined;
    @Prop() sortDirection: string | undefined;


    /**
     * Data table header computed properties
     */
    get visibleColumns() {
        return this.columns.filter((column: IDataTableHeaderItem) => column.visible );
    }


    /**
     * Data table header methods
     */
    onClick(column: IDataTableHeaderItem) {
        if( column.sortable ) {
            this.$emit('click', column);
        }
    }


    isActive(sortKey: string) {
        return sortKey === this.sortKey;
    }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';
@import '~styles/components/datatable';

.DataTableHeader {
    border: $data-table-header-border;
    background: $data-table-header-bg;

    min-width: $data-table-min-width;

    th {
        font-weight: $data-table-header-font-weight;
    }

    tr {
        min-width: $data-table-min-width;
    }
}

.column {
    border: $data-table-header-border;
    padding: $data-table-header-column-padding;
    cursor: pointer;
    user-select: none;
    position: relative;
    min-width: space(84);

    &:hover {
        i {
            color: $data-table-header-icon-hover-color;
            opacity: 1;
        }
    }

    i {
        margin: $data-table-header-icon-margin;
        color: $data-table-header-icon-color;
    }
}

.icons {
    display: inline-block;
    position: absolute;
    right: space();
}
</style>