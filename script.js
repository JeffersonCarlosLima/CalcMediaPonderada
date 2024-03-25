function mediaPonderada(){
    let n1 = document.getElementById( "nota1" ).value;
    let n2 = document.getElementById( "nota2" ).value;
    let n3 = document.getElementById( "nota3" ).value;
    let n4 = document.getElementById( "nota4" ).value;
    
    const calcularMedia = (n1 * 2 + n2 * 3 + n3 * 2 + n4 * 3) / 10 ;
    console.log(calcularMedia);
    document.getElementById( "resultado" ).innerText = "A Média Ponderada é: " + calcularMedia;

}