import styled from 'styled-components'

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.blue};
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
