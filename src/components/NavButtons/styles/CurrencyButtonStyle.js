import styled from "styled-components";


export const CurrenciesContainer = styled.div`
    min-width: 4rem;
    min-height: 4rem;
    position: relative;
    text-align: center;
    cursor:pointer;
    
`;
export const ShowCurrenciesList =styled.div`
    padding: 0;
    text-align: center;
    font-family: Raleway-Ragular;
    font-weight: 500;
    font-size: 18px;
    margin-top:0.4rem;

    ::after{
        content: "";
        position: absolute;
        right: 0.3rem;
        top: ${props => props.Active?'0.6rem':'0.5rem'};
        border: solid #1D1F22;
        display: inline-block;
        padding: 2px;
        border-width : 0 2px 2px 0;
        transform: ${props => props.Active ? 'rotate(-135deg)':'rotate(45deg)'};
       -webkit-transform: ${props => props.Active ? 'rotate(-135deg)':'rotate(45deg)'};
    }
    
`;
export const CurrenciesList = styled.ul`
        position: absolute;
        top:2.5rem;
        z-index:4;
        padding: 0;
        width: 114px;
        height: 170px;
        list-style: none;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 12px 25px;
        overflow-y: scroll;
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        ::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
          }
      
` ;

export const CurrencyOption = styled.li`
    width: 114px;
    height: 45px;
    background: #ffffff;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: Raleway-Ragular;
    font-weight: 500;
    font-size: 18px;
    color: #1D1F22;
    :hover{
        background-color: #EEEEEE;
      }

`;