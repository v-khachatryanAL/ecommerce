import { serverMedusaClient } from "#medusa/server";
import type { StorePostCartReq } from "@medusajs/medusa";

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event);
  const cartId = getCookie(event, "cart_id") || null;
  if (!cartId) {
    const payload: StorePostCartReq = await readBody(event);
    const { cart } = await client.carts.create(payload);
    setCookie(event, "cart_id", cart.id);
    return cart;
  } else {
    const { cart } = await client.carts.retrieve(cartId);
    return cart;
  }
});
