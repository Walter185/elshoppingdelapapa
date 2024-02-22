import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../firebase/firebase';

export const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = getAllProducts();

    productosRef.onSnapshot((snapshot) => {
      const productosData = snapshot.docs.map((doc) => doc.data());
      setProductos(productosData);
    });
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <img src={producto.imagen} alt={producto.nombre} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;