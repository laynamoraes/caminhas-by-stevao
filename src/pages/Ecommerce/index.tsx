import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import HeaderUser from "../../components/layout/HeaderUser"
import { getProducts } from "../../network/products"
import Button, { ButtonVariant } from "../../components/Button"
import {
  Card,
  Description,
  ImageProduct,
  LinkCard,
  ProductImageContainer,
  ProductsCatalog,
  ProductsContainer,
  ProductsSection,
} from "./styles"

// import { useAuth } from "../../hooks/auth"

export default function Ecommerce() {
  // const { signOut } = useAuth()
  const [limit, setLimit] = useState<number>(9)
  const totalProducts = 24

  const { data, isLoading } = useQuery({
    queryKey: ["products", limit],
    queryFn: () => getProducts(limit),
  })

  return (
    <div>
      <HeaderUser />
      {/* <button onClick={signOut}>Sair</button> */}

      <ProductsSection>
        <Description>
          <h2>As melhores caominhas para seu pet</h2>
          <p>Além de serem as mais divertidas e confortáveis também!</p>
        </Description>
        <ProductsContainer>
          <ProductsCatalog>
            {data?.map((product) => (
              <Card>
                <LinkCard to={`/ecommerce/${product.id}`} key={product.id}>
                  <ProductImageContainer>
                    <ImageProduct src={product.image} />
                  </ProductImageContainer>
                  <h3>{product.name}</h3>
                </LinkCard>
                <p>R$ {product.price}</p>

                <Button
                  style={{ width: "100%", border: "1px solid #1e1e1e" }}
                  variant={ButtonVariant.secondary}
                >
                  ADICIONAR À SACOLA
                </Button>
              </Card>
            ))}
          </ProductsCatalog>
          {limit < totalProducts && (
            <Button
              variant={ButtonVariant.default}
              onClick={() => setLimit(limit + 6)}
            >
              Ver mais
            </Button>
          )}

          {isLoading && <div>Carregando...</div>}
        </ProductsContainer>
      </ProductsSection>
    </div>
  )
}
