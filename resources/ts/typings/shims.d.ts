declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare module '*.gql' {
    const _default: any;
    export default _default;
}