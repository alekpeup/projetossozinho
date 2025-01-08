
// function mostrar(){
// let dategetting = document.getElementById('date');
// let date = dategetting.value;
// let sub = document.getElementById('sub');
// let mostrarr= document.getElementById('datasaida');

// mostrarr.innerText = date;

// }


function previewImage() {
  const fileInput = document.getElementById('file-input');
  const preview = document.getElementById('preview');
  const file = fileInput.files[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    // Quando o arquivo for carregado, definimos o `src` da imagem
    reader.onload = function(e) {
      preview.src = e.target.result; // Define o conteúdo da imagem
      preview.style.display = 'block'; // Mostra a imagem
    };

    reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
  } else {
    alert('Por favor, selecione um arquivo de imagem.');
  }
}
