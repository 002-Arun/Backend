class ApiError extends Error {
    constructor(
        statusCode,
        meassage="Somthing went wrong",
        errors = [],
        stack = ""
    ){
        super(meassage)
        this.statusCode = statusCode
        this.data = null
        this.message = meassage
        this.errors = errors
        this.success = false
        
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
}

export {ApiError}