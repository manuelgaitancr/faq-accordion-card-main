const item = document.querySelectorAll(".accordion__item");
for (let i = 0; i < item.length; i++) {
  let btn = item[i].children[0].children[0];
  btn.addEventListener("click", function (e) {
    let activeContents = item[i].children[1];
    let openContentsIndicator =
      item[i].children[0].children[0].children[0].children[0];
    btn.classList.toggle("active");
    activeContents.classList.toggle("d__none");
    openContentsIndicator.classList.toggle("accordion__rotate__arrow");
    for (let j = 0; j < item.length; j++) {
      let contents = item[j].children[1];
      if (activeContents !== contents) {
        contents.classList.add("d__none");
        item[j].children[0].children[0].classList.remove("active");
        item[
          j
        ].children[0].children[0].children[0].children[0].classList.remove(
          "accordion__rotate__arrow"
        );
      }
    }
  });
}
