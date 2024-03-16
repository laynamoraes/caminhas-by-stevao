import styled from "styled-components"
import BackgroundImage from "../../assets/background-1.png"

export const Container = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 50px 100px 50px;
`

export const Content = styled.div`
  width: 50%;
  height: calc(100% - 100px);
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  

  > h1 {
    font-size: 2.813rem;
    line-height: 3rem;
    color: #1e1e1e;
  }

  > p {
    font-size: 1.25rem;
  }
`
