import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { FavoritesProfilesContext } from '../../contexts/FavoritesProfilesContext'
import { FavoriteCard } from './components/FavoriteCard'

import { FavoriteInfo, FavoritesContainer, FavoriteWrapper } from './styles'

const Favorites: React.FC = () => {
  const { favoritesProfiles, removeFavoriteProfile } = useContext(
    FavoritesProfilesContext,
  )

  function handleRemoveFavoriteProfile(id: number) {
    removeFavoriteProfile(id)
  }

  return (
    <FavoritesContainer>
      <Header />

      <FavoriteInfo>
        <h3>Favoritos</h3>
        <h5>
          {favoritesProfiles?.length === 1
            ? `${favoritesProfiles.length} favorito`
            : `${favoritesProfiles?.length} favoritos`}
        </h5>
      </FavoriteInfo>

      {favoritesProfiles.length > 0 ? (
        <FavoriteWrapper>
          {favoritesProfiles.map((favoritesProfiles) => (
            <FavoriteCard
              key={favoritesProfiles.id}
              favoriteProfile={favoritesProfiles}
              onRemoveFavoriteProfile={() =>
                handleRemoveFavoriteProfile(favoritesProfiles.id)
              }
            />
          ))}
        </FavoriteWrapper>
      ) : (
        <h1>Nenhum perfil favoritado</h1>
      )}
    </FavoritesContainer>
  )
}

export default Favorites
