<template>
  <div>
    <h1>Breakfast</h1>

    <div class="card-horizontal">
      <div class="card">
        <img class="card-img-top" src="/pancakes.jpeg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Pancakes</h5>
          <p class="card-text">
            Nothing beats a stack of fluffy, golden, totally homemade pancakes,
            especially when you’ve got an easy step-by-step recipe that lets you
            mix, flip and serve them up in about 20 minutes. They’re the
            ultimate breakfast with butter and maple syrup, but these are also
            great with jam, whipped cream or even chocolate sauce. You can also
            customize your pancakes with mix-ins like chocolate chips, nuts,
            blueberries or bananas.
          </p>
          <a
            href=" https://www.foodnetwork.com/recipes/food-network-kitchen/pancakes-recipe-1913844"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="/french toast.jpeg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">French Toast</h5>
          <p class="card-text">
            Brioche and challah bread make the best French toast. Both are
            already so eggy that once dipped in the batter and griddled in
            butter they become custard-like on the inside. The nicely browned
            and caramelized outside is thanks in part to the added sugar in the
            egg mixture. And playing with the flavor is easy: This recipe has a
            touch of warmth from cinnamon, nutmeg and vanilla. Here’s a pro tip:
            Make sure you don’t over-soak the bread. Fully submerge it in the
            batter for only a few seconds and let any excess drip off before
            cooking. And wait for the bubbles from the melted butter to subside
            — that’s when you know your pan is hot enough.
          </p>
          <a
            href="https://www.foodnetwork.com/recipes/robert-irvine/french-toast-recipe-1951408"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/tapsilog.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Tapsilog</h5>
          <p class="card-text">
            A delicious meal composed of fried marinated beef, garlic fried
            rice, and fried egg. This is best eaten with a saucer of vinegar as
            dipping sauce for the beef.
          </p>
          <a
            href="https://panlasangpinoy.com/tapsilog-recipe/"
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
