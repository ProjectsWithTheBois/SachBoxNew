import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { uid } from 'react-uid';
import { Button } from '@material-ui/core';
import './Header.css';

const NAV_LINKS = [
    {
        label: 'About Us',
        path: '/about'
    }, 
    {
        label: 'Game Select',
        path: '/gameselect'
    },
    {
        label: 'Join Game',
        path: '/joingame'
    },
]

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div id="jumplist">
                    {NAV_LINKS.map((navItem) => (
                        <Link 
                            key={uid(navItem)}
                            to={{
                                pathname: navItem.path,
                            }}> 
                            <Button color="primary">{navItem.label}</Button>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
