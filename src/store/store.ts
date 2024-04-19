import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import vehicleSlice, { VehicleState } from './vehicles/vehicles.reducers';

interface RootState {
    vehicleState: VehicleState;
}

const rootReducer = combineReducers({
    vehicleState: vehicleSlice.reducer
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
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
