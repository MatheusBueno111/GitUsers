import styled from 'styled-components'

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;

  p {
    margin: 0 auto;
    width: fit-content;
    color: ${({ theme }) => theme.blue};
    font-size: 2rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme['base-profile']};
    padding: 1rem;
    border: 0.25rem;
    border-radius: 1rem;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.5);
  }
`
export const FavoriteWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`

export const FavoriteInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
