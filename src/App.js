import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './container/Main';
import style from './App.css';

class App extends Component {
    render() {
        return (
            <div className={style.App}>
                <Main/>
            </div>
        );
    }
}

export default App;
