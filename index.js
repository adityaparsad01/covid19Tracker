
      let URL ="https://api.covid19india.org/data.json"
      
      
      let data = fetch(URL)
      .then(res=>res.json()
      .then(val=>{
          let covid = val.statewise
          covid.splice(31,1)
          console.log()
          
          const container = document.getElementById('container');

          
          covid.forEach((result, idx) => {
              let Confirmed = result.confirmed
              let Active = result.active
              let Recovered = result.recovered
              let Deaths = result.deaths
              let time = result.lastupdatedtime
              let State = result.state
              let todayconfirm = result.deltaconfirmed
              let todayrecovered = result.deltarecovered
              let todayDeaths = result.deltadeaths
              let recPercent =Math.round((Recovered/Confirmed)*100)
              console.log(recPercent)
              
              const card = document.createElement('div');
              card.classList = 'card-body';
          const content = `
         <div id="card-${idx}" class="card text-white mb-3">
             <div class="card-header">
                 <h5 class="state" >${State=="Total"?"India":State}</h5>
             </div>
             <ul class="list-group list-group-flush text-start">
                <li class="list-group-item">Confirmed Cases : ${Confirmed} <span class="badge rounded-pill bg-danger today align-top">${todayconfirm>0?"+":""}${todayconfirm==0?"":todayconfirm}</span></li>
                <li class="list-group-item">Active Cases : ${Active}</li>
                <li class="list-group-item">Recovered Cases : ${Recovered} <span class="badge rounded-pill bg-success today align-top">${todayrecovered>0?"+":""}${todayrecovered==0?"":todayrecovered}</span></li>
                <li class="list-group-item">Deaths Cases : ${Deaths} <span class="badge rounded-pill bg-info today align-top">${todayDeaths>0?"+":""}${todayDeaths==0?"":todayDeaths}</span></li>
              </ul>
            
              
             <div class="card-footer text-muted">Last Update: ${time}</div>
         </div>
          `;
          container.innerHTML += content;
          })
      
      })).catch(err=>console.log(err))