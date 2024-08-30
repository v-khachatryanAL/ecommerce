import { serverMedusaClient } from "#medusa/server";

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event);
  const { lineItemId } = getQuery(event);
  const cartId = getCookie(event, "cart_id") as string;
  const { cart } = await client.carts.lineItems.delete(
    cartId,
    lineItemId as string
  );
  return cart;
});
