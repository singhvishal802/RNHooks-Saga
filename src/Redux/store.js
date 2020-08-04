//configureStore.js
import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import combineReducers from '../Reducers';
import { rootSaga } from '../Sagas';
import Reactotron from '../../config/ReactotronConfig'

var store, persistor, persistConfig;

// persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: ['homeReducer', 'authReducer', 'footerReducer', 'profileReducer', 'projectReducer', 'authLoadingReducer', 'projectDetailReducer', 'pressureTestReducer'],      //not persisted reducer
//   whitelist: ['fusionTimerReducer']     //persisted reducer
// };

if (__DEV__) {
    sagaMonitor = Reactotron.createSagaMonitor();
    sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware = applyMiddleware(sagaMiddleware);
    enhancer = compose(middleware, Reactotron.createEnhancer());
   // persistedReducer = persistReducer(persistConfig, combineReducers);
    store = createStore(combineReducers, enhancer)
} else {
    // Middleware: Redux Saga
    sagaMiddleware = createSagaMiddleware();
    middleware = applyMiddleware(sagaMiddleware);
   // persistedReducer = persistReducer(persistConfig, combineReducers);
    // Redux: Store
    store = createStore(
        combineReducers,
        middleware,
    )
}

sagaMiddleware.run(rootSaga);
//persistor = persistStore(store);

export { store };


