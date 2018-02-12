class DashboardContIt2 {
  constructor() {
    this.clientData = [];
    this.ctx = document.getElementById("dcit2");
    this.dcit2 = new Chart(this.ctx, {
        responsive: true,
        maintanAspectRatio: false,
      type: 'line',
      data: {
          labels: [],
          datasets: [{
              label: '',
              data: [],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)'
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
          this.dcit2.data.labels.push(client.name);
          this.dcit2.data.datasets[0].data.push(client.name.length);
          this.dcit2.data.datasets[0].label = 'Revenue'

          //update datas
          this.dcit2.update();
        })
      })
      .catch(err => console.log(err))
  }



}

export default DashboardContIt2;