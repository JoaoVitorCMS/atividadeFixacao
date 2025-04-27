import { useEffect, useState } from 'react';
import { apiDB } from './api/api';
import style from './Req.module.css';
import { Card } from './components/Card';
import { Menu } from './components/menu';
import dragonBallSuperZImage from './assets/images/dragonballsuperz.png'; 

export default function Req() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState('');
  const [erro, setErro] = useState(false);

  useEffect(() => {
    apiDB.get(`/characters?page=${page}`)
      .then((res) => {
        setData(res.data.items);
        console.log(res.data.items);
      })
      .catch((error) => {
        if (error.respose && error.response.status === 404) {
          setErro(true);
        }
        console.log(error);
      });
  }, [page]);

  return (
    <>
      <Menu option01="Voltar" />

      <section className={style.wrapPage}>
        <div className={style.apiTitleSection}> 
          <img
            src={dragonBallSuperZImage}
            alt="Dragon Ball Super Z"
            className={style.dragonBallSuperZLogo}
          />
          <h1 className={style.apiMainTitle}>Dragon Ball Super Z API</h1>
        </div>

        <div className={style.containerInput}>
          <input
            type="text"
            placeholder="Digite uma pagina entre 1 a 6"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
          {erro && <p>Página não existe</p>}
        </div>

        <div className={style.wrapCards}>
          {data.map((item, index) => (
            <div key={index}>
              <Card
                name={item.name}
                image={item.image}
                ki={item.ki}
                maxKi={item.maxKi}
                race={item.race}
                gender={item.gender}
                affiliation={item.affiliation}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}