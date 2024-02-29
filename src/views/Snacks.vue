<template>
  <div>
    <h1>Lunch</h1>

    <div class="card-horizontal">
      <div class="card">
        <img class="card-img-top" src="/palabs.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Palabok</h5>
          <p class="card-text">
            Pancit Palabok is a noodle dish with shrimp sauce and topped with
            several ingredients such as cooked shrimp, boiled pork, crushed
            chicharon, tinapa flakes, fried tofu, scallions, and fried garlic. A
            very tasty treat that is sure to relieve your hunger.
          </p>
          <a
            href="https://panlasangpinoy.com/asian-filipino-food-noodles-pansit-pancit-palabok-recipe/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/burger.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Cheeseburger</h5>
          <p class="card-text">
            A delicious homemade Cheeseburger with yummy spread made of a mix of
            mayonnaise, banana ketchup and onion powder for a standout sweet and
            sour sort of filling.
          </p>
          <a
            href="https://panlasangpinoy.com/cheeseburger-and-hotdog-sandwich-recipe/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/banana cue.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Banana Cue</h5>
          <p class="card-text">
            Bananacue is term used to call fried skewered plantains cooked with
            brown sugar. This is a staple in the Philippines, and is mostly
            consumed as a mid-afternoon snack. Considered as one of the all-time
            best selling street food, Bananacue can easily be spotted around the
            streets of Manila and in other places within the Philippines, as
            well.
          </p>
          <a
            href="https://panlasangpinoy.com/bananacue/"
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
