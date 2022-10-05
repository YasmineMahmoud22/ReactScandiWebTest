import styled from "styled-components";

export const CounterButtons = styled.ul`
    display: flex;
    flex-direction: column;
    postion:relative;
    margin-right:0.5rem;
    padding:0;
   
    li{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        flex-basis:33.3%;

    };
    li:first-child{
        justify-content: start;


    }
   
    li:last-child{
        justify-content: end;

      }
    button{
        height: ${props=>props.miniCart?'24px':'45px'};
        width: ${props=>props.miniCart?'24px':'45px'};
        border: 0.02rem solid #1D1F22;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        font-size:${props=>props.miniCart?'1.2rem':'1.5rem'};
        color:#1D1F22;
        @media(max-width:900px){
            height: ${props=>props.miniCart?'24px':'20px'};
            width: ${props=>props.miniCart?'24px':'20px'};
           }
    
    @media(max-width:900px){
        margin-right:0;
    }
    }
`;
