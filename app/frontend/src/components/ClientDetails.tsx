import { useContext } from "react";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import AppContext, { PropsAppContext } from "../AppContext/ProviderContext";
import "./styles/ClientDetails.css";

export default function ClientDetails() {
  const { setClientListPageComponent } = useContext(AppContext) as PropsAppContext;
  
  const handleDeleteClient = () => {
    setClientListPageComponent('');
  };

  return (
    <>
      <section className="details-container">
        <div className="return-button" onClick={() => setClientListPageComponent('')}>
          <FaArrowLeft />
          <h3>Return</h3>
        </div>
        <div className="details">
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
        </div>
        <button className="delete button" type="button" onClick={() => handleDeleteClient()}>Delete Client</button>
      </section>
    </>
  )
}