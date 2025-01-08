<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./estiloTeste/teste.css">
    <title>Menu Responsivo</title>
</head>
<body>

        <div class="off-screen-menu">
            <ul>
                <li>About</li>
                <li>Home</li>
                <li>Services</li>
            </ul>
        </div>
        <nav>
            <div class="ham-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>

        <script>
            const hamMenu = document.querySelector('.ham-menu');
            const offSCreenMenu = document.querySelector('.off-screen-menu');
            hamMenu.addEventListener('click', () => {
                hamMenu.classList.toggle('active');
                offScreenMenu.classList.toggle('active');
            })
        </script>
</body>
</html>