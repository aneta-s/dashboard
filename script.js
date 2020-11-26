//Main chart
let myChart = document.getElementById('myChart').getContext('2d');
        
//Global Options
Chart.defaults.global.defaultFontFamily= 'Raleway';
Chart.defaults.global.defaultFontSize= 18;
Chart.defaults.global.defaultFontColor= 'rgba(68, 67, 92)';
let massPopChart = new Chart (myChart, {
            type: 'bar',
            data: {
                labels: ['creati', 'inz', 'inspi', 'vooru', 'vast', 'altru'],
                datasets: [{
                    label: 'Punten',
                    data: [90, 60, 40, 29, 79, 55
                    ],
                    backgroundColor: ['rgba(240, 221, 241)'],
                    borderWidth:1,
                    borderColor:'rgba(68, 67, 92)',
                    hoverBorderWidth:3,
                    hoverBorderColor:'rgba(68, 67, 92)'

                }]
            },
            //Targeting different sections adding Title

            options: {
                legend: {
                    display: false
                   
                }
            },
            
        });
        
//Main chart
let myChart1 = document.getElementById('myChart1').getContext('2d');
        
//Global Options
Chart.defaults.global.defaultFontFamily= 'Raleway';
Chart.defaults.global.defaultFontSize= 18;
Chart.defaults.global.defaultFontColor= 'rgba(68, 67, 92)';
let massPopChart1 = new Chart (myChart1, {
            type: 'radar',
            data: {
                labels: ['creati', 'inz', 'inspi', 'vooru', 'vast', 'altru'],
                datasets: [{
                    label: 'Punten',
                    data: [90, 60, 40, 29, 79, 55
                    ],
                    backgroundColor: ['rgba(240, 221, 241)'],
                    borderWidth:1,
                    borderColor:'rgba(68, 67, 92)',
                    hoverBorderWidth:3,
                    hoverBorderColor:'rgba(68, 67, 92)'

                }]
            },
            //Targeting different sections adding Title

            options: {
                legend: {
                    display: false
                   
                }
            },
            
        });
        
//Main chart
let myChart2 = document.getElementById('myChart2').getContext('2d');
        
//Global Options
Chart.defaults.global.defaultFontFamily= 'Raleway';
Chart.defaults.global.defaultFontSize= 18;
Chart.defaults.global.defaultFontColor= 'rgba(68, 67, 92)';
let massPopChart2 = new Chart (myChart2, {
            type: 'pie',
            data: {
                labels: ['creati', 'inz', 'inspi', 'vooru', 'vast', 'altru'],
                datasets: [{
                    label: 'Punten',
                    data: [90, 60, 40, 29, 79, 55
                    ],
                    backgroundColor: ['rgba(240, 221, 241)'],
                    borderWidth:1,
                    borderColor:'rgba(68, 67, 92)',
                    hoverBorderWidth:3,
                    hoverBorderColor:'rgba(68, 67, 92)'

                }]
            },
            //Targeting different sections adding Title

            options: {
                legend: {
                    display: false
                   
                }
            },
            
        });
        