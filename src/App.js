
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Player from './pages/Player';
import TVShows from './pages/TVShows';
import MoviePage from './pages/Movies';
import UserListedMovies from './pages/UserListedMovies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/player' element={<Player/>}/>
          <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
