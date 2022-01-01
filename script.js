const addVarriation = () => {
  const varriationBtn = document.getElementById("varriation_btn");
  varriationBtn.style.display = "none";
  const mainDiv = document.getElementById("new_div");
  const subDiv = document.createElement("div");
  const newDiv = `<div id="varriation_div">
    <div class="container layer_div p-3 w-75">
    <button class="btn btn-danger m-2">Layer 1</button>
    </div>
    <div style="text-align: center">
    <button id="varriation_btn" onclick="addVarriation()" class="btn btn-info m-3">
    Add Varriation
    </button>
    </div>
    </div>`;
  subDiv.innerHTML = newDiv;
  mainDiv.appendChild(subDiv);
};
