car1_width=50;
car1_height=50;

car1_x=100;
car1_y=100;

car1_image="car1.png";
background_image="SNE28167.jpg";

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car2_width=50;
car2_height=50;

car2_x=100;
car2_y=200;

car2_image="car2.png";

function add()
{
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground();
    background_imgtag.src=background_image;

    car1_imgtag=new Image();
    car1_imgtag.onload=uploadCar1();
    car1_imgtag.src=car1_image;

    car2_imgtag=new Image();
    car2_imgtag.onload=uploadCar2();
    car2_imgtag.src=car2_image;
}


function uploadBackground()
{
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadCar1()
{
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_height,car1_width);
}

function uploadCar2()
{
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_height,car2_width);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypress=e.keyCode;
    console.log(keypress);


    if (keypress == '39')
    {
        right1();
     
        console.log("right car 1");
    }

    if (keypress == '37')
    {
        left1();
        console.log("left car 1");
    }
    
    if (keypress== '38')
    {
        right2();
        
        console.log("right car 2");
    }

    if (keypress == '40')
    {
        left2();
        console.log("left car 2");
    }
}

function right1()
{
    if (car1_x>0)
    {
        car1_x=car1_x + 10 ;
        console.log("x = "+ car1_x , "y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function left1()
{
    if (car1_x<800)
    {
        car1_x=car1_x - 10 ;
        console.log("x = " + car1_x , "y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right2()
{
    if (car2_x>0)
    {
        car2_x=car2_x + 10 ;
        console.log("x = "+ car2_x , "y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function left2()
{
    if (car2_x<600)
    {
        car2_x=car2_x - 10 ;
        console.log("x = " + car2_x , "y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

