import React, {Component} from 'react';
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    constructor(props) {
        super(props);
    }

    updateShelf = shelf => {
        this.props.updateShelf(this.props.book, shelf);
    }

    render() {
        const book = this.props.book
        let thumbnail = '';
        if (book.imageLinks) {
            thumbnail = book.imageLinks.thumbnail;
        }
        let authors = '';
        if (book.authors) {
            authors = book.authors.join('<br/>')
        }
        return (
            <div key={book.id} className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${thumbnail})`
                    }}></div>
                    <BookShelfChanger shelf={book.shelf} onUpdate={this.updateShelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors" dangerouslySetInnerHTML={{__html: authors}}></div>
            </div>
        );
    }
}

export default Book;