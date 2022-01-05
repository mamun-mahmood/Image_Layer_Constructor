let btnCount = 1;
const addVarriation = (id) => {
  btnCount++;
  document.getElementById(id).style.display = "none";
  const mainDiv = document.getElementById("new_div");
  const subDiv = document.createElement("div");
  const newDiv = `<div id="varriation_div">
  <div class="layer_div rounded container w-75 mt-3">
  <div id="layer_container${
    btnCount - 1
  }" class="p-3">
  <h5 style="text-align: center;">Layer ${btnCount - 1}</h5>
  </div>
  <div style="text-align: center"><button id="add_varr_btn" onclick="addLayer(${btnCount})" class="btn btn-success mb-3">Add Varriation</button></div>
  </div>
  <div style="text-align: center;">
    <button
      id="varriation_btn${btnCount}"
      onclick="addVarriation('varriation_btn${btnCount}')"
      class="btn btn-info m-3"
    >
      Add Layer
    </button>
  </div>
</div>`;
  subDiv.innerHTML = newDiv;
  mainDiv.appendChild(subDiv);
};
let layerCount = 0;
const addLayer = (id) => {
  // document.getElementById("add_varr_btn").style.display = "none";
  layerCount++;
  const mainDiv = document.getElementById(`layer_container${id - 1}`);
  const subDiv = document.createElement("div");
  const newDiv = `<div><div class="display_flex_style">
  
  <div>
    <label for="layer_img${layerCount}" class="btn btn-danger">Select Varriation</label>
  </div>
  <div>
    <img
      src="https://img.icons8.com/ios/60/000000/long-arrow-right.png"
    />
  </div>
  <div><input id="layer_img" type="file" /></div>
  </div>
  
</div>`;
  subDiv.innerHTML = newDiv;
  mainDiv.appendChild(subDiv);
};
document.getElementById("add_layer").addEventListener("click", () => {
  document.getElementById("varriation_btn_div").style.display = "block";
});
