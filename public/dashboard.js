function buttonSidebar(n){
    let sidebar = document.querySelector(`.left-sidebar ul li:nth-child(${n}) #svg-div`);
    sidebar.classList.toggle('active');
}