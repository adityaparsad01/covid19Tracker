
     let URL ="https://api.covid19india.org/data.json"
   
   
     let data = fetch(URL)
      .then(res=>res.json())
      .then(val=>{
          let covid = val.statewise
          covid.splice
          
          
        
          const container = document.getElementById('container')
          const footer = document.getElementById('footer')
          const selectValEl = document.getElementById('select')
          //console.log(inputEl)
          
          const footerContent =`
                <div class="row">
                    <div id="" class="col">
                        <h3>Developer Info</h3>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col d-flex justify-content-evenly">
                        <a href="https://github.com/adityaparsad01/covid19Tracker"><i class="bi-github"></i></a>
                        <a href="https://twitter.com/adityaparsad01?s=09"><i class="bi bi-twitter"></i></a>
                        <a href="https://api.covid19india.org/"><i class="bi bi-cloud"></i></a>
                    </div>
                </div>`
                
          footer.innerHTML = footerContent;
          
            
          covid.map((result, idx) => {
              let Confirmed = (Number(result.confirmed))
              let Active = Number(result.active)
              let Recovered = Number(result.recovered)
              let Deaths = Number(result.deaths)
              let time = result.lastupdatedtime
              let State = result.state
              let todayconfirm = Number(result.deltaconfirmed)
              let todayrecovered = Number(result.deltarecovered)
              let todayDeaths = Number(result.deltadeaths)
              let recPercent =Number(((Recovered/Confirmed)*100).toFixed(2))
              let todayRecPer= (((todayrecovered/todayconfirm)*100).toFixed(2))
              let recDiff = Number((recPercent-todayRecPer))
              //console.log(typeof(time))
              let trending_down ='<i class="material-icons icon tranddown">trending_down</i>'
              let trending_up ='<i class="material-icons icon trandup">trending_up</i>'
              let confirmLogo='<i class="material-icons icon ">fingerprint</i>'
              let activeLogo='<i class="material-icons icon ">pending_actions</i>'
              let recoveryLogo='<i class="material-icons icon ">flare</i>'
              let deathsLogo='<i class="material-icons icon ">star_rate</i>'
              let schedule='<i class="material-icons icon ">schedule</i>'
              let statementOne = `<h2 class="fs-5 moreinfo" >Today Recovery rate of <span class="state">${State=="Total"?"India":State}</span> Till Now is <span class="rateH">${todayRecPer}%</span> Which is  ${todayRecPer>recPercent?"Better than 🙂 ":"Less than ☹️ "}Overall Recovery Rate <span class="${recPercent>=95?"rateH":"rateL"}">${recPercent}%</span> .</h2>`
              let statementTwo = `<h2 class="fs-5 moreinfo" ><span class="state">${State=="Total"?"India":State}</span> Data Not Updated Yet </h2>`
              let tradeLogo = `${todayRecPer>recPercent?trending_up:trending_down}`
              const card = document.createElement('div');
              card.classList = 'card-body';
              
              const loading = `
          <div>
          <h5>Loading...</h5>
          </div>
          `
           
          const content = `
        <div id="card-${idx}" class="card text-white my-3 border border-danger">
             <div class="card-header d-flex justify-content-center text-center">
                <h5 class="state" >${State=="Total"?"India":State}</h5>
                <h5>${todayRecPer=="NaN"?"":tradeLogo}</h5>
             </div>
                
             <ul class="list-group list-group-flush text-start">
                <li class="list-group-item confirm "><span class="align-bottom ">${confirmLogo}</span> Confirmed Cases : <span class="confirm">${Confirmed.toLocaleString()}</span> <span class="badge rounded-pill bg-danger today align-top">${todayconfirm>0?"+":""}${todayconfirm==0?"":todayconfirm.toLocaleString()}</span></li>
                <li class="list-group-item active2"><span class="align-bottom ">${activeLogo}</span> Active Cases : <span>${Active.toLocaleString()}</span></li>
                <li class="list-group-item recovered"><span class="align-bottom ">${recoveryLogo}</span> Recovered Cases : <span class="recovered">${Recovered.toLocaleString()}</span> <span class="badge rounded-pill bg-success today align-top">${todayrecovered>0?"+":""}${todayrecovered==0?"":todayrecovered.toLocaleString()}</span></li>
                <li class="list-group-item deaths"><span class="align-bottom ">${deathsLogo}</span> Deaths Cases : <span class="deaths">${Deaths.toLocaleString()}</span> <span class="badge rounded-pill bg-info today align-top">${todayDeaths>0?"+":""}${todayDeaths==0?"":todayDeaths.toLocaleString()}</span></li>
              </ul>
              
              <button class="btn btn-info m-2 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${idx}" aria-expanded="false" aria-controls="collapseExample">More</button>
              <div class="collapse mb-2" id="collapseExample${idx}">
                <div class="card-body">
                    <div class="text-center p-1">
                    ${todayRecPer=="NaN"?statementTwo:statementOne}
                    </div>
                </div>
             </div>
             
             <div class="card-footer text-muted">
                <li class="list-group-item bg-light rounded"><span class="align-bottom ">${schedule}</span> Last Update : <span class="text-muted">${time}</span></li>
             </div>
        </div>
          `;
          container.innerHTML += `${Confirmed>1?content:loading}`;
          })
      
      })
      .catch(err=>console.log(err))