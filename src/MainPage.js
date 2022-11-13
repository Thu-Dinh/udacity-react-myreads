import React from 'react';
import ListBooks from "./ListBooks";
import {Link} from "react-router-dom";
import {getAll, update} from "./BooksAPI";

class MainPage extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        getAll().then((books) => {
            this.setState({
                books
            })
        })
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
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <ListBooks
                        books={this.state.books}
                        updateShelf={this.updateShelf}
                    />
                </div>
                <div className="open-search">
                    <Link to='/search' className='open-search'>
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}

export default MainPage;