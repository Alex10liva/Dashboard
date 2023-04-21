function buttonSidebar(n) {
    let sidebarSvg = document.querySelector(`.left-sidebar ul li:nth-child(${n}) #svg-div`);
    sidebarSvg.classList.toggle('activeSvg');

    let sidebarPaths = document.querySelectorAll(`.left-sidebar ul li:nth-child(${n}) #svg-div .arrow-icon path`);
    sidebarPaths.forEach(path => path.classList.toggle('activeSvg-C'));

    let sidebarDiv = document.querySelector(`.left-sidebar ul li:nth-child(${n})`);
    sidebarDiv.classList.toggle('activeDiv')

    let sideBarN = document.querySelector(`.left-sidebar ul`);

    for (let i = 1; i < sideBarN.childElementCount + 1; i++) {
        if (i != n) {
            sidebarSvg = document.querySelector(`.left-sidebar ul li:nth-child(${i}) #svg-div`);
            if (sidebarSvg.classList.contains('activeSvg')) {
                sidebarSvg.classList.remove('activeSvg')
            }

            sidebarPaths = document.querySelectorAll(`.left-sidebar ul li:nth-child(${i}) #svg-div .arrow-icon path`);
            for (let i = 0; i < sidebarPaths.length; i++) {
                if (sidebarPaths[i].classList.contains('activeSvg-C')) {
                    sidebarPaths[i].classList.remove('activeSvg-C')
                }
            }
            sidebarDiv = document.querySelector(`.left-sidebar ul li:nth-child(${i})`);
            if (sidebarDiv.classList.contains('activeDiv')) {
                sidebarDiv.classList.remove('activeDiv')
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar-content');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'es',
        initialView: 'dayGridMonth'
    });
    calendar.render();
});
