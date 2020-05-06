import { createWSTypes, createWSActionCreators  } from "../../utils/createWSActionCreators"
export const HOME_WS_TYPES = createWSTypes("HOME_WS_");
const HOME_ACTION_CREATORS = createWSActionCreators(HOME_WS_TYPES);
export default HOME_ACTION_CREATORS;