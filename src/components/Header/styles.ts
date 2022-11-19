import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 10rem;
    width: 10rem;
  }

  div {
    display: flex;
    gap: 2rem;

    a {
      color: ${({ theme }) => theme['base-text']};
      width: fit-content;
      align-items: center;
      transition: color 0.2s;
    }
    a:link {
      text-decoration: none;
    }

    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.blue};
    }

    a:active {
      text-decoration: none;
    }
  }
`
