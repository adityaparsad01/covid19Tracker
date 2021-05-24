
      let URL ="https://api.covid19india.org/data.json"
      
      
      let data = fetch(URL)
      .then(res=>res.json()
      .then(val=>{
          let covidData = val.statewise
          console.log(covidData)
          
          const container = document.getElementById('container');

          
          covidData.forEach((result, idx) => {
              const card = document.createElement('div');
              card.classList = 'card-body';
          const content = `
         <div id="card-${idx}" class=" card text-center">
             <div class="card-header">
                 <h5 class="state" >${result.state=="Total"?"India":result.state}</h5>
             </div>
             <div class="card-body">
             <ul class="list-group list-group-flush text-start">
                <li class="list-group-item">Confirmed Cases : ${result.confirmed} <span class="badge rounded-pill bg-danger today">${result.deltaconfirmed==0?"":result.deltaconfirmed}</span></li>
                <li class="list-group-item">Active Cases : ${result.active}</span></li>
                <li class="list-group-item">Recovered Cases : ${result.recovered} <span class="badge rounded-pill bg-success today">${result.deltarecovered==0?"":result.deltarecovered}</span></li>
                <li class="list-group-item">Deaths Cases : ${result.deaths} <span class="badge rounded-pill bg-info today">${result.deltadeaths==0?"":result.deltadeaths}</span></li>

              </ul>
              </div>
             <div class="card-footer text-muted">Last Update: ${result.lastupdatedtime}</div>
         </div>
          `;
          container.innerHTML += content;
          })
      
      })).catch(err=>console.log(err))