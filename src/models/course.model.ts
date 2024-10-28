import {Entity, model, property} from '@loopback/repository';

@model()
export class Course extends Entity {
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
  title: string;

  @property({
    type: 'string',
    required: false,
  })
  description?: string;

  @property({
    type: 'string',
    required: false,
  })
  duration?: string;

  @property({
    type: 'string',
    required: false,
  })
  level?: string;

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

  constructor(data?: Partial<Course>) {
    super(data);
  }
}



export interface CourseRelations {
  // describe navigational properties here
}

export type CourseWithRelations = Course & CourseRelations;
