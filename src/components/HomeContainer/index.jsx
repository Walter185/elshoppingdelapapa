import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../firebase/firebase';


export default function HomeContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProductos = async () => {
        const productsData = await getAllProducts(); // Utilizar la función getAllProducts
        setProducts(productsData);
      };
  
      fetchProductos();
    }, []);
  
    return (
      <div>
        <h1>Productos</h1>
        <ul>
          {products.map((producto) => (
            <li key={producto.id}>
              <h2>{producto.title}</h2>
              <p>{producto.description}</p>
              <img src={producto.img1} alt={producto.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
