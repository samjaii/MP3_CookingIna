<template>
  <div>
    <h1>Main Dish</h1>

    <div class="card-horizontal">
      <div class="card">
        <img class="card-img-top" src="/pansit.webp" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Pancit</h5>
          <p class="card-text">
            This quick pancit recipe with chicken, vegetables, and rice noodles
            is easy and delicious. It will remind you of island fiestas!
          </p>
          <a
            href=" https://www.allrecipes.com/recipe/47015/quick-and-easy-pancit/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/pepperoni.webp" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Homemade Pepperoni Pizza</h5>
          <p class="card-text">
            This pepperoni pizza recipe produces a quick and easy classic!
            Delicious homemade pizza crust and tomato sauce have never been
            easier.
          </p>
          <a
            href="https://www.allrecipes.com/recipe/240376/homemade-pepperoni-pizza/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/burrito.webp" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Chicken Fajita Burrito</h5>
          <p class="card-text">
            This recipe takes the best of fajitas and burritos and combines them
            for one tasty food fusion!
          </p>
          <a
            href="https://www.allrecipes.com/recipe/8538304/chicken-fajita-burrito/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

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
  /* border-top-left-radius: 5px;
  border-top-right-radius: 5px; */
}

.card-body {
  padding: 10px;

  /* background-color: #333; */
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
