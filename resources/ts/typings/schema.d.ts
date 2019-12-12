
type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type BlogPost = {
  id: Scalars['ID'],
  title: Scalars['String'],
  slug: Scalars['String'],
  comments_count?: Maybe<Scalars['Int']>,
  is_updated?: Maybe<Scalars['Boolean']>,
  has_commented?: Maybe<Scalars['Boolean']>,
  created_at: Scalars['String'],
  updated_at: Scalars['String'],
  passage: Scalars['String'],
  content: Scalars['String'],
  user: User,
  comments: Array<Comment>,
};

export type BlogPostInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  content: Scalars['String'],
};

export type BlogPostPaginator = {
  paginatorInfo: PaginatorInfo,
  data: Array<BlogPost>,
};

export type Comment = {
  id: Scalars['ID'],
  content: Scalars['String'],
  commentable_id: Scalars['String'],
  commentable_type: Scalars['String'],
  commentable: Commentable,
  user_id: Scalars['Int'],
  has_commented?: Maybe<Scalars['Boolean']>,
  comments_count?: Maybe<Scalars['Int']>,
  is_updated?: Maybe<Scalars['Boolean']>,
  user: User,
  comments?: Maybe<Array<Comment>>,
  created_at: Scalars['String'],
  updated_at: Scalars['String'],
};

export type Commentable = BlogPost | Comment;

export type CommentInput = {
  id?: Maybe<Scalars['ID']>,
  content: Scalars['String'],
  commentable_id: Scalars['String'],
  commentable_type: Scalars['String'],
};

export type CommentPaginator = {
  paginatorInfo: PaginatorInfo,
  data: Array<Comment>,
};

export type Mutation = {
  createBlogPost: BlogPost,
  deleteBlogPost: BlogPost,
  editBlogPost: BlogPost,
  createComment: Comment,
  deleteComment: Comment,
  editComment: Comment,
  createUser: User,
  deleteUser: User,
  editUser: User,
};


export type MutationCreateBlogPostArgs = {
  data: BlogPostInput
};


export type MutationDeleteBlogPostArgs = {
  id: Scalars['ID']
};


export type MutationEditBlogPostArgs = {
  id: Scalars['ID'],
  data: BlogPostInput
};


export type MutationCreateCommentArgs = {
  data: CommentInput
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']
};


export type MutationEditCommentArgs = {
  id: Scalars['ID'],
  data: CommentInput
};


export type MutationCreateUserArgs = {
  data: UserInput
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationEditUserArgs = {
  id: Scalars['ID'],
  data: UserInput
};

export type OrderByClause = {
  field: Scalars['String'],
  order: SortOrder,
};

export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>,
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>,
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>,
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>,
};

export type PaginatorInfo = {
  /** Total count of available items in the page. */
  count: Scalars['Int'],
  /** Current pagination page. */
  currentPage: Scalars['Int'],
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>,
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'],
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>,
  /** Last page number of the collection. */
  lastPage: Scalars['Int'],
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'],
  /** Total items available in the collection. */
  total: Scalars['Int'],
};

export type Query = {
  blogPosts?: Maybe<BlogPostPaginator>,
  blogPost: BlogPost,
  recentBlogPosts: Array<BlogPost>,
  lastWeekBlogPosts: Array<BlogPost>,
  allComments?: Maybe<CommentPaginator>,
  comment: Comment,
  comments: Array<Comment>,
  auth: User,
  users?: Maybe<UserPaginator>,
  user?: Maybe<User>,
};


export type QueryBlogPostsArgs = {
  orderBy?: Maybe<Array<OrderByClause>>,
  title?: Maybe<Scalars['String']>,
  first: Scalars['Int'],
  page?: Maybe<Scalars['Int']>
};


export type QueryBlogPostArgs = {
  slug: Scalars['String']
};


export type QueryAllCommentsArgs = {
  orderBy?: Maybe<Array<OrderByClause>>,
  first: Scalars['Int'],
  page?: Maybe<Scalars['Int']>
};


export type QueryCommentArgs = {
  id: Scalars['ID']
};


export type QueryCommentsArgs = {
  type: Scalars['String'],
  id: Scalars['ID']
};


