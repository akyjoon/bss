class DashboardContIt1 {
  constructor() {
    this.clientData = [];
    this.ctx = document.getElementById("dcit1");
    this.dcit1 = new Chart(this.ctx, {
      responsive: true,
      maintanAspectRatio: false,
      type: 'radar',
      data: {
          labels: [],
          datasets: [{
              label: '# of Votes',
              data: [],
              backgroundColor: [
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
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
    fetch('https://localhost:7000/json/clients')
      .then(res => res.json())
      .then(data => {
        data.forEach(client => {
            //change datas
          this.dcit1.data.labels.push(client.name);
          this.dcit1.data.datasets[0].data.push(client.name.length);
          this.dcit1.data.datasets[0].label = 'Clients name length'

          //update datas
          this.dcit1.update();
        })
      })
      .catch(err => console.log(err))
  }



}

export default DashboardContIt1;