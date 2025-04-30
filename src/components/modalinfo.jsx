import style from "./ModalInfo.module.css";

const ModalPersonagem = ({ data, close }) => {
  return (
    <div className={style.modalFundo}>
      <div className={style.modalContainer}>
        <button className={style.Button} onClick={close}>
          X
        </button>
        
        <div className={style.modalContent}>
          <div className={style.imageContainer}>
            <img 
              src={data.image} 
              alt={data.name} 
              className={style.modalImage}
              style={{ maxHeight: '200px',objectFit: 'contain'}}

            />
          </div>
          
          <div className={style.infoContainer}>
            <h1 className={style.name}>{data.name}</h1>
            
            <div className={style.info}>
              <span className={style.label}>Ki:</span>
              <span className={style.value}>{data.ki}</span>
            </div>
            
            <div className={style.info}>
              <span className={style.label}>Ki Máximo:</span>
              <span className={style.value}>{data.maxKi}</span>
            </div>
            
            <div className={style.info}>
              <span className={style.label}>Raça:</span>
              <span className={style.value}>{data.race}</span>
            </div>
            
            <div className={style.info}>
              <span className={style.label}>Gênero:</span>
              <span className={style.value}>{data.gender}</span>
            </div>
            
            <div className={style.info}>
              <span className={style.label}>Afiliação:</span>
              <span className={style.value}>{data.affiliation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPersonagem;