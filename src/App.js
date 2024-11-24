import React from 'react';
import './App.css';
import BillCalculator from './components/BillCalculator';

function App() {
  return (
    <div className="App">
      <header className="text-center my-4">
        <h1>Electricity Bill Calculator</h1>
      </header>
      <main className="container">
        <BillCalculator />
      </main>
    </div>
  );
}

export default App;