export type QueryUsersArgs = {
  orderBy?: Maybe<Array<OrderByClause>>,
  name?: Maybe<Scalars['String']>,
  first: Scalars['Int'],
  page?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum Trashed {
  Only = 'ONLY',
  With = 'WITH',
  Without = 'WITHOUT'
}

export type User = {
  id: Scalars['ID'],
  role_id: Scalars['Int'],
  name: Scalars['String'],
  role: Scalars['String'],
  email: Scalars['String'],
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>,
  comments?: Maybe<Array<Maybe<Comment>>>,
  created_at: Scalars['String'],
  updated_at: Scalars['String'],
};

export type UserInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  email: Scalars['String'],
  role_id?: Maybe<Scalars['Int']>,
  password: Scalars['String'],
  password_confirmation: Scalars['String'],
};

export type UserPaginator = {
  paginatorInfo: PaginatorInfo,
  data: Array<User>,
};


import { GraphQLResolveInfo } from 'graphql';

export type ArrayOrIterable<T> = Array<T> | Iterable<T>;



export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface ISubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type BlogPostResolvers<Context = any, ParentType = BlogPost> = {
  id?: Resolver<Scalars['ID'], ParentType, Context>,
  title?: Resolver<Scalars['String'], ParentType, Context>,
  slug?: Resolver<Scalars['String'], ParentType, Context>,
  comments_count?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
  is_updated?: Resolver<Maybe<Scalars['Boolean']>, ParentType, Context>,
  has_commented?: Resolver<Maybe<Scalars['Boolean']>, ParentType, Context>,
  created_at?: Resolver<Scalars['String'], ParentType, Context>,
  updated_at?: Resolver<Scalars['String'], ParentType, Context>,
  passage?: Resolver<Scalars['String'], ParentType, Context>,
  content?: Resolver<Scalars['String'], ParentType, Context>,
  user?: Resolver<User, ParentType, Context>,
  comments?: Resolver<ArrayOrIterable<Comment>, ParentType, Context>,
};

export type BlogPostPaginatorResolvers<Context = any, ParentType = BlogPostPaginator> = {
  paginatorInfo?: Resolver<PaginatorInfo, ParentType, Context>,
  data?: Resolver<ArrayOrIterable<BlogPost>, ParentType, Context>,
};

export type CommentResolvers<Context = any, ParentType = Comment> = {
  id?: Resolver<Scalars['ID'], ParentType, Context>,
  content?: Resolver<Scalars['String'], ParentType, Context>,
  commentable_id?: Resolver<Scalars['String'], ParentType, Context>,
  commentable_type?: Resolver<Scalars['String'], ParentType, Context>,
  commentable?: Resolver<Commentable, ParentType, Context>,
  user_id?: Resolver<Scalars['Int'], ParentType, Context>,
  has_commented?: Resolver<Maybe<Scalars['Boolean']>, ParentType, Context>,
  comments_count?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
  is_updated?: Resolver<Maybe<Scalars['Boolean']>, ParentType, Context>,
  user?: Resolver<User, ParentType, Context>,
  comments?: Resolver<Maybe<ArrayOrIterable<Comment>>, ParentType, Context>,
  created_at?: Resolver<Scalars['String'], ParentType, Context>,
  updated_at?: Resolver<Scalars['String'], ParentType, Context>,
};

export type CommentableResolvers<Context = any, ParentType = Commentable> = {
  __resolveType: TypeResolveFn<'BlogPost' | 'Comment', ParentType, Context>
};

export type CommentPaginatorResolvers<Context = any, ParentType = CommentPaginator> = {
  paginatorInfo?: Resolver<PaginatorInfo, ParentType, Context>,
  data?: Resolver<ArrayOrIterable<Comment>, ParentType, Context>,
};

export type MutationResolvers<Context = any, ParentType = Mutation> = {
  createBlogPost?: Resolver<BlogPost, ParentType, Context, MutationCreateBlogPostArgs>,
  deleteBlogPost?: Resolver<BlogPost, ParentType, Context, MutationDeleteBlogPostArgs>,
  editBlogPost?: Resolver<BlogPost, ParentType, Context, MutationEditBlogPostArgs>,
  createComment?: Resolver<Comment, ParentType, Context, MutationCreateCommentArgs>,
  deleteComment?: Resolver<Comment, ParentType, Context, MutationDeleteCommentArgs>,
  editComment?: Resolver<Comment, ParentType, Context, MutationEditCommentArgs>,
  createUser?: Resolver<User, ParentType, Context, MutationCreateUserArgs>,
  deleteUser?: Resolver<User, ParentType, Context, MutationDeleteUserArgs>,
  editUser?: Resolver<User, ParentType, Context, MutationEditUserArgs>,
};

