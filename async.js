// api url
const url = "https://dog.ceo/api/breeds/image/random/20";
const container = document.getElementById("dogs");

// get api
async function getDogs() {

try {

  const response = await fetch(url);
if (!response.ok) {

      throw new Error("Failed to fetch data");
    }

    const data = await response.json(); 

displayDogs(data.message); 

  } catch (error) {

 console.error(new Error("Failed to fetch data"));
    container.innerHTML = `<p style="color:red;">${error.message}</p>`;

  }
}

//  async para mostrar imágenes

async function displayDogs(images) {

  images.forEach(imgUrl => {

    const div = document.createElement("div");

    div.classList.add("dog-card");
 div.innerHTML = `<img src="${imgUrl}" alt="Random Dog">`;
    container.appendChild(div);

  });


}


getDogs();
