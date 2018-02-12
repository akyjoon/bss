class DashboardContIt3 {
  constructor() {
    this.clientData = [];
    this.ctx = document.getElementById("dcit3");
    this.dcit3 = new Chart(this.ctx, {
        responsive: true,
        maintanAspectRatio: false,
      type: 'bar',
      data: {
          labels: [],
          datasets: [{
              label: '# of Votes',
              data: [],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });


    //initiate methods
    this.fetcher();

  }

  //declare methods
  fetcher() {
    fetch('/json/clients')
      .then(res => res.json())
      .then(data => {
        data.forEach(client => {
            //change datas
          this.dcit3.data.labels.push(client.name);
          this.dcit3.data.datasets[0].data.push(client.name.length);
          this.dcit3.data.datasets[0].label = 'Clients name length'

          //update datas
          this.dcit3.update();
        })
      })
      .catch(err => console.log(err))
  }


 
}

export default DashboardContIt3;