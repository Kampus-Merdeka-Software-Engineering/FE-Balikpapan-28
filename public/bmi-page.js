// Memulai BMI
document.getElementById("calculate").addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    alert("Please enter valid weight and height.");
    return;
  }

  const bmi = weight / (height * height);
  const result = document.getElementById("result");
  result.innerHTML = `Your BMI: ${bmi.toFixed(2)}`;

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  result.innerHTML += `<br>Category: ${category}`;
});

// Memulai Navbar

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tombol-about-us")
    .addEventListener("click", function () {
      window.location.href = "main-page.html#about-us";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tombol-timeline")
    .addEventListener("click", function () {
      window.location.href = "main-page.html#timeline";
    });
});
