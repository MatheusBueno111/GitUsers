import { Trash } from 'phosphor-react'
import React from 'react'
import { ProfileProps } from '../../../../types'
import { CardWrapper, DeleteContainer, FavoriteCardContainer } from './styles'

interface FavoriteCardProps {
  favoriteProfile: ProfileProps
  onRemoveFavoriteProfile: (id: number) => void
}

export const FavoriteCard: React.FC<FavoriteCardProps> = ({
  favoriteProfile,
  onRemoveFavoriteProfile,
}) => {
  function handleRemoveFavoriteProfile(id: number) {
    onRemoveFavoriteProfile(id)
  }
  return (
    <FavoriteCardContainer>
      <h1>{favoriteProfile.login}</h1>
      <CardWrapper>
        <img src={favoriteProfile.avatar_url} alt="" />
        <a href={favoriteProfile.html_url}>Ir para o GitHub</a>
        <DeleteContainer
          onClick={() => handleRemoveFavoriteProfile(favoriteProfile.id)}
        >
          <Trash size={16} weight="bold" />
          <h5>Excluir</h5>
        </DeleteContainer>
      </CardWrapper>
    </FavoriteCardContainer>
  )
}
