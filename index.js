document.addEventListener('DOMContentLoaded', () => {

    const mainContainer = document.getElementById("main-container");
    const mainHeader = document.getElementById("main-header")
    const mainHeaderH1 = document.getElementById("main-header-h1");
    const mainHeaderP = document.querySelector(".main-header-p");
    const mainHeaderA = document.querySelectorAll(".main-header-a");


    mainHeader.addEventListener("mouseover", (event) => {
        mainContainer.style.width = "500px"
        mainContainer.style.backdropFilter = "blur(5px)";
        mainContainer.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(200, 200, 200, 0.5)";
        mainContainer.style.background = "rgba(255, 255, 255, 0.2)";
        mainContainer.style.top = "50vh"

        mainHeaderH1.style.textShadow = "none"

        mainHeaderP.style.color = "rgba(0, 0, 0, 1)";
        mainHeaderP.style.transition = "0.5s"
        mainHeaderP.style.display = "block";

        mainHeaderA.forEach(mainHeaderA => {
            mainHeaderA.style.color = "rgba(0, 0, 0, 1)";
            mainHeaderA.style.transition = "0.5s"
            mainHeaderA.style.display = "block";
        })
        mainContainer.style.height = `${mainHeader.offsetHeight + 30}px`;
    })

    mainHeader.addEventListener("mouseout", (event) => {
        mainContainer.style.width = "280px"
        mainContainer.style.backdropFilter = "none";
        mainContainer.style.boxShadow = "none";
        mainContainer.style.background = "rgba(255, 255, 255, 0)"
        mainContainer.style.top = "40vh"

        mainHeaderH1.style.textShadow = "2px 3px 10px rgba(255, 255, 255, 1), 0px 1px 10px rgba(255, 255, 255, 1)"

        mainHeaderP.style.color = "rgba(0, 0, 0, 0)";
        mainHeaderP.style.transition = "0.5s";
        mainHeaderP.style.display = "none";
        mainHeaderA.forEach(mainHeaderA => {
            mainHeaderA.style.color = "rgba(0, 0, 0, 0)";
            mainHeaderA.style.transition = "0.5s";
            mainHeaderA.style.display = "none";
        })
        mainContainer.style.height = "100px";
    })
})