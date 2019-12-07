declare interface IBlogPost {
  __typename: string;
  id: number;
  title: string;
  slug: string;
  comments_count: number;
  is_updated: boolean;
  has_commented: boolean;
  created_at: string;
  updated_at: string;
  content: string;
  passage: string;
  user: IUserRelationship;
  comments: IComment[];
}

declare type IBlogPostInput = Pick<IBlogPost, 'id' | 'title' | 'content'>;
