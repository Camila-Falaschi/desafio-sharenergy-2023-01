import { FaArrowLeft, FaEdit } from "react-icons/fa";

export default function ClientsList() {
  return (
    <>
      <section>
        <div>
          <FaArrowLeft />
          <h3>Return</h3>
        </div>
        <div>
          <h2>Name</h2>
          <button type="button">Edit<FaEdit /></button>
        </div>
        <div>
          <h2>Phone Number</h2>
          <button type="button">Edit<FaEdit /></button>
        </div>
        <div>
          <h2>Address</h2>
          <button type="button">Edit<FaEdit /></button>
        </div>
        <div>
          <h2>CPF</h2>
          <button type="button">Edit<FaEdit /></button>
        </div>
        <button type="button">Delete Client</button>
      </section>
    </>
  )
}