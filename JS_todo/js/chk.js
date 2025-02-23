const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const labels = document.querySelectorAll("label");

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      labels[index + 1].classList.add("checked");
    } else {
      labels[index + 1].classList.remove("checked");
    }
  });
});
