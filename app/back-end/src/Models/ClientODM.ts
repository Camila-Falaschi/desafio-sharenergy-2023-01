import { Model, Schema, model, models } from 'mongoose';
import IClient from '../Interfaces/IClient';

class ClientODM {
  private schema: Schema;
  private model: Model<IClient>;

  constructor() {
    this.schema = new Schema<IClient>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      cpf: { type: String, required: true },
    });
    this.model = models.Payment || model('Client', this.schema);
  }

  public async getAll(): Promise<IClient[]> {
    return this.model.find();
  }
}

export default ClientODM;