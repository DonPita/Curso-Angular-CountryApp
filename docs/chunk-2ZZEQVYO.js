import{$ as ae,A as h,B as P,C as F,D as L,E as w,F as X,G as Y,H as Z,I as D,J as y,K as M,L as ee,M as te,Q as ie,S as ne,T as oe,U as re,V as U,Z as N,_ as j,a as $,b as H,c as A,d as z,e as x,f as J,g as _,h as G,i as f,j as B,k as K,l as Q,m as T,n as s,o as g,p as d,q as p,r as i,s as t,t as u,u as W,v as b,w as S,x as R,y as r,z as m}from"./chunk-KPXJ4VSL.js";var v=(()=>{let e=class e{constructor(o){this.http=o,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(o){return this.http.get(o).pipe(A(()=>$([])))}searchCountryByAlphaCode(o){let a=`${this.apiUrl}/alpha/${o}`;return this.http.get(a).pipe(H(l=>l.length>0?l[0]:null),A(l=>$(null)))}searchCapital(o){let a=`${this.apiUrl}/capital/${o}`;return this.getCountriesRequest(a).pipe(x(l=>this.cacheStore.byCapital={term:o,countries:l}),x(()=>this.saveToLocalStorage()))}searchCountry(o){let a=`${this.apiUrl}/translation/${o}`;return this.getCountriesRequest(a).pipe(x(l=>this.cacheStore.byCountries={term:o,countries:l}),x(()=>this.saveToLocalStorage()))}searchRegion(o){let a=`${this.apiUrl}/region/${o}`;return this.getCountriesRequest(a).pipe(x(l=>this.cacheStore.byRegion={region:o,countries:l}),x(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(a){return new(a||e)(G(te))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var de=n=>["/countries/by",n];function he(n,e){n&1&&(i(0,"div",2),r(1,` No hay pa\xEDses que mostrar
`),t())}function fe(n,e){if(n&1&&(i(0,"tr")(1,"td"),r(2),t(),i(3,"td"),r(4),t(),i(5,"td"),u(6,"img",5),t(),i(7,"td"),r(8),t(),i(9,"td"),r(10),t(),i(11,"td"),r(12),F(13,"number"),t(),i(14,"td")(15,"a",6),r(16," Info "),t()()()),n&2){let c=e.$implicit,o=e.index;s(2),m(o+1),s(2),h(" ",c.flag," "),s(2),p("src",c.flags.svg,T)("alt",c.name.common),s(2),h(" ",c.name.common," "),s(2),h(" ",c.capital," "),s(2),h(" ",L(13,8,c.population)," "),s(3),p("routerLink",P(10,de,c.cca3))}}function ge(n,e){if(n&1&&(i(0,"table",3)(1,"thead")(2,"tr")(3,"th"),r(4,"#"),t(),i(5,"th"),r(6,"Icon"),t(),i(7,"th"),r(8,"Bandera"),t(),i(9,"th"),r(10,"Nombre"),t(),i(11,"th"),r(12,"Capital"),t(),i(13,"th"),r(14,"Poblaci\xF3n"),t(),u(15,"th"),t()(),i(16,"tbody"),d(17,fe,17,12,"tr",4),t()()),n&2){let c=S();s(17),p("ngForOf",c.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=f({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],["routerLinkActive","router-link-active","rLink","",3,"routerLink"]],template:function(a,l){if(a&1&&d(0,he,2,0,"div",1)(1,ge,18,1,"ng-template",null,0,w),a&2){let I=R(2);p("ngIf",l.countries.length===0)("ngIfElse",I)}},dependencies:[D,y,oe,re,M],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let n=e;return n})();function xe(n,e){n&1&&u(0,"share-loading-spinner")}var se=(()=>{let e=class e{constructor(o){this.countriesSevice=o,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesSevice.cacheStore.byCapital.countries,this.initialValue=this.countriesSevice.cacheStore.byCapital.term}searchByCapital(o){this.isLoading=!0,this.countriesSevice.searchCapital(o).subscribe(a=>{this.countries=a,this.isLoading=!1})}};e.\u0275fac=function(a){return new(a||e)(g(v))},e.\u0275cmp=f({type:e,selectors:[["countries-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeHolder","Buscar por capital",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(a,l){a&1&&(i(0,"h2"),r(1,"Por Capital"),t(),u(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(V){return l.searchByCapital(V)}),t()()(),i(6,"div",0)(7,"div",1),u(8,"hr"),d(9,xe,1,0,"share-loading-spinner",3),u(10,"countries-table",4),t()()),a&2&&(s(5),p("initialValue",l.initialValue),s(4),p("ngIf",l.isLoading),s(),p("countries",l.countries))},dependencies:[y,j,N,E]});let n=e;return n})();function Se(n,e){n&1&&u(0,"share-loading-spinner")}var ce=(()=>{let e=class e{constructor(o){this.countriesService=o,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(o){this.isLoading=!0,this.countriesService.searchCountry(o).subscribe(a=>{this.countries=a,this.isLoading=!1})}};e.\u0275fac=function(a){return new(a||e)(g(v))},e.\u0275cmp=f({type:e,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeHolder","Buscar por pa\xEDs",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(a,l){a&1&&(i(0,"h2"),r(1,"Por Nombre de Pa\xEDs"),t(),u(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(V){return l.searchByCountry(V)}),t()()(),i(6,"div",0)(7,"div",1),u(8,"hr"),d(9,Se,1,0,"share-loading-spinner",3),u(10,"countries-table",4),t()()),a&2&&(s(5),p("initialValue",l.initialValue),s(4),p("ngIf",l.isLoading),s(),p("countries",l.countries))},dependencies:[y,j,N,E]});let n=e;return n})();var Ce=n=>({"btn-outline-primary":n});function be(n,e){if(n&1){let c=W();i(0,"button",5),b("click",function(){let a=K(c).$implicit,l=S();return Q(l.searchByRegion(a))}),r(1),t()}if(n&2){let c=e.$implicit,o=S();p("ngClass",P(2,Ce,o.selectedRegion===c)),s(),h(" ",c,"")}}var le=(()=>{let e=class e{constructor(o){this.countriesService=o,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(o){this.selectedRegion=o,this.countriesService.searchRegion(o).subscribe(a=>{this.countries=a})}};e.\u0275fac=function(a){return new(a||e)(g(v))},e.\u0275cmp=f({type:e,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(a,l){a&1&&(i(0,"h2"),r(1,"Por Regi\xF3n"),t(),u(2,"hr"),i(3,"div",0)(4,"div",1),d(5,be,2,4,"button",2),t()(),i(6,"div",0)(7,"div",3),u(8,"hr")(9,"countries-table",4),t()()),a&2&&(s(5),p("ngForOf",l.regions),s(4),p("countries",l.countries))},dependencies:[Z,D,E]});let n=e;return n})();function Ee(n,e){n&1&&(i(0,"div",2),r(1," Espere por favor "),t())}function Ie(n,e){if(n&1&&(i(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),r(4,"Pa\xEDs: "),i(5,"strong"),r(6),t()(),u(7,"hr"),t()(),i(8,"div",3)(9,"div",5)(10,"h3"),r(11,"Bandera"),t(),u(12,"img",6),t(),i(13,"div",7)(14,"h3"),r(15,"Informaci\xF3n"),t(),i(16,"ul",8)(17,"li",9)(18,"strong"),r(19,"Poblaci\xF3n:"),t(),r(20),F(21,"number"),t(),i(22,"li",9)(23,"strong"),r(24,"C\xF3digo:"),t(),r(25),t(),i(26,"li",9)(27,"strong"),r(28,"Capital:"),t(),r(29),t()()(),i(30,"div",10)(31,"div",7)(32,"h3"),r(33,"Traducciones"),t(),i(34,"div",11)(35,"span",12),r(36),t(),i(37,"span",12),r(38),t(),i(39,"span",12),r(40),t(),i(41,"span",12),r(42),t(),i(43,"span",12),r(44),t(),i(45,"span",12),r(46),t(),i(47,"span",12),r(48),t(),i(49,"span",12),r(50),t(),i(51,"span",12),r(52),t(),i(53,"span",12),r(54),t(),i(55,"span",12),r(56),t(),i(57,"span",12),r(58),t(),i(59,"span",12),r(60),t(),i(61,"span",12),r(62),t(),i(63,"span",12),r(64),t(),i(65,"span",12),r(66),t(),i(67,"span",12),r(68),t(),i(69,"span",12),r(70),t()()()()()()),n&2){let c=S();s(6),m(c.country.name.common),s(6),p("src",c.country.flags.svg,T)("alt",c.country.name.common),s(8),h(" ",L(21,24,c.country.population)," "),s(5),h(" ",c.country.cca3," "),s(4),h(" ",c.country.capital," "),s(7),m(c.country.translations.spa.common),s(2),m(c.country.translations.ara.common),s(2),m(c.country.translations.bre.common),s(2),m(c.country.translations.ces.common),s(2),m(c.country.translations.cym.common),s(2),m(c.country.translations.deu.common),s(2),m(c.country.translations.est.common),s(2),m(c.country.translations.fin.common),s(2),m(c.country.translations.fra.common),s(2),m(c.country.translations.hun.common),s(2),m(c.country.translations.ita.common),s(2),m(c.country.translations.jpn.common),s(2),m(c.country.translations.kor.common),s(2),m(c.country.translations.nld.common),s(2),m(c.country.translations.por.common),s(2),m(c.country.translations.rus.common),s(2),m(c.country.translations.swe.common),s(2),m(c.country.translations.tur.common)}}var me=(()=>{let e=class e{constructor(o,a,l){this.activatedRoute=o,this.router=a,this.countriesService=l}ngOnInit(){this.activatedRoute.params.pipe(z(({id:o})=>this.countriesService.searchCountryByAlphaCode(o))).subscribe(o=>o?this.country=o:this.router.navigateByUrl(""))}};e.\u0275fac=function(a){return new(a||e)(g(ie),g(ne),g(v))},e.\u0275cmp=f({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(a,l){if(a&1&&d(0,Ee,2,0,"ng-template",null,0,w)(2,Ie,71,26,"div",1),a&2){let I=R(1);s(2),p("ngIf",l.country)("ngIfElse",I)}},dependencies:[y,M]});let n=e;return n})();var _e=[{path:"by-capital",component:se},{path:"by-country",component:ce},{path:"by-region",component:le},{path:"by/:id",component:me},{path:"**",redirectTo:"by-capital"}],pe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=B({type:e}),e.\u0275inj=_({providers:[{provide:X,useClass:Y}],imports:[U.forChild(_e),U]});let n=e;return n})();var Ze=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=B({type:e}),e.\u0275inj=_({imports:[ee,pe,ae]});let n=e;return n})();export{Ze as CountriesModule};