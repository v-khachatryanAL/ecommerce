import { defineStore } from 'pinia';
import type { Product } from '../types/product';

export const useProductsStore = defineStore('products', () => {
  const productsFeatures = ref(null);
  const productsData = ref<Product>([]);
  const productData = ref<Product>();
  const loading = ref<boolean>(false);
  const errorData = ref<Error | string | null>(null);

  const getProductsFeature = async (locale: string) => {
    loading.value = true;
    const { data, error } = await useFetch(
      `/api/getProductsFeatures?locale=${locale}`
    );

    console.log('data', data.value);

    if (data.value) {
      productsFeatures.value = data.value.data.attributes;
    } else {
      errorData.value = error.value.data;
    }

    loading.value = false;
  };

  const getProducts = async (locale: string) => {
    loading.value = true;
    const { data, error } = await useFetch(`/api/getProducts?locale=${locale}`);

    console.log('data.value', data.value);

    if (data.value) {
      productsData.value = data.value;
    } else {
      errorData.value = error.value.data;
    }

    loading.value = false;
  };

  const getProductById = async (productId: string, locale: string) => {
    loading.value = true;
    const { data, error } = await useFetch('/api/getProductById', {
      query: {
        id: productId,
        locale
      }
    });

    if (data.value) {
      productData.value = data.value;
    } else {
      errorData.value = error.value.data;
    }

    loading.value = false;
  };

  return {
    loading,
    errorData,
    productsData,
    productData,
    productsFeatures,

    getProducts,
    getProductById,
    getProductsFeature
  };
});
