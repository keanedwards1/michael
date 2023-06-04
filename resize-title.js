function updateFontSize() {
    const header = document.getElementById('header');
    const name = document.getElementById('name');
    const workBarWidth = document.getElementById('work-bar');
    const maxWidth = window.innerWidth;
    if (maxWidth >= 950) {
      const fontSize = (maxWidth / 90) + 'px';
      const nameFontSize = (maxWidth / 35) + 'px';
      const workBarNewWidth = (maxWidth / 6) + 'px';
      workBarWidth.style.marginLeft = workBarNewWidth;
      header.style.fontSize = fontSize;
      name.style.fontSize = nameFontSize;
    } else {
      workBarWidth.style.marginLeft = 'initial';
    }
  }
  
  window.addEventListener('resize', updateFontSize);
  window.addEventListener('DOMContentLoaded', updateFontSize);
  