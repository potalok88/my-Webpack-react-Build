import React, {Component} from 'react';
import { Link } from 'react-router'
import styles from './Temp.scss'



class Temp extends Component {

    render() {
        return (
            <div className={styles.main}>
                Temp
                <Link to='/'>
                    Главнаа
                </Link>
            </div>
        );
    }
}


export default Temp;
