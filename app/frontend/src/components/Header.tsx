import { FaCat, FaDog, FaHome, FaList, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  let navigate = useNavigate();

  const goToPage = (page: string) => {
    navigate(`/${page}`);
  }

  const logOut = () => {
    localStorage.removeItem('token');
    goToPage('login');
  }

  return (
    <header>
      <div className="header">
        <div className="link-container" onClick={() => goToPage('')}>
          <FaHome />
          <h2>Home</h2>
        </div>
        <div className="link-container" onClick={() => goToPage('cat')}>
          <FaCat />
          <h2>HTTP Cat</h2>
        </div>
        <div className="link-container" onClick={() => goToPage('random-dog')}>
          <FaDog />
          <h2>Random Dog</h2>
        </div>
        <div className="link-container" onClick={() => goToPage('clients-list')}>
          <FaList />
          <h2>Clients List</h2>
        </div>
      </div>
      <div className="link-container" onClick={() => logOut()}>
        <FaSignOutAlt />
        <h2>Logout</h2>
      </div>
    </header>
  );
}