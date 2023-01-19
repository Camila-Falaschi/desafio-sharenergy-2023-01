import ClientODM from "../Models/ClientODM";

class ClientService {
  public async getAllClients() {
    const clientODM = new ClientODM();
    const clients = await clientODM.getAll();
    return clients;
  }
}

export default ClientService;