class ApiError extends Error {
    constructor(
        statusCode,
        meassage="Somthing went wrong",
        errors = [],
        statck = ""
    ){
        super(meassage)
        this.statusCode = statusCode
        this.data = null
        this.message = meassage
        this.errors = errors
        this.success = false
        
        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
}

export {ApiError}