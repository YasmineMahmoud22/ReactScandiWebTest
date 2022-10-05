import styled from 'styled-components';

export const Attributes = styled.div`
   position:relative;
    top: 2.5rem;
`;

export const AttributeTitle = styled.div`
    font-family:RobotoCondensed;
    font-weight: 700;
    font-size: 18px;
    margin-bottom:0.6rem;
    padding:0;
    color: #1D1F22;
`;

export const AttributesContainer = styled.ul`
    display: flex;
    flex-direction: row;
    padding:0;
    list-style: none;
    margin:0 0 1rem 0;

`;
export const ColoredBoxContainer=styled.div`
    position:relative;
    border:${props=> props.activeColoredBox ? '1px solid #5ECE7B':'1px solid transparent'};
    width: 34px;
    height: 34px;
    margin-right:0.2rem;
`;
export const ColoredBox = styled.button`
    width: 32px;
    height: 32px;
    position: absolute;
    left: 1px;
    top: 1px;
    border:0.01rem solid #cccaca;
    box-sizing: border-box;
    background-color : ${props=> props.background}
`;

 export const AttributeBox = styled.button`
    position: relative;
    width: 63px;
    height: 45px;
    border:0.02rem solid #1D1F22;
    margin-right: 0.6rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.activeBox? '#1D1F22':'transparent'}; 
    color: ${props=>props.activeBox? '#ffffff' : ' #1D1F22'};
    font-family: SourceSansPro;
    font-weight: 400;
    font-size: 16px;
    @media(max-width:1100px){
        font-size: 12px;
        width: 53px;
        height: 30px;
  }
 `;