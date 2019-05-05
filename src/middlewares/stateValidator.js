import tv4 from "tv4";
import stateSchema from "../JSONSchema/stateSchema";

export default ({ dispatch, getState }) => next => action => {
  next(action);
  const valid = tv4.validate(getState(), stateSchema);
  if (!valid) throw new Error("Invalid propriety inside the state Comment");
};
