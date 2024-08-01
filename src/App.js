import React from 'react';
import UserConsumption from './components/UserConsumption';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Food Tracker</h1>
                <UserConsumption />
            </header>
        </div>
    );
}

export default App;
