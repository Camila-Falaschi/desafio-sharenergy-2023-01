import IUser from "../interfaces/IUser";

export default function UserCard({ data }: IUser) {
  const { imgsrc, username, fullName, email, age } = data;

  return (
    <div>
      <img src={imgsrc} alt={fullName} />
      <div>
        <p>Username: {username}</p>
        <p>Full Name: {fullName}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
