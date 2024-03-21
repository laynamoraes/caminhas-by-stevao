import styled from "styled-components"

export const ProductContainer = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
`

export const ImageContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
`

export const ImageProduct = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  border: 1px solid rgba(30, 30, 30, 0.1);
`

export const ProductInformation = styled.div`
  width: 45%;

  > h1 {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #1e1e1e;
  }

  > p {
    width: 80%;
    font-size: 1.125rem;
    color: #1e1e1e;
    padding-bottom: 15px;
  }

  > span {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e1e1e;
  }
`

export const ButtonContainer = styled.div`
  width: 80%;
  padding-top: 20px;
`
