import { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import AppContext, { PropsAppContext } from "../AppContext/ProviderContext";
import IClient from "../interfaces/IClient";
import { requestClientData } from "../services/request";
import "./styles/ClientsTable.css";

 function ClientsTable(): React.ReactElement  {
  const { setClientListPageComponent, setCurrentClientId } = useContext(AppContext) as PropsAppContext;

  const [clientsData, setClientsData] = useState([]);

  const fetchClientsData = async () => {
    const data = await requestClientData('/clients-list');
    setClientsData(data);
  };

  useEffect(() => { fetchClientsData() }, []);

  const handleDetailsButton = (id: string) => {
    setCurrentClientId(id);
    setClientListPageComponent('client-details');
  }

  return (
    <>
      <section className="container-section">
        <table>
          <thead className="table-head">
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>CPF</th>
              <th onClick={() => setClientListPageComponent('client-details')}>Details</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {(clientsData.length > 0) && clientsData.map((item: Required<IClient>) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>{item.cpf}</td>
                  <td onClick={() => handleDetailsButton(item.id)}><FaArrowRight /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
      <div className="add-button" onClick={() => setClientListPageComponent('add-client')}>
        <h1>Add a new client</h1>
        <FaPlus />
      </div>
    </>
  )
};

export default ClientsTable;