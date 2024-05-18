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

export const selectAddDriverState = createSelector(
    selectDriversState,
    (driverState) => driverState.addDriverState
);

export const selectUpdateDriverState = createSelector(
    selectDriversState,
    (driverState) => driverState.updateDriverState
);

export const selectDeleteDriverState = createSelector(
    selectDriversState,
    (driverState) => driverState.deleteDriverState
);
