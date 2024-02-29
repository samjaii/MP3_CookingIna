<template>
  <div>
    <h1>Appetizer</h1>

    <div class="card-horizontal">
      <div class="card">
        <img class="card-img-top" src="/crostini.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Almond-Bacon Cheese Crostini</h5>
          <p class="card-text">
            For a change from the usual toasted tomato appetizer, try this baked
            crostini recipe. If you like, slice the baguette at an angle instead
            of making a straight cut.
          </p>
          <a
            href=" https://www.tasteofhome.com/recipes/almond-bacon-cheese-crostini/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/tortellini.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Fried Prosciutto Tortellini</h5>
          <p class="card-text">
            My take on Italian street food, these fried tortellini are crunchy,
            gooey good. For the sauce, use the best quality tomatoes you can
            find.
          </p>
          <a
            href="https://www.tasteofhome.com/recipes/fried-prosciutto-tortellini/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/hamcheese.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Ham and Cheese Biscuit Stacks</h5>
          <p class="card-text">
            These finger sandwiches are filling enough to satisfy hearty
            appetites. I've served the fun little stacks at every event,
            including holiday gatherings, showers and tailgate parties.
          </p>
          <a
            href="https://www.tasteofhome.com/recipes/ham-n-cheese-biscuit-stacks/"
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
