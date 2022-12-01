export function todoValidation(req, res, next){
    if(!req.body.title || !req.body.content || req.body.title.trim() <= 3 || req.body.content.trim() <= 20 ){
        return res.json("validation failed");
    }
    next()
}