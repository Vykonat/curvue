declare interface IComment {
  __typename: string;
  id: number;
  commentable_type: string;
  commentable_id: number;
  content: string;
  user: Partial<IUser>;
  replies: IComment[];
  created_at: number;
  updated_at: number;
}
