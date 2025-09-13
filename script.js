const navDialog = document.getElementById('nav-dialog');

function handleMenu() {
  navDialog.classList.toggle('hidden');
}

function setupInterSectionOnServer(element, isLTR, speed) {
  function scrollHandler() {
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX;
    } else {
      totalTranslate = -translateX; 
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }

  const intersectionCallBack = (entries) => {
    const isIntersecting = entries[0].isIntersecting;

    if (isIntersecting) {
      document.addEventListener('scroll', scrollHandler);
    } else {
      document.removeEventListener('scroll', scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallBack);
  intersectionObserver.observe(element);
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');


setupInterSectionOnServer(line1, true, 0.15);
setupInterSectionOnServer(line2, false, 0.15);
setupInterSectionOnServer(line3, true, 0.15);
setupInterSectionOnServer(line4, true, 0.8);
