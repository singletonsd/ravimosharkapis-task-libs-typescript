export * from './interventions.service';
import { InterventionsService } from './interventions.service';
export * from './interventions.serviceInterface'
export * from './tasks.service';
import { TasksService } from './tasks.service';
export * from './tasks.serviceInterface'
export * from './technicians.service';
import { TechniciansService } from './technicians.service';
export * from './technicians.serviceInterface'
export * from './visits.service';
import { VisitsService } from './visits.service';
export * from './visits.serviceInterface'
export const APIS = [InterventionsService, TasksService, TechniciansService, VisitsService];
