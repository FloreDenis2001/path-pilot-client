import { createSelector } from "@reduxjs/toolkit";
import { RouteState } from "./routes.reducers";

interface RootState {
    routeState: RouteState;
}



export const selectRoutesState = (state: RootState) => state.routeState;

export const selectRoutes = createSelector(
    selectRoutesState,
    (routeState) => routeState.routes
);

export const selectRetrieveRoutesState = createSelector(
    selectRoutesState,
    (routeState): typeof routeState.retrieveRoutesState => routeState.retrieveRoutesState
);