import styled from "styled-components";

export const Container = styled.div`
   position:relative;
   margin-left:3.8rem;


`;

export const HeadLine = styled.h1`
    font-family: Raleway-Ragular;
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    margin-bottom:4rem;

`;
export const CartList = styled.ul`
    display: flex;
    flex-direction:column;
    padding: 0;
    font-size: 1rem;
    list-style: none;

`;
export const Hr = styled.hr`
    margin-right:6.5rem;
    height:1px;
    border:none;
    background-color:#E5E5E5;
    @media(max-width:900px){
        margin-right:2rem;


       }
`;

export const CartProductContainer = styled.div`
    display: flex;
    flex-direction: row; 
    margin-right:6.5rem;
    gap:1rem;
    @media(max-width:900px){
        margin-right:2rem;
       }
`;
export const CartProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 80%;
    @media(max-width:900px){
        gap:0.2rem;
    }
   

`;

export const AttributeTitle = styled.div`
    font-family: RobotoCondensed;
    font-weight: 700;
    font-size: 18px;
    margin-bottom:0.1rem;
    padding:0;
    color:#1D1F22;
`;

export const CounterImageContainer =styled.div`
    display:flex;
    flex-direction:row;
    justify-content: start;
    gap:1rem;
    flex-basis:20%;
    margin:1.4rem 0 1.4rem 0;
    @media(max-width:900px){
        gap:0.2rem;
    }
    
  

`;