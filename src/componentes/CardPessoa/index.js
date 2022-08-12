import './index.scss'

export default function CardPessoa(props){

    return(
        <div className="compCard">
            <h1>{props.secao}</h1>
            <div className={props.estilo}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.</p>
            <img src={props.a} alt='imagem'/>
            </div>
        </div>
        
    )
}