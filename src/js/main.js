import '@styles/main.scss';
import image from '@assets/images/tonyem.jpg';
import Model from '@models/Model';

const x = 5;
const y = 2;

const model = new Model('Test title');

model.testString();
console.log(model.testNumbers(x, y));
console.log(model.testNumbers(3, 10));

const mainImage = document.createElement('img');
mainImage.src = image;
document.querySelector('body').append(mainImage);
