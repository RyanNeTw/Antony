export type ReponseType<T> = {
  status: number
  data: T
  pagination?: {
    currentPage: number
    itemsPerPage: number
  }
}

const Fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  return response.json()
}

export default Fetcher
