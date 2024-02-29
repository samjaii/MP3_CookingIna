<template>
  <aside>
    <div class="logo">
      <img src="/Cooking Ina.png" />
    </div>

    <div class="menu">
      <div>
        <router-link class="button" to="/breaky">
          <h1 class="link-text">Breakfast</h1>
        </router-link>
      </div>
      <div>
        <router-link class="button" to="/lunch">
          <h1 class="link-text">Lunch</h1>
        </router-link>
      </div>
      <div>
        <router-link class="button" to="/dinner">
          <h1 class="link-text">Dinner</h1>
        </router-link>
      </div>

      <div>
        <router-link class="button" to="/snacks">
          <h1 class="link-text">Snacks</h1>
        </router-link>
      </div>
      <div>
        <router-link class="button" to="/vegetarian">
          <h1 class="link-text">Vegetarian</h1>
        </router-link>
      </div>

      <div>
        <router-link class="button" to="/maindish">
          <h1 class="link-text">Main Dish</h1>
        </router-link>
      </div>
      <div>
        <router-link class="button" to="/appetizer">
          <h1 class="link-text">Appetizer</h1>
        </router-link>
      </div>
      <div>
        <router-link class="button" to="/dessert">
          <h1 class="link-text">Dessert</h1>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  color: red($color: #000000);
  width: 250px;
  min-height: 100vh;
  padding: 0.5rem;
  position: fixed;
  background-image: url("/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  
}

.logo {
  margin-bottom: 1rem;
  img {
    width: 14rem;
  }
}

.menu {
  margin: 0 -1rem;

  .button {
    display: flex;
    text-decoration: none;
    justify-content: center;
    color: #461414;
    .link-text {
      font-weight: bold;
    }

    &:hover {
      background-color: #de7474;
      color: white;
      border-radius: 20px;
      padding: 2px;
      width: 98%;
    }
    &:focus {
      background-color: rgb(90, 21, 21);
      color: white;
      border-radius: 20px;
      width: 98%;
    }
  }
}
</style>
