import React, { Component } from 'react';
import { Link } from 'react-router'

class Main extends Component {

    render() {
        return (
            <div>
                Главная
                <Link to='/temp'>
                    temp
                </Link>
            </div>
        );
    }
}


export default Main;
