const ctx1 = document.getElementById('myChart_first').getContext('2d');
const ctx2 = document.getElementById('myChart_second').getContext('2d');
let mydata;    

    
async function fetch_data() {
    
await fetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
    .then(res => res.json())
    .then(res => {
    
    mydata = res[4];
    
})
    .catch(err => console.log(err));
        
    }


function first_drow_chart() {

const chart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Cases', 'Recovered', 'Deaths'],
        datasets: [{
            label: ['My First dataset','test'],
            backgroundColor: ['#FFF59D','#A5D6A7','#EF9A9A'],
            data: [mydata.cases,mydata.recovered,mydata.deaths],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
                display: true,
                position: 'top',
            },
         title: {
            display: true,
            text: 'All time data',
            fontSize: 28,
            fontFamily: 'Questrial',
            padding: 20
        }
    }
});
    
}



function second_drow_chart() {

const chart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Today Cases', 'Today Recovered', 'Today Deaths'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#FFF9C4','#C8E6C9','#FFCDD2'],
            data: [mydata.todayCases,mydata.todayRecovered,mydata.todayDeaths],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
                display: true,
                position: 'top',
            },
         title: {
            display: true,
            text: "Today's data",
            fontSize: 28,
            fontFamily: 'Questrial',
            padding: 20
        }
    }
});
    
}



async function main() {
    await fetch_data();  
    
    await first_drow_chart();
    await second_drow_chart();
}
main();