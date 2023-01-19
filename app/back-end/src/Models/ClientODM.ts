import { Model, Schema, UpdateQuery, isValidObjectId, model, models } from 'mongoose';
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

  public async create(obj: IClient): Promise<IClient> {
    return this.model.create({ ...obj });
  };

  public async update(id: string, obj: Partial<IClient>): Promise<IClient | null> {
    if (!isValidObjectId(id)) throw Error('Invalid Mongo id');

    return this.model.findByIdAndUpdate(
      { id },
      { ...obj } as UpdateQuery<IClient>,
      { new: true },
    );
  };

  public async remove(id: string): Promise<null> {
    if (!isValidObjectId(id)) throw Error('Invalid Mongo id');

    return this.model.findByIdAndRemove({ id });
  };
};

export default ClientODM;