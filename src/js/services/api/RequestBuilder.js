import { Request } from './Request'

export class RequestBuilder{
    request;

    constructor(){
        this.request = new Request();
    }

    addMethod(value){
        this.request.method = value;
        return this;
    }

    addEndpoint(value){
        this.request.endpoint = value;
        return this;
    }

    addParams(value){
        this.request.params = value;
        return this;
    }

    addHeaders(value){
        this.request.headers = value;
        return this;
    }

    addBody(value){
        this.request.body = value;
        return this;
    }

    build(){
        return this.request;
    }
}