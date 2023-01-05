import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const token = req.headers.token ? req.headers.token.split(" ")[1] : null;
    if (!token) {
      throw new Error();
    }

    const userId = jwt.verify(token, process.env.JWT_SECRET);

    if (!userId) {
      throw new Error();
    }
    res.locals.userId = userId.id;
    next();
  } catch (err) {
    res.status(401).json("unauthorized");
  }
};
