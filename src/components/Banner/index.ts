import styled from 'styled-components'

interface BannerProps{
    size: number
}

const Banner = styled.section<BannerProps>`
   display: flex;
   align-items: center;
   justify-content: center; 
   width: 100%;
   height: ${(props)=>props.size}vh;
   background-image: url(./assets/images/ocean.jpg);
   background-size: cover;
   background-position: center;

   & > h2 {
    font-size: 4rem;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
   }   
`;

export {Banner};