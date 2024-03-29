import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import axiosApi from "../axiosApi";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";
import postsReducer from "./reducers/postsReducer";
import usersReducer from "./reducers/usersReducer";
import commentsReducer from "./reducers/commentsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer
});

const persistedState = loadFromLocalStorage();

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveToLocalStorage({
        users: store.getState().users,
    })
});

axiosApi.interceptors.request.use(config => {
   try {
       config.headers['Authorization'] = store.getState().users.user.token;
   } catch (e) {}

    return config;
});

export default store;