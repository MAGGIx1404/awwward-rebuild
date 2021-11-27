/**
 * @module typings/core
 */
import { Trigger } from './index';
export declare type RequestError = (url: string, errorOrResponse: RequestErrorOrResponse) => boolean;
export declare type RequestCustomError = (trigger: Trigger, action: string, url: string, response: RequestErrorOrResponse) => boolean;
export interface IXhrResponse {
    status: number;
    statusText: string;
}
export declare type RequestErrorOrResponse = Error | IXhrResponse;
