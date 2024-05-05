// const datetime = document.getElementById('d_and_t');
// setInterval(function(){
//     let date = new Date();
//     datetime.innerHTML = date.toLocaleDateString();
//     datetime.innerHTML = date.toLocaleTimeString(); // Corrected line
// },1000);


// const dateTime = document.getElementById('d_and_t');

// function updateDateTime() {
//     const now = new Date();
//     const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
//     const formattedDate = now.toLocaleDateString(undefined, dateOptions);
//     const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
//     dateTime.textContent = `${formattedDate} ${formattedTime}`;
// }

// // Call updateDateTime initially to display the current date and time immediately
// updateDateTime();

// // Update date and time every second
// setInterval(updateDateTime, 1000);



const DateTime = document.getElementById('d_and_t');

function liveDateTime(){
    const now = new Date();
    const dateOptions ={weekday:'long', year:'numeric',day:'numeric',month:'long'};
    // const dateOptionslong ={day:'numeric',month:'numeric',year:'numeric'};
    // const timeOptions = { hour:'numeric',minute:'numeric',second:'numeric'};
    const formattedDates =now.toLocaleDateString();
    const formattedDate =now.toLocaleDateString(undefined,dateOptions);
    // const formattedDateLong = now.toLocaleDateString(undefined,dateOptionslong);
    const formattedTime = now.toLocaleTimeString();
    DateTime.innerHTML = `${formattedDate} </br>${formattedDates} </br>${formattedTime}`
    

}

liveDateTime();
setInterval(liveDateTime,1000);