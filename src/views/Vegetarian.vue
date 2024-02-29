<template>
  <div>
    <h1>Lunch</h1>

    <div class="card-horizontal">
      <div class="card">
        <img class="card-img-top" src="/pesto.png" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Lemon & Greens Pesto Pasta</h5>
          <p class="card-text">
            Prep, cook and serve this quick and easy lemon and green veg pasta
            in just 15 minutes. It's perfect for busy days, and will be loved by
            the whole family..
          </p>
          <a
            href="https://www.bbcgoodfood.com/recipes/lemon-greens-pesto-pasta"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="/caponata pasta.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Caponata Pasta</h5>
          <p class="card-text">
            Whip up our easy vegetarian caponata pasta in just 20 minutes. It's
            simple to make, budget-friendly and packs three of your five-a-day
            into one delicious meal
          </p>
          <a
            href="https://www.bbcgoodfood.com/recipes/caponata-pasta"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/herby.png" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Herby warm cucumbers with lemon</h5>
          <p class="card-text">
            Did you know that warming up cucumbers enhances their fresh flavour?
            To finish, all this summer side dish needs is a sprinkling of fresh
            dill and parsley, plus lemon.
          </p>
          <a
            href="https://www.bbcgoodfood.com/recipes/herby-warm-cucumbers-with-lemon"
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
