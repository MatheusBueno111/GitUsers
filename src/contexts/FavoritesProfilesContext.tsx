import React, { createContext, ReactNode, useState } from 'react'

import { ProfileProps } from '../types'

interface FavoritesProfilesContextType {
  favoritesProfiles: ProfileProps[]
  addFavoriteProfile: (data: ProfileProps) => void
  removeFavoriteProfile: (id: number) => void
}

export const FavoritesProfilesContext = createContext(
  {} as FavoritesProfilesContextType,
)

interface FavoritesProfilesProviderProps {
  children: ReactNode
}

export const FavoritesProfilesProvider: React.FC<
  FavoritesProfilesProviderProps
> = ({ children }) => {
  const [favoritesProfiles, setFavoritesProfiles] = useState<ProfileProps[]>([])

  function addFavoriteProfile(data: ProfileProps) {
    const updatedFavoritesProfiles = [...favoritesProfiles]

    const favoriteProfileExists = updatedFavoritesProfiles.find(
      (profile) => profile.id === data.id,
    )

    if (favoriteProfileExists) {
      return console.log('perfil já favoritado')
    } else {
      const newFavoriteProfile: ProfileProps = {
        id: data.id,
        html_url: data.html_url,
        avatar_url: data.avatar_url,
        login: data.login,
      }

      updatedFavoritesProfiles.push(newFavoriteProfile)
    }

    setFavoritesProfiles(updatedFavoritesProfiles)
  }

  function removeFavoriteProfile(id: number) {
    const updatedFavoritesProfiles = [...favoritesProfiles]

    const filteredFavoriteProfiles = updatedFavoritesProfiles.filter(
      (element) => element.id !== id,
    )

    setFavoritesProfiles(filteredFavoriteProfiles)
  }

  return (
    <FavoritesProfilesContext.Provider
      value={{ favoritesProfiles, addFavoriteProfile, removeFavoriteProfile }}
    >
      {children}
    </FavoritesProfilesContext.Provider>
  )
}
