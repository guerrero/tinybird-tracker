var tinybirdTrackerJs=function(){var e=function(e){var n=e.document,t=e.localStorage;if(e&&e.document&&e.document.currentScript){var r=(S("api")||new URL(n.currentScript.src).origin)+"/v0/events",o=S("source"),i=S("token"),s=S("cookie-domain");if(!o)throw new Error("'dataSource' name is required to start sending events");if(!i)throw new Error("'token' is required to start sending events");var u="tinybird_events",a=5e3,c=function(n){for(var t="tinybird=",r=e.document.cookie.split(";"),o=0;o<r.length;++o){for(var i=r[o];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return null}(),d=JSON.parse(t.getItem(u)||"[]"),f=w(),x=!1;c||(c="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)}),e.document.cookie="tinybird="+(c||"")+"; path=/; domain="+(s||e.location.hostname)),e.addEventListener("beforeunload",g),e.addEventListener("unload",g,!1);var l=e.tinybird||[];e.tinybird=v;for(var h=0;h<l.length;h++)v.apply(this,l[h]);m(a,5)}function p(e){function n(){e>0&&(x=!1,m(a,e-1))}x||(d.length>0?(x=!0,function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest,i=[],s=[],u={},a=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:a,headers:{keys:function(){return i},entries:function(){return s},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var c in o.open(n.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){i.push(n=n.toLowerCase()),s.push([n,t]),u[n]=u[n]?u[n]+","+t:t}),t(a())},o.onerror=r,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(c,n.headers[c]);o.send(n.body||null)})}(r+"?name="+o+"&token="+i,{method:"POST",body:b(d)}).then(function(e){return e.json()}).then(function(e){e?(d=[],t.setItem(u,"[]"),m(a,5)):n(),x=!1}).catch(function(e){n()})):m(a,5))}function m(e,n){setTimeout(function(){p(n)},e)}function v(e,n){var t=n||{};t.event=e||"",t.timestamp=w(),t.session_start=f,t.uuid=c,d.push(t)}function g(){t.setItem(u,JSON.stringify(d)),p()}function b(e){return e.map(e=>JSON.stringify(e)).join("\n")}function w(e){return(e=e||new Date).toISOString().replace("T"," ").split(".")[0]}function S(e){return n.currentScript.getAttribute("data-"+e)}};return e(window),e}();
//# sourceMappingURL=tinybird-tracker.js.map
