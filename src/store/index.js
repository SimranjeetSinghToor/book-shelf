import {createStore} from 'redux';
import reducer from '../containers/RootContainer/reducer';

const rootStore = createStore(reducer);
    
export default rootStore;