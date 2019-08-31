declare interface IUser {
  __typename: string;
  id?: number;
  role_id: number;
  role: string;
  name: string;
  email: string;
  blog_posts?: IBlogPost[];
  comments?: IComment[];
  password?: string;
  password_confirmation?: string;
  created_at: number;
  updated_at: number;
}

declare type IUserInput = Pick<
  IUser,
  'id' | 'name' | 'email' | 'role_id' | 'password' | 'password_confirmation'
>;

declare type IUserRelationship = Pick<IUser, 'id' | 'name' | 'email'>;
