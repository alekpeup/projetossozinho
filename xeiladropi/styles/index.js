


function revisar() {
   let primeiroDado = document.getElementById('email').value;
   let SegundoDado = document.getElementById( 'password').value;

   document.getElementById('showDatasEmail').innerHTML = primeiroDado;
   document.getElementById('showDatasPassword').innerHTML = SegundoDado;
};


function sumir() { 
      document.getElementById('cadastramento');
}