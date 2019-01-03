import React from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../routes';
export default class RootContainer extends React.Component {
    render() {
        let link = window.location.href.indexOf('search')== -1 ?<Link to ='/search'>Search</Link>:<Link to ='/'>Go Back</Link>
        return (
            <div>
                <div style={{float:'right',padding:'5px 10px',border:'1px solid black',marginRight:'80px',marginTop:'20px'}}>
                    {link}
                </div>
                
                <Routes></Routes>                
            </div>
        )
    }
}