var applePic = document.getElementById("apple");


function Fruit() {
    
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) +1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) +1) * scale;
    }

    this.draw = function() {
        // function apple() {
        //     applePic;
        // }
        // "<img src="images/apple.png" id="apple" width="10px"/>"
        // this.x = applePic;
        // ctx.fillStyle = applePic;
        ctx.fillStyle = "rgb(248, 37, 37)";
        
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}