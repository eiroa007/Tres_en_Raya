import './Juego.css';

const Juego = () => {
  return (
    <>
      <div class="contenedor-juego">
        <div class="Juego-titulo">
          <h2>TRES EN RAYA</h2>
        </div>
        <div id="Juego-info" class="Juego-info"></div>
        <div class="Juego-cuadricula">
          <div class="cuadro"></div>
          <div class="cuadro"></div>
          <div class="cuadro"></div>
          <div class="cuadro"></div>
          <div class="cuadro"></div>
          <div class="cuadro"></div>
          <div class="cuadro"></div>
          <div class="cuadro"></div>
          <div class="cuadro"></div>
        </div>
      </div>

      <div id="juego-botton" class="juego-botton">
        Volver a jugar
      </div>
      <div>
        const cuadro_btn = document.querySelectorAll(".cuadro"); const info =
        document.getElementById("Juego-info"); const juego_btn =
        document.getElementById("juego-boton"); var i = 1; const jBtn_e =
        "pointer-events:initial;opacity:initial;",
      </div>
    </>
  );
};

export default Juego;
