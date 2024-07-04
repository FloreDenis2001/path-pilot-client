import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import vehicleSlice from './vehicles/vehicles.reducers';
import driverSlice from './drivers/drivers.reducers';
import packageSlice from './packages/packages.reducers';
import routeSlice from './routes/routes.reducers';

const rootReducer = combineReducers({
    vehicleState: vehicleSlice.reducer,
    driverState : driverSlice.reducer,
    packageState: packageSlice.reducer,
    routeState: routeSlice.reducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: {
               ignoredActions: [
                    'persist/PERSIST',
                    'persist/REHYDRATE',
                    'persist/PAUSE',
                    'persist/PURGE',
                    'persist/FLUSH',
                    'persist/REGISTER',
                ],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
