import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../../actionType/LoadingState";
import Package from "../../modules/package/model/Package";

export interface PackageState {
    packages: Package[];
    retrievePackagesState: LoadingState;
    addPackageState: LoadingState;
    updatePackageState: LoadingState;
    deletePackageState: LoadingState;
}

export const initialState: PackageState = {
    packages: [],
    retrievePackagesState: LoadingState.NONE,
    addPackageState: LoadingState.NONE,
    updatePackageState: LoadingState.NONE,
    deletePackageState: LoadingState.NONE,
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
        },

        addPackage(state, action: PayloadAction<Package>) {
            state.packages.push(action.payload);
        },

        updatePackage(state, action: PayloadAction<Package>) {
            const updatedPackage = action.payload;
            state.packages = state.packages.map(pkg =>
                pkg.awb === updatedPackage.awb ? updatedPackage : pkg
            );
        },

        deletePackage(state, action: PayloadAction<string>) {
            const packageAWB = action.payload;
            state.packages = state.packages.filter(pkg => pkg.awb !== packageAWB);
        },

        addPackageSuccess(state) {
            state.addPackageState = LoadingState.SUCCES;
        },

        addPackageLoading(state) {
            state.addPackageState = LoadingState.LOADING;
        },

        addPackageError(state) {
            state.addPackageState = LoadingState.ERROR;
        },

        updatePackageSuccess(state) {
            state.updatePackageState = LoadingState.SUCCES;
        },

        updatePackageLoading(state) {
            state.updatePackageState = LoadingState.LOADING;
        },

        updatePackageError(state) {
            state.updatePackageState = LoadingState.ERROR;
        },

        deletePackageSuccess(state) {
            state.deletePackageState = LoadingState.SUCCES;
        },

        deletePackageLoading(state) {
            state.deletePackageState = LoadingState.LOADING;
        },

        deletePackageError(state) {
            state.deletePackageState = LoadingState.ERROR;
        },
    },
});

export const { loadPackages, retrievePackagesSuccess, retrievePackagesLoading, retrievePackagesError, addPackage, addPackageSuccess, addPackageLoading, addPackageError, updatePackage, updatePackageSuccess, updatePackageLoading, updatePackageError, deletePackage, deletePackageSuccess, deletePackageLoading, deletePackageError } = packageSlice.actions;
export default packageSlice;
