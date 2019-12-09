<template lang="pug">
  lvql-layout( name="Admin" )
    apollo-query(
      :query="require('../../_gql/queries/usersQuery.gql')"
    )
      template( slot-scope="{ result: { data, loading, error}, query }" )
        .loading.apollo(v-if='loading')
          grid
            grid-row
              grid-item( fill )
                lvql-loader( size="large" )
                
        .error.apollo(v-else-if='error') 
          grid
            grid-row
              grid-item( fill )
                pre {{ error }}

        .result.apollo(v-else-if='data')
          lvql-modal( :is-shown="isUserModalShown", @close="closeUserModal" )
            user-form( :is-add="isUserFormAdd", :user="userForm" )
          grid
            grid-row
              grid-item
                lvql-button( variant="primary", @click="handleUserAdd" ) {{ $t('resource.add', {resource:"User"})}}
            grid-row
              grid-item( fill )
                data-table(
                  :header="usersDataTableHeader", 
                  :data="data.users",
                  :placeholder="searchInputPlaceHolder",
                )
                  template( v-slot:actions="{ row }" )
                    lvql-button(
                      variant="accent",
                      :isGhost="true",
                      @click="handleUserEdit(row)",
                    )
                      i.fas.fa-pencil-alt

                    lvql-button(
                      v-if="row.role_id !== 1"
                      variant="danger",
                      :isGhost="true",
                      @click="handleUserDelete(row)"
                    )
                      i.fas.fa-trash
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import DeleteUser from '../../_gql/mutations/deleteUser.gql';
import dialog from '../../../../common/utils/dialog.util';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';
import { cacheRemoveUser } from '../../_gql/cache/UsersCache';

@Component({
  components: {
    UserForm: () =>
      import(
        /* webpackChunkName: "User_Form" */ '../../_components/UserForm/UserForm.vue'
      )
  },
  metaInfo: {
    ...setMetaInfo(
      'Manage Users',
      'Lavuql user management page',
      'admin/users',
      ''
    ),
    meta: [
      {
        name: 'robots',
        content: 'NOINDEX, NOFOLLOW'
      }
    ]
  }
})
export default class AdminUsersView extends Vue {
  isUserModalShown: boolean = false;
  isUserFormAdd: boolean = true;
  userForm: IUserInput = {
    id: 0,
    name: '',
    email: '',
    role_id: 2,
    password: '',
    password_confirmation: ''
  };

  @Provide() usersDataTableHeader = {
    id: {
      title: 'id'
    },

    name: {
      title: 'Name'
    },

    email: {
      title: 'Email'
    },

    role: {
      title: 'Role'
    },

    role_id: {
      visible: false
    },

    blog_posts: {
      visible: false
    },

    comments: {
      visible: false
    },

    created_at: {
      title: 'Created'
    },

    updated_at: {
      title: 'Updated'
    },

    actions: {
      sortable: false,
      title: 'Actions',
      slot: 'actions'
    }
  };

  closeUserModal(): void {
    this.isUserModalShown = false;
    this.userForm = {
      id: 0,
      name: '',
      email: '',
      role_id: 2,
      password: '',
      password_confirmation: ''
    };
  }

  handleUserAdd(): void {
    this.isUserFormAdd = true;
    this.isUserModalShown = true;
  }

  handleUserEdit(user: IUserInput): void {
    this.isUserFormAdd = false;
    this.isUserModalShown = true;

    this.userForm = { ...user };
  }

  async handleUserDelete(user: IUser): Promise<void> {
    if (
      !(await dialog(
        this.$t('resource.delete_confirmation', { resource: 'User' }),
        true
      ))
    )
      return;

    const result = await this.$apollo.mutate({
      mutation: DeleteUser,
      variables: {
        id: user.id
      },
      update: (store, { data: { deleteUser } }) => {
        cacheRemoveUser(store, deleteUser);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        id: user.id,
        deleteUser: {
          __typename: 'User',
          id: user.id,
          name: user.name,
          email: user.email,
          role_id: user.role_id,
          role: user.role,
          blog_posts: user.blog_posts,
          comments: user.comments,
          created_at: user.created_at,
          updated_at: user.updated_at
        }
      }
    });

    dialog(this.$t('resource.deleted', { resource: 'User' }), false);
  }

  get searchInputPlaceHolder() {
    /**
     * Necessary to use this getter, not sure what's wrong
     */
    return this.$t('resource.search', { resource: 'Users' });
  }
}
</script>
