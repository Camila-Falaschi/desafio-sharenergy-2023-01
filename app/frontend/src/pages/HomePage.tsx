import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
import IUserAPI from "../interfaces/IUserAPI";
import { usersList, usersListByPage } from "../services/APIRandomUser";
import "./styles/HomePage.css";
import "./styles/Pages.css";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [users, setUsers] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [previousButtonIsDisabled, setPreviousButtonIsDisabled] =
    useState(true);
  const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState(false);
  const [allUsers, setAllUsers] = useState(true);

  const fetchUsersListByPage = async (currentPage: number) => {
    const { results } = await usersListByPage(currentPage);
    setUsers(results);
  };

  useEffect(() => {
    fetchUsersListByPage(1);
  }, []);

  useEffect(() => {
    fetchUsersListByPage(pageNumber);
    if (pageNumber === 1) {
      setPreviousButtonIsDisabled(true);
    } else {
      setPreviousButtonIsDisabled(false);
    }
    if (pageNumber === 10) {
      setNextButtonIsDisabled(true);
    } else {
      setNextButtonIsDisabled(false);
    }
  }, [pageNumber]);

  const searchButtonHandle = async () => {
    const { results } = await usersList();
    const searchResults = results.filter((element: IUserAPI) => {
      const { name, login } = element;
      return (
        name.first.toLowerCase().includes(searchValue) ||
        name.last.toLowerCase().includes(searchValue) ||
        element.email.toLowerCase().includes(searchValue) ||
        login.username.toLowerCase().includes(searchValue)
      );
    });
    const usersData = (searchResults.length > 9) ? searchResults.slice(0, 9) : searchResults;
    setUsers(usersData);
    setAllUsers(false);
  };

  const handleReturnButton = () => {
    setAllUsers(true);
    setSearchValue("");
    fetchUsersListByPage(1);
  }

  const pageHandle = (buttonType: string) => {
    if (buttonType === "previous" && pageNumber !== 1) {
      setPageNumber((prevNumber) => prevNumber - 1);
    }
    if (buttonType === "next" && pageNumber !== 10) {
      setPageNumber((prevNumber) => prevNumber + 1);
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        {(!allUsers) && (
          <div className="return-button" onClick={() => { handleReturnButton() }}>
            <FaArrowLeft />
            <p>Back</p>
          </div>
        )}
        <div className="search-bar">
          <input
            className="input-search"
            type="text"
            id="search-bar"
            value={searchValue}
            placeholder="Search for name, email or username"
            onChange={({ target }) =>
              setSearchValue(target.value.toLowerCase())
            }
          />
          <button type="button" className="button-search" onClick={() => searchButtonHandle()}>
            Search
            <FaSearch />
          </button>
        </div>
        <div className="users-section">
          {users.map((element) => {
            const { name, login, dob, picture } = element;
            const fullName = `${name.first} ${name.last}`;
            const userData = {
              imgsrc: picture.thumbnail,
              username: login.username,
              fullName,
              email: element.email,
              age: dob.age,
            };
            return <UserCard data={userData} />;
          })}
        </div>
        {allUsers && (
          <div className="pages-button">
            <button
              type="button"
              onClick={() => pageHandle("previous")}
              disabled={previousButtonIsDisabled}
            >
              <FaAngleLeft />
            </button>
            <button
              type="button"
              onClick={() => pageHandle("next")}
              disabled={nextButtonIsDisabled}
            >
              <FaAngleRight />
            </button>
          </div>
        )}
      </main>
    </>
  );
}
