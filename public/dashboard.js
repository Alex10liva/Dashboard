let locksData = []

function buttonSidebar(n) {
    let sidebarSvg = document.querySelector(`.left-sidebar ul li:nth-child(${n}) #svg-div`);
    sidebarSvg.classList.toggle('activeSvg');

    let sidebarPaths = document.querySelectorAll(`.left-sidebar ul li:nth-child(${n}) #svg-div .arrow-icon path`);
    sidebarPaths.forEach(path => path.classList.toggle('activeSvg-C'));

    let sidebarDiv = document.querySelector(`.left-sidebar ul li:nth-child(${n}) .sb-items`);
    sidebarDiv.classList.toggle('activeDiv')

    let locks = document.querySelector(`.left-sidebar ul li:nth-child(${n}) .locks-sidebar`);
    locks.classList.toggle('inactive')
}

const saveLocksData = async (locks) => {
    locksData = locks
    console.log("locks data saved!")
    console.log(locks)
}

const showSchedule = (event) => {
    let lockSchedule = event.data.schedule
    console.log(lockSchedule)
    $('.is-lock').each( function(index) {
        if ($(this).text().includes(event.data.id)) {
            $(this).addClass('active-lock')
        } else {
            $(this).removeClass('active-lock')
        }
    })

    var calendarEl = document.getElementById('calendar-content');
    let events = []
    lockSchedule.forEach(event => {
      events.push({
        title: "ID " + event["student_id"],
        start: event.start,
        end: event.end,
        allDay: false
      })
    })

    var calendar = new FullCalendar.Calendar(calendarEl, {
      events: events,
      eventTimeFormat: { // like '14:30:00'
        hour: '2-digit',
        minute: '2-digit',
      },
      locale: 'es',
      displayEventEnd: true,
      slotDuration: '01:00:00',
      initialView: 'dayGridMonth'
    });
    calendar.render();
}

const getLocksData = async () => {
    let res = await fetch (`/locks`)
    let locksData = await res.json()
    return locksData
}

const openLockSVG = `<svg width="15" height="22" viewBox="0 0 20 27" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path
    d="M16.1257 12.5H2.89071C1.8465 12.5 1 13.5582 1 14.8636V23.1364C1 24.4418 1.8465 25.5 2.89071 25.5H16.1257C17.1699 25.5 18.0164 24.4418 18.0164 23.1364V14.8636C18.0164 13.5582 17.1699 12.5 16.1257 12.5Z"
    stroke="#2B2B2B" stroke-width="2" stroke-linecap="round"
    stroke-linejoin="round" />
<path
    d="M4.51447 8V5.78261C4.51447 4.51418 5.04205 3.29771 5.98116 2.40079C6.92027 1.50388 8.19398 1 9.52208 1C10.8502 1 12.1239 1.50388 13.063 2.40079C14.0021 3.29771 14.5297 4.51418 14.5297 5.78261V12"
    stroke="#2B2B2B" stroke-width="2" stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`

const closedLockSVG = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3949 8.20001H2.98687C2.16569 8.20001 1.5 8.91636 1.5 9.80001V15.4C1.5 16.2837 2.16569 17 2.98687 17H13.3949C14.2161 17 14.8818 16.2837 14.8818 15.4V9.80001C14.8818 8.91636 14.2161 8.20001 13.3949 8.20001Z" stroke="#2B2B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00916 8.2V5C4.00916 3.93913 4.44974 2.92172 5.23398 2.17157C6.01822 1.42143 7.08189 1 8.19097 1C9.30006 1 10.3637 1.42143 11.148 2.17157C11.9322 2.92172 12.3728 3.93913 12.3728 5V8.2" stroke="#2B2B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const showLocksOnSidebar = async (locks) => {
    locks.forEach(lock => {
        let lockSchool = ""
        if (lock.id.includes("IA")){
            lockSchool = "ia"
        } else if (lock.id.includes("CI")){
            lockSchool = "ci"
        } else if (lock.id.includes("NE")){
            lockSchool = "ne"
        } else if (lock.id.includes("CS")){
            lockSchool = "cs"
        } else if (lock.id.includes("LA")){
            lockSchool = "la"
        }
        $(`#${lockSchool}-locks`).append(
            `<li id="${lock.id}" class="is-lock">
                ${lock.current_state === "open" ? openLockSVG : closedLockSVG   }
                ${lock.id}
            </li>`
        )
        $(`#${lock.id}`).click(lock, showSchedule)
    })
}

const showLogs = async (locks) => {
    locks.sort(function(a,b){
        return new Date(b.last_activity.date) - new Date(a.last_activity.date);
    });

    locks.forEach(lock => {
        let logDate = new Date(lock.last_activity.date)
        $(`.activity-container  ul`).append(
            `<li>
            <div class="date">
                <div class="time">
                    ${logDate.toLocaleTimeString()}
                </div>
                <div class="day">
                    ${logDate.toLocaleDateString()}
                </div>
            </div>
            <div>${lock.last_activity.message}</div>
        </li>`
        )

    })
}

const showWarnings = async (locks) => {
    locks.forEach(lock => {
        if (lock.warning){
            $(`.warnings-container  ul`).append(
                `<li>
                    <div>${lock.warning}</div>
                </li>`
            )
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar-content');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        events: [
            
        ],
        eventTimeFormat: { // like '14:30:00'
          hour: '2-digit',
          minute: '2-digit',
        },
        locale: 'es',
        displayEventEnd: true,
        slotDuration: '01:00:00',
        initialView: 'dayGridMonth'
    });
    calendar.render();
});

getLocksData().then(locks => {
    saveLocksData(locks)
    showLocksOnSidebar(locks)
    showLogs(locks)
    showWarnings(locks)
})
