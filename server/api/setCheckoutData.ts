import { serverMedusaClient } from "#medusa/server";

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event);
  const cartId = getCookie(event, "cart_id") || null;
  if (cartId) {
    const { shipping_options } = await client.shippingOptions.listCartOptions(
      cartId
    );
    await client.carts.addShippingMethod(cartId, {
      option_id: shipping_options[0].id as string,
    });

    await client.carts.createPaymentSessions(cartId);
    const { cart: dataWithPayment } = await client.carts.setPaymentSession(
      cartId,
      {
        provider_id: "manual",
      }
    );

    const { type, data } = await client.carts.complete(cartId);

    setCookie(event, "cart_id", "");

    return data;
  }
});
