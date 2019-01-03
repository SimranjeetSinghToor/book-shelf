import React from 'react';
import {connect} from "react-redux";

import BooksContainer from '../BooksContainer/index';
import {bookStore,selectEnums} from '../RootContainer/constants';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(index,val) {
        let updatedList = [...this.state.bookStore];
        updatedList[index].type = val;
        this.setState({bookStore:updatedList})
    }

    render() {
        console.log("props",this.props)
        return (
            <div>
                <BooksContainer heading="Currently Reading" booksList={this.props.bookStore} containerType='reading' changeHandler={this.changeHandler} ></BooksContainer> 
                <BooksContainer heading="Want To Read" booksList={this.props.bookStore} containerType='interested' changeHandler={this.changeHandler} ></BooksContainer>   
                <BooksContainer heading="Read" booksList={this.props.bookStore} containerType='read' changeHandler={this.changeHandler} ></BooksContainer>          
                <BooksContainer heading="New Books" booksList={this.props.bookStore} containerType='none' changeHandler={this.changeHandler} ></BooksContainer>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log("state",state.bookStore)
    return {
        bookStore: state.bookStore,
    }
}

export default connect(mapStateToProps)(AppContainer);