var canvas= new fabric.Canvas("myCanvas");
part_image_width=30;
part_image_height=30;
document.getElementById("current_width").innerHTML=part_image_width;
document.getElementById("current_height").innerHTML=part_image_height;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("groot.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function part_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        part_object=Img;
        part_object.scaleToWidth(part_image_width);
        part_object.scaleToHeight(part_image_height);
        part_object.set({
            top:player_y,left:player_x
        });
        canvas.add(part_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
if(keypressed=="84"){
    part_update('thor_right_hand.png');
    console.log("t");
}
if(keypressed=="68"){
    part_update('hulk_legs.png');
    console.log("d");
}
if(keypressed=="76"){
    part_update('ironman_face.png');
    console.log("l");
}
if(keypressed=="67"){
    part_update('captain_america_left_hand.png');
    console.log("c");
}
if(keypressed=="85"){
    part_update('spiderman_body.png');
    console.log("u");
}
if(keypressed=="80" && e.shiftKey==true){
    part_image_width=part_image_width+10;
    document.getElementById("current_width").innerHTML=part_image_width;
    part_image_height=part_image_height+10;
    document.getElementById("current_height").innerHTML=part_image_height;
    console.log("p");
}
if(keypressed=="77" && e.shiftKey==true){
    part_image_width=part_image_width-10;
    document.getElementById("current_width").innerHTML=part_image_width;
    part_image_height=part_image_height-10;
    document.getElementById("current_height").innerHTML=part_image_height;
    console.log("m");
}
if(keypressed=="38"){
     up()
    console.log("up arrow");
}
if(keypressed=="40"){
    down()
   console.log("down arrow");
}
if(keypressed=="37"){
    left()
   console.log("left arrow");
}
if(keypressed=="39"){
    right()
   console.log("right arrow");
}
}
function up(){
    player_y=player_y-10;
    canvas.remove(player_object);
    player_update();
}
function down(){
    player_y=player_y+10;
    canvas.remove(player_object);
    player_update();
}
function left(){
    player_x=player_x-10;
    canvas.remove(player_object);
    player_update();
}
function right(){
    player_x=player_x+10;
    canvas.remove(player_object);
    player_update();
}
