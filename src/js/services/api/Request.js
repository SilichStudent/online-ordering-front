export class Request {
    method;
    endpoint;
    params;
    headers;
    body;
}

export const Methods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
}