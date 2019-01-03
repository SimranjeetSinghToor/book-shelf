import React from 'react';
import imageSource from '../../images/cover.jpg';
import * as appActions from '../../containers/RootContainer/appActions';
import {connect} from "react-redux";

class BookCover extends React.Component {

    changeHandler = (e) => {
        // this.props.changeHandler(this.props.bookDetails.id,e.target.value)
        this.props.updateType({id:this.props.bookDetails.id,val:e.target.value})
    }
    render() {
        let options =[];
        this.props.selectEnums.forEach(element => {
            options.push(<option value={element.value} >{element.name}</option>);
        });
        return(
            <div style={{width:'200px',display:'flex',flexDirection:'column', margin:'25px'}}>
                <img src={imageSource}></img>
                <p style={{textAlign:"center",padding:'10px 0'}}>{this.props.bookDetails.title}</p>
                <select onChange={this.changeHandler} value={this.props.bookDetails.type}>{options}</select>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        updateType: (reqObject) => dispatch(appActions.updateType(reqObject)),
        dispatch:dispatch
    };
};
function mapStateToProps (state) {
    return {
        state:state
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookCover);