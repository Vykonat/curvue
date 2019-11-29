declare interface IComment {
  __typename: string;
  id: number;
  user_id: number;
  commentable_type: string;
  commentable_id: number;
  comments_count: number;
  is_updated: boolean;
  content: string;
  user: IUserRelationship;
  comments: ICommentRelationship;
  created_at: string;
  updated_at: string;
}

declare type ICommentInput = Pick<
  IComment,
  'id' | 'commentable_id' | 'commentable_type' | 'content'
>;

declare type ICommentRelationship = Pick<
  IComment,
  'id' | 'content' | 'created_at' | 'updated_at' | 'user'
>;
