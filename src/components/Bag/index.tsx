import { IoBagHandleOutline } from "react-icons/io5";
import { CartContainer, Count } from "./styles";

export default function BagIcon() {
  return (
    <CartContainer>
      <Count>0</Count>
      <IoBagHandleOutline size="25px" />
    </CartContainer>
  )
}