import { Link } from "react-router-dom"
import BG from "../../assets/bg-register.png"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const ContentLeft = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 24px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.1);

  > h1 {
    color: #1e1e1e;
    padding-bottom: 20px;
    text-align: center;
  }

  > p {
    margin-top: 30px;
    font-size: 0.875rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.4);
  }
`

export const LinkRegister = styled(Link)`
  color: #90b2b2;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const ContentRight = styled.div`
  width: 40%;
  height: 100%;
  background-color: #c1dcdc;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: 20px;
  left: -200px;
`

export const ImageAnimation = styled.img`
  width: 100%;
`
