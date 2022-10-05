import styled from "styled-components";

export const MiniCartOverLay = styled.div`
    width: 325px;
    height: 80%;
    position: absolute;
    z-index: 4;
    right: 3rem;
    top:6rem;
    background-color: #ffffff;
    color: #1D1F22;
    padding-left: 1rem;
    padding-top: 1rem;
    overflow-y: scroll;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }
`;

export const HeadLine = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Raleway-Ragular;
    color:#1D1F22;

`;

export const Span = styled.span`
   font-weight: 500;


`;

export const MiniCartButtons = styled.div`
    display: block;
    padding-bottom: 3rem;
`;

export const MiniCartButton = styled.button`
    width: 140px;
    height: 43px;
    margin-left:${props=>props.CheckOut?'1rem':'0'};
    margin-top:1rem;
    text-align:center;
    border:${props=>props.CheckOut?'none':'0.02rem solid #1D1F22'};
    background-color:${props=>props.CheckOut?'#5ECE7B':'none'};
    color:${props=>props.CheckOut?'#ffffff':'#1D1F22'};
    font-family:Raleway-Ragular;
    font-weight: 600;
    font-size: 14px;
    box-sizing: border-box;
    cursor:pointer;
    
`;