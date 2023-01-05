export const validate = (schema) => {
    return (req, res, next) => {
        try{
            schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params
            })
            next();
        }catch(err){
            console.log(err)
            res.status(422).json(err.errors)
        }
    }
}