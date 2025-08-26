console.log("Baruch HaShem!");

const canvas = document.querySelector('#myCanvas');
const bandeira = canvas.getContext('2d');

const rectX = 0;
const rectY = 0;
const rectWidth = 500;
const rectHeight = 250;

bandeira.fillStyle = '#ffffff';
bandeira.fillRect(rectX, rectY, rectWidth, rectHeight);

bandeira.strokeStyle = '#212121';
bandeira.lineWidth = 5;
bandeira.strokeRect(rectX, rectY, rectWidth, rectHeight)

const raio = 90;
bandeira.beginPath();
bandeira.arc(rectWidth / 2, rectHeight / 2, raio, 0, Math.PI * 2);
bandeira.fillStyle = '#b82d2dff';
bandeira.fill();