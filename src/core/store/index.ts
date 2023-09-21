import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "@/core/store/reducer";
import rootSaga from "@/core/store/saga";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "@/core/store/provider";

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
    const store = createStore(
        rootReducer(),
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);

    return store;
}


export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;


export default configureStore;



