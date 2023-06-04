document.addEventListener('DOMContentLoaded', function() {
    const furnitureBtn = document.getElementById('furniture');
    const cabinetryBtn = document.getElementById('cabinetry');
    const gridItems = document.querySelectorAll('.grid-item');
  
    furnitureBtn.classList.add('active');

    furnitureBtn.addEventListener('click', function() {
      updateGridItems('furniture');
    });
  
    cabinetryBtn.addEventListener('click', function() {
      updateGridItems('cabinetry');
    });

    function updateImgDescriptions(category) {
      gridItems.forEach(function (item, index) {
        const description = item.querySelector('.title');
        if (category === 'furniture') {
          if (index === 0) {
            description.textContent = "Cherry Desk";
          } else if (index === 1) {
            description.textContent = "Koa Dining Room Chair";
          } else if (index === 2) {
            description.textContent = "Cherry and Ash Chest of Drawers";
          } else if (index === 3) {
            description.textContent = "Walnut Rocking Chair";
          } else if (index === 4) {
            description.textContent = "Walnut Dining Table";
          } else if (index === 5) {
            description.textContent = "Walnut Writing Desk";
          } else if (index === 6) {
            description.textContent = "Placeholder #1";
          } else if (index === 7) {
            description.textContent = "Placeholder #2";
          } else if (index === 8) {
            description.textContent = "Placeholder #3";
          }
        } else if (category === 'cabinetry') {
          if (index === 0) {
            description.textContent = "Placeholder #1";
          } else if (index === 1) {
            description.textContent = "Placeholder #2";
          } else if (index === 2) {
            description.textContent = "Placeholder #3";
          } else if (index === 3) {
            description.textContent = "Placeholder #4";
          } else if (index === 4) {
            description.textContent = "Placeholder #5";
          } else if (index === 5) {
            description.textContent = "Placeholder #6";
          } else if (index === 6) {
            description.textContent = "Placeholder #7";
          } else if (index === 7) {
            description.textContent = "Placeholder #8";
          } else if (index === 8) {
            description.textContent = "Placeholder #9";
          }
        }
      });
    }
    
  
    function updateGridItems(category) {
      gridItems.forEach(function(item) {
        const image = item.querySelector('img');
        const src = image.getAttribute('src');
        const newSrc = src.replace(/(furniture|cabinetry)/g, category);
        image.setAttribute('src', newSrc);
      });
      furnitureBtn.classList.remove('active');
      cabinetryBtn.classList.remove('active');
      if (category === 'furniture') {
        furnitureBtn.classList.add('active');
      } else if (category === 'cabinetry') {
        cabinetryBtn.classList.add('active');
      }
      updateImgDescriptions(category);
    }
  });
  