declare interface IBlogPost {
  id: number
  title: string
  slug: string
  description: string
  content: string
  user: Partial<IUser>
  created_at: number
  updated_at: number
}