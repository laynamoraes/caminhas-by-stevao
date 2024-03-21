import styled from "styled-components"
import BackgroundImage from "../../assets/background-1.png"
import BackgroundImageTwo from "../../assets/background-2.png"

export const Container = styled.div`
  width: 100%;
`

export const HomePage = styled.div`
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
    color: rgba(30, 30, 30, 0.6);
    padding-bottom: 10px;
  }
`

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

export const ProductsCatalog = styled.div`
  width: 100%;
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
  /* gap: 20px; */
`

export const Card = styled.div`
  width: 30%;

  > h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #1e1e1e;
    padding-top: 12px;
  }

  > p {
    font-size: 1.125rem;
    color: rgba(30, 30, 30, 0.8);
  }
`

export const ProductImageContainer = styled.div`
  width: 100%;
  max-width: 336px;
  max-height: 336px;
`

export const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`

export const ServicesSection = styled.div`
  width: 100%;
  padding: 0 50px 50px 50px;
`

export const TitleSection = styled.h2`
  font-size: 2rem;
  color: #1e1e1e;
  text-align: center;
`

export const SubtitleSection = styled.p`
  font-size: 1.125rem;
  color: rgba(30, 30, 30, 0.6);
  text-align: center;
  padding-top: 12px;
  padding-bottom: 50px;
`

export const Services = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const Service = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: #c1dcdc;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TitleService = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #1e1e1e;
  padding-top: 24px;
  padding-bottom: 5px;
`

export const DescriptionService = styled.p`
  font-size: 1.125rem;
  color: rgba(30, 30, 30, 0.6);
  text-align: center;
`

export const About = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${BackgroundImageTwo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 232px 50px 100px 50px;
  display: flex;
  justify-content: right;
`

export const AboutContent = styled.div`
  width: 50%;

`
