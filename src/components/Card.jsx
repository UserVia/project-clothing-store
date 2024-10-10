import { useState } from 'react';
import '../styles/style-card.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export const Card = ({ item, handleAgregar, handleEliminar }) => {

    /*Que aparezca el modal */
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /*Agregar producto */
    const [agregar, setAgregar] = useState(false);
    const agregarCantidad = () => {
        handleAgregar()
        setAgregar(true);
    }
    const disminuirCantidad = () => {
        handleEliminar();
        console.log(item.id)
        setAgregar(false);
    }

    return (
        <>
            <div className="card d-flex justify-content-center position-relative mb-4">
                <div className="d-flex flex-column align-items-center">
                    <div className="container-img">
                        <img src={item.image} className="card-img" alt={item.image} />
                    </div>
                    <div className="card-body text-center" >
                        <h6 className="card-title">{item.title}</h6>
                        <p className="mb-0 fs-6">Por Tribu Thendy</p>
                        <p className="card-text fs-5"> <b>$ {item.price}</b></p>
                        {
                            agregar ? <button type="button" className='btn btn-danger fs-6 m-1'
                                onClick={disminuirCantidad}>QUITAR</button>
                                : <button type="button" className='btn btn-primary fs-6 m-1'
                                    onClick={agregarCantidad}><i class="bi bi-cart2"></i> AÑADIR</button>
                        }
                        <Button onClick={handleOpen} sx={{ backgroundColor: '#3c3c3c', color: 'white', outlineColor: 'blue' }}>Información</Button>
                    </div>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box className="modal-body">
                        <Typography id="modal-modal-title" sx={{ m: 2, textAlign: 'center', fontWeight: 'bold' }}>
                            {item.title}
                        </Typography>
                        <Box className="container-modal-img" sx={{ textAlign: 'center' }}>
                            <img src={item.image} className="card-img-top" alt={item.image} />
                        </Box>
                        <Typography id="modal-modal-description" sx={{ mt: 2, fontSize:'14px' }}>
                            {item.description}
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}
