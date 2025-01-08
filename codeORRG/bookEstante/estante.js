

let detalhesBtn = document.querySelectorAll('.bookDetails1');

detalhesBtn.addEventListener('click',  () => {
    alert("lkjfasdjflajsdkfjalsdjflkajsdfjaslkdfkajsdklfj")
   
    let detalhesBox = document.createElement("div");
    detalhesBox.innerHTML = '<img src="./imgs/ThePianistPoster.jpg">';


    detalhesBox.classList.toggle('detalhes-container');
    document.body.innerHTML.appendChild(detalhesBox);
})