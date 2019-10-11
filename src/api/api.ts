export * from './tasks.service';
import { TasksService } from './tasks.service';
export * from './tasks.serviceInterface'
export * from './visits.service';
import { VisitsService } from './visits.service';
export * from './visits.serviceInterface'
export const APIS = [TasksService, VisitsService];
