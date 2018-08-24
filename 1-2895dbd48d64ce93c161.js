(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{272:function(e,t,a){var n;e.exports=(n=a(305))&&n.default||n},305:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(0),i=a.n(l),o=a(90),s=a(4),c=function(e){var t=e.location,a=s.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:a})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},315:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora",langs:["en","fr"],defaultLangKey:"en"}}}}},324:function(e,t,a){},77:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(1),r=a.n(n),l=a(0),i=a.n(l),o=a(79),s=a.n(o);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return o.replace}),a(272);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},81:function(e,t,a){"use strict";var n=a(315),r=a(1),l=a.n(r),i=a(0),o=a.n(i),s=a(316),c=a.n(s),u=a(77),d=a(76),g=(a(150),a(32)),p=a.n(g),m=a(60),h=a.n(m),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).search=function(e){var t=e.target.value,n=a.getSearchResults(t);a.setState({results:n.slice(0,5),query:t})},a.toggle=a.toggle.bind(h()(h()(a))),a.state={query:"",results:[],dropdownOpen:!1},a}p()(t,e);var a=t.prototype;return a.render=function(){return l.a.createElement(d.i,{xs:"3"},l.a.createElement(d.l,{isOpen:this.state.dropdownOpen,toggle:this.toggle},l.a.createElement(d.n,{tag:d.o,type:"text",value:this.state.query,onChange:this.search,placeholder:this.props.placeholder}),l.a.createElement(d.m,{className:"container-fluid"},0!==this.state.results.length?this.state.results.map(function(e){return l.a.createElement(d.q,{tag:u.a,to:e.path},e.title)}):l.a.createElement(d.q,{toggle:!1},"No results were found."))))},a.toggle=function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})},a.getSearchResults=function(e){if(!e||!window.__LUNR__)return[];this.setState({dropdownOpen:!0});var t=window.__LUNR__[this.props.lng];return t.index.search(e+"^100 "+e+"*^10 "+e+"~2").map(function(e){var a=e.ref;return t.store[a]})},t}(r.Component),v=a(273),E=a.n(v),b=a(75),w=function(e){function t(t){var a,n=(a=e.call(this,t)||this).props.i18n;return a.state={language:n.language},a.handleChangeLanguage=a.handleChangeLanguage.bind(h()(h()(a))),a}p()(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){this.setState({language:e.i18n.language})},a.handleChangeLanguage=function(e){this.props.i18n.changeLanguage(e)},a.renderLanguageChoice=function(e){var t=this,a=e.code,n=e.label,r=E()("LanguageSwitcher__button",{"LanguageSwitcher__button--selected":this.state.language===a});return l.a.createElement("button",{key:a,className:r,onClick:function(){return t.handleChangeLanguage(a)}},n)},a.render=function(){var e=this;return l.a.createElement("div",{className:"LanguageSwitcher"},[{code:"en",label:"English"},{code:"fr",label:"Français"}].map(function(t){return e.renderLanguageChoice(t)}))},t}(r.Component),y=Object(b.b)("LanguageSwitcher")(w),C=function(e){var t=e.siteTitle,a=e.t,n=e.i18n;return l.a.createElement(d.k,{fluid:!0},l.a.createElement(d.t,{dark:!0,color:"primary",expand:"md",fixed:"top"},l.a.createElement(u.a,{to:"/#!",className:"navbar-brand"}," ",t," "),l.a.createElement("div",{className:"navbar-collapse"},l.a.createElement(d.r,{navbar:!0},l.a.createElement(d.s,null,l.a.createElement(u.a,{to:"/overview/whats-new",className:"nav-link"},a("Overview"))),l.a.createElement(d.s,null,l.a.createElement(u.a,{to:"/#!",className:"nav-link"},a("Identity"))),l.a.createElement(d.s,null,l.a.createElement(u.a,{to:"/component/badges",className:"nav-link"},a("Component"))),l.a.createElement(d.s,null,l.a.createElement(u.a,{to:"/content/content-guidelines",className:"nav-link"},a("Content"))))),l.a.createElement(f,{lng:"en"===n.language?"en":"fr",placeholder:"en"===n.language?"Search":"Chercher"}),l.a.createElement(y,null)))};C.propTypes={siteTitle:o.a.string},C.defaultProps={siteTitle:"Aurora"};var L=Object(b.b)("PageHeader")(C),k=(a(324),a(341)),q=a(326),S=a.n(q),N=a(330),_=a.n(N);k.a.use(S.a).use(_.a).use(b.a).init({backend:{loadPath:"/design-system-code/locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},react:{wait:!1,bindI18n:"languageChanged loaded",bindStore:"added removed",nsMode:"default"}}),k.a;var R=function(e){var t=e.children;return l.a.createElement(u.b,{query:"2317363496",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(L,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(d.k,{fluid:!0},t))},data:n})};R.propTypes={children:o.a.element.isRequired},t.a=R}}]);
//# sourceMappingURL=1-2895dbd48d64ce93c161.js.map