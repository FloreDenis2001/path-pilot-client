import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../../actionType/LoadingState";
import Driver from "../../modules/driver/models/Driver";

export interface DriverState {
    drivers: Driver[];
    retrieveDriversState: LoadingState;
    addDriverState: LoadingState;
    updateDriverState: LoadingState;
    deleteDriverState: LoadingState;
}

export const initialState: DriverState = {
    drivers: [],
    retrieveDriversState: LoadingState.NONE,
    addDriverState: LoadingState.NONE,
    updateDriverState: LoadingState.NONE,
    deleteDriverState: LoadingState.NONE,
};

const driverSlice = createSlice({
    name: "drivers",
    initialState: initialState,
    reducers: {
        loadDrivers(state, action: PayloadAction<Driver[]>) {
            state.drivers = action.payload;
        },

        retrieveDriversSuccess(state) {
            state.retrieveDriversState = LoadingState.SUCCES
        },

        retrieveDriversLoading(state) {
            state.retrieveDriversState = LoadingState.LOADING;
        },

        retrieveDriversError(state) {
            state.retrieveDriversState = LoadingState.ERROR;
        },
    },
});

export const { loadDrivers, retrieveDriversError, retrieveDriversLoading, retrieveDriversSuccess } = driverSlice.actions;
export default driverSlice;
