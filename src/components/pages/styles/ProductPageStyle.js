import styled from "styled-components"

export const Wrapper = styled.div`
    position:relative;
    display: flex;
    flex-direction: row;
    padding:0 0 4rem 0;
    @media(max-width:800px){
      flex-direction: column;
    }
`;
export const ImagesContianer =styled.ul`
  display: flex;
  flex-direction: column;
  flex-basis:5%;
  gap:0.3rem;
  list-style: none;
  @media(max-width:800px){
    flex-direction: row;
    gap:5rem;
  }
`;
export const ProductSmallImageConatiner = styled.li`
    width:82.65px;
    padding:0;

`;
export const ProductSmallImage =styled.img`
    width:82.65px;
    object-fit:cover;



`;
export const SelectedImgContainer = styled.div`
    position:relative;
    margin-top: 1rem;
    margin-left:1rem;
    width: 650px;
    height: 590px;
    background-image:${props=>props.background};
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    @media(max-width:800px){
      width: 550px;
      height: 500px;
    }
`;
export const OutOfStock = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;  
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    p{
      font-family: Raleway-Ragular;
      font-weight: 400;
      font-size: 24px;
      color:#8D8F9A;
    }

`; 


