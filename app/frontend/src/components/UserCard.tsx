import IUser from "../interfaces/IUser";
import "./styles/UserCard.css";

export default function UserCard({ data }: IUser) {
  const { imgsrc, username, fullName, email, age } = data;

  return (
    <div className="card">
      <img className="image-profile" src={imgsrc} alt={fullName} />
      <div className="user-details">
        <p>Username: {username}</p>
        <p>Full Name: {fullName}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
