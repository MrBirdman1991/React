export const validate = (schema) => {
    return (req, res, next) => {
        try{
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params
            })
            next();
        }catch(err){
            res.status(422).json(err.errors)
        }
    }
}