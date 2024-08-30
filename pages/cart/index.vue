<template>
  <div v-if="showCartPage" class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Shopping Cart
      </h1>
      <form
        class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
        @submit.prevent="handleCompleteOrder"
      >
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

          <ul
            role="list"
            class="divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            <CartItem
              v-for="(item, i) in cartStore.cartData.items"
              :key="`item-${i}`"
              :line-item="item"
              :currency-code="cartStore.cartData.region.currency_code"
              @update:line-item="updateLineItem"
              @delete:line-item="deleteLineItem"
            />
          </ul>
        </section>

        <!-- Order summary -->
        <section
          aria-labelledby="summary-heading"
          class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            Order summary
          </h2>

          <dl class="mt-6 space-y-4">
            <div
              class="flex items-center justify-between border-t border-gray-200 pt-4"
            >
              <dt class="text-base font-medium text-gray-900">Order total</dt>
              <dd class="text-base font-medium text-gray-900">
                {{
                  currencyConverter(
                    cartStore.cartData.total,
                    cartStore.cartData.region.currency_code
                  )
                }}
              </dd>
            </div>
          </dl>

          <div class="mt-6">
            <button
              type="submit"
              class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Complete order
            </button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "../../stores/cart";
import { useOrdersStore } from "../../stores/orders";
import { computed } from "vue";
import { currencyConverter } from "../../helpers";
import CartItem from "../../components/cart/cartItem.vue";

const router = useRouter();

const cartStore = useCartStore();
const ordersStore = useOrdersStore();

const showCartPage = computed(() => !!cartStore.cartData?.items?.length);

const checkCart = async () => {
  if (!cartStore.cartData) {
    await cartStore.getCart();
    if (!cartStore.cartData.items.length) {
      router.push("/");
    }
  } else {
    if (!cartStore.cartData.items.length) {
      router.push("/");
    }
  }
};

await checkCart();

const updateLineItem = async (quantity, lineItemId) => {
  if(quantity > 10) return;
  await cartStore.updateLineItem({ quantity: Number(quantity) }, lineItemId);
};

const deleteLineItem = async (lineItemId) => {
  await cartStore.deleteLineItem(lineItemId);
  await checkCart();
};

const handleCompleteOrder = async () => {
  await ordersStore.completeOrder();
}
</script>
