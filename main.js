canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "Car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "Car2.png";
car2_x = 10;
car2_y = 90;

background_image = "racing.jpg"

function add(){
    racing_imgTag = new Image();
    racing_imgTag.onload = uploadbackground;
    racing_imgTag.src = background_image;

    Car1_imgTag = new Image();
    Car1_imgTag.onload = uploadcar1;
    Car1_imgTag.src = car1_image;

    Car2_imgTag = new Image();
    Car2_imgTag.onload = uploadcar2;
    Car2_imgTag.src = car2_image;
}

function uploadbackground(){
    ctx.drawImage(racing_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(Car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(Car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == 37){
        car1_left();
        console.log("left arrow key")
    }
    if(keypressed == 38){
        car1_up();
        console.log("up arrow key")
    }if(keypressed == 39){
        car1_right();
        console.log("right arrow key")
    }
    if(keypressed == 40){
        car1_down();
        console.log("down arrow key")
    }
    if(keypressed == 87){
        car2_up();
        console.log("w key")
    }
    if(keypressed == 65){
        car2_left();
        console.log("a key")
    }
    if(keypressed == 68){
        car2_right();
        console.log("d key")
    }
    if(keypressed == 83){
        car2_down();
        console.log("s key")
    }
}

function car1_left(){
    if(car1_x >= 0){
        car1_x = car1_x - 10;
        console.log("when left arrow is pressed, x= " + car1_x + ", y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right(){
    if(car1_x <= 700){
        car1_x = car1_x + 10;
        console.log("when right arrow is pressed, x= " + car1_x + ", y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, x= " + car1_x + ", y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down(){
    if(car1_y <= 500){
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x= " + car1_x + ", y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down(){
    if(car2_y <= 500){
        car2_y = car2_y + 10;
        console.log("when s is pressed, x= " + car2_x + ", y = " + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_up(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        console.log("when w is pressed, x= " + car2_x + ", y = " + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left(){
    if(car2_x >= 0){
        car2_x = car2_x - 10;
        console.log("when a is pressed, x= " + car2_x + ", y = " + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right(){
    if(car2_x <= 700){
        car2_x = car2_x + 10;
        console.log("when d is pressed, x= " + car2_x + ", y = " + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}