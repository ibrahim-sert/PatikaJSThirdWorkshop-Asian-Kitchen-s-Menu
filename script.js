window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  // Menü öğelerini görüntülemek için fonksiyon
  function displayMenuItems(menuItems) {
    const sectionCenter = document.querySelector(".section-center");
    let displayMenu = menuItems.map(function (item) {
      return `<div class="menu-items col-lg-6 col-sm-12">
                <img src=${item.img} alt=${item.title} class="photo">
                <div class="menu-info">
                  <div class="menu-title">
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                  </div>
                  <div class="menu-text">
                    ${item.desc}
                  </div>
                </div>
              </div>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }
  
  // Butonları oluşturmak için fonksiyon
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["All"]
    );
    const btnContainer = document.querySelector(".btn-container");
    const categoryBtns = categories
      .map(function (category) {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".btn-item");
  
    // Filtreleme işlemi
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }