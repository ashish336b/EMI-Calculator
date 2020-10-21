(this.webpackJsonpemi=this.webpackJsonpemi||[]).push([[0],{13:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),i=(a(13),a(1)),s=a(2),m=a(4),o=a(3),u=function(e){e=(e+"").replace(",","").replace(" ","");var t=isFinite(+e)?+e:0,a="";return(a=function(e,t){var a=Math.pow(1,t);return""+Math.round(e*a)/a}(t,2).split("."))[0].length>3&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,",")),(a[1]||"").length<2&&(a[1]=a[1]||"",a[1]+=new Array(2-a[1].length+1).join("0")),a.join(".").replace(".00","")},d=a(7),p=a.n(d),E=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setPrincipal=function(e){n.setState({principal:e.target.value})},n.setRate=function(e){n.setState({rate:e.target.value})},n.setTime=function(e){n.setState({time:e.target.value})},n.calculateEmi=function(){var e=n.state.rate/1200,t=Math.pow(1+e,n.state.time),a=t-1,l=n.state.principal*e*(t/a),r=[],c=e*n.state.principal,i=l-c,s=n.state.principal-i;r.push({interest:c,principal:i,remainingBalance:s,totalPaid:l});for(var m=1;m<n.state.time;m++)s-=i=l-(c=e*s),r.push({interest:c,principal:i,remainingBalance:s,totalPaid:l});var o=r.reduce((function(e,t){return e+Number(t.interest)}),0),u=o/(Number(n.state.principal)+o)*100;n.setState({totalEmi:parseFloat(l).toFixed(2),tableData:r,totalInterestPayable:o,interestPercentage:parseFloat(u).toFixed(2)},(function(){var e=document.getElementById("pieChart");window.chart&&window.chart.destroy(),window.chart=new p.a(e,{type:"pie",data:{labels:["Interest","Principal"],datasets:[{backgroundColor:["#ED8C2B","#88A825"],borderColor:"#ffffff",data:[n.state.interestPercentage,100-n.state.interestPercentage]}]},options:{}})}))},n.state={principal:"250000",rate:"10",time:"3",totalEmi:"",tableData:[],totalInterestPayable:"0",totalPayment:"0",interestPercentage:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.calculateEmi()}},{key:"render",value:function(){var e=this.state.tableData.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t+1),l.a.createElement("td",null,u(e.principal)),l.a.createElement("td",null,u(e.interest)),l.a.createElement("td",null,u(e.totalPaid)),l.a.createElement("td",null,u(e.remainingBalance)))}));return l.a.createElement("div",null,l.a.createElement("section",{className:"body-section py-3"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row  justify-content-center"},l.a.createElement("div",{className:"col-lg-10"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title text-center font-weight-bold text-primary"},"Calculate Home Loan"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"form-container"},l.a.createElement("div",{className:"form-group py-2"},l.a.createElement("label",{className:"font-weight-bold"},"Loan Amount :"),l.a.createElement("input",{className:"form-control",value:this.state.principal,onChange:this.setPrincipal,onBlur:this.calculateEmi,type:"number",placeholder:"Principal Amount"})),l.a.createElement("div",{className:"form-group py-2"},l.a.createElement("label",{className:"font-weight-bold"},"Interest Rate :"),l.a.createElement("input",{className:"form-control",onChange:this.setRate,onBlur:this.calculateEmi,value:this.state.rate,type:"number",placeholder:"Interest"})),l.a.createElement("div",{className:"form-group py-2"},l.a.createElement("label",{className:"font-weight-bold"},"Loan Tenure :"),l.a.createElement("input",{className:"form-control",type:"number",onChange:this.setTime,value:this.state.time,onBlur:this.calculateEmi,placeholder:"Time"})),l.a.createElement("button",{className:"btn btn-info btn-block font-weight-bold",onClick:this.calculateEmi},"Calculate"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"result-container"},l.a.createElement("div",{className:"border p-1 m-3"},l.a.createElement("h5",{className:"text-center"},"Loan EMI"),l.a.createElement("p",{className:"text-center"},"Rs.",u(this.state.totalEmi))),l.a.createElement("div",{className:"border p-1 m-3"},l.a.createElement("h5",{className:"text-center"},"Total Interest Payable"),l.a.createElement("p",{className:"text-center"},"Rs.",u(this.state.totalInterestPayable))),l.a.createElement("div",{className:"border p-1 m-3"},l.a.createElement("h5",{className:"text-center"},"Total Payment"),l.a.createElement("p",{className:"text-center"},"Rs.",u(Number(this.state.totalInterestPayable)+Number(this.state.principal))))))))))),l.a.createElement("div",{className:"row justify-content-center pt-3"},l.a.createElement("div",{className:"col-lg-10"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title text-center font-weight-bold text-primary"},"Pie Chart"),l.a.createElement("div",{className:"chart-container p-3"},l.a.createElement("div",{className:"chart-container"},l.a.createElement("canvas",{id:"pieChart",width:"400",height:"100"}))))))),l.a.createElement("div",{className:"row justify-content-center pt-3"},l.a.createElement("div",{className:"col-lg-10"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title text-center font-weight-bold text-primary"},"Loan Amortization Table"),l.a.createElement("div",{className:"container-fluid p-3"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-bordered table-striped table-sm"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"bg-warning text-dark"},l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Principal (A)"),l.a.createElement("th",null,"Interest (B)"),l.a.createElement("th",null,"Total Payment (A + B)"),l.a.createElement("th",null,"Balance"))),l.a.createElement("tbody",{className:""},e)))))))))))}}]),a}(n.Component),h=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"nav-container"},l.a.createElement("ul",{className:"nav bg-info p-3 justify-content-center"},l.a.createElement("div",{className:"nav-item"},l.a.createElement("h4",{className:"text-light text-uppercase"},this.props.title)))))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={message:0},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,{title:"EMI Calculator"}),l.a.createElement(E,null))}}]),a}(n.Component);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.c13449b6.chunk.js.map