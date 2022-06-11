export const add = (data) => {
    return {
        type: "ADD",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteitem = (id) => {
    return {
        type: "DELETEITEM",
        id
    }
}
export const edit = () => {
    return {
        type:"EDIT"
    }
}