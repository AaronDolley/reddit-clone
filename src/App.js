import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Create from './components/create';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/create" element={ <Create/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
