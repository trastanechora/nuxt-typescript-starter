export interface NewsState {
  articles: Article[]
}

export interface Article {
  author?: string
  content?: string
  description?: string
  publishedAt?: string
  title?: string
  url?: string
  urlToImage?: string
  source?: Source
}

export interface Source {
  id: string | null
  name: string | null
}

export interface NewsapiResponse {
  data: ResponseBody
}

export interface ResponseBody {
  articles: Article
  status: string
  totalResults: number
}
