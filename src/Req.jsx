import { useEffect, useState } from 'react' 
import { apiDB } from '.api/api'
import style from './Req.module.css'


export default function Req(){
    const [data, setData] = useState([])
    const [page, setPage] = useState([])
    const [erro, setErro] = useState([])
    const [searchName, setSearchName] = useState("")
    useEffect(() => {
        apiDB.get(`/character/?page=${page}&name=${searchName}`).then((res) =>{
          setData(res.data.results)
        }).catch((erro)=>{
          if(erro.response.status ===400){
              setErro(true)
          }
          console.log(erro)
          
        })
      
      
      }, [page, searchName])
      
      console.log(data)
      return (
          <section className={style.wrapPage}>
              <h1>Dragon Ball API</h1>
              <input type="text" placeholder='Digite um pagina (1/42)' value={page} onChange={(e) => setPage(e.target.value)}/>
              <input type="text" placeholder='Digite um nome' value={searchName} onChange={(e) => setSearchName(e.target.value)} />
              {erro && <p>Pagina não encontrada</p>}
          
              <div className={style.wrapCards}>
              {data.map((item, index)=>{
                  return (
                      <div key={index}>
                         <Card name={item.name} image={item.image}/>
                      </div>
                  )
              })}
              </div>
            
          </section>
      )
}
