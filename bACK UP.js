<html>
<head>
<title>HELLOOO<3</title>
<style>
p {
text-align: center;
font-size: 32px;
font-family: Condara, Oswald;
}
img {
display: block;
margin: 0 auto;
width 50%;
}
</style>
</head>
<body>
<p>WANNA HANG OUT SOON?!?</p>
<img src="https://media.tenor.com/zGm5acSjHCIAAAAM/cat-begging.gif">
</body>
<title>Botões</title>
<style>
#botao1 {
position: fixed;
top: 70%;
left: 55%;
transform: translate(-50%, -50%);
}
#botao2 {
position: absolute;
 left: 39%;
  top: 68%;
}
</style>
</head>
<body>
<button id="botao1">HELL YES!<3</button>
<button id="botao2">NO</button>
<script>
const button2 = document.getElementById('botao2');
let left = 40;
button2.addEventListener('mouseover', function() {
  if(left == 40){
    left = 44;
  }else{
    left = 40;
  }
  this.style.left = left + '%';
});

</script>
<script>document.getElementById('botao1').addEventListener('click', function() {
alert('YAYYAYAYY THANKS BABE, LOVE f(x)OU');
});
</script>
</body>
</html>