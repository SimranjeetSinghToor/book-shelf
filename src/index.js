import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootStore from './store/index';
import RootContainer from './containers/RootContainer/index';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={rootStore}>
        <BrowserRouter>
            <RootContainer/>
        </BrowserRouter>
    </Provider>,
            document.getElementById("root"));