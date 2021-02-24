import React from 'react'
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <>
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact />
            </Switch>
        </Router>
        </>
    )
}

export default App
