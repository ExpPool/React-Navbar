import React, {Component} from 'react';

import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './Terserah';
import Card from './ResCard';


class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <Navbar>
                <br></br>
                <Button variant="contained" color="primary"></Button>
                    Hallo World
                </Navbar>
            </div>
        );
    }
}

export default App;
