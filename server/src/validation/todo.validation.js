export function todoCreateValidation(req, res, next){
    if(!req.body.title || !req.body.content || req.body.title.trim() <= 3 || req.body.content.trim() <= 20 ){
        return res.status(422).json("validation failed");
    }
    next()
}

export function todoUpdateValidation(req, res, next) {
    const validStatusValues = ['pending', 'success', 'deleted'];
    if (Object.keys(req.body).length === 0 || !validStatusValues.includes(req.body.todoStatus)) {
      return res.status(422).json('validation failed');
    }
  
    next();
  }