 const receb = document.querySelector('.btn')
 const en = document.querySelector('.enviar')
 const d = document.querySelector('.disponivel')


 function convertValues(){
    window.open("janela.html","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400")
}

receb.addEventListener("click",convertValues)



function env(){
    
    d.innerHTML='indisponivel'
    
}

 en.addEventListener('click',env)