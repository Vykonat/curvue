declare interface IUser {
  __typename: string;
  id: number;
  role_id: number;
  role: string;
  name: string;
  email: string;
  blog_posts?: any[];
  comments?: any[];
  password?: string;
  password_confirmation?: string;
  created_at: number;
  updated_at: number;
}
