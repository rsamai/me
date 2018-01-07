var img;


function preload() {
  img = loadImage("beach.png");
  
}


function setup() {
  createCanvas(750, 1000);
  img.loadPixels();
 
  background(0);
  noLoop();

  var pix;

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      pix = img.get(x, y); 

      if (pix[0] >200 && pix[1] > 200 && pix[2] >200) {
              img.set(x, y, [0, 0,100, 255]);          // change eyes and eyebrows color
            
          }
          // set gray color level 2
      else if (pix[0] < 220 && pix[1] < 220 && pix[2] < 220) {
        img.set(x, y, [120, 120, 120, 255]);
        

      }
      // set white color level 1
      else if (pix[0] < 255 && pix[1] < 255 && pix[2] < 255) {
        if(y>85)
        img.set(x, y, [135,206,250, 255]);
      
      }


      }


      
    } 
    img.updatePixels();
  }

 
  

function draw() {
  image(img, 0, 0);
 
}






