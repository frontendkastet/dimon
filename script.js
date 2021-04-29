let date = new Date('apr 30 2021 17:00:00');

function counts(){
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60/ 24);
    let hours = Math.floor(gap / 1000 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;
    
    if (gap < 0) {
        document.getElementById('group').innerText = days + ' ДИМА, Ты TECHNICAL SUPPORT ';
    } else {

        document.getElementById('d').innerText = days + ' Дней ';
        document.getElementById('h').innerText = hours + ' Часов ';
        document.getElementById('m').innerText = minutes + ' Минут ';
        document.getElementById('s').innerText = seconds + ' Секунд ';
  };
};
counts();

setInterval(counts, 1000);