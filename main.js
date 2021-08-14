
// Create canvas variable
canvas=new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_obj= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function (Img) {
        block_image_obj = Img;
        block_image_obj.scaleToWidth(block_image_width);
        block_image_obj.scaleToHeight(block_image_height);
        block_image_obj.set({
            top: block_y,
            left: block_x
        });
     canvas.add(block_image_obj);  
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		console.log("R is being pressed")
		new_image("rr.jpg");

	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		console.log("G is being pressed")
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		console.log("Y is being pressed")
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		console.log("P is being pressed")
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	console.log("B is being pressed")
		new_image("br.png");
	}
	
}

