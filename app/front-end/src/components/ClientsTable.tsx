// import { FaArrowRight } from "react-icons/fa"

import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import AppContext, { PropsAppContext } from "../AppContext/ProviderContext";

 function ClientsTable(): React.ReactElement  {
  const { setClientListPageComponent } = useContext(AppContext) as PropsAppContext;

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
            <th />
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