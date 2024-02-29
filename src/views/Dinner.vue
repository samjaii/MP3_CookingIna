<template>
  <div>
    <h1>Dinner</h1>

    <div class="card-horizontal">
      <div class="card">
        <img class="card-img-top" src="/chixadobo.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Chicken Adobo</h5>
          <p class="card-text">
            Chicken Adobo is an authentic Filipino dish and is one of the mostly
            recognized Filipino foods. Not to be mistaken with Mexican adobo,
            this dish is uniquely prepared by stewing chicken in vinegar and soy
            sauce. Several sources who are experts in Asian food history say
            that the Filipinos were already cooking adobo even before Spanish
            colonization. According to them, cooking with vinegar preserves the
            meat. This method is also considered as one of the earliest food
            preservation practice.
          </p>
          <a
            href="https://panlasangpinoy.com/filipino-chicken-adobo-recipe/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="/beefmushroom.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Creamy Beef Mushroom</h5>
          <p class="card-text">
            The combination of tender meat and smoky, umami mushrooms has been
            around since time immemorial. Whether you’re using pork, chicken, or
            beef, this dynamic duo has given life to so many of our favorite
            dishes. One of these is the delectable and mouthwatering burger
            steak, which combines your favorite thick burger patties with
            copious amounts of flavorful gravy. Burger steaks have become so
            popular, they’re even a beloved fast food offering! Because we know
            that beef works so well with mushrooms, why not, then, take it up a
            notch? Introducing now: the delightful and delicious creamy beef
            with mushroom!
          </p>
          <a
            href="https://panlasangpinoy.com/creamy-beef-with-mushroom/"
            class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/stroganoff.webp" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Beef Stroganoff</h5>
          <p class="card-text">
            This rich and creamy beef stroganoff recipe is made with ground beef
            and served with egg noodles. It's super simple to prepare, and ready
            to serve in under 30 minutes making it a great choice for busy
            weeknights. Garnish with freshly chopped parsley.
          </p>
          <a
            href="https://www.allrecipes.com/recipe/16311/simple-beef-stroganoff/"
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
