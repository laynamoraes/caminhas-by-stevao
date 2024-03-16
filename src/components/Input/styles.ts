import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 15px;
`

export const Label = styled.label`
  font-size: 1rem;
  color: #1e1e1e;
`

export const Input = styled.input`
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(30, 30, 30, 0.4);
  background-color: #edf2fc;
`

export const ErrorText = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: red;
`
