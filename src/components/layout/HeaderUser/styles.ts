import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #c1dcdc;
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
`
export const ButtonUser = styled.button`
  border: none;
  border-radius: 100%;
  padding: 10px 18px;
  max-width: 112px;
  background-color: #ffde59;
  color: #1e1e1e;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #f2d252;
  }
`

export const Divider = styled.p`
  font-size: 1.75rem;
  font-weight: 300;
  color: rgba(30, 30, 30, 0.6);
`
