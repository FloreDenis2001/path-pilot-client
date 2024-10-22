import { createSelector } from "@reduxjs/toolkit";
import { VehicleState } from "./vehicles.reducers";

interface RootState {
    vehicleState: VehicleState;
}


export const selectVehiclesState = (state: RootState) => state.vehicleState;

export const selectVehicles = createSelector(
    selectVehiclesState,
    (vehicleState) => vehicleState.vehicles
);


export const selectRetrieveVehiclesState = createSelector(
    selectVehiclesState,
    (vehicleState) : typeof vehicleState.retriveVehiclesState => vehicleState.retriveVehiclesState
);




