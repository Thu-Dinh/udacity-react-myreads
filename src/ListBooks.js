import React, {Component} from 'react';
import Book from './Book'

class ListBooks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentlyReading = this.props.books.filter((b) => ('currentlyReading' === b.shelf))
        const want2Read = this.props.books.filter((b) => ('wantToRead' === b.shelf))
        const read = this.props.books.filter((b) => ('read' === b.shelf))
        return (
            <div>
                {currentlyReading.length > 0 && (<div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {currentlyReading.map((book) => (
                                <li key={book.id} className='book-list-item'>
                                    <Book book={book} updateShelf={this.props.updateShelf}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>)}
                {want2Read.length > 0 && (<div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {want2Read.map((book) => (
                                <li key={book.id} className='book-list-item'>
                                    <Book book={book} updateShelf={this.props.updateShelf}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>)}
                {read.length > 0 && (<div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {read.map((book) => (
                                <li key={book.id} className='book-list-item'>
                                    <Book book={book} updateShelf={this.props.updateShelf}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>)}

            </div>
        );
    }
}

export default ListBooks;