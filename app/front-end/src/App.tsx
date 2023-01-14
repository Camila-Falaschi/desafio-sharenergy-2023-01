import { Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
}

export default App;