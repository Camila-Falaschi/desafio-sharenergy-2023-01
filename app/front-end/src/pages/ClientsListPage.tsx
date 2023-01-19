import { useContext, useEffect } from "react";
import AppContext, { PropsAppContext } from "../AppContext/ProviderContext";
import AddClient from "../components/AddClient";
import ClientDetails from "../components/ClientDetails";
import ClientsTable from "../components/ClientsTable";
import Header from "../components/Header";

export default function ClientsList() {
  const { clientListPageComponent } = useContext(AppContext) as PropsAppContext;

  useEffect(() => {}, [clientListPageComponent]);

  const handleCurrentSection = () => {
    switch (clientListPageComponent) {
      case 'add-client':
        return <AddClient />
      case 'client-details':
        return <ClientDetails />
      default:
        return <ClientsTable />
    }
  }

  return (
    <>
      <Header />
      <main>
        {handleCurrentSection()}
      </main>
    </>
  )
}