import styled from 'styled-components';
export const ProductName = styled.span`
    font-family:Raleway-Ragular;
    font-weight: 600;
    font-size: 30px;
    color: #1D1F22;
    @media(max-width:1100px){
        font-size: 22px;
  }

`;
export const ProductDetailsColumn = styled.div`
    position: relative;
    flex-basis:20%;
    margin-left:3rem;
    @media(max-width:900px){
        margin-left:2rem;
        margin-top:2rem;
  }
 
`;
export const ProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    flex-wrap:wrap;

`;
export const TotalPrice = styled.span`
    font-family: RobotoCondensed;
    font-size:18px;
    font-weight: 700;
    color: #1D1F22;
    margin-top:3.8rem;
    @media(max-width:1100){
        font-size: 14px;
  }

`;

export const AddPoductButton = styled.button`
    width: 292px;
    height: 52px;
    padding: 16px 32px;
    text-align: center;
    font-size: 1.1rem;
    background-color: #5ECE7B;
    border: none;
    color :#ffffff;
    font-family: Raleway-Ragular;
    font-weight: 600;
    font-size: 16px;
    margin-top:1.5rem;
    @media(max-width:1100px){
        font-size: 12px;
        width: 232px;
        height: 42px;
  }
  `;
export const ProductDescription = styled.div`
    white-space: normal;
    font-family: Roboto-Regular;
    font-weight: 400;
    font-size: 16px;
    margin-top: 2rem;
    color: #1D1F22;
    @media(max-width:1100px){
        font-size: 12px;
  }
`;