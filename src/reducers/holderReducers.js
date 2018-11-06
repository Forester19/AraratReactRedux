import {combineReducers} from 'redux';
import userInfo from './UserInfo'
import {pageInfo} from './pageReducer'

console.log(userInfo);

const rootReducer = combineReducers({
    userInfo
}
);


export default rootReducer;

console.log({
    userInfo
});