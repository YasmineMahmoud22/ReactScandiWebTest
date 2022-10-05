import styled from 'styled-components';

export const Cost = styled.div`
    font-family:  Raleway-Ragular;
    font-size: ${props=>props.minicart?'16px':'24px'};
    font-weight:${props=>props.minicart?'600': '700'};
    text-align: left;
    margin-top:${props=>props.minicart?'0.5rem':'1.4rem'};
    margin-bottom:0.8rem;
    color: #1D1F22;
    position:relative;

`;