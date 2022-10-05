import styled from "styled-components";

export const ImageSliderContainer = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:900px){
        width: 100px;
    }
    
`;
export const ArrowContainer = styled.div`
    position: absolute;
    z-index: 2;
    width: 24px;
    height: 24px;
    background-color: rgba(0, 0, 0, 0.73);
    bottom:1.3rem;
    right: ${props=>props.backArrow? '3.2rem':'1.4rem'};
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    @media(max-width:900px){
        width: 16px;
        height: 16px;
       }
`;

export const Arrow = styled.button`
    position: relative;
    width: 0; 
    height: 0; 
    border-left:none;
    display: inline-block;
    padding: 2.5px;
    border: solid #ffffff;
    border-width : 0 2.5px 2.5px 0;
    transform: ${props => props.backArrow ? 'rotate(135deg)':'rotate(-45deg)'};
    -webkit-transform: ${props => props.backArrow ? 'rotate(135deg)':'rotate(-45deg)'};
    @media(max-width:900px){
        padding: 1.5px;
        border-width : 0 1.5px 1.5px 0;
       }

`;

export const CartImage = styled.img`
        width: 200px; 
        object-fit: cover;
       @media(max-width:900px){
        width: 110px; 
       }
`;

