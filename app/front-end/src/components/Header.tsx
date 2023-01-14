import { FaCat, FaDog, FaHome, FaList, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <FaHome />
          <h2>Home</h2>
        </div>
        <div>
          <FaCat />
          <h2>HTTP Cat</h2>
        </div>
        <div>
          <FaDog />
          <h2>Random Dog</h2>
        </div>
        <div>
          <FaList />
          <h2>Clients List</h2>
        </div>
      </div>
      <div>
        <FaSignOutAlt />
        <h2>Logout</h2>
      </div>
    </header>
  );
}