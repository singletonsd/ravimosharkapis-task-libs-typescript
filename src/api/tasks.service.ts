/**
 * Ravimoshark Task API
 * This is an API to interact with Ravimoshark task database. # Introduction This API allow to create, modify and delete task, visits, technicians and interventions. # User Authentication This API does not contain any kind of user validation but It request to have a valid authentication user to interact with it. For more information about user Authentication, please refer to [Ravimoshark User Authentication](https://ravimoshark.com/back/apis/auth/latest). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@ravimoshark.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CustomError } from '../model/customError';
import { Deleted } from '../model/deleted';
import { Finished } from '../model/finished';
import { IdInteger } from '../model/idInteger';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { Tasks } from '../model/tasks';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { TasksServiceInterface }                            from './tasks.serviceInterface';


@Injectable()
export class TasksService implements TasksServiceInterface {

    protected basePath = 'http://localhost:8001';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add one task.
     * Add one task.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addTask(body: Tasks, observe?: 'body', reportProgress?: boolean): Observable<Tasks>;
    public addTask(body: Tasks, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tasks>>;
    public addTask(body: Tasks, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tasks>>;
    public addTask(body: Tasks, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addTask.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Tasks>(`${this.basePath}/tasks`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete one task.
     * Delete one task.
     * @param id id to delete or search
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteTask(id: number, observe?: 'body', reportProgress?: boolean): Observable<IdInteger>;
    public deleteTask(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IdInteger>>;
    public deleteTask(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IdInteger>>;
    public deleteTask(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTask.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<IdInteger>(`${this.basePath}/tasks/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Edit one task.
     * Edit one task.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public editTask(body: Tasks, observe?: 'body', reportProgress?: boolean): Observable<Tasks>;
    public editTask(body: Tasks, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tasks>>;
    public editTask(body: Tasks, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tasks>>;
    public editTask(body: Tasks, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling editTask.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Tasks>(`${this.basePath}/tasks`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get one task.
     * Get one task.
     * @param id id to delete or search
     * @param deleted Get all, deleted, not deleted data. Default not deleted.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTaskById(id: number, deleted?: Deleted, observe?: 'body', reportProgress?: boolean): Observable<Tasks>;
    public getTaskById(id: number, deleted?: Deleted, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tasks>>;
    public getTaskById(id: number, deleted?: Deleted, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tasks>>;
    public getTaskById(id: number, deleted?: Deleted, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTaskById.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deleted !== undefined && deleted !== null) {
            queryParameters = queryParameters.set('deleted', <any>deleted);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Tasks>(`${this.basePath}/tasks/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all tasks.
     * Get all tasks.
     * @param skip number of item to skip
     * @param limit max records to return
     * @param orderBy order by property.
     * @param filterBy filter data.
     * @param deleted Get all, deleted, not deleted data. Default not deleted.
     * @param metadata If metadata is needed (for pagination controls)
     * @param refClient Data from a desired contract
     * @param finished Get all, finished or unfinished task. Default not finished.
     * @param technicianId Data from a desired technician
     * @param dateFixFrom Date fix from
     * @param dateCallUntil Date call until
     * @param dateCallFrom Date call from
     * @param dateFixUntil Date fix until
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTasks(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, finished?: Finished, technicianId?: string, dateFixFrom?: string, dateCallUntil?: string, dateCallFrom?: string, dateFixUntil?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2001>;
    public getTasks(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, finished?: Finished, technicianId?: string, dateFixFrom?: string, dateCallUntil?: string, dateCallFrom?: string, dateFixUntil?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2001>>;
    public getTasks(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, finished?: Finished, technicianId?: string, dateFixFrom?: string, dateCallUntil?: string, dateCallFrom?: string, dateFixUntil?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2001>>;
    public getTasks(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, finished?: Finished, technicianId?: string, dateFixFrom?: string, dateCallUntil?: string, dateCallFrom?: string, dateFixUntil?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {














        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (orderBy !== undefined && orderBy !== null) {
            queryParameters = queryParameters.set('orderBy', <any>orderBy);
        }
        if (filterBy !== undefined && filterBy !== null) {
            queryParameters = queryParameters.set('filterBy', <any>filterBy);
        }
        if (deleted !== undefined && deleted !== null) {
            queryParameters = queryParameters.set('deleted', <any>deleted);
        }
        if (metadata !== undefined && metadata !== null) {
            queryParameters = queryParameters.set('metadata', <any>metadata);
        }
        if (refClient !== undefined && refClient !== null) {
            queryParameters = queryParameters.set('refClient', <any>refClient);
        }
        if (finished !== undefined && finished !== null) {
            queryParameters = queryParameters.set('finished', <any>finished);
        }
        if (technicianId !== undefined && technicianId !== null) {
            queryParameters = queryParameters.set('technicianId', <any>technicianId);
        }
        if (dateFixFrom !== undefined && dateFixFrom !== null) {
            queryParameters = queryParameters.set('dateFixFrom', <any>dateFixFrom);
        }
        if (dateCallUntil !== undefined && dateCallUntil !== null) {
            queryParameters = queryParameters.set('dateCallUntil', <any>dateCallUntil);
        }
        if (dateCallFrom !== undefined && dateCallFrom !== null) {
            queryParameters = queryParameters.set('dateCallFrom', <any>dateCallFrom);
        }
        if (dateFixUntil !== undefined && dateFixUntil !== null) {
            queryParameters = queryParameters.set('dateFixUntil', <any>dateFixUntil);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2001>(`${this.basePath}/tasks`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
