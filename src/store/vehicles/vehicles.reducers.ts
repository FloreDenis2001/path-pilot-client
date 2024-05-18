import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../../actionType/LoadingState";
import Vehicle from "../../modules/vehicle/models/Vehicle";

export interface VehicleState {
    vehicles: Vehicle[];
    retriveVehiclesState: LoadingState;
    addVehicleState: LoadingState;
    updateVehicleState: LoadingState;
    deleteVehicleState: LoadingState;
}

export const initialState: VehicleState = {
    vehicles: [],
    retriveVehiclesState: LoadingState.NONE,
    addVehicleState: LoadingState.NONE,
    updateVehicleState: LoadingState.NONE,
    deleteVehicleState: LoadingState.NONE,
};

const vehicleSlice = createSlice({
    name: "vehicles",
    initialState: initialState,
    reducers: {
        loadVehicles(state, action: PayloadAction<Vehicle[]>) {
            state.vehicles = action.payload;
        },

        retriveVehiclesSuccess(state) {
            state.retriveVehiclesState = LoadingState.SUCCES;
        },

        retriveVehiclesLoading(state) {
            state.retriveVehiclesState = LoadingState.LOADING;
        },

        retrieveVehiclesError(state) {
            state.retriveVehiclesState = LoadingState.ERROR;
        },

    },
});

export const {loadVehicles, retrieveVehiclesError, retriveVehiclesLoading, retriveVehiclesSuccess } = vehicleSlice.actions;
export default vehicleSlice;