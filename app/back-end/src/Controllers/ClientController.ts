import { NextFunction, Request, Response } from "express";
import ClientService from "../Services/ClientService";

class ClientController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ClientService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ClientService();
  };

  public async getAllClients() {
    const clients = await this.service.getAllClients();
    return this.res.status(200).json(clients);
  };

  public async addNewClient() {
    try {
      const client = await this.service.addNewClient({ ...this.req.body });
      return this.res.status(201).json(client);
    } catch (error) {
      this.next(error);
    }
  };

  public async updateClient() {
    const data = { ...this.req.body };
    const { id } = this.req.params;
    console.log(id);
    
    try {
      const client = await this.service.updateClient(id, data);
      return this.res.status(200).json(client);
    } catch (error) {
      this.next(error);
    }
  };

  public async removeClient() {
    const { id } = this.req.params;
    try {
      await this.service.removeClient(id);
      return this.res.status(200).json({ message: 'Client deleted successfully' });
    } catch (error) {
      this.next(error);
    }
  };
};

export default ClientController;