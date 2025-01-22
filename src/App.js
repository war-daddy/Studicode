import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import DSADetail from './components/DSADetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dsa/:name" element={<DSADetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
