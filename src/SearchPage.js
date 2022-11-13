import React from 'react';
import {Link} from 'react-router-dom'
import {getAll, search, update} from "./BooksAPI";
import Book from "./Book";

class SearchPage extends React.Component {
    state = {
        books: [],
        myBooks: []
    }

    componentDidMount() {
        getAll().then((books) => {
            this.setState({
                myBooks: books
            })
        })
    }

    timeoutId = null;

    search = (q) => {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        if (!q.trim()) {
            this.setState({
                books: []
            })
            return;
        }

        this.timeoutId = setTimeout(() => {
            search(q.trim()).then(resp => {
                let books = [];
                if (!resp.hasOwnProperty('error')) {
                    resp = resp.map(b => {
                        let shelf = "none";
                        let matchedBook = this.state.myBooks.filter(currentBook => currentBook.id === b.id);
                        if (matchedBook.length > 0) {
                            shelf = matchedBook[0].shelf;
                        }
                        return {
                            ...b,
                            shelf
                        };
                    })
                    books = resp;

                }
                this.setState({
                    books
                })
            })
        }, 2000)
    }

    updateShelf = (currentBook, shelf) => {
        update(currentBook, shelf).then(resp => {
            const books = this.state.books.map((book) => {
                if (book.id === currentBook.id) {
                    book.shelf = shelf
                }
                return book;
            })
            this.setState({
                ...this.state,
                books
            })
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className='close-search'
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={(event) => this.search(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <li key={book.id} className='book-list-item'>
                                <Book book={book} updateShelf={this.updateShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;