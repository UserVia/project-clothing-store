import { useState } from 'react';
import '../styles/style-card.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export const Card = ({ item }) => {

    /*Que aparezca el modal */
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /*Agregar producto */
    const [agregar, setAgregar] = useState(false);
    const agregarCantidad = () => {
        setAgregar(true);
    }
    const disminuirCantidad = () => {
        setAgregar(false);
    }


    return (
        <>
            <div className="card d-flex justify-content-center position-relative mb-4">
                <div className="flex-direction-column">
                    <div className="container-img">
                        <img src={item.image} className="card-img" alt={item.image} />
                    </div>
                    <div className="card-body text-center" >
                        <h6 className="card-title">{item.title}</h6>
                        <p className="mb-0 fs-6">Por Tribu Thendy</p>
                        <p className="card-text fs-5"> <b>$ {item.price}</b></p>
                        {
                            agregar ? <button className='btn btn-danger fw-bold fs-6 m-1 '
                                onClick={disminuirCantidad}>Quitar</button> :
                                <button className='btn btn-primary fw-bold fs-6 m-1'
                                    onClick={agregarCantidad}>Añadir</button>
                        }
                    </div>
                </div>
                <Button onClick={handleOpen}>Más información</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="modal-body">
                        <Typography id="modal-modal-title" sx={{ m: 2, textAlign: 'center', fontWeight: 'bold' }}>
                            Information
                        </Typography>
                        <Box className="container-modal-img" sx={{ textAlign: 'center' }}>
                            <img src={item.image} className="card-img-top" alt={item.image} />
                        </Box>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {item.description}
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}
