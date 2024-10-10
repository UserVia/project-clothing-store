import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoCompras = () => {
  const { listaCompras, disminuirCantidad, aumentarCantidad, eliminarCompra} = useContext(CarritoContext)
  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
  }
  const imprimir = () => {
    print()
  }
  return (
    <>
      <div className="container mt-4">
        <h2>Lista de compras</h2>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Opción</th>
            </tr>
          </thead>
          <tbody>
            {listaCompras.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-outline-primary" onClick={() => aumentarCantidad(item.id)}>+</button>
                  <button className="btn btn-primary">{item.cantidad}</button>
                  <button className="btn btn-outline-primary" onClick={() => disminuirCantidad(item.id)}>-</button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() => eliminarCompra(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <p>Total:</p>
                <span>{`$ ${calcularTotal()}`}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <hr></hr>
        <div className='d-grid gap-2'>
          <button className='btn btn-success'
            onClick={imprimir}
            disabled={listaCompras < 1}
          >Comprar</button>
        </div>
      </div>
    </>
  )
}
