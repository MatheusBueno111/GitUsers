import React from 'react'

import { CardWrapper, FavoriteContainer, ProfileCardContainer } from './styles'
import { Star } from 'phosphor-react'
import { ProfileProps } from '../../../../types'

interface ProfileCardProps {
  profile: ProfileProps
  onNewFavoriteProfile: (id: number) => void
  isCardSelected: boolean
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onNewFavoriteProfile,
  isCardSelected,
}) => {
  function handleNewFavoriteProfile() {
    onNewFavoriteProfile(profile.id)
  }

  return (
    <ProfileCardContainer>
      <h1>{profile.login}</h1>
      <CardWrapper>
        <img src={profile.avatar_url} alt="" />
        <a href={profile.html_url}>Ir para o GitHub</a>
        <FavoriteContainer onClick={() => handleNewFavoriteProfile()}>
          <Star size={16} weight={isCardSelected ? 'fill' : 'bold'} />
          <h5>Favoritar</h5>
        </FavoriteContainer>
      </CardWrapper>
    </ProfileCardContainer>
  )
}
