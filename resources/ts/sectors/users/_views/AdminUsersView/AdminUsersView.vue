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
                | {{ $t('core.loading') }}
                
        .error.apollo(v-else-if='error') 
          grid
            grid-row
              grid-item( fill )
                pre {{ error }}

        .result.apollo(v-else-if='data')
          lvql-modal( :show="isUserModalShown", @close="closeUserModal(query)" )
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
                      @click="handleUserDelete(row, query)"
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
  userForm: Partial<IUser> = {
    role_id: 2
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
      role_id: 2
    };
  }

  handleUserAdd(): void {
    this.isUserFormAdd = true;
    this.isUserModalShown = true;
  }

  handleUserEdit(user: IUser): void {
    this.isUserFormAdd = false;
    this.isUserModalShown = true;

    const form = { ...user };
    this.userForm.role_id = user.role_id;
    delete form.__typename;
    this.userForm = form;
  }

  async handleUserDelete({
    id,
    name,
    email,
    role,
    role_id,
    blog_posts,
    comments,
    created_at,
    updated_at
  }): Promise<void> {
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
        id
      },
      update: (store, { data: { deleteUser } }) => {
        cacheRemoveUser(store, deleteUser);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        id,
        deleteUser: {
          __typename: 'User',
          id,
          name,
          email,
          role,
          role_id,
          blog_posts,
          comments,
          created_at,
          updated_at
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

