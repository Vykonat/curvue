<template lang="pug">
  lvql-layout( name="Admin" )
    apollo-query(
      :query="require('../../_gql/queries/usersQuery.gql')",
      :variables="queryVariables"
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
            user-form( :is-add="isUserFormAdd", :user="userForm", :variables="queryVariables" )
          grid
            grid-row
              grid-item
                lvql-button( variant="primary", @click="handleUserAdd" ) {{ $t('resource.add', {resource:"User"})}}
            grid-row
              grid-item( fill )
                data-table(
                  :header="usersDataTableHeader", 
                  :data="data.users.data",
                )
                  template( v-slot:search )
                    lvql-input(
                      id="UserSearch",
                      name="UserSearch",
                      v-model="searchTerm"
                      :placeholder="searchInputPlaceHolder",
                      @input="$emit('input', $event)"
                      @keydown.enter="queryMore(query)"
                    )

                  template( v-slot:perPageSelector )
                    lvql-select( 
                      placeholder="Items per page: ", 
                      :options="perPageOptions", 
                      name="UsersPerPageSelect", 
                      id="UsersPerPageSelect", 
                      v-model="perPage",
                      @input="queryMore(query)"
                    )

                  template( v-slot:paginator )
                    pagination( 
                      :pages="data.users.paginatorInfo.lastPage", 
                      :current-page="currentPage",
                      :loading="isLoading",
                      @prevClick="previousUsers(query)",
                      @nextClick="nextUsers(query)"
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
import { User, UserInput, QueryUsersArgs } from '../../../../typings/schema';
import { TranslateResult } from 'vue-i18n';

enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

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
  currentPage: number = 1;
  searchTerm: string | undefined = '';
  perPage: number = 5;
  isLoading: boolean = false;

  queryVariables = {
    first: this.perPage,
    orderBy: [{ field: 'id', order: SortOrder.Desc }],
    page: this.currentPage,
    name: this.searchTerm === '' ? undefined : this.searchTerm
  };

  perPageOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 }
  ];

  userForm: UserInput = {
    id: '',
    name: '',
    email: '',
    role_id: 2,
    password: '',
    password_confirmation: ''
  };

  usersDataTableHeader = {
    id: { title: 'id' },
    name: { title: 'Name' },
    email: { title: 'Email' },
    role: { title: 'Role' },
    role_id: { visible: false },
    blogPosts: { visible: false },
    comments: { visible: false },
    created_at: { title: 'Created' },
    updated_at: { title: 'Updated' },
    actions: { sortable: false, title: 'Actions', slot: 'actions' }
  };

  closeUserModal(): void {
    this.isUserModalShown = false;
    this.userForm = {
      id: '',
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

  handleUserEdit(user): void {
    this.isUserFormAdd = false;
    this.isUserModalShown = true;

    delete user.role;
    delete user.blogPosts;
    delete user.comments;
    delete user.created_at;
    delete user.updated_at;

    this.userForm = user;
  }

  async handleUserDelete(user: User): Promise<void> {
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
        cacheRemoveUser(store, deleteUser, this.queryVariables);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        id: user.id,
        deleteUser: {
          __typename: 'User',
          ...user
        }
      }
    });

    dialog(this.$t('resource.deleted', { resource: 'User' }), false);
  }

  get searchInputPlaceHolder(): TranslateResult {
    return this.$t('resource.search', { resource: 'Users' });
  }

  previousUsers(query) {
    this.currentPage--;
    this.queryMore(query);
  }

  nextUsers(query) {
    this.currentPage++;
    this.queryMore(query);
  }

  async queryMore(query) {
    this.isLoading = true;
    await query.fetchMore({
      variables: {
        first: this.perPage,
        orderBy: [{ field: 'id', order: SortOrder.Desc }],
        page: this.searchTerm === '' ? this.currentPage : 1,
        name: this.searchTerm === '' ? undefined : this.searchTerm
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newUsers = fetchMoreResult.users.data;
        const newPaginator = fetchMoreResult.users.paginatorInfo;
        return {
          users: {
            __typename: previousResult.users.__typename,
            data: [...newUsers],
            paginatorInfo: { ...newPaginator }
          }
        };
      }
    });
    this.isLoading = false;
  }
}
</script>
