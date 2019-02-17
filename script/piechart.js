    window.onload = function() {
    let myFirstChart = document.getElementById('myFirstChart').getContext('2d');
    let mySecondChart = document.getElementById('mySecondChart').getContext('2d');
    let myThirdChart = document.getElementById('myThirdChart').getContext('2d');
    //let myLegendChart = document.getElementById('myLegendChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let firstChart = new Chart(myFirstChart, {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Others', 'Endangered', 'Critically Endangered'],
        datasets:[{
          label:'Population',
          data:[
            1102,
            50,
            26
          ],
          backgroundColor:[
            'rgba(75, 192, 192, 0.6)',
            '#ff7d92',
            '#ee1924'
          ],
          borderWidth:1,
          borderColor:'#ffffff',
          hoverBorderWidth:3,
          hoverBorderColor:'#777777'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Northwestern Andean montane forests',
          fontSize:18
        },
        legend:{
          display:false,
          position:'top',
          labels:{
            fontColor:'#000',
            fontSize: 16
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });

    let secondChart = new Chart(mySecondChart, {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Others', 'Endangered', 'Critically Endangered'],
        datasets:[{
          label:'Population',
          data:[
            1093,
            55,
            11
          ],
          backgroundColor:[
            'rgba(75, 192, 192, 0.6)',
            '#ff7d92',
            '#ee1924'
          ],
          borderWidth:1,
          borderColor:'#ffffff',
          hoverBorderWidth:3,
          hoverBorderColor:'#777777'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Eastern Cordillera real montane forests',
          fontSize:18
        },
        legend:{
          display:false,
          position:'top',
          labels:{
            fontColor:'#000',
            fontSize: 16
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });

    let thirdChart = new Chart(myThirdChart, {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Others', 'Endangered', 'Critically Endangered'],
        datasets:[{
          label:'Population',
          data:[
            866,
            32,
            19
          ],
          backgroundColor:[
            'rgba(75, 192, 192, 0.6)',
            '#ff7d92',
            '#ee1924'
          ],
          borderWidth:1,
          borderColor:'#ffffff',
          hoverBorderWidth:3,
          hoverBorderColor:'#777777'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Magdalena Valley montane forests',
          fontSize:18
        },
        legend:{
          display:false,
          position:'top',
          labels:{
            fontColor:'#000',
            fontSize: 16
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}
   