(window["webpackJsonpreact-weather"]=window["webpackJsonpreact-weather"]||[]).push([[0],{15:function(e,a,t){e.exports=t(28)},2:function(e,a,t){e.exports={navbar:"Navbar_navbar__2KrFT",search:"Navbar_search__1gtJM"}},20:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(1),l=t.n(c),o=(t(20),t(7)),i=t(8),m=t(9),s=t(12),u=t(10),d=t(13),h=t(30),p=t(11),y=t(2),f=t.n(y);var E=function(e){return r.a.createElement("div",{className:f.a.navbar},r.a.createElement(p.DebounceInput,{type:"text",className:f.a.search,name:e.name,placeholder:"Search for a City",minLength:2,debounceTimeout:300,onChange:e.handleChange}))},v=t(3),w=t.n(v),g=function(e){return new Date(1e3*e).getDay()},k=function(e){var a=e.data.geocode.display_name.split(", "),t=a[0],n=a[a.length-1],c=e.data.weatherInfo.currently,l=e.data.weatherInfo.daily.data,o=e.data.weatherInfo.hourly.data,i=o.map(function(e,a){return g(o[0].time)===g(e.time)?r.a.createElement("div",{className:"weather-item",key:a},r.a.createElement("div",null,(t=e.time,new Date(1e3*t).getHours()+":00")),r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:"./assets/weather/".concat(e.icon,".svg"),alt:e.icon,width:"30"})),r.a.createElement("div",null,Math.round(e.temperature)+"\xba")):null;var t}),m=r.a.createElement("div",null,r.a.createElement("div",{className:w.a.upperSummary},r.a.createElement("div",null,r.a.createElement("img",{src:"./assets/weather/".concat(c.icon,".svg"),alt:c.icon,width:"60"})),r.a.createElement("div",null,r.a.createElement("p",null,c.summary),r.a.createElement("p",null,"Chance of Rain: ",Math.round(100*c.precipProbability),"%")),r.a.createElement("div",{className:w.a.temperature},Math.round(c.temperature),"\xba")),r.a.createElement("div",null,r.a.createElement("hr",{className:"split"}),r.a.createElement("p",{className:"summary"},e.data.weatherInfo.hourly.summary),r.a.createElement("p",{className:"details"},"See more")));return r.a.createElement("div",{className:"container",onClick:e.clicked},r.a.createElement("div",{className:"header"},r.a.createElement("div",null,t,", ",n," (Today)"),r.a.createElement("div",null,Math.round(l[0].temperatureHigh),"\xba/",Math.round(l[0].temperatureLow),"\xba")),r.a.createElement("div",{className:"body"},e.data.todaySummary?m:i))},b=function(e){var a=e.data.weatherInfo.daily.data.slice(0);a.shift();var t=a.map(function(e,a){return r.a.createElement("div",{className:"weather-item",key:a+100},r.a.createElement("div",null,(t=e.time,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*t).getDay()])),r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:"./assets/weather/".concat(e.icon,".svg"),alt:e.icon,width:"30"})),r.a.createElement("div",null,Math.round(e.temperatureHigh),"\xba/",Math.round(e.temperatureLow),"\xba"));var t});return r.a.createElement("div",{className:"container",onClick:e.clicked},r.a.createElement("div",{className:"header"},r.a.createElement("div",null,"Next 7 Days")),r.a.createElement("div",{className:"body"},e.data.weekSummary?r.a.createElement("div",null,r.a.createElement("p",{className:"summary"},e.data.weatherInfo.daily.summary),r.a.createElement("p",{className:"details"},"See more")):t))},N=t(4),S=t.n(N),_=function(){return r.a.createElement("div",{className:S.a.welcome},r.a.createElement("h1",{className:S.a.textfocusin}," Welcome to",r.a.createElement("br",null),r.a.createElement("br",null),"Weather Search"))},j=(t(24),function(){return r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Developed by Paulo Reis "),r.a.createElement("a",{href:"https://www.linkedin.com/in/paulo-reis-955411186/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./assets/icons/linkedin.svg",alt:"linkedin",width:"15"}))," ",r.a.createElement("a",{href:"https://github.com/pacmanreis",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./assets/icons/github.svg",alt:"linkedin",width:"15"}))),r.a.createElement("p",null,r.a.createElement("a",{href:"https://darksky.net/poweredby/"},"Powered by Dark Sky")," & Search by ",r.a.createElement("a",{href:"https://locationiq.com/?ref=link-back"},"LocationIQ.com")))}),C=(t(25),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,city:"Lisbon",geocode:"",weatherInfo:[],todaySummary:!0,weekSummary:!0},t.handleSearch=function(){t.setState({loading:!0}),fetch("https://eu1.locationiq.com/v1/search.php?key=".concat("e90aee683c2995","&q=").concat(t.state.city,"&format=json&accept-language=en")).then(function(e){return e.json()}).then(function(e){"Unable to geocode"!==e.error&&(t.setState({geocode:e[0]}),fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/".concat("c96d5a1f71f8ae7149bec86bb64c1186","/").concat(t.state.geocode.lat,",").concat(t.state.geocode.lon,"?units=si")).then(function(e){return e.json()}).then(function(e){return t.setState({weatherInfo:e,loading:!1})}))})},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(o.a)({},n,r)),t.handleSearch()},t.handleClickToday=function(){t.setState(function(e){return{todaySummary:!e.todaySummary}})},t.handleClickWeek=function(){t.setState(function(e){return{weekSummary:!e.weekSummary}})},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=!1,a=!1,t=r.a.createElement(_,null);return void 0!==this.state.weatherInfo&&!1===this.state.loading&&(t=!1,a=r.a.createElement(h.a,{in:!0,appear:!0,timeout:1e3,classNames:"fade",key:"bljkablkjabda"},r.a.createElement(b,{data:this.state,clicked:this.handleClickWeek})),e=r.a.createElement(h.a,{in:!0,appear:!0,timeout:1e3,classNames:"fade",key:"b3232ljkablkjabda"},r.a.createElement(k,{data:this.state,clicked:this.handleClickToday}))),r.a.createElement("div",{className:"app"},r.a.createElement("main",null,r.a.createElement(E,{name:"city",handleChange:this.handleChange,data:this.state}),t,e,a),r.a.createElement(j,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,a,t){e.exports={temperature:"Today_temperature__2b2Xn",upperSummary:"Today_upperSummary__3FLdO"}},4:function(e,a,t){e.exports={welcome:"Welcome_welcome__2jKAu",textfocusin:"Welcome_textfocusin__1Vxm5","text-focus-in":"Welcome_text-focus-in__13_H7"}}},[[15,1,2]]]);
//# sourceMappingURL=main.eca71734.chunk.js.map