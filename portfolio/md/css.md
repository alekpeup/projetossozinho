.off-screen-menu{
    background-color: #0004;
    height: 100vh;
    width: 100%;
    max-width: 450px;
    position: fixed;
    top: 0;
    right: -450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3rem;
    transition: .3s ease;
}
.off-screen-menu.active {
    right: 0;
}

nav {
    padding: 1rem;
    display: flex;
    background-color: #033002;

}
.ham-menu {
    height: 50px;
    width: 50px;
    margin-left: auto;
    position: relative;

}

.ham-menu span {
    height: 5px;
    width: 100%;
    background-color: lightblue;
    border-radius: 25%;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    transition: .3s ease;
    cursor: pointer;
}
.ham-menu span:nth-child(1)
{
    top: 25%;
}
.ham-menu span:nth-child(3){
    top: 75%;
}

.ham-menu.active span:nth-child(1)
{
    top:50%;
    transform: translate(-50%, -50%) rotate(45deg);
}
.ham-menu.active span:nth-child(2) {
    opacity: 0;
}
.ham-menu.active span:nth-child(3){
    top: 50%;
    transform: translate(-50%, 50%) rotate(-45deg);
}
