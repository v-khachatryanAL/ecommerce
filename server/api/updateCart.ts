import { serverMedusaClient } from "#medusa/server";
import type { StorePostCartReq } from "@medusajs/medusa";

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event);
  const cartId = getCookie(event, "cart_id") || null;
  const { customerId } = getQuery(event);
  const { cart } = await client.carts.update(cartId as string, {
    customer_id: customerId as string,
  });
  setCookie(event, "cart_id", cart.id);
  return cart;
});
