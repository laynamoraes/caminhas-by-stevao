import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 180px;
`

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const MenuContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`

export const MenuItems = styled.a`
  font-size: 1.125rem;
  color: #1e1e1e;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
`
