import { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import AppContext, { PropsAppContext } from "../AppContext/ProviderContext";
import IClient from "../interfaces/IClient";
import { requestClientData } from "../services/request";

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
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>CPF</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {(clientsData.length > 0) && clientsData.map((item: Required<IClient>) => {
              return (
                <tr>
                  <th>{item.name}</th>
                  <th>{item.phone}</th>
                  <th>{item.address}</th>
                  <th>{item.cpf}</th>
                  <th onClick={() => handleDetailsButton(item.id)}><FaArrowRight /></th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
      <div onClick={() => setClientListPageComponent('add-client')}>
        <h1>Add a new client</h1>
        <FaPlus />
      </div>
    </>
  )
};

export default ClientsTable;