import { useParams } from "react-router-dom"
import { getProductDetails } from "../../network/products"
import { useQuery } from "@tanstack/react-query"
import HeaderUser from "../../components/layout/HeaderUser"
import { ImageContainer, ImageProduct, ProductContainer, ProductInformation } from "./styles"

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
        <p>{product?.price}</p>
        </ProductInformation>
      </ProductContainer>
    </div>
  )
}
