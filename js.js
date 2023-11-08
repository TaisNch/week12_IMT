
const btn = document.querySelector(".btn");
const imt = document.querySelector("#imt");

btn.addEventListener(
  "click",
  (calculateBMI = () => {
    const w = +document.querySelector("#weight").value;
    const h = +document.querySelector("#height").value;
    const res = w / Math.pow(h / 100, 2);
    imt.textContent = res.toFixed(2);
  })
);