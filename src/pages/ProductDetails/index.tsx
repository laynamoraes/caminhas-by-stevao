import { useParams } from "react-router-dom"
import { getProductDetails } from "../../network/products"
import { useQuery } from "@tanstack/react-query"
import HeaderUser from "../../components/layout/HeaderUser"
import {
  ButtonContainer,
  ImageContainer,
  ImageProduct,
  ProductContainer,
  ProductInformation,
} from "./styles"
import { Button } from "../../components/Button/styles"
import { ButtonVariant } from "../../components/Button"

export default function ProductDetails() {
  const { id } = useParams()

  const { data: product } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProductDetails(id),
  })

  return (
    <div>
      <HeaderUser />
      <ProductContainer>
        <ImageContainer>
          <ImageProduct src={`.${product?.image}`} />
        </ImageContainer>
        <ProductInformation>
          <h1>{product?.name}</h1>
          <p>{product?.description}</p>
          <span>R$ {product?.price}</span>
          <ButtonContainer>
            <Button variant={ButtonVariant.secondary} style={{ width: "100%" }}>
              ADICIONAR À SACOLA
            </Button>
          </ButtonContainer>
        </ProductInformation>
      </ProductContainer>
    </div>
  )
}
