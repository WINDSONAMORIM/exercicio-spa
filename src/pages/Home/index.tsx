import React from 'react';
import { Typography, Box } from "@mui/material";
import {Banner} from "../../components/Banner";
import SectionStyled from "../../components/Section/SectionStyled";
import ArticleStyled from "../../components/Article/ArticleStyled";
import {CardComponent} from "../../components/Card/CardComponent";
import {ArticleComponent} from "../../components/Article/ArticleComponent";
import ComputerIcon from '@mui/icons-material/Computer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AndroidIcon from '@mui/icons-material/Android';
import { Grid } from '@mui/material';

const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

function Home(){
    return (
    <>    
        <Banner size={30}>
            <Typography variant = 'h2'>Minha primeira página com react</Typography>
        </Banner> 
        <SectionStyled>        
            <CardComponent icon={<ComputerIcon />} titulo='Somente para Desktop' texto='Vamos aprender, como utilizar um framewok' />
            <CardComponent icon={<AccessTimeIcon />} titulo='Criado com componentes' texto='utilizamos o StyledComponentes' />
            <CardComponent icon={<AndroidIcon />} titulo='Facil aproveitamento' texto='Estamos no caminho' />          
        </SectionStyled>
        <ArticleStyled>
            <ArticleComponent img ='./assets/images/coding.jpg' texto= {lorem} />                  
        </ArticleStyled>
        <ArticleStyled>
            <ArticleComponent img ='./assets/images/coding.jpg' texto= {lorem}/>        
        </ArticleStyled>
        <ArticleStyled>    
            <ArticleComponent img ='./assets/images/coding.jpg' texto= {lorem}/>  
        </ArticleStyled>    
        <Banner size={20}>
            <Typography variant = 'h2'>Minha primeira página com react</Typography>
        </Banner>
    </> 
    )
}

export default Home;