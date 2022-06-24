<script setup>
  import {ref} from "vue";

  const users = ref([
    {
      name: 'Mock User 1'
    },
    {
      name: 'Mock User 2'
    },
  ])
</script>

<template>
  <div class="max-w-screen-md mx-auto mt-10">
    <h1 class="text-3xl font-medium mb-3">Users</h1>
    <div class="flex flex-col divide-y divide-gray-300">
      <div
        class="py-3 flex justify-between"
        v-for="user in users"
      >
        <h2 class="text-lg font-medium">{{ user.name }}</h2>
        <span class="text-gray-500">{{ user.price }}</span>
      </div>
    </div>
  </div>
</template>

