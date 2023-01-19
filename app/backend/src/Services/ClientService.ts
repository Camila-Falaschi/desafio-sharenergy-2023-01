import IClient from "../Interfaces/IClient";
import ClientODM from "../Models/ClientODM";

class ClientService {
  public async getAllClients() {
    const clientODM = new ClientODM();
    const clients = await clientODM.getAll();
    return clients;
  }

  public async addNewClient(data: IClient) {
    const clientODM = new ClientODM();
    const client = await clientODM.create(data);
    return client;
  }

  public async updateClient(id: string, data: Partial<IClient>) {
    const clientODM = new ClientODM();
    const clients = await clientODM.update(id, data);
    return clients;
  }

  public async removeClient(id: string) {
    const clientODM = new ClientODM();
    const clients = await clientODM.remove(id);
    return clients;
  }
}

export default ClientService;