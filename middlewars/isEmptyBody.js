import { HttpError } from "../helpers/index.js";

const isEmptyBody = (req, res, next) => {
  const keys = Object.keys(req.body);
  if (!keys.length) {
    next(HttpError(400, "missing field favorite"));
  }
  next();
};

export default isEmptyBody;
