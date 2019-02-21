import { Request, Methods } from "./Request"
import axios from "axios"

/**
 * 
 * @param {Request} request 
 */
export function callApi(request) {
    let responsePromise;
    const url = "http://localhost:3001/api/v1" + request.endpoint;
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