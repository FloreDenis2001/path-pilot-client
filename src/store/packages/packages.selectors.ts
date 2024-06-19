import { createSelector } from "@reduxjs/toolkit";
import { PackageState } from "./packages.reducers"; 

interface RootState {
    packageState: PackageState; 
}

export const selectPackagesState = (state: RootState) => state.packageState;

export const selectPackages = createSelector(
    selectPackagesState,
    (packageState) => packageState.packages
);

export const selectRetrievePackagesState = createSelector(
    selectPackagesState,
    (packageState): typeof packageState.retrievePackagesState => packageState.retrievePackagesState
);


