import { Menu } from "./components/menu"
import imagem from "./assets/images/imagem.jpg"
//  import { cards } from "./assets/"
// import { useState } from 'react'
import './App.css'


function App() {
  

  return (
    <>
   <Menu option01= 'sessão 01' option02='sessão 02'></Menu>
    <div className="">
      <img src={imagem} alt="imagem"  width={200} height={"auto"}/>
      <br />
      <button></button>
      <button></button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Excepturi at mollitia quod, consequuntur perferendis aperiam quas optio minus? 
        Aspernatur unde voluptatem rem! Fugit ea itaque omnis ab sapiente, magni quibusdam.</p>
    </div>
    </>
  )
}

export default App
