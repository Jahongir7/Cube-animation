(function() {
    var rotateY=0;
    var rotateX=0;
    
  document.onkeydown = function(e) {
        if (e.keyCode===37) rotateY -=10
        else if (e.keyCode===38) rotateX+=10
        else if (e.keyCode===39) rotateY+=10
        else if (e.keyCode===40) rotateY-=10
document.getElementById('cube').style.transform ='rotateY('+ rotateY + 'deg)'+ 
        'rotateX(' + rotateX + 'deg)';

    }
})();