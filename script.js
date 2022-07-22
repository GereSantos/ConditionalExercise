let nome = window.prompt('Insira o nome do Piloto ')
let velocity = 0
let newvelocity = parseInt(window.prompt('Insira a que velocidade gostaria de acelerar ')) 
let cconfirm = confirm('Tem certeza que desejar ir a ' + newvelocity + "km/s ? " )

velocity = velocity + newvelocity
if(velocity <=0){
    alert('Nave está parada. Considere partir e aumentar a velocidade.')
}else if(velocity <40){
    alert('Você está devagar, podemos aumentar mais!')
}else if(velocity >=40){
    alert('Parece uma boa velocidade para manter.')
}else if(velocity >=80 && velocity < 100){
    alert('Velocidade alta. Considere Diminuir.')
}else if(velocity >= 100){
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Nome do Piloto: " + nome + "\n" +
      "Velocidade Atual: " + velocity)