import React from 'react';
import {connect} from 'react-redux';
import BooksContainer from '../BooksContainer';
class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            filteredList:[]
        }
    }

    changeHandler =(e) => {
        let val = e.target.value;
        let filteredList = [];
        if(!!val) {
            filteredList = this.props.bookStore.filter(item => {
                return (item.title.toLowerCase()).includes(val.toLowerCase())
            })
        }
        this.setState({filteredList:filteredList})
    }
    render() {
        return (
            <div>
                <input type="text" onChange = {this.changeHandler}></input>
                <BooksContainer heading="Seach Results" booksList={this.state.filteredList} containerType="search"></BooksContainer>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        bookStore: state.bookStore,
    }
}


export default connect(mapStateToProps)(SearchContainer);