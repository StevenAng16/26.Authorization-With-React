import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/home' element={<Home/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
