<script setup>
  import useStore from "../state/state";

  const { products } = useStore();

</script>

<template>
  <main class="max-w-screen-md mx-auto mt-10">
    <div class="py-3 flex justify-between">
      <h1 class="text-3xl font-medium mb-4">Products</h1>
      <button class="p-2 mb-2 bg-green-500 hover:bg-green-400 rounded-md" @click="modalAddProduct.show = !modalAddProduct.show"><b>Add a product</b></button>
    </div>
    <div class="flex flex-col divide-y divide-gray-300">
      <RouterLink
          v-for="product in products"
          :to="`/`">
<!--          :to="`/product/${product.id}`">-->
        <div class="py-3 flex justify-between">
          <h2 class="text-lg font-medium">{{ product.name }}</h2>
          <span class="text-gray-500">{{ product.price }} Kč</span>
        </div>
      </RouterLink>
    </div>
    <modal
        v-show="modalAddProduct.show"
        @close="modalAddProduct.show = false">
    </modal>
  </main>
</template>

<script>
import modal from "../modal/Modal.vue";

export default {
  components: {
    modal
  },
  data () {
    return {
      modalAddProduct: {
        show: false,
        name: '',
        email: ''
      },
    }
  }
}
</script>
