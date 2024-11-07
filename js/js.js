const $body = document.querySelector("body");
const $aside = document.querySelector("aside");
const items = document.querySelectorAll("article");
const closeBtn = document.querySelector(".closeBtn");

//for (배열의 아이템 of 배열){ 실행구 }

for (let item of items) {
  item.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
    let title = e.currentTarget.querySelector("h2").innerText;
    $aside.querySelector("h2").innerText = title;
    let text = e.currentTarget.querySelector("p").innerText;
    $aside.querySelector("p").innerText = text;
    let vid = e.currentTarget.querySelector("video").getAttribute("src");
    $aside.querySelector("video").setAttribute("src", vid);
    $aside.querySelector("video").play();
    $body.classList.add("on");
  });
  item.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
    // 현재 이벤트가 바인딩 된(e.currentTarget) 엘리먼트의 자식요소 video
  });
  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
    // 현재 이벤트가 바인딩 된(e.currentTarget) 엘리먼트의 자식요소 video
  });
}

//aside 안의 close 버튼
closeBtn.addEventListener("click", () => {
  $aside.querySelector("video").pause();
  $body.classList.remove("on");
});
