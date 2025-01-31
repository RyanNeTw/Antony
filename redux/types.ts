export interface Post {
  id: number
  title: string
  body: string
}

export interface PostState {
  posts: Post[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}
