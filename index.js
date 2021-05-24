
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
                <li class="list-group-item"><span class="">Confirmed Cases :</span> ${result.confirmed} <span class="badge rounded-pill ${result.deltaconfirmed>=900 ?"bg-danger":"bg-success"}">+${result.deltaconfirmed}</span></li>
                <li class="list-group-item"><span class="">Active Cases : ${result.active}</span>} <span class="badge rounded-pill ${result.deltaconfirmed>=900 ?"bg-danger":"bg-success"}">+${result.deltaconfirmed}</span></li>
                <li class="list-group-item">Recovered Cases : ${result.recovered}} <span class="badge rounded-pill ${result.deltaconfirmed>=900 ?"bg-danger":"bg-success"}">+${result.deltarecovered}</span></li>
                <li class="list-group-item">Deaths Cases : ${result.deaths}} <span class="badge rounded-pill ${result.deltaconfirmed>=900 ?"bg-danger":"bg-success"}">+${result.deltadeaths}</span></li>

              </ul>
              </div>
             <div class="card-footer text-muted">Last Update: ${result.lastupdatedtime}</div>
         </div>
          `;
          container.innerHTML += content;
          })
      
      })).catch(err=>console.log(err))