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

export const selectAddPackageState = createSelector(
    selectPackagesState,
    (packageState) => packageState.addPackageState
);

export const selectUpdatePackageState = createSelector(
    selectPackagesState,
    (packageState) => packageState.updatePackageState
);

export const selectDeletePackageState = createSelector(
    selectPackagesState,
    (packageState) => packageState.deletePackageState
);


