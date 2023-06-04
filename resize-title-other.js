function updateFontSize() {
    const header = document.getElementById('header');
    const name = document.getElementById('name');
    const maxWidth = window.innerWidth;
    if (maxWidth >= 950) {
      const fontSize = (maxWidth / 90) + 'px';
      const nameFontSize = (maxWidth / 35) + 'px';
      header.style.fontSize = fontSize;
      name.style.fontSize = nameFontSize;
    }
  }
  
  window.addEventListener('resize', updateFontSize);
  window.addEventListener('DOMContentLoaded', updateFontSize);
  