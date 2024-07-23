import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 24px
    ;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-weight: bold;
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const Search = styled.div`
  grid-area: search;
`

export const Content = styled.div`
  grid-area: content;
`;

export const NewNote = styled.button`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 8px;
  }
`;