
let orders = ['Кофе', 'Чай', 'Круассан']; // Здесь вы можете динамически изменять массив


function updateOrderCount() {
    const itemCountElement = document.getElementById('item-count');
    itemCountElement.textContent = orders.length; // Обновляем текст с количеством заказов
}


updateOrderCount();


function addOrder(item) {
    orders.push(item);
    updateOrderCount(); 
}


addOrder('Сэндвич'); 

const menuItems = document.querySelectorAll('.menu-item');
let currentIndex = 0;


function updateSelection() {
    menuItems.forEach((item, index) => {
        item.style.backgroundColor = index === currentIndex ? '#dac6b6' : ''; // Выделение текущего элемента
    });
}


document.getElementById('up-arrow').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSelection();
    }
});

document.getElementById('down-arrow').addEventListener('click', () => {
    if (currentIndex < menuItems.length - 1) {
        currentIndex++;
        updateSelection();
    }
});

function showSubMenu(menuId) {
  document.getElementById(menuId).style.display = 'block';
}

function hideSubMenu(menuId) {
  document.getElementById(menuId).style.display = 'none';
}

updateSelection();

document.addEventListener('DOMContentLoaded', function() {
  const mainMenuItems = document.querySelectorAll('.main-menu a');

  mainMenuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      const submenuId = this.dataset.submenu;
      const submenu = document.getElementById(submenuId);

      if (submenu) {
        // Close other open submenus
        const openSubmenus = document.querySelectorAll('.sub-menu:not([id="' + submenuId + '"]):visible');
        openSubmenus.forEach(submenu => submenu.style.display = 'none');

        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});