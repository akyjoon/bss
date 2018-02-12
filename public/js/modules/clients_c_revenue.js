class ClientsRevenue {
  constructor() {
    this.clientData = [];
    this.ctx = document.getElementById("ccit1");
    this.ccit1 = new Chart(this.ctx, {
        responsive: true,
        maintanAspectRatio: false,
      type: 'bar',
      data: {
          labels: [],
          datasets: [{
              label: '',
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
    fetch('/clients/json/totalDAValue')
      .then(res => res.json())
      .then(data => {
        data.forEach(client => {
            //change datas
          this.ccit1.data.labels.push(client.name);
          this.ccit1.data.datasets[0].data.push(client.revenue);
          this.ccit1.data.datasets[0].label = 'Clients Total DA Value'

          //update datas
          this.ccit1.update();
        })
      })
      .catch(err => console.log(err))
  }



}

export default ClientsRevenue;