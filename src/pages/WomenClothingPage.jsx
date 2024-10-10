import React, { useContext } from 'react'
import { useFetch } from '../helper/useFetch';
import { Card } from '../components/Card';
import { CarritoContext } from '../context/CarritoContext';

export const WomenClothingPage = () => {
    const { productos } = useFetch("/category/women's clothing");

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }

    const handleEliminar = (id) => {
        eliminarCompra(id);
    }
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row d-flex align-items-center justify-content-evenly">
                    {
                        productos.map(item => (
                            <Card
                                key={item.id}
                                item={item}
                                handleAgregar={() => handleAgregar(item)}
                                handleEliminar={() => () => handleEliminar(item.id)} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
