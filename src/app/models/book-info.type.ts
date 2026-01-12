export type BookInfo = {
    bookId: number
    bookName: string
    authorName: string
    categories:  {id: number, name: string; color: string }[];
    description: string
}