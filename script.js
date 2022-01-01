let btnCount = 2;
const addVarriation = (id) => {
  btnCount++;
  document.getElementById(id).style.display = "none";
  const mainDiv = document.getElementById("new_div");
  const subDiv = document.createElement("div");
  const newDiv = `<div id="varriation_div">
    <div class="container layer_div p-3 w-75 mt-3 rounded">
    <button class="btn btn-danger m-2">Layer 1</button>
    </div>
    <div style="text-align: center">
    <button id="varriation_btn${btnCount}" onclick="addVarriation('varriation_btn${btnCount}')" class="btn btn-info m-3">
    Add Varriation
    </button>
    </div>
    </div>`;
  subDiv.innerHTML = newDiv;
  mainDiv.appendChild(subDiv);
};
