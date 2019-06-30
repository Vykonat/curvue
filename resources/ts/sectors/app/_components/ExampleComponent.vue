<template lang="pug">
    apollo-query(
        :query="require('../_gql/queries/user.gql')",
        :variables="{ id: 1 }"
    )
        template(slot-scope='{ result: { loading, error, data }, query }')
            .loading.apollo(v-if='loading') Loading...
            .error.apollo(v-else-if='error') {{ error }}
            .result.apollo(v-else-if='data') 
                | {{ data.user.name }}
                br
                | {{ data.user.email }}

</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";

@Component
export default class ExampleComponent extends Vue {
    @Provide() message: string = "I'm an example component";
}
</script>
