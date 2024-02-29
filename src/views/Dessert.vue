<template>
  <div>
    <h1>Dessert</h1>

    <div class="card-horizontal">
      <div class="card">
        <img
          class="card-img-top"
          src="/chocolate mousse.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Chocolate Mousse</h5>
          <p class="card-text">
            This chocolate mousse for beginners is the all-time easiest method,
            perfect for beginners, but even experts may want to pay attention,
            because this technique produces the most delicious, most
            perfectly-textured mousse I've ever had.
          </p>
          <a
            href=" https://www.allrecipes.com/chocolate-mousse-for-beginners-recipe-8574786"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="/key lime pie.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Key Lime Pie</h5>
          <p class="card-text">
            This easy key lime pie recipe is the 1999 American Pie Council's
            National Pie Championship's 1st place winner in the Quick and Easy
            Category. If you like, garnish each piece with a slice of lime and a
            dollop of whipped cream or whipped topping.
          </p>
          <a
            href="https://www.allrecipes.com/recipe/12698/easy-key-lime-pie-i/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/meringue.webp" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Meringue-Topped Banana Pudding</h5>
          <p class="card-text">
            The meringue in this meringue-topped banana pudding is stabilized by
            acidic cream of tartar, helping it hold its shape for decorative
            swoops and swirls. Avoid using a copper bowl, which reacts with acid
            and may discolor your meringue.
          </p>
          <a
            href="https://www.allrecipes.com/meringue-topped-banana-pudding-recipe-8347040"
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
  box-shadow: 0 10px 8px rgba(0, 0, 0.1, 0.1);
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
