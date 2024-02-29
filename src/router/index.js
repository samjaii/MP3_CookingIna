import Breaky from "../views/Breaky.vue";
import Lunch from "../views/Lunch.vue";
import Dinner from "../views/Dinner.vue";
import Snacks from "../views/Snacks.vue";
import Vegetarian from "../views/Vegetarian.vue";
import MainDish from "../views/MainDish.vue";
import Dessert from "../views/Dessert.vue";
import Appetizer from "../views/Appetizer.vue";
import Home from "../views/Home.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/breaky",
      component: Breaky,
    },
    {
      path: "/lunch",
      component: Lunch,
    },
    {
      path: "/dinner",
      component: Dinner,
    },
    {
      path: "/snacks",
      component: Snacks,
    },
    {
      path: "/vegetarian",
      component: Vegetarian,
    },
    {
      path: "/dessert",
      component: Dessert,
    },
    {
      path: "/appetizer",
      component: Appetizer,
    },

    {
      path: "/maindish",
      component: MainDish,
    },
    {
      path: "/",
      component: Home,
    },
  ],
});

export default router;
