console.log("Load application!")
// --------------------------------------------------------------------
const qa_quiz = [
    {
        word: 'section',
        hint: 'Semantic html tag',
    },

    {
        word: 'courier',
        hint: 'Monospaced font',
    },

    {
        word: 'ubuntu',
        hint: 'Linux distribution based on Debian',
    },

    {
        word: 'github',
        hint: 'Platform that allows developers to create, store, and manage their code',
    },

    {
        word: 'dailymotion',
        hint: 'French video-sharing technology platform',
    },

    {
        word: 'android',
        hint: 'Mobile operating system developed by Google',
    },

    {
        word: 'javascript',
        hint: 'Programming language and core technology of the World Wide Web, alongside HTML and CSS',
    },

    {
        word: 'codepen',
        hint: 'Online code editor to build, test, and discover front-end code'
    },

    {
        word: 'router',
        hint: 'Networking device that forwards data packets between computer networks',
    },

    {
        word: 'browser',
        hint: 'Application for accessing websites and the Internet.',
    },

];

let last_qa_current = -1;
let qa_current;

//=================================================================
function change_qa() {

while (true) {
  qa_current = Math.floor(Math.random() * qa_quiz.length );
  if (qa_current != last_qa_current) {
    last_qa_current = qa_current;
    break;
  }
}
  
return; 
}  

// for (let i=1; i<=20; i++){
//    change_qa();
//    console.log( qa_current, qa_quiz[qa_current].word );  
// }


// --------------------------------------------------------------------
// Create main window
const body = document.querySelector('.body');

const container = document.createElement('div');
container.classList.add('container');
body.prepend(container);

let left_block = document.createElement('div');
left_block.classList.add('left-block');
container.prepend(left_block);

let right_block = document.createElement('div');
right_block.classList.add('right-block');
container.append(right_block);
// --------------------------------------------------------------------
// gallows
let gallows_image = document.createElement('img');
gallows_image.classList.add('gallows-image');
gallows_image.src = './images/gallows.svg';
gallows_image.alt = 'gallows';
left_block.prepend(gallows_image);

// human block
let loser_images = document.createElement('div');
loser_images.classList.add('loser-images');
left_block.append(loser_images);

// head block
let top_images = document.createElement('div');
top_images.classList.add('top-images');
loser_images.append(top_images);

    let head_image = document.createElement('img');
    head_image.classList.add('head-image');
    head_image.src = './images/head.svg';
    head_image.alt = 'head';
    top_images.prepend(head_image);

// body & hands block 
let middle_images = document.createElement('div');
middle_images.classList.add('middle-images');
loser_images.append(middle_images);

    // hand1 image
    let hand1_image = document.createElement('img');
    hand1_image.classList.add('hand1-image');
    hand1_image.src = './images/hand-one.svg';
    hand1_image.alt = 'hand-one';
    middle_images.prepend(hand1_image);

    // body image
    let body_image = document.createElement('img');
    body_image.classList.add('body-image');
    body_image.src = './images/body.svg';
    body_image.alt = 'body';
    middle_images.append(body_image);
    
    // hand2 image
    let hand2_image = document.createElement('img');
    hand2_image.classList.add('hand2-image');
    hand2_image.src = './images/hand-two.svg';
    hand2_image.alt = 'hand-two';
    middle_images.append(hand2_image);

// legs block
let bottom_images = document.createElement('div');
bottom_images.classList.add('bottom-images');
loser_images.append(bottom_images);

    // leg1 image
    let leg1_image = document.createElement('img');
    leg1_image.classList.add('leg1-image');
    leg1_image.src = './images/leg-one.svg';
    leg1_image.alt = 'leg-one';
    bottom_images.prepend(leg1_image);
    
    // leg2 image
    let leg2_image = document.createElement('img');
    leg2_image.classList.add('leg2-image');
    leg2_image.src = './images/leg-two.svg';
    leg2_image.alt = 'leg-two';
    bottom_images.append(leg2_image);
// --------------------------------------------------------------------
// quiz block
let word_quiz = document.createElement('div');
word_quiz.classList.add('word-quiz');
right_block.append(word_quiz);

let hint_quiz = document.createElement('div');
hint_quiz.classList.add('hint-quiz');
right_block.append(hint_quiz);

let score_quiz = document.createElement('div');
score_quiz.classList.add('score-quiz');
right_block.append(score_quiz);

let letters_quiz = document.createElement('div');
letters_quiz.classList.add('letters-quiz');
right_block.append(letters_quiz);
// --------------------------------------------------------------------
change_qa();
console.log( qa_current, qa_quiz[qa_current].word, qa_quiz[qa_current].hint );

let solution_word = qa_quiz[qa_current].word;
let solution_hint = qa_quiz[qa_current].hint;
let solution;

solution = "_".repeat(solution_word.length);
console.log(solution);
// --------------------------------------------------------------------
let solution_template = document.createElement('p');
solution_template.classList.add('solution-template');
solution_template.textContent = solution;
word_quiz.append(solution_template);

let solution_hint_print = document.createElement('p');
solution_hint_print.classList.add('solution-hint-print');
solution_hint_print.textContent = solution_hint;
hint_quiz.append(solution_hint_print);
// --------------------------------------------------------------------
let score = 0;
let arrLetters = [];

let score_print = document.createElement('p');
score_print.classList.add('score-print');
score_print.textContent = `Incorrect guesses ${score}/6`;
score_quiz.append(score_print);
// --------------------------------------------------------------------
const keyboard_layout = [ 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

keyboard_layout.forEach( (keyboard_row) => {   

    let one_row = document.createElement('div');
    one_row.classList.add('one-row');
    letters_quiz.append(one_row);

    let arr_row = keyboard_row.split('');
    console.log(arr_row);
    arr_row.forEach( (one_letter) => {
        let one_button = document.createElement('button');
        one_button.classList.add('one-button');
        one_button.classList.add(`letter_${one_letter}`);
        one_button.textContent = one_letter;
        one_button.addEventListener('click', () => {
            one_button.setAttribute('disabled', 'disabled');
            arrLetters.push(one_button.textContent);
            console.log(arrLetters);         
            
            
        });
        one_row.append(one_button);
    });

} );
// --------------------------------------------------------------------

// --------------------------------------------------------------------