(window["webpackJsonpreact-weather"]=window["webpackJsonpreact-weather"]||[]).push([[0],{15:function(e,a,t){e.exports=t(28)},2:function(e,a,t){e.exports={navbar:"Navbar_navbar__2KrFT",search:"Navbar_search__1gtJM"}},20:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(1),o=t.n(c),l=(t(20),t(7)),i=t(8),s=t(9),m=t(12),d=t(10),u=t(13),h=t(30),p=t(11),f=t(2),y=t.n(f);var g=r.a.memo(function(e){return r.a.createElement("div",{className:y.a.navbar},r.a.createElement(p.DebounceInput,{type:"text",className:y.a.search,name:"city",placeholder:"Search for a City",minLength:2,debounceTimeout:300,onChange:e.handleChange}))}),v=t(3),E=t.n(v),w=function(e){return new Date(1e3*e).getDay()},k=r.a.memo(function(e){var a=void 0===e.data.geocode.address.city?e.data.geocode.address.state:e.data.geocode.address.city,t=e.data.geocode.address.country,n=e.data.weatherInfo.currently,c=e.data.weatherInfo.daily.data,o=e.data.weatherInfo.hourly.data,l=o.map(function(e,a){return w(o[0].time)===w(e.time)?r.a.createElement("div",{className:"weather-item",key:a},r.a.createElement("div",null,(t=e.time,new Date(1e3*t).getHours()+":00")),r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:"./assets/weather/".concat(e.icon,".svg"),alt:e.icon,width:"30"})),r.a.createElement("div",null,Math.round(e.temperature)+"\xba")):null;var t}),i=r.a.createElement("div",null,r.a.createElement("div",{className:E.a.upperSummary},r.a.createElement("div",null,r.a.createElement("img",{src:"./assets/weather/".concat(n.icon,".svg"),alt:n.icon,width:"60"})),r.a.createElement("div",null,r.a.createElement("p",null,n.summary),r.a.createElement("p",null,"Chance of Rain: ",Math.round(100*n.precipProbability),"%")),r.a.createElement("div",{className:E.a.temperature},Math.round(n.temperature),"\xba")),r.a.createElement("div",null,r.a.createElement("hr",{className:"split"}),r.a.createElement("p",{className:"summary"},e.data.weatherInfo.hourly.summary),r.a.createElement("p",{className:"details"},"See more")));return r.a.createElement("div",{className:"container",onClick:e.clicked},r.a.createElement("div",{className:"header"},r.a.createElement("div",null,a,", ",t," (Today)"),r.a.createElement("div",null,Math.round(c[0].temperatureHigh),"\xba/",Math.round(c[0].temperatureLow),"\xba")),r.a.createElement("div",{className:"body"},e.data.todaySummary?i:l))}),b=r.a.memo(function(e){var a=e.data.weatherInfo.daily.data.slice(0);a.shift();var t=a.map(function(e,a){return r.a.createElement("div",{className:"weather-item",key:a+100},r.a.createElement("div",null,(t=e.time,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*t).getDay()])),r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:"./assets/weather/".concat(e.icon,".svg"),alt:e.icon,width:"30"})),r.a.createElement("div",null,Math.round(e.temperatureHigh),"\xba/",Math.round(e.temperatureLow),"\xba"));var t});return r.a.createElement("div",{className:"container",onClick:e.clicked},r.a.createElement("div",{className:"header"},r.a.createElement("div",null,"Next 7 Days")),r.a.createElement("div",{className:"body"},e.data.weekSummary?r.a.createElement("div",null,r.a.createElement("p",{className:"summary"},e.data.weatherInfo.daily.summary),r.a.createElement("p",{className:"details"},"See more")):t))}),S=t(4),N=t.n(S),_=r.a.memo(function(e){return r.a.createElement("div",{className:N.a.welcome},r.a.createElement("h1",{className:N.a.textfocusin},e.loading?r.a.createElement("div",null,"Searching Weather"):r.a.createElement("div",null,"Welcome to",r.a.createElement("br",null),r.a.createElement("br",null),"Weather Search")))}),j=(t(24),r.a.memo(function(){return r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Developed by Paulo Reis "),r.a.createElement("a",{href:"https://www.linkedin.com/in/paulo-reis-955411186/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./assets/icons/linkedin.svg",alt:"linkedin",width:"15"}))," ",r.a.createElement("a",{href:"https://github.com/pacmanreis",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./assets/icons/github.svg",alt:"linkedin",width:"15"}))),r.a.createElement("p",null,r.a.createElement("a",{href:"https://darksky.net/poweredby/"},"Powered by Dark Sky")," & Search by ",r.a.createElement("a",{href:"https://locationiq.com/?ref=link-back"},"LocationIQ.com")))})),C=(t(25),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,city:"",geocode:"",weatherInfo:[],todaySummary:!0,weekSummary:!0,noresult:!1},t.handleSearch=function(){t.setState({loading:!0}),fetch("https://eu1.locationiq.com/v1/search.php?key=".concat("e90aee683c2995","&q=").concat(t.state.city,"&format=json&accept-language=en&addressdetails=1")).then(function(e){return e.json()}).then(function(e){"Unable to geocode"!==e.error&&(t.setState({geocode:e[0]}),fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/".concat("c96d5a1f71f8ae7149bec86bb64c1186","/").concat(t.state.geocode.lat,",").concat(t.state.geocode.lon,"?units=si")).then(function(e){return e.json()}).then(function(e){return t.setState({weatherInfo:e,loading:!1})}))})},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(l.a)({},n,r)),t.handleSearch()},t.handleClickToday=function(){t.setState(function(e){return{todaySummary:!e.todaySummary}})},t.handleClickWeek=function(){t.setState(function(e){return{weekSummary:!e.weekSummary}})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){e.setState({loading:!0}),fetch("https://eu1.locationiq.com/v1/reverse.php?key=".concat("e90aee683c2995","&lat=").concat(a.coords.latitude,"&lon=").concat(a.coords.longitude,"&format=json&accept-language=en&addressdetails=1")).then(function(e){return e.json()}).then(function(t){"Unable to geocode"!==t.error&&(e.setState({geocode:t}),fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/".concat("c96d5a1f71f8ae7149bec86bb64c1186","/").concat(a.coords.latitude,",").concat(a.coords.longitude,"?units=si")).then(function(e){return e.json()}).then(function(a){return e.setState({weatherInfo:a,loading:!1})}))})})}},{key:"render",value:function(){var e=!1,a=!1,t=r.a.createElement(_,{loading:this.state.loading});return""!==this.state.geocode&&void 0!==this.state.weatherInfo&&!1===this.state.loading&&(t=!1,a=r.a.createElement(h.a,{in:!0,appear:!0,timeout:1e3,classNames:"fade",key:"bljkablkjabda"},r.a.createElement(b,{data:this.state,clicked:this.handleClickWeek})),e=r.a.createElement(h.a,{in:!0,appear:!0,timeout:1e3,classNames:"fade",key:"b3232ljkablkjabda"},r.a.createElement(k,{data:this.state,clicked:this.handleClickToday}))),r.a.createElement("div",{className:"app"},r.a.createElement("main",null,r.a.createElement(g,{handleChange:this.handleChange}),t,e,a),r.a.createElement(j,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,a,t){e.exports={temperature:"Today_temperature__2b2Xn",upperSummary:"Today_upperSummary__3FLdO"}},4:function(e,a,t){e.exports={welcome:"Welcome_welcome__2jKAu",textfocusin:"Welcome_textfocusin__1Vxm5","text-focus-in":"Welcome_text-focus-in__13_H7"}}},[[15,1,2]]]);
//# sourceMappingURL=main.68976bda.chunk.js.map