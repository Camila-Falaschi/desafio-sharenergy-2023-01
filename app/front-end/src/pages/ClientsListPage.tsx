import { FaPlus } from "react-icons/fa";
import Header from "../components/Header";

export default function ClientsList() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Add a new client</h1>
          <FaPlus />
        </div>
      </main>
    </>
  )
}