console.log("Load application!")

// Create main window
const body = document.querySelector('.body');

const container = document.createElement('div');
container.classList.add('container');
body.prepend(container);

// 2 level
let left_block = document.createElement('div');
left_block.classList.add('left-block');
container.prepend(left_block);

let right_block = document.createElement('div');
right_block.classList.add('right-block');
container.append(right_block);

// 3 level
let gallows_image = document.createElement('img');
gallows_image.classList.add('gallows-image');
gallows_image.src = './images/gallows.svg';
gallows_image.alt = 'gallows';
left_block.prepend(gallows_image);