(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),l=a.n(r),i=(a(15),a(1)),c=a(2),u=a(4),m=a(3),o=a(5),d=(a(17),a(19),a(6)),h=(a(21),{days:0,hours:0,minutes:0,seconds:0}),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=Number(e.target.value),n=Number(e.target.getAttribute("max")),s=Number(e.target.getAttribute("min"));t<s?a.setState(Object(d.a)({},e.target.name,s)):t>n?a.setState(Object(d.a)({},e.target.name,n)):a.setState(Object(d.a)({},e.target.name,t))},a.handleHoursChange=function(e){a.setState({hours:e.target.value})},a.handleMinutesChange=function(e){a.setState({minutes:e.target.value})},a.handleSecondsChange=function(e){a.setState({seconds:e.target.value})},a.handleTimerSet=function(){a.props.setTimer(a.state),a.setState(h)},a.state={days:0,hours:0,minutes:0,seconds:0},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"countdown-timer-input-container"},s.a.createElement("h3",null,"Set Timer:"),s.a.createElement("label",{for:"days"},"Days: "),s.a.createElement("input",{type:"number",name:"days",value:this.state.days,onChange:this.handleInputChange,min:0,max:365}),s.a.createElement("br",null),s.a.createElement("label",{for:"hours"},"Hours: "),s.a.createElement("input",{type:"number",name:"hours",value:this.state.hours,onChange:this.handleInputChange,min:0,max:23}),s.a.createElement("br",null),s.a.createElement("label",{for:"minutes"},"Minutes: "),s.a.createElement("input",{type:"number",name:"minutes",value:this.state.minutes,onChange:this.handleInputChange,min:0,max:59}),s.a.createElement("br",null),s.a.createElement("label",{for:"seconds"},"Seconds: "),s.a.createElement("input",{type:"number",name:"seconds",value:this.state.seconds,onChange:this.handleInputChange,min:0,max:59}),s.a.createElement("br",null),s.a.createElement("button",{className:"set-button",onClick:this.handleTimerSet},"Set Timer"))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setTimer=function(e){a.stopCountdown(),a.setState(e)},a.startCountdown=function(){a.intervalFlag||(a.intervalHandler=setInterval(a.tick,1e3),a.intervalFlag=!0)},a.stopCountdown=function(){clearInterval(a.intervalHandler),a.intervalFlag=!1},a.tick=function(){var e=a.state,t=e.days,n=e.hours,s=e.minutes,r=e.seconds;if(r>0)a.setState({seconds:r-1});else if(0===r&&0!==s)a.setState({minutes:s-1,seconds:59});else if(0===r&&0===s&&0!==n)a.setState({hours:n-1,minutes:59,seconds:59});else{if(0!==r||0!==s||0!==n||0===t)return;a.setState({days:t-1,hours:23,minutes:59,seconds:59})}},a.state={days:0,hours:0,minutes:0,seconds:0},a.intervalFlag=!1,a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b,{setTimer:this.setTimer}),s.a.createElement("div",{className:"countdown-timer-container"},s.a.createElement("div",{className:"timer-block "},s.a.createElement("div",{className:"timer-value"},this.state.days),s.a.createElement("div",{className:"timer-label"},"Days")),s.a.createElement("div",{className:"timer-block "},s.a.createElement("div",{className:"timer-value"},this.state.hours),s.a.createElement("div",{className:"timer-label"},"Hours")),s.a.createElement("div",{className:"timer-block "},s.a.createElement("div",{className:"timer-value"},this.state.minutes),s.a.createElement("div",{className:"timer-label"},"Minutes")),s.a.createElement("div",{className:"timer-block "},s.a.createElement("div",{className:"timer-value"},this.state.seconds),s.a.createElement("div",{className:"timer-label"},"Seconds"))),s.a.createElement("div",{className:"controls-container"},s.a.createElement("button",{className:"start-button",onClick:this.startCountdown},"Start"),s.a.createElement("button",{className:"stop-button",onClick:this.stopCountdown},"Stop")))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:"header"},"Countdown Timer"),s.a.createElement(v,null))}}]),t}(n.Component);l.a.render(s.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.9ffb0eda.chunk.js.map