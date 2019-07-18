<template lang="pug">
cur-form( :title="userFormTitle", :button-text="userFormTitle", @submit="sendData" )
    template( v-slot:fields )
        grid-row
            grid-item
                cur-input( 
                    :name="$t('users.name')",
                    :placeholder="$t('users.name_placeholder')",
                    id="name",
                    type="text",
                    validation="max: 191",
                    v-model="user.name",
                    required
                )

        grid-row
            grid-item
                cur-input( 
                    :name="$t('users.email')",
                    :placeholder="$t('users.email_placeholder')",
                    id="email",
                    type="email",
                    validation="max: 191|email",
                    v-model="user.email",
                    required
                )

        grid-row
            grid-item
                cur-input( 
                    :name="$t('users.password')",
                    :placeholder="$t('users.password_placeholder')",
                    id="password",
                    type="password",
                    validation="min: 8|confirmed",
                    v-model="user.password",
                    :required="isAdd",
                )

        grid-row
            grid-item
                cur-input(
                    :name="$t('users.password_confirmation')",
                    :placeholder="$t('users.password_confirmation_placeholder')",
                    id="password_confirmation",
                    type="password",
                    validation="min: 8",
                    v-model="user.password_confirmation",
                    :required="isAdd",
                )

        grid-row
            grid-item( fill )
                input( type="radio", id="Admin", name="role_id", value=1, v-model="user.role_id" )
                label( for="Admin" ) {{ $t('roles.admin') }}
                input( type="radio", id="Patron", name="role_id", value=2, v-model="user.role_id" )
                label( for="Patron" ) {{ $t('roles.patron' )}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { apolloClient } from "../../../../common/config/apollo.config";
import dialog from "../../../../common/utils/dialog.util";
import CreateUser from "../../_gql/mutations/createUser.gql";
import EditUser from "../../_gql/mutations/editUser.gql";

@Component
export default class UserForm extends Vue {
    @Prop({ required: true }) user;
    @Prop({ default: true }) isAdd!: boolean;

    get activeMutation() {
        if( this.isAdd ) {
            return CreateUser;
        }

        return EditUser;
    }

    sendData() {
        apolloClient.mutate({
            mutation: this.activeMutation,
            variables: { id: this.user.id, data: this.user}
        })

        if( this.isAdd ) {
            dialog(this.$t('resource.created', {resource: 'User'}), false);
        } else {
            dialog(this.$t('resource.updated', {resource: 'User'}), false);
        }
    }

    get userFormTitle() {
        return this.isAdd 
            ? this.$t('resource.add', {resource: "User"}) 
            : this.$t('resource.edit', {resource: "User"})
    }
}
</script>

