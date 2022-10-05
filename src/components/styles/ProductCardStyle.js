import styled from "styled-components";

export const CardContainer = styled.div`
        display: flex;
        flex-direction:row;
        padding:0;
`;


export const DefaultAddButton = styled.button`
        position: absolute;
        bottom:4.8rem;
        right: 0.9rem;
        border: none;
        display: none;

`;
export const Card = styled.div`
        position: relative;
        margin-right:1.2rem;
        margin-top:2rem;
        width: 356px;
        height: 414px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 0.5rem solid transparent;
        &:not(${props=>props.nohover}):hover {
        border: 0.5rem solid #ffffff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        &:hover ${DefaultAddButton}{
         display:block;
        }}

`;

export const CardImage = styled.div`
        background-image:${props=>props.backgroundImage};
        position: relative;
        background-repeat:no-repeat;
        width: 326px;
        height: 308px;
        background-size:cover;
        background-position:center center;
        margin:1rem;
`;

export const CardContent = styled.div`
     position:relative;
     margin-top:1.4rem;
     margin-left:1rem;
     text-align: left;
     font-family: Raleway-Ragular;
     font-size: 18px;
     color: #1D1F22;

`;

export const ProductName =styled.p`
      font-weight: 300;
      margin:0;
`;

export const Price = styled.p`
      position:relative;
      font-weight:500;
      margin-top:0.8rem;
      

`;
export const OutOfStock =styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 3;  
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        font-family: Raleway-Ragular;
        font-weight: 400;
        font-size: 24px;
        color:#8D8F9A;

`;
