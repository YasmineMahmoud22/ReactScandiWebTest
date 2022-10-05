import styled from "styled-components";

export const TotalContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top:2rem;
    gap:0.5rem;
    font-family:Raleway-Ragular;

    
 
`;
export const TotalValue = styled.div`
    font-family:${props=>props.miniCart?'Roboto-Regular':'Raleway-Ragular'} ;
    position:relative;
    font-size: ${props=>props.miniCart?'16px':'24px'};
    font-weight: 500;
    text-align: left;
    margin-top:${props=>props.miniCart?'2rem':'0'};
    color:#1D1F22;
    
    ${props=>props.miniCart?
          `  span{
                font-family: Raleway-Ragular;
                font-weight: 700;
                position:absolute;
                right:1.9rem;
            }`
        :
         `span{
            font-family: Raleway-Ragular;

            font-weight: 700;
         }`
    }

`;
export const Quantity = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: #1D1F22;
    span{
        font-weight: 700;
    }
    `;

export const OrderButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 279px;
    height: 43px;
    border :none;
    background: #5ECE7B;
    font-weight: 600;
    font-size: 14px;
    color:#ffffff;
    margin-bottom:3rem;
`;
export const Tax = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: #1D1F22;
    span{
        font-weight: 700;
        font-size: 24px;
    }

`;