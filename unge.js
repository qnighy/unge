var image_1 = new Image(256, 256);
var image_bomb = new Image(256, 256);
var image_bomb2 = new Image(256, 256);
var image_button = new Image(256, 256);
image_1.src = "1.png";
image_bomb.src = "bomb.png";
image_bomb2.src = "bomb2.png";
image_button.src = "button.png";
var cells = [null, null];
for(var i = 0; i < 2; ++i) {
  cells[i] = document.getElementById("cell" + i);
}
var bomb;
function restart() {
  bomb = Math.floor(Math.random() * 2);
  for(var i = 0; i < 2; ++i) {
    cells[i].onclick = function(i) {
      if(i == bomb) {
        cells[bomb].src = image_bomb2.src;
        cells[1-bomb].src = image_1.src;
      } else {
        cells[bomb].src = image_bomb.src;
        cells[1-bomb].src = image_1.src;
      }
    }.bind(null, i);
    cells[i].src = image_button.src;
  }
}
restart();
document.getElementById("start_button").onclick = restart;
