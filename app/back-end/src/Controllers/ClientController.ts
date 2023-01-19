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
  }

  public async getAllClients() {
    const clients = await this.service.getAllClients();
    return this.res.status(200).json(clients);
  }
}

export default ClientController;