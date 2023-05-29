const API_URL = "http://localhost:3000/books/"

class GetBooksListService {
    static Call(book) {
        return this.UpdateBook(book)
    }

    static UpdateBook = async(book) => {
        const res = await fetch(API_URL + book.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: book.title,
                author: book.author,
                price: book.price,
                image_url: book.image_url,
                synopsis: book.synopsis,
                id: book.id
            })
        })
        return res
    }
}

export default GetBooksListService
