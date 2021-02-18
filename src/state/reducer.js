export const initialState = {
    reload: null,
}
const reducer = (state, action) => {
    switch (action.type) {
        case "RELOAD":
            return {
                ...state,
                reload: action.value
            }
            default:
                return state;
    }
}
export default reducer;