function start() {
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");

      // Create gradient
      var grd = ctx.createRadialGradient(75,50,5,90,60,100);
      grd.addColorStop(0,"red");
      grd.addColorStop(1,"white");
      
      // Fill with gradient
      ctx.fillStyle = grd;
      ctx.fillRect(10, 10, 150, 80);
}

function clear() {
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "blue";
      ctx.fillRect(0, 0, 200, 100);

}

document.getElementById("button_start").addEventListener("click", start);
document.getElementById("button_clear").addEventListener("click", clear);
