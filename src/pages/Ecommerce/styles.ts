import { Link } from "react-router-dom"
import styled from "styled-components"

export const ProductsSection = styled.main`
  width: 100%;
  padding: 100px 50px;
  display: flex;
`

export const Description = styled.div`
  width: 100%;
  max-width: 256px;

  > h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: #1e1e1e;
  }

  > p {
    font-size: 1.125rem;
    color: rgba(30, 30, 30, 0.6);
    padding-top: 12px;
    padding-bottom: 24px;
  }
`

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductsCatalog = styled.div`
  width: 100%;
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* gap: 20px; */
`

export const Card = styled.div`
  max-width: 30%;
  padding-bottom: 80px;

  > p {
    font-size: 1.125rem;
    color: rgba(30, 30, 30, 0.8);
    padding-bottom: 20px;
  }
`

export const LinkCard = styled(Link)`
  color: #1e1e1e;

  > h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #1e1e1e;
    padding-top: 12px;
  }
`

export const ProductImageContainer = styled.div`
  width: 100%;
  max-width: 336px;
  height: 100%;
  max-height: 336px;
`

export const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(30, 30, 30, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: 1.03;
  }
`
