import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Add from './Add';
import './App.css';
import Bottomnav from './BottomNav';
import CurrentWeight from './CurrentWeight';
import Home from './Home';
import Profile from './Profile';
import Stats from './Stats';
// import FirstScreen from './FirstScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Bottomnav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/add" element={<CurrentWeight />} />
          <Route path="/clipboard" element={<Add />} />
          <Route path="/profile" element={<Profile />}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
