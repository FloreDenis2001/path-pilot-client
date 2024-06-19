import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../../actionType/LoadingState";
import Package from "../../modules/package/model/Package";

export interface PackageState {
    packages: Package[];
    retrievePackagesState: LoadingState;
}

export const initialState: PackageState = {
    packages: [],
    retrievePackagesState: LoadingState.NONE,
};

const packageSlice = createSlice({
    name: "packages",
    initialState: initialState,
    reducers: {
        loadPackages(state, action: PayloadAction<Package[]>) {
            state.packages = action.payload;
        },

        retrievePackagesSuccess(state) {
            state.retrievePackagesState = LoadingState.SUCCES;
        },

        retrievePackagesLoading(state) {
            state.retrievePackagesState = LoadingState.LOADING;
        },

        retrievePackagesError(state) {
            state.retrievePackagesState = LoadingState.ERROR;
        }

    
    },
});

export const { loadPackages, retrievePackagesSuccess, retrievePackagesLoading, retrievePackagesError } = packageSlice.actions;
export default packageSlice;
