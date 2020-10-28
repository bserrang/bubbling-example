window.addEventListener("load", onLoad);

function onLoad() {
  const wrapper1 = document.querySelector("#wrapper1");
  const wrapper2 = document.querySelector("#wrapper2");
  const wrapper3 = document.querySelector("#wrapper3");

  wrapper1.addEventListener("click", onClick, false); // Deja este a false
  wrapper2.addEventListener("click", onClick, false);
  wrapper3.addEventListener("click", onClick, false);
}

function onClick() {
  alert(this.firstChild.textContent);
}
