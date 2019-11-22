declare interface IBlogPost {
  __typename: string;
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  comments_count: number;
  comments: IComment[];
  user: IUserRelationship;
  created_at: string;
  updated_at: string;
  is_updated: boolean;
}

declare type IBlogPostInput = Pick<
  IBlogPost,
  'id' | 'title' | 'description' | 'content'
>;
