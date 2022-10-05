import styled from "styled-components";

export const MiniCartContainer = styled.ul`
position:relative;
display: flex;
flex-direction:column;
padding: 0;
font-size: 1rem;
list-style: none;
font-family: Raleway-Ragular;
gap:2rem;
color:#1D1F22;

    
    
`;

export const MiniCartProduct=styled.div`
    display: flex;
    flex-direction:row;
    position: relative;
    gap:1rem;
    padding: 0;

`;
export const ProductDetails = styled.div`
    padding:0;
    flex-basis:50%;
    margin-top:0.8rem;

 `;

export const ProductName = styled.span`
    font-weight: 300;
    font-size: 16px;
    font-family: Raleway-Ragular;
    margin-bottom:0.8rem;
    color:#1D1F22;
`;
export const MiniCartAttributeName = styled.span`
    font-family: Raleway-Ragular;
    font-size: 14px;
    font-weight: 400;
    text-align: left;

`;

export const CounterImageContainer =styled.div`
    display:flex;
    flex-direction:row;
    justify-content: start;
    gap:0.2rem;
    flex-basis:50%;
`;


export const MiniCartImgsContainer= styled.div`
    width:6rem;   
    display:flex;
    flex-direction:row;
    justify-contant:center;
    align-items:center;

`;

export const ProductImage = styled.img`
    width: 6rem;
    object-fit:cover;
`;
