export * from './tasks.service';
import { TasksService } from './tasks.service';
export * from './tasks.serviceInterface'
export * from './technicians.service';
import { TechniciansService } from './technicians.service';
export * from './technicians.serviceInterface'
export * from './visits.service';
import { VisitsService } from './visits.service';
export * from './visits.serviceInterface'
export const APIS = [TasksService, TechniciansService, VisitsService];
