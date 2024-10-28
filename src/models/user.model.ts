import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    unique: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'string',
    required: false,
  })
  bio?: string;

  @property({
    type: 'date',
    required: false,
  })
  createdAt?: Date;

  @property({
    type: 'date',
    required: false,
  })
  updatedAt?: Date;

  constructor(data?: Partial<User>) {
    super(data);
  }
}


export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
