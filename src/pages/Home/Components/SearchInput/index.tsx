import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
  SearchFormButton,
  SearchFormContainer,
  SearchInputContainer,
  SearchInputWrapper,
} from './styles'
import { MagnifyingGlass } from 'phosphor-react'

interface SearchInputProps {
  profileLength: number
  getProfiles: (query?: string) => Promise<void>
}

const searchFormSchema = Yup.object().shape({
  query: Yup.string().required(),
})

export const SearchInput: React.FC<SearchInputProps> = ({
  getProfiles,
  profileLength,
}) => {
  return (
    <SearchInputContainer>
      <header>
        <h3>Perfis</h3>
        <h5>
          {profileLength === 1
            ? `${profileLength} perfil`
            : `${profileLength} perfis`}
        </h5>
      </header>

      <Formik
        initialValues={{
          query: '',
        }}
        validationSchema={searchFormSchema}
        onSubmit={async (values) => {
          await getProfiles(values.query)
        }}
      >
        {({ isValid, dirty }) => (
          <SearchFormContainer id="searchSubmit">
            <SearchInputWrapper
              id="query"
              name="query"
              type="text"
              placeholder="Buscar perfis"
            />

            <SearchFormButton
              type="submit"
              id="searchSubmit"
              disabled={!(dirty && isValid)}
            >
              <MagnifyingGlass size={24} weight="bold" />
              <span>Pesquisar</span>
            </SearchFormButton>
          </SearchFormContainer>
        )}
      </Formik>
    </SearchInputContainer>
  )
}
