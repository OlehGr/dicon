import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import postsReducer from './posts-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({ // Функция combineReducers создаёт state по средствам reducer
    profilePage: profileReducer,
    postsPage: postsReducer,
    usersPage: usersReducer
}) // При запуске SPA он вызывает редусеры в которых лежат созданные куски state
// При послейдущих вызовах они будут изменять state 



let store = createStore(reducers); // Передаём reducers функции создающей store

export default store;