import styled from "styled-components";

export const AttributesContainer = styled.ul`
    display: flex;
    flex-direction: row;
    margin:${props=>props.cart?"0 0 1rem 0":"auto"} ;
    padding:0;
    list-style: none;
`;
export const ColoredBoxContainer = styled.div`
    position:relative;
    border:${props=> props.activeColoredBox ? '1px solid #5ECE7B':'1px solid transparent'};
    width: ${props=>props.cart?'34px':'18px'};
    height: ${props=>props.cart?'34px':'18px'};
    margin-right: ${props=>props.cart?'0.2rem': '0.1rem'};
    margin-top:${props=>props.cart?'null':'0.5rem'};
    margin-bottom:${props=>props.cart?'null':'0.8rem'};
    
`;

export const ColoredBox= styled.div`
    width:${props=>props.cart? '32px':'16px'};
    height:${props=>props.cart?'32px': '16px'};
    position: absolute;
    left: 1px;
    top: 1px;
    border:0.01rem solid #cccaca;
    box-sizing: border-box;
    background-color : ${props=> props.background}

`;
export const AttributeBox = styled.div`
    margin-top:${props=>props.cart? '0':'0.5rem'};
    position: relative;
    width: ${props=>props.cart? '63px':'32px'};
    height:${props=>props.cart? '45px':'32px'};
    border:0.02rem solid #1D1F22;
    margin-right: ${props=>props.cart?' 0.6rem':'.4rem'};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.activeBox? '#1D1F22':'transparent'}; 
    color: ${props=>props.activeBox? '#ffffff' : ' #1D1F22'};
    font-family: SourceSansPro;
    font-weight: 400;
    font-size: ${props=>props.cart? '16px':'12px'};
    margin-bottom:${props=>props.cart? '0':'0.8rem'};
    @media(max-width:900px){
        gap:0.2rem;
        width: ${props=>props.cart? '43px':'32px'};
        height:${props=>props.cart? '25px':'32px'};
    }

`;
