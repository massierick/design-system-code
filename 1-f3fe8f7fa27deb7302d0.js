(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{275:function(e,A,t){var a;e.exports=(a=t(316))&&a.default||a},278:function(e,A,t){"use strict";t.d(A,"a",function(){return u}),t(154);var a=t(32),n=t.n(a),r=t(60),l=t.n(r),s=t(1),i=t.n(s),c=t(76),o=t(74),u=(t(325),function(e){function A(A){var t;return(t=e.call(this,A)||this).search=function(e){var A=e.target.value,a=t.getSearchResults(A);t.setState({results:a.slice(0,5),query:A})},t.toggle=t.toggle.bind(l()(l()(t))),t.state={query:"",results:[],dropdownOpen:!1},t}n()(A,e);var t=A.prototype;return t.render=function(){return i.a.createElement("div",{className:"search-form search-form-round",style:{width:"300px",display:"inline-block"}},i.a.createElement(o.F,{isOpen:this.state.dropdownOpen,toggle:this.toggle},i.a.createElement("label",{for:"search",className:"sr-only"},this.props.placeholder),i.a.createElement(o.I,{tag:o.O,type:"text",id:"search",value:this.state.query,onChange:this.search,placeholder:this.props.placeholder}),i.a.createElement(o.H,{className:"container-fluid"},0!==this.state.results.length?this.state.results.map(function(e){return i.a.createElement(o.X,{tag:c.a,to:e.path},e.title)}):i.a.createElement(o.X,{toggle:!1},"No results were found."))))},t.toggle=function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})},t.getSearchResults=function(e){if(!e||!window.__LUNR__)return[];this.setState({dropdownOpen:!0});var A=window.__LUNR__[this.props.lng];return A.index.search(e+"^100 "+e+"*^10 "+e+"~2").map(function(e){var t=e.ref;return A.store[t]})},A}(s.Component))},316:function(e,A,t){"use strict";t.r(A);var a=t(1),n=t.n(a),r=t(0),l=t.n(r),s=t(95),i=t(4),c=function(e){var A=e.location,t=i.a.getResourcesForPathname(A.pathname);return n.a.createElement(s.a,{location:A,pageResources:t})};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},A.default=c},325:function(e,A,t){},327:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora"}}}}},335:function(e,A){e.exports="data:image/png;base64,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"},336:function(e,A){e.exports="data:image/png;base64,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"},337:function(e,A,t){},353:function(e,A,t){},355:function(e,A){e.exports="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxHHgCZp1AAiplIBJCZSxmEh0QYR0YlAk9PKQAAAAAAh8ObBX2wiQo7TjgATWtRAAAAAAAAAAAAAAAAAKO6VQChtlMFortUPJ+0U5ybplHQlZZNyYSAREvf23MAAAAAAJHVq2yQy52ba5BpDm6WcAAAAAAAr71ZAKu9WACuvVkcq79Yj6a/VuKht1S5nKhRcZeXTs6Nh0iZAAAAAAAAAACS1qtwldCg5YWygjSVyJQAsrlZAJzQUwC1wFs7scBaxqy/WNWku1VbmbNQC5meTwuWlk3AjYhIiP//mgAAAAAAk9WoL5jSn+GRwItt1//TALW7VgC7wF1CuMFc3LG/Wrimt1Uq6vR2AJmfTwCaoVAzlphN3oiFRkmbmFAAAAAAAJLVqQma0p21mMeOsDhNOga6xGgovMFg0re+W7GptFUbucRdAJqmTwB8SkQAm6NQiJWYTcV6dz8SfXxAAAAAAACe0JUAm9KbcJ7Lj+GMrXMtt8Vrlri/Ycqrr1MhsrdYAAAAAACerlIAnq9SJJumUdeSl0txzdprABYWCwAAAAAAndCXAJ3QmC2hzY/inb16fLXEbM2vt1+D////AE9QJwCcs1IAn4lTAKCyU3+ap1DShIpEIWNUMgRtYDcHRDsjAZ/PlACb0JoHpM6NraLDfruxwGmpub9g3LO6WZ6suleEprlVgqK7VIyhtlTkmqdQ3JOVTKSQh0mwiXpGo3FjOiIAAAAAp8yHAKXNilqoyH/koLJnU7zBX3C5wVywssBav6zAWLimv1froLdU45unUZ6XmU6VkolLio19SHR8bD8WAAAAAKfMhQCmzIcXrMl9zqi8bZUVCQADvMZeBLS/WwipwFgzpr9W3puzUW7//5wAZHE0AAAAAAAAAAAAAAAAAAAAAACpyoIAt8ZrAK7JenSww2/hnqdYMbG9ZACzv1oCq8BYkaW9VsyQqEsZlKxNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDHdQCvyHcdtcVt0LG4XpgqHAcEsMFaNay/WOGgtlNo4f10AEFLIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzxnEAv8FeALjEal66wGDnrbRWe7C/Wa2qvVfFkKRKFZapTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALvCZQC7w2cHvMFff7jAXOmywFrbqLlWTMLSYwCOn0kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAu8FdALzBXQi4wVw7sb5aL52tUAOjslMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8MAAB8DAAAeAQAAHAMAABhjAAAA4wAAgccAAIPAAACAAAAAwAAAAMAfAADiHwAA4D8AAPA/AADwfwAA+H8AAA=="},76:function(e,A,t){"use strict";t.d(A,"b",function(){return o});var a=t(1),n=t.n(a),r=t(0),l=t.n(r),s=t(78),i=t.n(s);t.d(A,"a",function(){return i.a}),t(275);var c=n.a.createContext({}),o=function(e){return n.a.createElement(c.Consumer,null,function(A){return e.data||A[e.query]&&A[e.query].data?(e.render||e.children)(e.data?e.data.data:A[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},83:function(e,A,t){"use strict";var a=t(327),n=t(1),r=t.n(n),l=t(0),s=t.n(l),i=t(89),c=t.n(i),o=t(76),u=t(74),g=t(278),m=t(32),d=t.n(m),h=t(60),p=t.n(h),f=t(75),b=function(e){function A(A){var t;return(t=e.call(this,A)||this).state={isEnglish:"en"===A.i18n.language},t.handleChangeLanguage=t.handleChangeLanguage.bind(p()(p()(t))),t}d()(A,e);var t=A.prototype;return t.handleChangeLanguage=function(){this.props.i18n.changeLanguage(this.state.isEnglish?"fr":"en"),this.setState(function(e){return{isEnglish:!e.isEnglish}})},t.render=function(){var e;return e=this.state.isEnglish?r.a.createElement("span",null,r.a.createElement("span",{"aria-hidden":"true"},"FR"),r.a.createElement("span",{className:"sr-only",lang:"fr"},"français")):r.a.createElement("span",null,r.a.createElement("span",{"aria-hidden":"true"},"EN"),r.a.createElement("span",{className:"sr-only",lang:"en"},"english")),r.a.createElement("div",{className:"LanguageSwitcher"},r.a.createElement(u.e,{color:"primary",className:"languageSwitcherButton",onClick:this.handleChangeLanguage,size:"md",style:{"font-weight":"550"}},e))},A}(n.Component),v=Object(f.b)("default")(b),w=t(335),E=t.n(w),N=t(336),C=t.n(N),B=t(81),y=t(280),S=t(82),j=function(e){var A=e.siteTitle,t=e.t,a=e.i18n;return r.a.createElement("header",{className:"fixed-top bg-white shadow-sm",role:"banner"},r.a.createElement("div",null,r.a.createElement("div",{style:{height:"50px",padding:"10px"}},r.a.createElement("img",{src:E.a,alt:"FIP"}),r.a.createElement("div",{className:"float-right"},r.a.createElement("span",{className:"float-left mr-3 d-none d-md-block"},r.a.createElement(g.a,{lng:"en"===a.language?"en":"fr",placeholder:"en"===a.language?"Search":"Chercher"})),r.a.createElement("span",{className:"float-right"},r.a.createElement(v,null))))),r.a.createElement("div",null,r.a.createElement(u.jb,{color:"white",expand:!0,className:"main-nav",style:{paddingBottom:"0"},"aria-label":"Main Navigation *Translate*",role:"navigation"},r.a.createElement(o.a,{to:"/#!",className:"text-dark logo"},r.a.createElement("img",{src:C.a,alt:"Logo",className:"float-left",style:{width:"30px",margin:"5px"}}),r.a.createElement("span",{className:"h2 d-none d-md-block float-left font-weight-normal"}," ",A," ")),r.a.createElement("div",{className:"navbar-collapse nav-holder"},r.a.createElement(u.fb,{tabs:!0,className:"mx-auto nav-site scroll",style:{borderBottom:"none"}},r.a.createElement(u.hb,null,r.a.createElement(o.a,{to:"/overview/introduction",className:"nav-link"},t("Overview"))),r.a.createElement(u.hb,null,r.a.createElement(o.a,{to:"/component",className:"nav-link"},t("Components"))),r.a.createElement(u.hb,null,r.a.createElement(o.a,{to:"/content/content-guidelines",className:"nav-link"},t("Content"))),r.a.createElement(u.hb,null,r.a.createElement(o.a,{to:"/data/data-overview",className:"nav-link"},t("Data"))))),r.a.createElement(u.fb,{className:"ml-auto",navbar:!0},r.a.createElement(u.hb,{className:"d-none d-md-block"},r.a.createElement(u.ib,{style:{color:"black"},target:"_blank",href:"https://github.com/gctools-outilsgc/design-system"},r.a.createElement(B.a,{style:{"font-size":"1.5em"},icon:y.a}),r.a.createElement("span",{className:"sr-only"},"GitHub"))),r.a.createElement(u.hb,{className:"d-none d-md-block"},r.a.createElement(u.ib,{style:{color:"black"},target:"_blank",href:"https://github.com/gctools-outilsgc/design-system/blob/master/master_ui_kit.ai"},r.a.createElement(B.a,{style:{"font-size":"1.5em"},icon:S.c}),r.a.createElement("span",{className:"sr-only"},t("DownloadLink"))))))))};j.propTypes={siteTitle:s.a.string},j.defaultProps={siteTitle:"Aurora"};var x=Object(f.b)("PageHeader")(j),O=(t(337),t(371)),k=t(339),D=t.n(k),F=t(343),V=t.n(F);O.a.use(D.a).use(V.a).use(f.a).init({backend:{loadPath:"/design-system-code/locales/{{lng}}/{{ns}}.json"},lng:"en",fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},react:{wait:!1,bindI18n:"languageChanged loaded",bindStore:"added removed",nsMode:"default"}}),O.a,t(353);var I=t(355),Q=t.n(I),J=function(e){var A=e.children;return r.a.createElement(o.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"shortcut icon",type:"image/png",href:""+Q.a}]}),r.a.createElement("div",{style:{position:"fixed",zIndex:"99999",top:"0",left:"45%"}},r.a.createElement("a",{className:"sr-only sr-only-focusable aurora-skip",href:"#main-content"},"Skip to main content")),r.a.createElement(x,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("w-screen",{"mt-4":!0,fluid:!0,id:"container"},A))},data:a})};J.propTypes={children:s.a.element.isRequired},A.a=J}}]);
//# sourceMappingURL=1-f3fe8f7fa27deb7302d0.js.map