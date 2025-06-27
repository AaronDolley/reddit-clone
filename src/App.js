import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Create from './components/create';
import SideBar from './components/sidebar/sideBar';
import Feed from './components/mainPost/feed';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={ <Feed/> }/>
          <Route path="/create" element={ <Create/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
