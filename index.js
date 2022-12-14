document.addEventListener('DOMContentLoaded', () => {
  // elements from nav that need changing
  const burger = document.querySelector('.hamburgerHolder');
  const list = document.querySelector('.nav-list');
  const cross = document.querySelector('.cross');
  // where to place photos
  const live = document.querySelector('.imageLive');
  // get circles
  const buttons = document.querySelectorAll('.circle');

  // hide burger show nav
  burger.addEventListener('click', () => {
    burger.classList.toggle('hide-burger');
    list.classList.toggle('nav-active');
    cross.classList.toggle('show-cross');
  });

  // hide cross show buger
  cross.addEventListener('click', () => {
    burger.classList.toggle('hide-burger');
    list.classList.toggle('nav-active');
    cross.classList.toggle('show-cross');
  });

  // element to make images
  function createIMG(tag, name, src) {
    const element = document.createElement(tag);
    element.classList += name;
    element.src = src;
    return element;
  }

  // function to clear div
  function clear(item) {
    while (item.firstChild) {
      item.removeChild(item.lastChild);
    }
  }

  // content.append(createEle("div", "name", "hi"))
  const images = [
    ['img', 'on', 'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'],
    ['img', 'on', 'https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80'],
    ['img', 'on', 'https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'],
    ['img', 'on', 'https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'],
    ['img', 'on', 'https://images.unsplash.com/photo-1431631927486-6603c868ce5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'],
    ['img', 'on', 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'],
  ];

  // new list
  const imageEl = [];

  // add elements to new list
  images.forEach((image) => {
    imageEl.push(createIMG(image[0], image[1], image[2]));
  });

  // update correct circle to black when active
  function updatedButton(id) {
    buttons.forEach((button) => {
      // eslint-disable-next-line no-unused-expressions
      button.id == id ? button.style.backgroundColor = 'black' : button.style.backgroundColor = 'white';
    });
  }

  function updatePhoto(number) {
    // each time clear the photo frame
    clear(live);
    // add correct image to page
    live.append(imageEl[number]);
    // update color of circle
    updatedButton(number);
  }

  // initialize counter
  let counter = 0;

  // get photo controls
  const controls = document.querySelectorAll('.controls');
  controls.forEach((control) => {
    control.addEventListener('click', () => {
      // check for direction
      const direction = control.getAttribute('id');

      // edit counter count up or down
      // allow counter to loop through photos
      // and not end out of range
      if (direction === 'right') {
        // eslint-disable-next-line no-unused-expressions
        counter === 5 ? counter = 0 : counter += 1;
      } else {
        // eslint-disable-next-line no-unused-expressions
        counter === 0 ? counter = 5 : counter -= 1;
      }

      // add correct image to page
      updatePhoto(counter);
    });
  });

  buttons.forEach((button) => {
    // eslint-disable-next-line func-names
    button.addEventListener('click', function () {
    // update correct photo and update the counter to new place.
      updatePhoto(this.id);
      counter = parseInt(this.id, 10);
    });
  });

  function timerfunc() {
    // set counter and check not out of range
    // eslint-disable-next-line no-unused-expressions
    counter === 5 ? counter = 0 : counter += 1;
    updatePhoto(counter);
  }

  // set first image of list
  updatePhoto(counter);

  // timer to update image every 3 seconds
  const timer = setInterval(() => { timerfunc(); }, 3000);
});
