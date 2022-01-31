function chamarModal(){
    let a = document.getElementById("nao")
    a.style.display = 'none'
    setTimeout(() => {
        fecharModal()
    }, 1500);
 }
 function fecharModal(){
    let a = document.getElementById("nao")
    a.style.display = 'block'
     
 }