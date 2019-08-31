declare interface IBlogPost {
  __typename: string;
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  comments: IComment[];
  user: IUserRelationship;
  created_at: number;
  updated_at: number;
}

declare type IBlogPostInput = Pick<
  IBlogPost,
  'id' | 'title' | 'description' | 'content'
>;
