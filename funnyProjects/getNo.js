document.getElementById('no').addEventListener('mouseover', function() {
  var xPos = Math.floor(Math.random() * window.innerWidth);
  var yPos = Math.floor(Math.random() * window.innerHeight);
  document.getElementById('no').style.position = 'absolute';
  document.getElementById('no').style.left = xPos + 'px';
  document.getElementById('no').style.top = yPos + 'px';
});
