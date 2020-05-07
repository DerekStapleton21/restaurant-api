fetch("http://localhost:8088/restaurants")
  .then((dirtyMoney) => dirtyMoney.json())
  .then((parsedRestaurants) => {
    console.log(parsedRestaurants);
    
    parsedRestaurants.forEach((restaurantObject) => {
      const htmlString = `<div class="restaurant-card">
        <a href="${restaurantObject.restaurant.url}" target="_blank">
            <h3>${restaurantObject.restaurant.name}</h3>
        </a>
        <p>Address: ${restaurantObject.restaurant.location.address}</p>
        <p>
            Average User Rating: ${restaurantObject.restaurant.user_rating.aggregate_rating}
        </p>
        <p>
            Average Cost For Two: $${restaurantObject.restaurant.average_cost_for_two}
        </p>
        <a href="${restaurantObject.restaurant.menu_url}" target="_blank">
            <button>View Menu</button>
        </a>
      </div>`;
      document.querySelector("#restaurant-container").innerHTML += htmlString;
    });
  });


document
  .querySelector("#restaurant-search-btn")
  .addEventListener("click", () => {
    
    const searchTerm = document.querySelector("#restaurant-search-input").value;
    document.querySelector("#restaurant-container").innerHTML = "";
    
    fetch(`http://localhost:8088/restaurants?q=${searchTerm}`)
      .then((dirtyMoney) => dirtyMoney.json())
      .then((parsedRestaurants) => {

        
        parsedRestaurants.forEach((restaurantObject) => {
          if (restaurantObject.restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            const htmlString = `<div class="restaurant-card">
                <a href="${restaurantObject.restaurant.url}" target="_blank">
                    <h3>${restaurantObject.restaurant.name}</h3>
                </a>
                <p>Address: ${restaurantObject.restaurant.location.address}</p>
                <p>
                    Average User Rating: ${restaurantObject.restaurant.user_rating.aggregate_rating}
                </p>
                <p>
                    Average Cost For Two: $${restaurantObject.restaurant.average_cost_for_two}
                </p>
                <a href="${restaurantObject.restaurant.menu_url}" target="_blank">
                    <button>View Menu</button>
                </a>
              </div>`;

            document.querySelector(
              "#restaurant-container"
            ).innerHTML += htmlString;
          }
        });
      });
  });

  document.querySelector("#restaurant-search-input").addEventListener("keyup", function(e){
    if(e.keyCode === 13){
      const searchTerm = document.querySelector("#restaurant-search-input").value;
      document.querySelector("#restaurant-container").innerHTML = "";

    }
 
 
  })

