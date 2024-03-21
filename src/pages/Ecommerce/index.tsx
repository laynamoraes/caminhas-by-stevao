import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import HeaderUser from "../../components/layout/HeaderUser"
import { getProducts } from "../../network/products"
import Button, { ButtonVariant } from "../../components/Button"
// import { Product } from "../../interfaces/product"
// import { addProductInBag } from "../../network/users"
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

export default function Ecommerce() {
  const [limit, setLimit] = useState<number>(9)
  const [count, setCount] = useState<number>(0)
  const totalProducts = 24

  const { data, isLoading } = useQuery({
    queryKey: ["products", limit],
    queryFn: () => getProducts(limit),
  })

  // const { mutateAsync } = useMutation({
  //   mutationFn: async (id: string | undefined, product: Product ) => {
  //     addProductInBag(id, product)
  //   },
  //   onMutate: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["users"],
  //     })
  //   },
  // })

  return (
    <div>
      <HeaderUser count={count} />

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
                  onClick={() => setCount(count + 1)}
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
