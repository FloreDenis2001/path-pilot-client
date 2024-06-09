import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../../actionType/LoadingState";
import Route from "../../modules/route/model/Route";

export interface RouteState{
    routes: Route[];
    retrieveRoutesState: LoadingState;
}

export const initialState: RouteState = {
    routes: [],
    retrieveRoutesState: LoadingState.NONE,
};

const routeSlice = createSlice({
    name: "routes",
    initialState: initialState,
    reducers: {
        loadRoutes(state, action: PayloadAction<Route[]>) {
            state.routes = action.payload;
        },

        retrieveRoutesSuccess(state) {
            state.retrieveRoutesState = LoadingState.SUCCES;
        },

        retrieveRoutesLoading(state) {
            state.retrieveRoutesState = LoadingState.LOADING;
        },

        retrieveRoutesError(state) {
            state.retrieveRoutesState = LoadingState.ERROR;
        }

    },
});


export const { loadRoutes, retrieveRoutesSuccess, retrieveRoutesLoading, retrieveRoutesError } = routeSlice.actions;
export default routeSlice;