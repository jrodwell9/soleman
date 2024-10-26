import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={Landing} />
          {/* Add more routes here as you expand your website */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