export type PageInfoResolvers<Context = any, ParentType = PageInfo> = {
  hasNextPage?: Resolver<Scalars['Boolean'], ParentType, Context>,
  hasPreviousPage?: Resolver<Scalars['Boolean'], ParentType, Context>,
  startCursor?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  endCursor?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  total?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
  count?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
  currentPage?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
  lastPage?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
};

export type PaginatorInfoResolvers<Context = any, ParentType = PaginatorInfo> = {
  count?: Resolver<Scalars['Int'], ParentType, Context>,
  currentPage?: Resolver<Scalars['Int'], ParentType, Context>,
  firstItem?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
  hasMorePages?: Resolver<Scalars['Boolean'], ParentType, Context>,
  lastItem?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
  lastPage?: Resolver<Scalars['Int'], ParentType, Context>,
  perPage?: Resolver<Scalars['Int'], ParentType, Context>,
  total?: Resolver<Scalars['Int'], ParentType, Context>,
};

export type QueryResolvers<Context = any, ParentType = Query> = {
  blogPosts?: Resolver<Maybe<BlogPostPaginator>, ParentType, Context, QueryBlogPostsArgs>,
  blogPost?: Resolver<BlogPost, ParentType, Context, QueryBlogPostArgs>,
  recentBlogPosts?: Resolver<ArrayOrIterable<BlogPost>, ParentType, Context>,
  lastWeekBlogPosts?: Resolver<ArrayOrIterable<BlogPost>, ParentType, Context>,
  allComments?: Resolver<Maybe<CommentPaginator>, ParentType, Context, QueryAllCommentsArgs>,
  comment?: Resolver<Comment, ParentType, Context, QueryCommentArgs>,
  comments?: Resolver<ArrayOrIterable<Comment>, ParentType, Context, QueryCommentsArgs>,
  auth?: Resolver<User, ParentType, Context>,
  users?: Resolver<Maybe<UserPaginator>, ParentType, Context, QueryUsersArgs>,
  user?: Resolver<Maybe<User>, ParentType, Context, QueryUserArgs>,
};

export type UserResolvers<Context = any, ParentType = User> = {
  id?: Resolver<Scalars['ID'], ParentType, Context>,
  role_id?: Resolver<Scalars['Int'], ParentType, Context>,
  name?: Resolver<Scalars['String'], ParentType, Context>,
  role?: Resolver<Scalars['String'], ParentType, Context>,
  email?: Resolver<Scalars['String'], ParentType, Context>,
  blogPosts?: Resolver<Maybe<ArrayOrIterable<Maybe<BlogPost>>>, ParentType, Context>,
  comments?: Resolver<Maybe<ArrayOrIterable<Maybe<Comment>>>, ParentType, Context>,
  created_at?: Resolver<Scalars['String'], ParentType, Context>,
  updated_at?: Resolver<Scalars['String'], ParentType, Context>,
};

export type UserPaginatorResolvers<Context = any, ParentType = UserPaginator> = {
  paginatorInfo?: Resolver<PaginatorInfo, ParentType, Context>,
  data?: Resolver<ArrayOrIterable<User>, ParentType, Context>,
};

export type IResolvers<Context = any> = {
  BlogPost?: BlogPostResolvers<Context>,
  BlogPostPaginator?: BlogPostPaginatorResolvers<Context>,
  Comment?: CommentResolvers<Context>,
  Commentable?: CommentableResolvers,
  CommentPaginator?: CommentPaginatorResolvers<Context>,
  Mutation?: MutationResolvers<Context>,
  PageInfo?: PageInfoResolvers<Context>,
  PaginatorInfo?: PaginatorInfoResolvers<Context>,
  Query?: QueryResolvers<Context>,
  User?: UserResolvers<Context>,
  UserPaginator?: UserPaginatorResolvers<Context>,
};

