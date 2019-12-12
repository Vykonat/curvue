<template lang="pug">
  lvql-form( :title="userFormTitle", :button-text="userFormTitle", @submit="sendData" )
    template( v-slot:fields )
      grid-row
        grid-item
          lvql-input( 
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
          lvql-input( 
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
          lvql-input( 
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
          lvql-input(
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
import { Component, Vue, Prop } from 'vue-property-decorator';
import { apolloClient } from '../../../../common/config/apollo.config';
import { cacheAddUser } from '../../_gql/cache/UsersCache';
import dialog from '../../../../common/utils/dialog.util';
import CreateUser from '../../_gql/mutations/createUser.gql';
import EditUser from '../../_gql/mutations/editUser.gql';
import { UserInput, QueryUsersArgs } from '../../../../typings/schema';

@Component
export default class UserForm extends Vue {
  @Prop({ default: {} }) variables!: QueryUsersArgs;
  @Prop({ required: true }) user!: UserInput;
  @Prop({ default: true }) isAdd!: boolean;

  sendCreateUserInfo() {
    const vm = this;
    apolloClient.mutate({
      mutation: CreateUser,
      variables: { data: this.user },
      update: (store, { data: { createUser } }) => {
        cacheAddUser(store, createUser, this.variables);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createUser: {
          __typename: 'User',
          ...this.user,
          role: 'Patron',
          comments: [],
          blogPosts: [],
          created_at: 'Just now',
          updated_at: 'Just now'
        }
      }
    });
    dialog(this.$t('resource.created', { resource: 'User' }), false);
  }

  sendEditUserInfo() {
    const vm = this;
    apolloClient.mutate({
      mutation: EditUser,
      variables: { id: this.user.id, data: this.user },
      update: (store, { data: { editUser } }) => {
        cacheAddUser(store, editUser, this.variables);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        editUser: {
          __typename: 'User',
          ...this.user,
          role: 'Patron',
          comments: [],
          blogPosts: [],
          created_at: 'Just now',
          updated_at: 'Just now'
        }
      }
    });
    dialog(this.$t('resource.updated', { resource: 'User' }), false);
  }

  sendData() {
    if (this.isAdd) {
      return this.sendCreateUserInfo();
    }

    return this.sendEditUserInfo();
  }

  get userFormTitle() {
    return this.isAdd
      ? this.$t('resource.add', { resource: 'User' })
      : this.$t('resource.edit', { resource: 'User' });
  }
}
</script>
