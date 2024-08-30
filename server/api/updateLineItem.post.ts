import { serverMedusaClient } from "#medusa/server";
import type { StorePostCartsCartLineItemsItemReq } from "@medusajs/medusa";

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event);
  const { lineItemId } = getQuery(event);
  const cartId = getCookie(event, "cart_id") as string;
  const payload: StorePostCartsCartLineItemsItemReq = await readBody(event);
  const { cart } = await client.carts.lineItems.update(
    cartId,
    lineItemId as string,
    payload
  );
  return cart;
});
