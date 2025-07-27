//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

let menuContainer = document.querySelector("#navBar");

async function menu() {
  let data = await fetch("http://localhost:3000/menu");
  let menuItemServr = await data.json();

  // ساخت HTML برای منو
  let menuItem = menuItemServr.map((elem) => {
    return `<a
      href="${elem.link}"
      data-name="${elem.name}"
      class="menu-item px-4 relative font-bold text-[16px] text-[#3b3b3b]/50 hover:text-[#3b3b3b] capitalize transition-all duration-300"
    >${elem.name}</a>`;
  });

  menuContainer.insertAdjacentHTML("beforeend", menuItem.join(""));

  function subMenu() {
    return `<div class="submenu absolute top-full left-0 mt-2 w-[200px] shadow-[0_3px_5px_#6b6b6b55] rounded-xl bg-white z-50 transition-all duration-300">
      <div class="block w-full py-4 px-2 hover:bg-gray-100">men s clud</div>
      <div class="block w-full py-4 px-2 hover:bg-gray-100">women s clud</div>
      <div class="block w-full py-4 px-2 hover:bg-gray-100">dijital</div>
    </div>`;
  }

  const categoryLink = document.querySelector('[data-name="category"]');

  //***********************
  categoryLink.addEventListener("click", function (e) {
    e.preventDefault();

    const alreadyOpen = categoryLink.querySelector(".submenu");

    if (alreadyOpen) {
      alreadyOpen.remove(); // اگر بازه، ببند
    } else {
      categoryLink.insertAdjacentHTML("beforeend", subMenu()); // اگه بسته بود، باز کن
    }
  });
  //***********************
}

menu();

//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

let productContainer = document.querySelector("#productContainer");
let product = async () => {
  let productItem;
  let data = await fetch("https://fakestoreapi.com/products");
  let productServr = await data.json();

  productItem = productServr.map((elem) => {
    return `<div
        sec="prodoct"
        class="w-[300px] grow bg-white p-[20px] rounded-2xl border-none shadow-[0_0_5px_#7b7b7b33] hover:shadow-2xl transition-all duration-500"
      >
        <div sec="prodoct-img-container" class="h-[250px] w-[250px] mx-auto mb-3.5">
          <img
            src="${elem.image}"
          alt=""
            class="h-full w-full object-cover"
          />
        </div>

        <div sec="data-prodoct" class="flex flex-col gap-3">
          <h2
            class="font-bold text-[30px] text-[#2b2b2b] text-nowrap overflow-hidden text-ellipsis"
          >
            ${elem.title}
          </h2>
          <p class="desc text-[18px] text-[#5b5b5b99]">${elem.description}</p>
          <p class="font">category: <span class="text-red-500">${elem.category}</span></p>
          <p class="text-right text-[25px]">${elem.price}$</p>
        </div>
      </div>`;
  });

  productContainer.insertAdjacentHTML("beforeend", productItem.join(""));
  //   console.log(productItem);
};

product();
