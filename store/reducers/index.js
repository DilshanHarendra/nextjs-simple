import {combineReducers} from 'redux'
import siteSettingsReducer from "./siteSettingsReducer";
const rootReducer =combineReducers({
    siteSettings:siteSettingsReducer
})
export default rootReducer;
