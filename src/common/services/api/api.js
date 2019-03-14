import axios from "axios";

import { Request, Methods } from "./Request";
import * as tokenService from '../token.service';
import { AUTH_TOKEN, API_ULR } from '../../constants';

/**
 * 
 * @param {Request} request 
 */
export function callApi(request) {
    let responsePromise;
    const url = API_ULR + request.endpoint;

    if(!request.headers){
        request.headers = {}
    }

    const token = tokenService.getUserToken() || tokenService.getManagerToken();
    if(token){
        request.headers[AUTH_TOKEN] = token;
    }

    request.headers['Access-Control-Allow-Origin'] = '*';
    switch (request.method) {
        case Methods.GET:
            responsePromise = axios.get(url, { headers: request.headers, params: request.params });
            break;
        case Methods.POST:
            responsePromise = axios.post(url, request.body, { headers: request.headers, params: request.params });
            break;
        case Methods.PUT:
            responsePromise = axios.put(url, request.body, { headers: request.headers, params: request.params });
            break;
        case Methods.DELETE:
            responsePromise = axios.delete(url, { headers: request.headers, params: request.params });
            break;
        default:
            responsePromise = Promise.resolve();
            break;
    }

    return responsePromise.then(res => {
        return res.data
    })
}