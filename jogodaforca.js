function SorteiaPalavra(){
    n1=Math.floor(Math.random()*temas.length);
    tema=temas[n1];
    if(n1==0){
        t="FRUTAS";
    }
    else if(n1==1){
        t="CORES";
    }
    else if(n1==2){
        t="ANIMAIS";
    }
    else if(n1==3){
        t="NOMES";
    }
    document.getElementById("tema").innerHTML+=t;
    n2=Math.floor(Math.random()*tema.length);
    palavra=tema[n2].toUpperCase();
}
function EscrevePalavra(){
    tracos=document.getElementById("palavra");
    for(c=0;c<palavra.length;c++){
        p=document.createElement("p");
        p.setAttribute("id",""+c)
        p.setAttribute("class","letra");
        tracos.appendChild(p);
    }
}
function CriaTeclado(){
    letras=[['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L'],['Z','X','C','V','B','N','M']];
    div=document.getElementById("teclado")
    for(c=0;c<3;c++){
        div1=document.createElement("div");
        div1.setAttribute("class","linha");
        for(i=0;i<letras[c].length;i++){
            input=document.createElement("button");
            texto=document.createTextNode(letras[c][i]);
            input.appendChild(texto);
            input.addEventListener("click",Testa)
            input.setAttribute("class","teclado");
            div1.appendChild(input);
        }
        div.appendChild(div1);
    }

}
function Testa(){
    botao=this;
    letra=botao.innerHTML;
    if(!palavra.includes(letra) && !document.getElementById("letras").innerHTML.includes(letra)){
        imagem=document.getElementById("imagem");
        contador++
        imagem.src="Imagens/forca"+contador+".png";
        letras=document.getElementById("letras");
        letras.innerHTML+=letra+"-";
        if(contador==9){
            tela=[
                '<div class="container">',
                '    <div class="box">',
                '        <h1>Sinto Muito! Você perdeu!</h1>',
                '        <a href="index.html"><button class="botao2">Jogar Novamente</button></a>',
                '    <div>',
                '</div>'
            ]
            setTimeout(()=>{document.querySelector("body").innerHTML=tela.join("\n")},500);
        }
    }
    else{
        for(c=0;c<palavra.length;c++){
            if(palavra[c]==letra){
                p=document.getElementById(""+c);
                p.innerHTML=letra;
            }
        }
        if(TestaPalavra()){
            tela=[
                '<div class="container">',
                '    <div class="box">',
                '        <h1>Parabéns! Você ganhou!</h1>',
                '        <a href="index.html"><button class="botao2">Jogar Novamente</button></a>',
                '    <div>',
                '</div>'
            ]
            setTimeout(()=>{document.querySelector("body").innerHTML=tela.join("\n")},500);
        }
    }
}
function TestaPalavra(){
    tof=true;
    for(c=0;c<palavra.length;c++){
        p=document.getElementById(""+c);
        if(p.innerHTML==""){
            tof=false
        }
    }
    return tof
}
var palavra, contador=0;
SorteiaPalavra();
EscrevePalavra();
CriaTeclado();
document.getElementById("letras").innerHTML="";