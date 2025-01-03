import React, { useState } from "react";

const PreguntaNovio = () => {
  // Dimensiones y márgenes
  const alturaVentana = 300;
  const anchoVentana = 400;
  const margenInferior = 100;
  const margenLateral = 120;
  const movimientoMinimo = 50;

  // Posiciones de los botones
  const [posicionNo, setPosicionNo] = useState({ top: 100, left: 50 });
  const [posicionSi, setPosicionSi] = useState({ top: 100, left: 200 });

  const moverBotonSi = () => {
    let nuevoTop = posicionSi.top;
    let nuevoLeft = posicionSi.left;

    while (
      Math.abs(nuevoTop - posicionSi.top) < movimientoMinimo ||
      Math.abs(nuevoLeft - posicionSi.left) < movimientoMinimo
    ) {
      nuevoTop = Math.floor(Math.random() * (alturaVentana - margenInferior));
      nuevoLeft = Math.floor(Math.random() * (anchoVentana - margenLateral));
    }

    setPosicionSi({ top: nuevoTop, left: nuevoLeft });
  };

  const mostrarRespuesta = () => {
    alert("¡Sabía que dirías que NO! 🤣😂");
  };

  return (
    <div
      style={{
        width: `${anchoVentana}px`,
        height: `${alturaVentana}px`,
        position: "relative",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f0f8ff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px", textAlign: "center", marginTop: "-250px"}}>
        ¿Quieres ser mi novio?😁
      </h1>
      <div
        style={{
          position: "absolute",
          top: `${posicionNo.top}px`,
          left: `${posicionNo.left}px`,
        }}
      >
        <button
          onClick={mostrarRespuesta}
          style={{
            width: "100px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
        >
          No 🤢
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: `${posicionSi.top}px`,
          left: `${posicionSi.left}px`,
        }}
      >
        <button
          onMouseEnter={moverBotonSi}
          style={{
            width: "100px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
        >
          Sí 😍
        </button>
      </div>
    </div>
  );
};

export default PreguntaNovio;