import style from './Card.module.css'

export const Card =  ({name, image, ki, maxki, race, gender, affiliation}) => {
    return(
        <>
            <div className={style.cardsEstilo}>
                <div className={style.imgApi}>
                <img src={image} alt={name} className={style.imgCard}/>
                </div>
                <div className={style.infoApi}>
                <h1 className={style.title}>{name}</h1>

                <h2 className={style.titleDesc}>KI</h2>
                <p className={style.desc}>{ki}</p>

                <h2 className={style.titleDesc}>KI Máximo</h2>
                <p className={style.desc}>{maxki}</p>

                <h2 className={style.titleDesc}>Raça</h2>
                <p className={style.desc}>{race}</p>

                <h2 className={style.titleDesc}>Genêro</h2>
                <p className={style.desc}>{gender}</p>
                
                <h2 className={style.titleDesc}>Afliliação</h2>
                <p className={style.desc}>{affiliation}</p>
                </div>
            </div>
        </>
    )
}