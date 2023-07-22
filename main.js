let images = Array.from(document.querySelectorAll(".container img"));
let imageLength = images.length;

let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");
let slidNumberDiv = document.getElementById("slidNumber");

let numberBullets = document.getElementById("numbers");

let imageIndex = 0;

let Mylist = document.createElement("ul");
for (let i = 1; i <= imageLength; i++) {
  let my_Li = document.createElement("li");
  if (i === 1) {
    my_Li.className = "active";
  }

  my_Li.appendChild(document.createTextNode(i));
  Mylist.appendChild(my_Li);
}

numberBullets.appendChild(Mylist);

leftBtn.onclick = getPrev;
rightBtn.onclick = getnext;

function getPrev() {
  imageIndex--;
  images.forEach(function (ele) {
    ele.classList.remove("active");
  });

  if (imageIndex >= 0) {
    images[imageIndex].classList.add("active");
  } else {
    // rightBtn.classList.add("disabled");
    imageIndex = imageLength - 1;
    images[imageIndex].classList.add("active");
  }

  slidNumber();
  bulletIndexActive();
}
function getnext() {
  imageIndex++;
  images.forEach(function (ele) {
    ele.classList.remove("active");
  });

  if (imageIndex <= imageLength - 1) {
    images[imageIndex].classList.add("active");
  } else {
    // rightBtn.classList.add("disabled");
    imageIndex = 0;
    images[imageIndex].classList.add("active");
  }

  slidNumber();
  bulletIndexActive();
}
function slidNumber() {
  slidNumberDiv.innerHTML = `Image ${imageIndex + 1}  of ${imageLength}`;
}
slidNumber();

function bulletIndexActive() {
  let Bullets = document.querySelectorAll(".numbers ul li");

  Bullets.forEach((ele) => {
    ele.classList.remove("active");
  });
  for (let i = 0; i <= imageLength - 1; i++) {
    if (i === imageIndex) {
      Array.from(Bullets)[i].classList.add("active");
    }
  }
}
