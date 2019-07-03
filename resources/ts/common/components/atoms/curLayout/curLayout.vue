<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class curLayout extends Vue {

    @Prop({ required: true }) name!: string

    created() {
        Vue.component( this.name, () => import(`../../../layouts/${this.name}Layout/${this.name}Layout.vue`) );
        this.$parent.$emit('update:layout', this.name);
    }

    render() {
        if( typeof this.$slots.default !== "undefined") { 
            return this.$slots.default[0]; 
        }
    }
}
</script>
