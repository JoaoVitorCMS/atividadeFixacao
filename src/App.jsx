import { Menu } from "./components/menu"
import imagem from "./assets/images/imagem.jpg"
import style from "./App.module.css"
import { useState } from 'react'


function App() {
  const [botaoVideo, setBotaoVideo] = useState(false) 
  const [botao, setBotao] = useState(false)

  return (
    <>
   <Menu option01= 'Início' option02='ApiPersonagens'></Menu>
   <section>
    <div className={style.Inicio}>
      <img src={imagem} alt="imagem"  width={350} height={"auto"}/>
      <br />
      <div className={style.wrapInfo}>
      <p className={style.textoDB}>
      Em Dragon Ball, Goku alcançou o divino Instinto Superior, técnica de luta instintiva com estágios crescentes de poder. 
      Vegeta, impulsionado por seu orgulho, despertou o destrutivo Ego Superior. 
      Outros guerreiros também possuem formas poderosas: Piccolo obteve força através de assimilações; 
      o lendário Saiyajin Broly possui poder bruto inigualável; 
      e Gohan desbloqueou seu potencial máximo como "Ultimate". 
      Cada uma dessas transformações representa a busca dos Guerreiros Z por superar seus limites para proteger o universo.
      </p>
        <button className={style.btP} onClick={ () =>{setBotao(true)}}>Quero ver o video</button>
      </div>
    </div>
    <div className={style.botaoVideo}>
    {botao && <button className={style.btVideo} onClick={ () => {setBotaoVideo(true); }}>Quero ver!!!</button>}
    {botaoVideo && <iframe width="340" height="400" src="https://www.youtube.com/embed/XwzvG_47UA8?si=0rxU0Zz9WBxcIhd_" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
    </div>
    </section>
    </>
  )
}

export default App
