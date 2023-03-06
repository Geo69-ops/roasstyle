import "./App.css";
import React from "react";
import { Header } from "./Componentes/Header";
// import "boxicons";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Back } from "./Componentes/Back.js";
import { Footer } from "./Componentes/Footer";

function App() {
  return (
    // <DataProvider>
    <div className="App">
      <Header />
      <Back />
      <Footer/>

      {/* <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Productos" element={<ListaProductos />} />
            <Route path="/Productos/${id}" element={<ProductoDetalles />} />
            <Route path="/Ventas" element={<ListaVentas />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/AddProducts" element={<Formulario />} />
          </Routes> */}
      {/* </Router> */}
    </div>
    // </DataProvider>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;
