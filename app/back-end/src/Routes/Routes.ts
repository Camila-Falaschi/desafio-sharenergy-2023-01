import { Router } from 'express';
import ClientController from '../Controllers/ClientController';

const routes = Router();

routes.get(
  '/clients-list',
  (req, res, next) => new ClientController(req, res, next).getAllClients(),
);

export default routes;