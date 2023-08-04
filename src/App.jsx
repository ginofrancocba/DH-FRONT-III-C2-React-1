import React from "react";
import "./styles.css";


const productos = [
  {
    nombre: "Macbook Air 13 Chip M1 256gb",
    imagen: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    precio: "R$ 7999.00",
  },
  {
    nombre: "Echo Dot (4ª Geração)",
    imagen: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    precio: "R$ 379.00",
  },
  {
    nombre: "Câmera Ip Sem Fio 360°",
    imagen: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    precio: "R$ 199.00",
  },
  {
    nombre: "Fechadura Eletrônica Digital Inteligente Zigbee",
    imagen: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    precio: "R$ 1599.00",
  },
];

const Producto = ({ nombre, imagen, precio }) => (
  <div>
    <h3>{nombre}</h3>
    <img src = {imagen} alt = {nombre} style={{ width: '200px' }} />
    <p>{precio}</p>
  </div>
);

function App() {
  return (
    <div>
       <h1>Productos</h1>
      {productos.map((producto, index) => (
        <Producto
          key={index}
          nombre={producto.nombre}
          imagen={producto.imagen}
          precio={producto.precio}/>
      ))}
    </div>
  );
}

export default App;


/*Esta actividad te invita a dar tus primeros pasos en la creación de componentes dinámicos,
 utilizando map() y estilizándolos con CSS.
Lista de productos
En esta actividad práctica, tendrás que clonar el repositorio a través del enlace:
 https://github.com/brunowbbs/mesa5.git
En este proyecto hay un listado de productos implementado de forma estática. 
Debés reimplementarlo dinámicamente, utilizando la función map().
Tendrás que implementar algunos estilos en el diseño utilizando CSS.
El profe te dará más detalles acerca de la presentación de esta actividad en la clase en vivo.
Recordá
En Playground encontrarás información detallada sobre el uso de map() y CSS.
*/

