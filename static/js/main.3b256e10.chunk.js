(this.webpackJsonppokeapp=this.webpackJsonppokeapp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/PokemonLogo.8831bbff.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/pokeicon.9264d5ec.png"},38:function(e,t,a){e.exports=a(72)},43:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),i=a.n(r),c=(a(43),a(20)),l=a.n(c),m=a(30),s=a(11),p=a(12),u=a(18),h=a(13),d=a(10),k=a(17),g=a(31),E=a.n(g),f=(a(62),a(1)),b=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t="".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/").concat(this.props.id,".png"),a="".concat("http://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<100?"00".concat(e).slice(-3):e,".png");return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.c,{mt:2,width:[320,480],mx:"auto"},o.a.createElement("div",{className:"card cardFont"},o.a.createElement(f.d,null,o.a.createElement(f.a,{p:3,width:2/3},o.a.createElement("h2",{className:"cardHeader"},b(this.props.name))),o.a.createElement(f.a,{p:3,width:1/3},o.a.createElement(f.e,{className:"imgAvatar",src:t,sx:{width:50,height:50,borderRadius:9999}}))),o.a.createElement(f.d,null,o.a.createElement(f.a,{width:.5},"\u2022 Species: ",b(this.props.species)),o.a.createElement(f.a,{width:.5},"\u2022 Type:"," ",this.props.types.map((function(e,t){return o.a.createElement("span",{key:t},(t?", ":"")+b(e.type.name))})))),o.a.createElement(f.d,null,o.a.createElement(f.a,{width:.5},"\u2022 Height: ",this.props.height),o.a.createElement(f.a,{width:.5},"\u2022 Weight: ",this.props.weight)),o.a.createElement(f.d,null,o.a.createElement(f.a,{mb:2,width:1},"\u2022 Abilities:"," ",this.props.abilities.map((function(e,t){return o.a.createElement("span",{key:t},(t?", ":"")+b(e.ability.name))})))),o.a.createElement(f.d,null,o.a.createElement(f.a,{width:1},o.a.createElement(f.e,{className:"imgMain",src:a}))),o.a.createElement(f.d,null,o.a.createElement(f.a,{mb:2,width:1},"\u2022 Base Experience: ",this.props.exp)))))}}]),t}(o.a.Component),P=a(33),x=a.n(P),y=(a(64),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{className:"PokeLogo",src:x.a,alt:"PokeLogo"}))}),T=(a(65),function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"PokeHeading"},e.text))}),v=(a(66),function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null),o.a.createElement(T,{text:e.text}),o.a.createElement(f.b,{onClick:e.onClick},"Generate New Pokemon Team"))}),O=a(34),j=a.n(O),N=(a(67),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("h3",{className:"loaderText"},"Generating Pokemon Team..."),o.a.createElement("br",null),o.a.createElement("img",{className:"PokeIcon rotate",src:j.a,alt:"PokeLogo"}))}),S=(a(68),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={loading:!1,pokemon:JSON.parse(window.localStorage.getItem("pokemon"))||[]},a.getPokemonTeam=a.getPokemonTeam.bind(Object(d.a)(a)),a.resetPokemonTeam=a.resetPokemonTeam.bind(Object(d.a)(a)),a}return Object(k.a)(t,e),Object(p.a)(t,[{key:"getPokemonTeam",value:function(){this.setState({loading:!0},this.getPokemon)}},{key:"resetPokemonTeam",value:function(){window.localStorage.clear(),window.location.href="/pokeapp/"}},{key:"getPokemon",value:function(){var e=Object(m.a)(l.a.mark((function e(){var t,a,n,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[];t.length<this.props.PokemonTeamSize;)a=Math.floor(Math.random()*this.props.PokemonTotalAmount)+1,-1===t.indexOf(a)&&t.push(a);n=[];case 3:if(!(n.length<t.length)){e.next=13;break}return o=t[n.length],e.next=7,E.a.get("https://pokeapi.co/api/v2/pokemon/"+o,{headers:{Accept:"application/json"}});case 7:r=e.sent,n.push(r.data),this.setState({loading:!1,pokemon:n}),window.localStorage.setItem("pokemon",JSON.stringify(n)),e.next=3;break;case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{text:"Pokemon Team Builder",onClick:this.getPokemonTeam}),o.a.createElement(N,null)):!this.state.loading&&this.state.pokemon.length>1?o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{text:"Pokemon Team",onClick:this.getPokemonTeam}),this.state.pokemon.map((function(e){return o.a.createElement(w,{key:e.id,id:e.id,name:e.name,exp:e.base_experience,height:e.height,weight:e.weight,abilities:e.abilities,types:e.types,species:e.species.name})})),o.a.createElement(f.b,{mt:3,mb:3,onClick:this.resetPokemonTeam},"Reset Pokemon Team")):o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{text:"Pokemon Team Builder",onClick:this.getPokemonTeam}))}}]),t}(o.a.Component));S.defaultProps={PokemonTeamSize:5,PokemonTotalAmount:807};var C=S,F=(a(69),a(35)),A={fontSizes:[12,14,16,24,32,48,64],colors:{primary:"red",gray:"#f6f6ff",secondary:"black"},buttons:{primary:{color:"white",bg:"primary",border:"1px solid black"},outline:{color:"primary",bg:"transparent",boxShadow:"inset 0 0 0 2px"}}},B=function(){return o.a.createElement(F.a,{theme:A},o.a.createElement("div",{className:"App"},o.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.3b256e10.chunk.js.map