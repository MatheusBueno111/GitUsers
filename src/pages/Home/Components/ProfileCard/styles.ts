import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme['base-profile']};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.5);
  gap: 2rem;

  h1 {
    text-align: center;
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    padding: 0.25rem;
    border: 1px solid ${({ theme }) => theme['base-text']};
  }
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
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const FavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: opacity 0.2s;

  svg {
    color: ${({ theme }) => theme['base-text']};
    background-color: transparent;
    border-radius: 50%;
  }
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`
