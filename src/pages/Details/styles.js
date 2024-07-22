import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

        > a, a:visited {
            color: white;
        };
  };
`;