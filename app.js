import data from "./test-data.json" assert { type: "json" };

var loader = document.getElementById("loader-container");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

function appendData(data){
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = `
                       <div class="col d-flex flex-column p-2 align-items-center">
                          <a href="${data[i].link}">
                            <img src="${data[i].image}" class="img-thumbnail border-0 hover-img" alt="${data[i].name} image" />
                          </a>
                          <p class="mt-2">${data[i].name}</p>
                      </div>
                              `;

    div.classList.add(
      "animate__animated",
      "animate__zoomIn",
      "animate__delay-0.5s"
    );
    mainContainer.appendChild(div);
  }
};
appendData(data.data);
