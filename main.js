let count = 0;
const value = document.querySelector("#value");
const button = document.querySelectorAll(".btn");
button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("Increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "black";
    }
    if (count < 0) {
      value.style.color = "black";
    }
    if (count == 0) {
      value.style.color = "blue";
    }
    value.textContent = count;
  });
});
