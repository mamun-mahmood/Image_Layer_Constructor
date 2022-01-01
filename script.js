let btnCount = 1;
const addVarriation = (id) => {
  btnCount++;
  document.getElementById(id).style.display = "none";
  const mainDiv = document.getElementById("new_div");
  const subDiv = document.createElement("div");
  const newDiv = `<div id="varriation_div">
  <div id="layer_container${btnCount -1}" class="container layer_div p-3 w-75 mt-3 rounded">
  <h5 style="text-align: center;">Varriation ${btnCount -1}</h5>
    <div class="display_flex_style">
      <div>
        <label for="layer_img" class="btn btn-danger">Layer 1</label>
      </div>
      <div>
        <img
          src="https://img.icons8.com/ios/60/000000/long-arrow-right.png"
        />
      </div>
      <div><input id="layer_img" type="file" onchange="addLayer(${btnCount})" /></div>
    </div>
  </div>
  <div style="text-align: center;">
    <button
      id="varriation_btn${btnCount}"
      onclick="addVarriation('varriation_btn${btnCount}')"
      class="btn btn-info m-3"
    >
      Add Varriation
    </button>
  </div>
</div>`;
  subDiv.innerHTML = newDiv;
  mainDiv.appendChild(subDiv);
};
let layerCount = 1;
const addLayer = (id) => {
  layerCount++;
  const mainDiv = document.getElementById(`layer_container${id-1}`);
  const subDiv = document.createElement("div");
  const newDiv = `<div class="display_flex_style">
  <div>
    <label for="layer_img${layerCount}" class="btn btn-danger">Layer ${layerCount}</label>
  </div>
  <div>
    <img
      src="https://img.icons8.com/ios/60/000000/long-arrow-right.png"
    />
  </div>
  <div><input id="layer_img" onchange="addLayer(${btnCount})" type="file" /></div>
</div>`;
  subDiv.innerHTML = newDiv;
  mainDiv.appendChild(subDiv);
};
