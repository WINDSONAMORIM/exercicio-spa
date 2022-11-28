import ArticleStyled from "./ArticleStyled";

interface ArticleComponentPropos{
    texto: string;
    img: string,
}

const ArticleComponent:React.FC <ArticleComponentPropos> = ({texto, img} ) =>{
    return(
        <>
          <p>{texto}</p>
          <img src={img}></img>
        </>
    )
}
export {ArticleComponent};