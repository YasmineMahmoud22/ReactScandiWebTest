import styled from "styled-components";

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;


    .active{
        color: #5ECE7B;
        font-weight: 600;
        border-bottom: 0.14rem solid #5ECE7B;
    }
    .notactive{
        color:red;
    }
`;