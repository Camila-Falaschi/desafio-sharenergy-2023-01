import { useContext } from "react";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import AppContext, { PropsAppContext } from "../AppContext/ProviderContext";

export default function ClientDetails() {
  const { setClientListPageComponent } = useContext(AppContext) as PropsAppContext;
  
  const handleDeleteClient = () => {
    setClientListPageComponent('');
  };

  return (
    <>
      <section>
        <div onClick={() => setClientListPageComponent('')}>
          <FaArrowLeft />
          <h3>Return</h3>
        </div>
        <div>
          <h2>Name</h2>
          <div>
            <button type="button">Edit<FaEdit /></button>
          </div>
        </div>
        <div>
          <h2>Phone Number</h2>
          <div>
            <button type="button">Edit<FaEdit /></button>
          </div>
        </div>
        <div>
          <h2>Address</h2>
          <div>
            <button type="button">Edit<FaEdit /></button>
          </div>
        </div>
        <div>
          <h2>CPF</h2>
          <div>
            <button type="button">Edit<FaEdit /></button>
          </div>
        </div>
        <button type="button" onClick={() => handleDeleteClient()}>Delete Client</button>
      </section>
    </>
  )
}