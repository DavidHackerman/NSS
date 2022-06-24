<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ShoppingBagIcon } from "@heroicons/vue/outline"
import useStore from "./state/state";

const { orderProducts } = useStore();
</script>

<template>
  <header class="h-10 w-full bg-green-500">
    <div class="max-w-screen-md mx-auto h-full">
      <nav class="flex gap-4 items-center h-full font-medium">
        <RouterLink to="/">Products</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
        <span class="ml-auto flex gap-1 items-center">
          {{ orderProducts.length }}
          <ShoppingBagIcon class="w-5 h-5"/>
        </span>
      </nav>
    </div>
  </header>

  <RouterView />
</template>