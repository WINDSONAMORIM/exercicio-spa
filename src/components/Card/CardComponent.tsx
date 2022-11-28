import CardStyled from "./CardStyled";

interface CardComponentPropos{
    titulo: string;
    texto: string;
    icon: React.ReactNode,
}

const CardComponent:React.FC <CardComponentPropos> = ({titulo, texto, icon} ) =>{
    return(
        <CardStyled>
            <span>{icon}</span>
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </CardStyled>
    )
}

export {CardComponent};