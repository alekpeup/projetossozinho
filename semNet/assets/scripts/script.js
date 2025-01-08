// evitando if e else

function sacolinhaShow() {
   if (document.getElementById('sacolinha').style.display === 'block'){
      document.getElementById('sacolinha').style.display = 'none';
   } else {
      document.getElementById('sacolinha').style.display = 'block';
   };
};


function productBox() { 
   if(document.getElementById('productCaixa').style.display === 'block') { 
      document.getElementById('productCaixa').style.display = 'none'
   } else { 
      document.getElementById('productCaixa').style.display = 'block'
   }
};