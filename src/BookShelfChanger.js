import React, {Component} from 'react';

class BookShelfChanger extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={(event) => this.props.onUpdate(event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;