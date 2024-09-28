
export const todoReducer = (initialState = [], action={}) => {
    switch (action.type) {
        case 'Agregar Compra':
            return [...initialState, action.payload]
        case 'Aumentar Cantidad':
            return initialState.map(item => {
                const cant = item.cantidad + 1;
                if (item.id == action.payload) {
                    return { ...item, cantidad: cant }
                }
                return item
            })
        case 'Disminuir Cantidad':
            return initialState.map(item => {
                const cant = item.cantidad - 1;
                if (item.id == action.payload && item.cantidad > 1) {
                    return { ...item, cantidad: cant }
                }
                return item
            })
        case 'Eliminar Cantidad':
            return initialState.filter(compra => compra.id !== action.payload)
        default:
            return initialState
    }
}
