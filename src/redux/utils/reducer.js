import { pending, fulfilled, rejected } from "./actions";
import { baseState } from "./baseStates";

const stateType = (type = "string", initialState) => {
  const types = {
    string: initialState || "",
    object: initialState || {},
    array: initialState || [],
  };
  return types[type];
};
export const reducer =
  (actionType = "ACTION_TYPE", key = "state", dataType = "string", initial) =>
  (state = baseState(key, stateType(dataType, initial)), action) => {
    switch (action.type) {
      case pending(actionType): {
        return {
          ...state,
          loaded: false,
          loading: true,
        };
      }
      case fulfilled(actionType): {
        return {
          ...state,
          loading: false,
          loaded: true,
          [key]: action.payload.data.data,
        };
      }
      case rejected(actionType):
      default:
        return {
          ...state,
          loading: false,
        };
    }
  };
