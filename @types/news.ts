export interface Article {
  author: string
  content: string
  description: string
  publishedAt: string
  title: string
  url: string
  urlToImage: string
  source: Source
}

export interface Source {
  id: string
  name: string
}
