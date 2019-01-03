import React from 'react';
import BookCover from '../../components/BookCover';
import {selectEnums} from '../RootContainer/constants';

export default class BooksContainer extends React.Component {
    render() {
        let areBooksAvailable = false;
        let booksList  = this.props.booksList.map( (book) => {
            if(book.type == this.props.containerType || this.props.containerType == 'search') {
                areBooksAvailable = true;
                return (<BookCover changeHandler = {this.props.changeHandler} bookDetails = {book} selectEnums={selectEnums}></BookCover>);
            }
        })
        booksList = areBooksAvailable ? booksList : (<div style={{padding:'40px 10px',fontSize:'22px'}}>No books in this category</div>)
        return(
            <div>
                <div style={{padding: '10px',borderBottom: "2px solid rosybrown",fontSize: '28px',color: 'saddlebrown'}}>{this.props.heading}</div>
                <div style={{display:'flex', justifyContent:'space-around',flexWrap:'wrap'}}>
                    {booksList}
                </div>
            </div>
        )
    }
}