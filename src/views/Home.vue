<template>
  <div>
    <h1>Dinner</h1>

    <div class="card-horizontal">
      <div class="card">
        <img class="card-img-top" src="/adobo1.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Chicken Adobo</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.allrecipes.com/recipe/16311/simple-beef-stroganoff/"
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
}

/* Styles for each card */
.card {
  flex: 1; /* Equal width for each card */
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-left: 42%;
  width: 100%;
}

.card-img-top {
  width: 100%;
  height: 400px;
  align-content: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
