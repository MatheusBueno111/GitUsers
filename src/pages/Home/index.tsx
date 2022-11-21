import React, { useContext, useState } from 'react'

import { FavoritesProfilesContext } from '../../contexts/FavoritesProfilesContext'
import { Header } from '../../components/Header'
import { ProfileCard } from './Components/ProfileCard'

import { api } from '../../services/api'
import { ProfileProps } from '../../types'

import { SearchInput } from './Components/SearchInput'
import { HomeContainer, ProfileWrapper } from './styles'

export const Home: React.FC = () => {
  const { addFavoriteProfile, favoritesProfiles } = useContext(
    FavoritesProfilesContext,
  )
  const [profiles, setProfiles] = useState<ProfileProps[]>([])

  async function getProfiles(query: string = '') {
    try {
      const response = await api.get(`/search/users?q=${query}`)
      const dataItems = response.data.items

      const newProfiles = dataItems.map((response: ProfileProps) => ({
        id: response.id,
        html_url: response.html_url,
        avatar_url: response.avatar_url,
        login: response.login,
      }))

      setProfiles(newProfiles)
    } catch (error) {
      console.error(error)
    }
  }

  function NewFavoriteProfile(id: number) {
    const updatedProfiles = [...profiles]
    const newFavoriteProfile = updatedProfiles.find(
      (profiles) => profiles.id === id,
    )

    if (newFavoriteProfile) {
      addFavoriteProfile(newFavoriteProfile)
    }
  }

  return (
    <HomeContainer>
      <Header />
      <SearchInput getProfiles={getProfiles} profileLength={profiles.length} />
      <ProfileWrapper>
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onNewFavoriteProfile={() => NewFavoriteProfile(profile.id)}
            isCardSelected={
              !!favoritesProfiles.find((element) => element.id === profile.id)
            }
          />
        ))}
      </ProfileWrapper>
    </HomeContainer>
  )
}
