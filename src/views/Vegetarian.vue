<template>
  <div>
    <h1>Lunch</h1>

    <div class="card-horizontal">
      <div v-for="(recipe, index) in recipes" :key="index" class="card">
        <img
          :src="recipe.image"
          class="card-img-top"
          :alt="recipe.title + ' image'"
        />
        <div class="card-body">
          <h5 class="card-title">{{ recipe.title }}</h5>
          <p class="card-text">{{ recipe.description }}</p>
          <a :href="recipe.link" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        {
          title: "Lemon & Greens Pesto Pasta",
          image: "/pesto.png",
          description:
            "Prep, cook and serve this quick and easy lemon and green veg pasta in just 15 minutes. It's perfect for busy days, and will be loved by the whole family.",
          link: "https://www.bbcgoodfood.com/recipes/lemon-greens-pesto-pasta",
        },
        {
          title: "Caponata Pasta",
          image: "/caponata pasta.png",
          description:
            "Whip up our easy vegetarian caponata pasta in just 20 minutes. It's simple to make, budget-friendly and packs three of your five-a-day into one delicious meal",
          link: "https://www.bbcgoodfood.com/recipes/caponata-pasta",
        },
        {
          title: "Herby warm cucumbers with lemon",
          image: "/herby.png",
          description:
            "Did you know that warming up cucumbers enhances their fresh flavour? To finish, all this summer side dish needs is a sprinkling of fresh dill and parsley, plus lemon.",
          link: "https://www.bbcgoodfood.com/recipes/herby-warm-cucumbers-with-lemon",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Styles for the h1 */
h1 {
  color: antiquewhite;
}

/* Styles for the card horizontal container */
.card-horizontal {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

/* Styles for each card */
.card {
  flex: 1; /* Equal width for each card */
  margin: 10px;
  border: 1px solid #ccc;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-left: 250px;
  width: 60%;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 10px 10px #cacaca;
}

.card-img-top {
  width: 100%;
  height: 400px;
  align-content: center;
  border-radius: 15px;
}

.card-body {
  padding: 10px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #5d0000;
}

.card-text {
  font-size: 15px;
  color: #000000;
  font-weight: normal;
  word-wrap: break-word;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: #580d0d;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #000000;
}
</style>
