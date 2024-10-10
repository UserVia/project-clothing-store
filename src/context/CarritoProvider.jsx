import React, { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'
import { todoReducer } from '../helper/todoReducer'

const initialState=[]
export const CarritoProvider = ({ children }) => {
    const [listaCompras, dispatch] = useReducer(todoReducer, initialState);

    const agregarCompra = (compra) => {
        compra.cantidad = 1;
        console.log(compra)
        dispatch({
            type:'Agregar Compra',
            payload:compra
        })
    }

    const disminuirCantidad = (id) => {
        dispatch({
            type:'Disminuir Cantidad',
            payload:id
        })
    }

    const aumentarCantidad = (id) => {
        dispatch({
            type:'Aumentar Cantidad',
            payload:id
        })
    }

    const eliminarCompra = (id) => {
        dispatch({
            type:'Eliminar Compra',
            payload:id
        })
    }

    return (
        <CarritoContext.Provider value={{listaCompras,agregarCompra,disminuirCantidad,aumentarCantidad,eliminarCompra}}>
            {children}
        </CarritoContext.Provider>
    )
}
