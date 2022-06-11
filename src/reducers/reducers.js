const initialData = {
    list:[]
}
const reducers = (state=initialData, action) => {
    switch(action.type) {
        case "ADD":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {   id, data
                }]
            }
            case "DELETEITEM":
            const rest =   state.list.filter(elem=>elem.id !== action.id)
                return {
                    ...state,
                    list:rest
                }
        default:return state
    }
}
export default reducers