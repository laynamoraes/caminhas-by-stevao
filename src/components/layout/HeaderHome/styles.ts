import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  width: 220px;
  height: 80px;
`

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
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

export const ButtonRegister = styled.button`
  border: 2px solid #1e1e1e;
  border-radius: 8px;
  padding: 10px 18px;
  background-color: transparent;
  color: #1e1e1e;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`

export const ButtonSignIn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  background-color: #ffde59;
  color: #1e1e1e;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`
