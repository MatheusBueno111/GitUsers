import styled from 'styled-components'
import { Field, Form } from 'formik'

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
    h3 {
      color: ${({ theme }) => theme['base-subtitle']};
    }

    h5 {
      color: ${({ theme }) => theme['base-span']};
    }
  }
`

export const SearchFormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const SearchFormButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.blue};
  gap: 1rem;
  border: none;
  color: black;

  span {
    font-weight: 700;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`

export const SearchInputWrapper = styled(Field)`
  display: flex;
  padding: 0.75rem 1rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme['base-border']};
  background-color: ${({ theme }) => theme['base-input']};
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme['base-label']};
  font-weight: 700;

  ::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  :focus {
    outline: 1px solid ${({ theme }) => theme['base-label']};
  }
`
