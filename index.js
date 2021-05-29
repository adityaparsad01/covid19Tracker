
      let URL ="https://api.covid19india.org/data.json"
   
     let data = fetch(URL)
      .then(res=>res.json())
      .then(val=>{
          let covid = val.statewise
          covid.splice(31,1)
          //console.log(covid)
          
          //filter data
          let filterdata  = covid.filter((item)=>{
              if (item.state=="Total") {
                  return true
              }
          })
          //console.log(document.getElementById("search").value())
          //console.log(filterdata)
          function covidData(){
              console.log(document.getElementById("search").value)
              
          }
          // daily Cases
          let dailyCases = val.cases_time_series
          //console.log(dailyCases)
          
          
          
          let valuesd = dailyCases.map(({date,dailyconfirmed})=>{
              //console.log(date,dailyconfirmed)    
          })
          
          
          
          const container = document.getElementById('col')
          const footer = document.getElementById('footer')
          const selectValEl = document.getElementById('select')
          //console.log(inputEl)
          
          
          covid.map(({state})=>{
             //selectValEl.innerHTML = selectVal
          })
          
          const footerContent =`
            <div class="container-fluid text-center bg-info p-1">
                <div  class="row">
                    <div id="" class="col">
                        <h3>Developer Info</h3>
                    </div>
                <div class="row">
                    <h5><i class="bi-github m-2" role="img" aria-label="GitHub"></i><i class="bi bi-twitter m-2"></i><i class="bi bi-cloud m-2"></i></h5>
                </div>
            </div>
          `
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
              let recPercent =((Recovered/Confirmed)*100).toFixed(2)
              let todayRecPer= ((todayrecovered/todayconfirm)*100).toFixed(2)
              let recDiff = (recPercent-todayRecPer)
              //console.log(Confirmed.toLocaleString())
              
              const card = document.createElement('div');
              card.classList = 'card-body';
              
              const loading = `
          <div>
          <h5>Loading...</h5>
          </div>
          `
      
           
          const content = `
         <div id="card-${idx}" class="cardC card text-white mb-3">
             <div class="card-header">
                 <h5 class="state" >${State=="Total"?"India":State}<i class="graph bi bi-graph-up m-3"></i></h5>
             </div>
             <ul class="list-group list-group-flush text-start">
                <li class="list-group-item">Confirmed Cases : ${Confirmed.toLocaleString()} <span class="badge rounded-pill bg-danger today align-top">${todayconfirm>0?"+":""}${todayconfirm==0?"":todayconfirm}</span></li>
                <li class="list-group-item">Active Cases : ${Active.toLocaleString()}</li>
                <li class="list-group-item">Recovered Cases : ${Recovered.toLocaleString()} <span class="badge rounded-pill bg-success today align-top">${todayrecovered>0?"+":""}${todayrecovered==0?"":todayrecovered}</span></li>
                <li class="list-group-item">Deaths Cases : ${Deaths.toLocaleString()} <span class="badge rounded-pill bg-info today align-top">${todayDeaths>0?"+":""}${todayDeaths==0?"":todayDeaths}</span></li>
              </ul>
             
                
              <button class="btn btn-info my-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${idx}" aria-expanded="false" aria-controls="collapseExample">More</button>

              <div class="collapse mb-2" id="collapseExample${idx}">
                <div class="card card-body">
                    <div class="row">
                        <h2 class="fs-5 moreinfo" >Today Recovery rate of ${State=="Total"?"India":State} is ${todayRecPer>recPercent?"Better than ":"Less than "}Overall Recovery Rate, Which is <span class="${recPercent>=95?"rateH":"rateL"}">${recPercent}%</span> ${todayRecPer>recPercent?"which is Good.":"its required more improvement."}</h2>
                    </div>
                </div>
             </div>
              
             <div class="card-footer text-muted">Last Update: ${time}</div>
             </div>
          `;
          container.innerHTML += `${Confirmed>1?content:loading}`;
          })
      
      })
      .catch(err=>console.log(err))