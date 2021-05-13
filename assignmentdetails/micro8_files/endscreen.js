(function(g){var window=this;'use strict';var wJa=function(a,b){a.Ma("onAutonavCoundownStarted",b)},K3=function(a,b,c){var d=b.bb();
g.L(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Fe(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.XF&&(b.lengthText?(f=b.lengthText||null,h=b.qw||null):b.lengthSeconds&&(f=g.fL(b.lengthSeconds),h=g.fL(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.dM(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.XF?b.isLivePlayback:null,n=b instanceof g.XF?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.Jr||g.QH("Watch $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.hm(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.Mr};b instanceof g.eM&&(d.playlist_length=b.length);a.update(d)},L3=function(a){var b=a.T(),c=b.l;
g.V.call(this,{D:"a",K:"ytp-autonav-suggestion-card",U:{href:"{{url}}",target:c?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",Ca:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],oa:"{{duration}}"},{D:"div",Ca:["ytp-autonav-live-stamp"],oa:"Live"},{D:"div",
Ca:["ytp-autonav-upcoming-stamp"],oa:"Upcoming"},{D:"div",K:"ytp-autonav-list-overlay",S:[{D:"div",K:"ytp-autonav-mix-text",oa:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Ca:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],oa:"{{title}}"},{D:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],oa:"{{author}}"},{D:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],oa:"{{views_and_publish_time}}"}]});this.I=a;this.suggestion=
null;this.i=c;this.Oa("click",this.onClick);this.Oa("keypress",this.l)},N3=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.C=b;this.l=0;b=a.T();var d=b.l;this.I=a;this.suggestion=null;this.i=new g.V({D:"div",K:"ytp-autonav-endscreen-upnext-container",U:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",oa:"{{autoplayAlternativeHeader}}"},
{D:"a",K:"ytp-autonav-endscreen-link-container",U:{href:"{{url}}",target:d?b.G:""},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],oa:"{{duration}}"},{D:"div",Ca:["ytp-autonav-live-stamp"],oa:"Live"},{D:"div",Ca:["ytp-autonav-upcoming-stamp"],oa:"Upcoming"}]},{D:"div",K:"ytp-autonav-endscreen-video-info",S:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",
oa:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",oa:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",oa:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",oa:"{{author_and_views}}"}]}]}]});g.G(this,this.i);this.i.Aa(this.element);d||this.N(this.i.Ba("ytp-autonav-endscreen-link-container"),"click",this.LD);this.I.Yb(this.element,this,115127);this.I.Yb(this.i.Ba("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({D:"div",K:"ytp-autonav-overlay"});
g.G(this,this.overlay);this.overlay.Aa(this.element);this.u=new g.V({D:"div",K:"ytp-autonav-endscreen-button-container"});g.G(this,this.u);this.u.Aa(this.element);this.cancelButton=new g.V({D:"button",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],U:{"aria-label":"Cancel autoplay"},oa:"Cancel"});g.G(this,this.cancelButton);this.cancelButton.Aa(this.u.element);this.cancelButton.Oa("click",this.GL,this);this.I.Yb(this.cancelButton.element,this,115129);this.playButton=
new g.V({D:"a",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],U:{href:"{{url}}",role:"button","aria-label":"Play next video"},oa:"Play Now"});g.G(this,this.playButton);this.playButton.Aa(this.u.element);this.playButton.Oa("click",this.LD,this);this.I.Yb(this.playButton.element,this,115130);this.B=new g.J(function(){M3(c)},500);
g.G(this,this.B);this.KD();this.N(a,"autonavvisibility",this.KD)},M3=function(a){var b=O3(a),c=Math.min(a.l?Date.now()-a.l:0,b);
P3(a,Math.ceil((b-c)/1E3));500>=b-c&&a.gh()?a.select(!0):a.gh()&&a.B.start()},O3=function(a){var b=a.I.Vn();
return 0<=b?b:g.S(a.I.T().experiments,"autoplay_time")||1E4},P3=function(a,b){b=void 0===b?-1:b;
a=a.i.Ba("ytp-autonav-endscreen-upnext-header");g.He(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(/\$SECONDS/gi)[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Ge("Up next in $SECONDS".slice(0,d)));var e=g.Fe("span");g.wn(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Re(e,b);a.appendChild(e);a.appendChild(g.Ge("Up next in $SECONDS".slice(d+c.length)));return}}g.Re(a,"Up next")},Q3=function(a,b){g.V.call(this,{D:"div",
Ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},S3=function(a){g.V.call(this,{D:"div",
Ca:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",S:[{D:"span",K:"ytp-upnext-header",oa:"Up Next"},{D:"span",K:"ytp-upnext-title",oa:"{{title}}"},{D:"span",K:"ytp-upnext-author",oa:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},S:[{D:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
S:[{D:"circle",K:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",S:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
oa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.C=this.Ba("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.J(this.Yu,5E3,this);this.l=0;var b=this.Ba("ytp-upnext-cancel");this.cancelButton=new g.V({D:"button",Ca:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},oa:"Cancel"});g.G(this,this.cancelButton);this.cancelButton.Oa("click",this.HL,this);this.cancelButton.Aa(b);this.cancelButton&&this.api.Yb(this.cancelButton.element,
this,115129);g.G(this,this.B);this.api.Yb(this.element,this,18788);b=this.Ba("ytp-upnext-autoplay-icon");this.N(b,"click",this.IL);this.api.Yb(b,this,115130);this.MD();this.N(a,"autonavvisibility",this.MD);this.N(a,"mdxnowautoplaying",this.hQ);this.N(a,"mdxautoplaycanceled",this.iQ);this.N(a,"mdxautoplayupnext",this.IJ);R3(this)&&(a=(a=g.WL(this.api.qb()))?a.DN():null)&&this.IJ(a);g.L(this.element,"ytp-upnext-mobile",this.api.T().i)},R3=function(a){return 3===a.api.getPresentingPlayerType()},xJa=
function(a,b){return b?b:0<=a.api.Vn()?a.api.Vn():g.S(a.api.T().experiments,"autoplay_time")||1E4},T3=function(a,b){b=xJa(a,b);
var c=Math,d=c.min;var e=(0,g.O)()-a.l;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.gh()&&!R3(a)?a.select(!0):a.gh()&&a.i.start()},U3=function(a){Q3.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=this.suggestions=null;this.table=new g.V({D:"div",K:"ytp-suggestion-panel",S:[{D:"div",Ca:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],oa:"More videos"}]});this.J=new g.V({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.G=!1;this.l=new N3(this.player);g.G(this,this.l);this.l.Aa(this.element);a.getVideoData().Nb?this.i=this.l:(this.i=new S3(a),g.$L(this.player,this.i.element,4),g.G(this,this.i));this.overlay=
new g.V({D:"div",K:"ytp-autonav-overlay-cancelled-state"});g.G(this,this.overlay);this.overlay.Aa(this.element);this.B=new g.bM(this);g.G(this,this.B);g.G(this,this.table);this.table.Aa(this.element);this.table.show();g.G(this,this.J);this.J.Aa(this.table.element);this.hide()},yJa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.GO(a.player.T(),c);
g.G(a,c);return c})},V3=function(a){var b=a.Gd();
b!==a.C&&(a.C=b,a.player.W("autonavvisibility"),a.C?(a.l!==a.i&&a.l.hide(),a.table.hide()):(a.l!==a.i&&a.l.show(),a.table.show()))},W3=function(a){Q3.call(this,a,"subscribecard-endscreen");
this.i=new g.V({D:"div",K:"ytp-subscribe-card",S:[{D:"img",K:"ytp-author-image",U:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",S:[{D:"div",K:"ytp-author-name",oa:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.G(this,this.i);this.i.Aa(this.element);var b=a.getVideoData();this.subscribeButton=new g.tN("Subscribe",null,"Unsubscribe",null,!0,!1,b.oh,b.subscribed,"trailer-endscreen",null,null,a);g.G(this,this.subscribeButton);this.subscribeButton.Aa(this.i.Ba("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.Ka);this.Ka();this.hide()},X3=function(a){var b=a.T(),c=g.uB||g.sg?{style:"will-change: opacity"}:void 0,d=b.l,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.V.call(this,{D:"a",Ca:e,U:{href:"{{url}}",target:d?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{D:"div",K:"ytp-videowall-still-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",S:[{D:"span",K:"ytp-videowall-still-info-bg",S:[{D:"span",K:"ytp-videowall-still-info-content",U:c,S:[{D:"span",K:"ytp-videowall-still-info-title",oa:"{{title}}"},{D:"span",K:"ytp-videowall-still-info-author",
oa:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",oa:"Live"},{D:"span",K:"ytp-videowall-still-info-duration",oa:"{{duration}}"}]}]}]},{D:"span",Ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",K:"ytp-videowall-still-listlabel-length",S:[" (",{D:"span",oa:"{{playlist_length}}"},")"]}]},{D:"span",Ca:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],S:[{D:"span",
K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",oa:" (50+)"}]}]});this.suggestion=null;this.l=d;this.api=a;this.i=new g.bM(this);g.G(this,this.i);this.Oa("click",this.onClick);this.Oa("keypress",this.u);this.i.N(a,"videodatachange",this.gb);a.Bg(this.element,this);this.gb()},Y3=function(a){Q3.call(this,a,"videowall-endscreen");
var b=this;this.I=a;this.u=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.J=!1;this.L=null;this.l=new g.bM(this);g.G(this,this.l);this.G=new g.J(function(){g.K(b.element,"ytp-show-tiles")},0);
g.G(this,this.G);var c=new g.V({D:"button",Ca:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},S:[g.nK()]});g.G(this,c);c.Aa(this.element);c.Oa("click",this.ML,this);this.table=new g.fK({D:"div",K:"ytp-endscreen-content"});g.G(this,this.table);this.table.Aa(this.element);c=new g.V({D:"button",Ca:["ytp-button","ytp-endscreen-next"],U:{"aria-label":"Next"},S:[g.oK()]});g.G(this,c);c.Aa(this.element);c.Oa("click",this.LL,this);a.getVideoData().Nb?this.i=new N3(a,!0):this.i=new S3(a);
g.G(this,this.i);g.$L(this.player,this.i.element,4);this.hide()},Z3=function(a){return g.aM(a.player)&&a.Lr()&&!a.B},zJa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.GO(a.I.T(),c);
g.G(a,c);return c})},$3=function(a){var b=a.Gd();
b!==a.J&&(a.J=b,a.player.W("autonavvisibility"))},a4=function(a){g.mM.call(this,a);
var b=this;this.endScreen=null;this.i=this.l=this.u=!1;this.listeners=new g.bM(this);g.G(this,this.listeners);this.env=a.T();AJa(a)?(this.u=!0,BJa(this),this.i?this.endScreen=new U3(a):this.endScreen=new Y3(this.player)):this.env.Rb?this.endScreen=new W3(this.player):this.endScreen=new Q3(this.player);g.G(this,this.endScreen);g.$L(this.player,this.endScreen.element,4);CJa(this);this.listeners.N(a,"videodatachange",this.gb,this);this.listeners.N(a,g.ew("endscreen"),function(c){b.wd(c)});
this.listeners.N(a,g.fw("endscreen"),function(c){b.We(c)})},BJa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Gf&&a.l===b.Nb)return!1;a.i=b.Gf;a.l=b.Nb;return!0},AJa=function(a){a=a.T();
return a.Za&&!a.Rb},CJa=function(a){a.player.Ye("endscreen");
var b=a.player.getVideoData();b=new g.bw(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.bw(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});a.player.Ad([b,c])};
g.TL.prototype.Vn=g.da(4,function(){return this.app.Vn()});
g.BW.prototype.Vn=g.da(3,function(){return this.getVideoData().CE});
g.v(L3,g.V);L3.prototype.select=function(){(this.I.bj(this.suggestion.bb().videoId,this.suggestion.Kd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Sz||void 0)||this.I.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.I.Gb(this.element)};
L3.prototype.onClick=function(a){g.LM(a,this.I,this.i,this.suggestion.Kd||void 0)&&this.select()};
L3.prototype.l=function(a){switch(a.keyCode){case 13:case 32:g.gq(a)||(this.select(),g.fq(a))}};
L3.prototype.Vd=function(a){g.L(this.element,"ytp-suggestion-card-with-margin",a)};g.v(N3,g.V);g.k=N3.prototype;g.k.Br=function(a){this.suggestion!==a&&(this.suggestion=a,K3(this.i,a),this.playButton.Qa("url",this.suggestion.hm()),this.Vd())};
g.k.Vd=function(){var a=this.I.Bi(!0,this.I.isFullscreen());g.L(this.element,"ytp-autonav-endscreen-small-mode",this.Ie(a));g.L(this.element,"ytp-autonav-endscreen-is-premium",!!this.suggestion&&!!this.suggestion.zx);g.L(this.I.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!this.I.Gd());g.L(this.I.getRootNode(),"countdown-running",this.gh());g.L(this.element,"ytp-player-content",this.I.Gd());g.pg(this.overlay.element,{width:a.width+"px"});if(!this.gh()){this.I.Gd()?P3(this,Math.round(O3(this)/
1E3)):P3(this);a=!!this.suggestion&&!!this.suggestion.Mr;var b=this.I.Gd()||!a;g.L(this.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!b&&a);g.L(this.element,"ytp-autonav-endscreen-upnext-no-alternative-header",b&&!a);g.iK(this.u,this.I.Gd())}};
g.k.gh=function(){return 0<this.l};
g.k.Pq=function(){this.gh()||(this.l=Date.now(),M3(this),wJa(this.I,O3(this)),g.L(this.I.getRootNode(),"countdown-running",this.gh()))};
g.k.Ro=function(){this.ol();M3(this);var a=this.i.Ba("ytp-autonav-endscreen-upnext-header");a&&g.Re(a,"Up next")};
g.k.ol=function(){this.gh()&&(this.B.stop(),this.l=0)};
g.k.select=function(a){this.I.nextVideo(!1,void 0===a?!1:a);this.ol()};
g.k.LD=function(a){g.LM(a,this.I)&&(a.currentTarget===this.playButton.element?this.I.Gb(this.playButton.element):a.currentTarget===this.i.Ba("ytp-autonav-endscreen-link-container")&&(a=this.i.Ba("ytp-autonav-endscreen-link-container"),this.I.fb(a,!0),this.I.Gb(a)),this.select())};
g.k.GL=function(){this.I.Gb(this.cancelButton.element);g.VL(this.I,!0)};
g.k.KD=function(){var a=this.I.Gd();this.C&&this.vb!==a&&g.iK(this,a);this.Vd();this.I.fb(this.element,a);this.I.fb(this.cancelButton.element,a);this.I.fb(this.i.Ba("ytp-autonav-endscreen-link-container"),a);this.I.fb(this.playButton.element,a)};
g.k.Ie=function(a){return 400>a.width||459>a.height};g.v(Q3,g.V);g.k=Q3.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Lr=function(){return!1};
g.k.Gd=function(){return!1};
g.k.IG=function(){return!1};g.v(S3,g.V);g.k=S3.prototype;g.k.Yu=function(){this.notification&&(this.B.stop(),this.fc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.Br=function(a){this.suggestion=a;K3(this,a,"hqdefault.jpg")};
g.k.MD=function(){g.iK(this,this.api.Gd());this.api.fb(this.element,this.api.Gd());this.api.fb(this.Ba("ytp-upnext-autoplay-icon"),this.api.Gd());this.cancelButton&&this.api.fb(this.cancelButton.element,this.api.Gd())};
g.k.sQ=function(){window.focus();this.Yu()};
g.k.Pq=function(a){var b=this;this.gh()||(g.ar("a11y-announce","Up Next "+this.suggestion.title),this.l=(0,g.O)(),this.i=new g.J(function(){T3(b,a)},25),T3(this,a),wJa(this.api,xJa(this,a)));
g.zn(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.gh=function(){return!!this.i};
g.k.Ro=function(){this.ol();this.l=(0,g.O)();T3(this);g.K(this.element,"ytp-upnext-autoplay-paused")};
g.k.ol=function(){this.gh()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.R(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.bb(),this.Yu(),this.notification=new Notification("Up Next",{body:b.title,icon:b.Fe()}),this.u=this.N(this.notification,"click",this.sQ),this.B.start())}this.ol();this.api.nextVideo(!1,a)};
g.k.IL=function(a){!g.Me(this.cancelButton.element,g.bq(a))&&g.LM(a,this.api)&&(this.api.Gd()&&this.api.Gb(this.Ba("ytp-upnext-autoplay-icon")),this.select())};
g.k.HL=function(){this.api.Gd()&&this.cancelButton&&this.api.Gb(this.cancelButton.element);g.VL(this.api,!0)};
g.k.hQ=function(a){R3(this);this.show();this.Pq(a)};
g.k.IJ=function(a){R3(this);this.suggestion&&this.suggestion.bb().videoId===a.bb().videoId||this.Br(a)};
g.k.iQ=function(){R3(this);this.ol();this.hide()};
g.k.va=function(){this.ol();this.Yu();g.V.prototype.va.call(this)};g.v(U3,Q3);g.k=U3.prototype;g.k.create=function(){Q3.prototype.create.call(this);this.B.N(this.player,"appresize",this.Vd);this.B.N(this.player,"onVideoAreaChange",this.Vd);this.B.N(this.player,"videodatachange",this.gb);this.B.N(this.player,"autonavchange",this.ND);this.B.N(this.player,"autonavcancel",this.JL);this.gb()};
g.k.show=function(){Q3.prototype.show.call(this);(this.G||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.VL(this.player,!1);g.aM(this.player)&&this.Lr()&&!this.u?(V3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Pq():3===this.videoData.autonavState&&this.i.Ro()):(g.VL(this.player,!0),V3(this));this.Vd()};
g.k.hide=function(){Q3.prototype.hide.call(this);this.i.Ro();V3(this)};
g.k.Vd=function(){var a=this.player.Bi(!0,this.player.isFullscreen());V3(this);this.l.Vd();g.L(this.element,"ytp-autonav-cancelled-small-mode",this.Ie(a));g.L(this.element,"ytp-autonav-cancelled-tiny-mode",this.jw(a));g.L(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.pg(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){b=g.q(b.value);var c=b.next().value;b.next().value.Vd(1===c%2)}}};
g.k.gb=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=yJa(this,a))&&this.suggestions.length)for(this.i.Br(this.suggestions[0]),this.i!==this.l&&this.l.Br(this.suggestions[0]),a=0;a<DJa.length;++a){var b=DJa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new L3(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,K3(c,b));g.G(this,this.videos[a]);this.videos[a].Aa(this.J.element)}}this.Vd()}};
g.k.ND=function(a){1===a?(this.G=!1,this.u=this.videoData.clientPlaybackNonce,this.i.ol(),this.vb&&this.Vd()):(this.G=!0,this.Gd()&&(2===a?this.i.Pq():3===a&&this.i.Ro()))};
g.k.JL=function(a){a?this.ND(1):(this.u=null,this.G=!1)};
g.k.Lr=function(){return 1!==this.videoData.autonavState};
g.k.Ie=function(a){return(910>a.width||459>a.height)&&!this.jw(a)&&!(400>=a.width||360>=a.height)};
g.k.jw=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Gd=function(){return this.vb&&g.aM(this.player)&&this.Lr()&&!this.u};
var DJa=[1,3,2,4];g.v(W3,Q3);W3.prototype.Ka=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.pg,author:a.author});this.subscribeButton.channelId=a.oh;var b=this.subscribeButton;a.subscribed?b.l():b.u()};g.v(X3,g.V);X3.prototype.select=function(){(this.api.bj(this.suggestion.bb().videoId,this.suggestion.Kd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Sz||void 0)||this.api.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.api.Gb(this.element)};
X3.prototype.onClick=function(a){g.LM(a,this.api,this.l,this.suggestion.Kd||void 0)&&this.select()};
X3.prototype.u=function(a){switch(a.keyCode){case 13:case 32:g.gq(a)||(this.select(),g.fq(a))}};
X3.prototype.gb=function(){var a=this.api.getVideoData(),b=this.api.T();this.l=a.C?!1:b.l};g.v(Y3,Q3);g.k=Y3.prototype;g.k.create=function(){Q3.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=zJa(this,a),this.videoData=a);this.Vd();this.l.N(this.player,"appresize",this.Vd);this.l.N(this.player,"onVideoAreaChange",this.Vd);this.l.N(this.player,"videodatachange",this.gb);this.l.N(this.player,"autonavchange",this.Gy);this.l.N(this.player,"autonavcancel",this.KL);a=this.videoData.autonavState;a!==this.L&&this.Gy(a);this.l.N(this.element,"transitionend",this.FR)};
g.k.destroy=function(){g.ru(this.l);g.Ji(this.stills);this.stills=[];this.suggestions=null;Q3.prototype.destroy.call(this);g.zn(this.element,"ytp-show-tiles");this.G.stop();this.L=this.videoData.autonavState};
g.k.Lr=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){Q3.prototype.show.call(this);g.zn(this.element,"ytp-show-tiles");this.player.T().i?g.qn(this.G):this.G.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.VL(this.player,!1);Z3(this)?($3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Pq():3===this.videoData.autonavState&&this.i.Ro()):(g.VL(this.player,!0),$3(this))};
g.k.hide=function(){Q3.prototype.hide.call(this);this.i.Ro();$3(this)};
g.k.FR=function(a){g.bq(a)===this.element&&this.Vd()};
g.k.Vd=function(){if(this.suggestions&&this.suggestions.length){g.K(this.element,"ytp-endscreen-paginate");var a=this.I.Bi(!0,this.I.isFullscreen()),b=g.QL(this.I);b&&(b=b.re()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,u=e<=h-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=
r*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Gg(a,m,n);g.pg(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.Br(this.suggestions[0]);this.i instanceof N3&&this.i.Vd();g.L(this.element,"ytp-endscreen-takeover",Z3(this));$3(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?
r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.ee(p+this.u,l),0!==r){t=this.stills[c];t||(t=new X3(this.player),this.stills[c]=t,a.appendChild(t.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-u-4,B=Math.floor(m*(f+r)/b)-x-4;g.xg(t.element,x,u);g.Gg(t.element,B,y);g.pg(t.element,"transitionDelay",(h+f)/20+"s");g.L(t.element,"ytp-videowall-still-mini",1===r);g.L(t.element,"ytp-videowall-still-large",2<r);r=t;p=this.suggestions[p];r.suggestion!==p&&(r.suggestion=
p,t=r.api.T(),u=g.xn(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",K3(r,p,u),g.CD(t)&&(t=p.hm(),t=g.Od(t,g.pN("emb_rel_end")),r.Qa("url",t)),(p=(p=p.Kd)&&p.itct)&&r.api.jl(r.element,p));c++}g.L(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Je(e.element),g.Ii(e);this.stills.length=c}};
g.k.gb=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.suggestions=zJa(this,a),this.videoData=a,this.Vd())};
g.k.LL=function(){this.u+=this.stills.length;this.Vd()};
g.k.ML=function(){this.u-=this.stills.length;this.Vd()};
g.k.IG=function(){return this.i.gh()};
g.k.Gy=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.ol(),this.vb&&this.Vd()):(this.C=!0,this.vb&&Z3(this)&&(2===a?this.i.Pq():3===a&&this.i.Ro()))};
g.k.KL=function(a){if(a){for(a=0;a<this.stills.length;a++)this.I.fb(this.stills[a].element,!0);this.Gy(1)}else this.B=null,this.C=!1;this.Vd()};
g.k.Gd=function(){return this.vb&&Z3(this)};g.v(a4,g.mM);g.k=a4.prototype;g.k.ep=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!AJa(this.player)||b;var c=a.Rc||g.ND(a.B),d=this.player.us();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Gd=function(){return this.endScreen.Gd()};
g.k.lO=function(){return this.Gd()?this.endScreen.IG():!1};
g.k.va=function(){this.player.Ye("endscreen");g.mM.prototype.va.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.BE;if(b&&b.videoId){var c=this.player.qb().od.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.bD?a=!1:(this.player.bj(b.videoId,void 0,void 0,!0,!0,b),c&&c.uw("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.mM.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.mM.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.wd=function(a){this.ep()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.We=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.gb=function(){CJa(this);this.u&&BJa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new U3(this.player):this.endScreen=new Y3(this.player),g.G(this,this.endScreen),g.$L(this.player,this.endScreen.element,4))};g.xM.endscreen=a4;})(_yt_player);