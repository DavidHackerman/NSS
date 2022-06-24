import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue';
import ProductView from '../views/ProductView.vue';
import UsersView from '../views/UsersView.vue';
import OrderView from '../views/OrderView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
    }
  ]
})

export default router
