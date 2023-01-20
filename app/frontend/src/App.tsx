import { Route, Routes } from 'react-router-dom';
import "./App.css";
import CatPage from './pages/CatPage';
import ClientsList from './pages/ClientsListPage';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import RandomDog from './pages/RandomDogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/cat" element={ <CatPage /> } />
      <Route path="/random-dog" element={ <RandomDog /> } />
      <Route path="/clients-list" element={ <ClientsList /> } />
    </Routes>
  );
}

export default App;
