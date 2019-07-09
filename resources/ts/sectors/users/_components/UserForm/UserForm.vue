<template lang="pug">
cur-form( :title="isAdd ? 'Add User' : 'Edit User'", :button-text="isAdd ? 'Add User' : 'Edit User'", @submit="sendData" )
    template( v-slot:fields )
        grid-row
            grid-item
                cur-input( 
                    name="name",
                    id="name",
                    placeholder="Enter your name"
                    type="text",
                    validation="max: 191",
                    v-model="user.name",
                    required
                )

        grid-row
            grid-item
                cur-input( 
                    name="email",
                    id="email",
                    placeholder="Enter your email"
                    type="email",
                    validation="max: 191|email",
                    v-model="user.email",
                    required
                )

        grid-row
            grid-item
                cur-input( 
                    name="password",
                    id="password",
                    placeholder="Enter your password"
                    type="password",
                    validation="min: 8|confirmed",
                    v-model="user.password",
                    :required="isAdd",
                )

        grid-row
            grid-item
                cur-input(
                    name="password_confirmation",
                    id="password_confirmation",
                    placeholder="Confirm your password"
                    type="password",
                    validation="min: 8",
                    v-model="user.password_confirmation",
                    :required="isAdd",
                )

        grid-row
            grid-item( fill )
                input( type="radio", id="Admin", name="role_id", value="1", v-model="user.role_id" )
                label( for="Admin" ) Admin
                input( type="radio", id="Patron", name="role_id", value="2", v-model="user.role_id" )
                label( for="Patron" ) Patron
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { apolloClient } from "../../../../common/config/apollo.config";
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
            alert('users.created');
        } else {
            alert('users.updated');
        }
    }
}
</script>

