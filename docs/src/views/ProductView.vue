<script setup>
  import useStore from "../state/state";
  import {useRoute} from "vue-router";
  import {ref, watch} from "vue";

  const { getProductById, addProductToOrder } = useStore();
  const route = useRoute();
  const product = ref(getProductById(route.params.id));

  const formatter = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'CZK' })
  const order = () => {
    addProductToOrder(product);
  };
</script>

<template>
  <div class="max-w-screen-md mx-auto mt-10 flex justify-between">
    <h1 class="text-3xl font-medium mb-2">
      {{ product.name }}
    </h1>
    <div class="flex flex-col gap-3">
      <span class="text-gray-500">
        {{ formatter.format(product.price) }}
      </span>
      <button
          class="bg-green-500 hover:bg-green-400 py-1 rounded-md"
          @click="order"
      >
        Order
      </button>
    </div>
  </div>
</template>
