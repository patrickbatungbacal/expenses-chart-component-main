//GET DATA FROM JSON FILE
fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let days = data;

        const topDay = Math.max(...days.map(day => day.amount));
        
        for (const day of days) {
            let today = document.querySelector(`#${day.day}`);
            today.style.height = (day.amount * 2) + 'px';
            today.setAttribute('data-amount', `$${day.amount}`);
            
            if(day.amount == topDay) {
                document.querySelector(`#${day.day}`).classList.add('topDay');
            }
        }

        });
