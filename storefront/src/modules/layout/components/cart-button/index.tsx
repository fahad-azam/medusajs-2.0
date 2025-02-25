// import { notFound } from "next/navigation"
// import CartDropdown from "../cart-dropdown"
// import { enrichLineItems, retrieveCart } from "@lib/data/cart"

// const fetchCart = async () => {
//   const cart = await retrieveCart()

//   if (!cart) {
//     return null
//   }

//   if (cart?.items?.length) {
//     const enrichedItems = await enrichLineItems(cart.items, cart.region_id!)
//     cart.items = enrichedItems
//   }

//   return cart
// }

// export default async function CartButton({ className }: { className?: string }) {
//   const cart = await fetchCart()

//   return (
//     <div className={className}>
//       <CartDropdown cart={cart} />
//     </div>
//   )
// }
import { notFound } from "next/navigation"
import CartDropdown from "../cart-dropdown"
import { enrichLineItems, retrieveCart } from "@lib/data/cart"

const fetchCart = async () => {
  const cart = await retrieveCart()

  if (!cart) {
    return null
  }

  if (cart?.items?.length) {
    const enrichedItems = await enrichLineItems(cart.items, cart.region_id!)
    cart.items = enrichedItems
  }

  return cart
}

export default async function CartButton({ className }: { className?: string }) {
  const cart = await fetchCart()

  return (
    <div className={className}>
      <CartDropdown cart={cart} />
    </div>
  )
}
