import React, { useContext, useState } from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../helper/useFetch';
import { CarritoContext } from '../context/CarritoContext';


export const ComprasPage = () => {
    const [inputValue, setInputValue] = useState('');

    const { productos } = useFetch('');

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }

    const handleEliminar = (id) => {
        eliminarCompra(id);
    }

    //Filtro de búsqueda
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    }
    let result = !inputValue ? productos : productos.filter((datos) => datos.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))

    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row d-flex mb-4 align-items-center justify-content-center">
                    <div className="col-md-4 col-sm-7 d-flex">
                        <input type="search" value={inputValue} onChange={onChangeInput} className="form-control shadow-none" placeholder="Buscar por nombre de la prenda" aria-label="Recipient's username" aria-describedby="button-addon2" />

                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-evenly">
                    {
                        result.map(item => (
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
