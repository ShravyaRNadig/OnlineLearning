import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OnlinelearningDataSource} from '../datasources';
import {Enrollment, EnrollmentRelations} from '../models';

export class EnrollmentRepository extends DefaultCrudRepository<
  Enrollment,
  typeof Enrollment.prototype.id,
  EnrollmentRelations
> {
  constructor(
    @inject('datasources.onlinelearning') dataSource: OnlinelearningDataSource,
  ) {
    super(Enrollment, dataSource);
  }
}
