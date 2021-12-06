import { USER_FILTER_SET_NAME_FILTER } from "../actions_type";

export function filterReducer (initialState, action) {
    switch (action.type) {
        case USER_FILTER_SET_NAME_FILTER: {
            return {
                ...initialState
            }
        }
    }
}