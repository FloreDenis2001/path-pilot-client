import { createSelector } from "@reduxjs/toolkit";
import { DriverState } from "./drivers.reducers"; 

interface RootState {
    driverState: DriverState; 
}

export const selectDriversState = (state: RootState) => state.driverState;

export const selectDrivers = createSelector(
    selectDriversState,
    (driverState) => driverState.drivers
);

export const selectRetrieveDriversState = createSelector(
    selectDriversState,
    (driverState): typeof driverState.retrieveDriversState => driverState.retrieveDriversState
);


