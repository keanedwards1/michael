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
        
        var grid1 = document.getElementById('grid1');
        var href1 = grid1.getAttribute('href');

        var grid2 = document.getElementById('grid2');
        var href2 = grid1.getAttribute('href');

        var grid3 = document.getElementById('grid3');
        var href3 = grid1.getAttribute('href');

        var grid4 = document.getElementById('grid4');
        var href4 = grid1.getAttribute('href');

        var grid5 = document.getElementById('grid5');
        var href5 = grid1.getAttribute('href');

        var grid6 = document.getElementById('grid6');
        var href6 = grid1.getAttribute('href');

        var grid7 = document.getElementById('grid7');
        var href7 = grid1.getAttribute('href');

        var grid8 = document.getElementById('grid8');
        var href8 = grid1.getAttribute('href');

        var grid9 = document.getElementById('grid9');
        var href9 = grid1.getAttribute('href');

        if (category === 'furniture') {
          grid1.setAttribute('href', 'furniture1.html');
          grid2.setAttribute('href', 'furniture2.html');
          grid3.setAttribute('href', 'furniture3.html');
          grid4.setAttribute('href', 'furniture4.html');
          grid5.setAttribute('href', 'furniture5.html');
          grid6.setAttribute('href', 'furniture6.html');
          grid7.setAttribute('href', 'furniture7.html');
          grid8.setAttribute('href', 'furniture8.html');
          grid9.setAttribute('href', 'furniture9.html');
        } else if (category === 'cabinetry') {
          grid1.setAttribute('href', 'cabinetry1.html');
          grid2.setAttribute('href', 'cabinetry2.html');
          grid3.setAttribute('href', 'cabinetry3.html');
          grid4.setAttribute('href', 'cabinetry4.html');
          grid5.setAttribute('href', 'cabinetry5.html');
          grid6.setAttribute('href', 'cabinetry6.html');
          grid7.setAttribute('href', 'cabinetry7.html');
          grid8.setAttribute('href', 'cabinetry8.html');
          grid9.setAttribute('href', 'cabinetry9.html');
        }
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
  