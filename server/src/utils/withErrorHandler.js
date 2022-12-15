export function withErrorHandler(cb){
    return async (req, res, next) => {
        try{
            await cb(req, res, next);
        }catch(err){
            res.status(err.status || 500).json(err.message || "a unkown error occoured")
        }
    }
}