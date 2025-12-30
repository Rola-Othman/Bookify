export type BookInfo = {
    bookId: number
    bookName: string
    authorName: string
    categories:  { name: string; color: string }[];
    description: string
}