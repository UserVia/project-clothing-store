import React, { useContext, useState } from 'react'
import { Card } from '../components/Card'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFetch } from '../helper/useFetch';
import { CarritoContext } from '../context/CarritoContext';


export const ComprasPage = () => {

    const [valorSeleccionado, setValorSeleccionado] = useState('');
    const [inputValue, setInputValue] = useState('');

    const { productos } = useFetch('category/' + valorSeleccionado);

    const { agregarCompra, eliminarCantidad } = useContext(CarritoContext);

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }

    const handleEliminar = (id) => {
        eliminarCantidad(id);
    }

    /*Seleccionar categoría */
    const onChangeValue = (e) => {
        setValorSeleccionado(e.target.value);
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
                    <div className="col-md-4 col-sm-7 d-flex align-items-center" >
                        <label>Seleccionar: </label>
                        <Box sx={{ minWidth: 240 }}>
                            <FormControl fullWidth size="small" sx={{ backgroundColor: 'white' }}>
                                <InputLabel id="demo-simple-select-standard-label">Categorias</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={valorSeleccionado}
                                    onChange={onChangeValue}
                                    label="Categorias"
                                >
                                    <MenuItem value={'All'}>All</MenuItem>
                                    <MenuItem value={'electronics'}>electronics</MenuItem>
                                    <MenuItem value={'jewelery'}>jewelery</MenuItem>
                                    <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
                                    <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
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
