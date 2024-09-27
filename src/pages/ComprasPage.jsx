import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hook/useFetch';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const ComprasPage = () => {

    const [valorSeleccionado, setValorSeleccionado] = useState('');
    const [inputValue, setInputValue] = useState('');

    /* const categories = [
         "electronics",
         "jewelery",
         "men's clothing",
         "women's clothing"
     ];*/

    const onChangeValue = (e) => {
        setValorSeleccionado(e.target.value);
    }
    const { productos } = useFetch('category/' + valorSeleccionado);

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    let result = !inputValue ? productos : productos.filter((datos) => datos.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))
    /* if (!inputValue) {
         result=productos
     }
     else{
         result=productos.filter((datos)=>datos.title.toLowerCase().includes(inputValue.toLocaleLowerCase()));
     }*/

    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row d-flex mb-4 align-items-center justify-content-center">
                    <div className="col-md-4 col-sm-7 d-flex ">
                        <input type="search" value={inputValue} onChange={onChangeInput} className="form-control" placeholder="Buscar por nombre de la prenda" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                    <div className="col-md-4 col-sm-7 d-flex align-items-center" >
                        <label>Seleccionar: </label>
                        {/*   <select className="form-select form-select-lg mb-3" aria-label="Large select example" onChange={onChangeValue} defaultValue={valorSeleccionado}>
                            <option defaultValue="All">All</option>
                            <option defaultValue="electronics">electronics</option>
                            <option defaultValue="jewelery">jewelery</option>
                            <option defaultValue="men's clothing">men's clothing</option>
                            <option defaultValue="women's clothing">women's clothing</option>

                        </select> */}
                        <Box sx={{ minWidth: 240}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" >Categories</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={valorSeleccionado}
                                    label="Categories"
                                    onChange={onChangeValue}
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
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
