import {Entity, model, property} from '@loopback/repository';

@model()
export class Enrollment extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'number',
    required: true,
  })
  courseId: number;

  @property({
    type: 'date',
    required: true,
  })
  enrollmentDate: Date;

  @property({
    type: 'string',
    required: false,
  })
  status?: string;

  constructor(data?: Partial<Enrollment>) {
    super(data);
  }
}


export interface EnrollmentRelations {
  // describe navigational properties here
}

export type EnrollmentWithRelations = Enrollment & EnrollmentRelations;
