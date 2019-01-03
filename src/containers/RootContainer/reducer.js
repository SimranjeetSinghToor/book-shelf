import {bookStore} from './constants';
// let initialState = {bookStore:bookStore}

let reducer = (state ={bookStore:bookStore},action) => {
    console.log('action',action);
    switch(action.type) {
        case 'UPDATE_TYPE':
            let list = [...state.bookStore];
            list[action.payload.id].type = action.payload.val;
            return {...state,bookStore:list};

        default:
            return state;
    }
}

export default reducer;