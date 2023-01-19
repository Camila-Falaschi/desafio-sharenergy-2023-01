import { Router } from 'express';
import ClientController from '../Controllers/ClientController';

const routes = Router();

routes.get(
  '/clients-list',
  (req, res, next) => new ClientController(req, res, next).getAllClients(),
);
routes.post(
  '/add-client',
  (req, res, next) => new ClientController(req, res, next).addNewClient(),
);
routes.patch(
  '/update-client/:id',
  (req, res, next) => new ClientController(req, res, next).updateClient(),
);
routes.delete(
  '/remove-client/:id',
  (req, res, next) => new ClientController(req, res, next).removeClient(),
);


export default routes;