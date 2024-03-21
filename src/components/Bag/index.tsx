import { IoBagHandleOutline } from "react-icons/io5"
import { CartContainer, Count } from "./styles"

export default function BagIcon({ count }: { count: number }) {
  return (
    <CartContainer>
      <Count>{count ? count : 0}</Count>
      <IoBagHandleOutline size="25px" />
    </CartContainer>
  )
}
