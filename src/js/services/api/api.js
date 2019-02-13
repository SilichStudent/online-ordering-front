import axios from "axios"

import { Request, Methods } from "./Request"

const API = axios.create({ url: "http://localhost:3001/" })


/**
 * 
 * @param {Request} request 
 */
export async function callApi(request) {
    let requestPromise;
    switch (request.method) {
        case Methods.GET:
            requestPromise = API.get(request.endpoint, { headers: request.headers, params: request.params });
            break;
        case Methods.POST:
            requestPromise = API.post(request.endpoint, request.body, { headers: request.headers, params: request.params })
                .then(r => {
                    return r;
                }).catch(err => {
                    console.log(err);
                })
            break;
        default:
            requestPromise = Promise.resolve();
            break;
    }

    const response = await requestPromise;
    console.log(response);
    return response;
}