export class HttpError extends Error{
    constructor(data){
        super(data.message);
        this.status = data.status;
    }
}