(function(g){var window=this;var $Ga=function(a,b){a.xa("onAutonavCoundownStarted",b)},j3=function(a,b,c){var d=b.Na();
g.O(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.te(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.yH&&(b.lengthText?(f=b.lengthText||null,h=b.lu||null):b.lengthSeconds&&(f=g.GL(b.lengthSeconds),h=g.GL(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.bN(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.yH?b.isLivePlayback:null,n=b instanceof g.yH?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.iq||g.CJ("Watch $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.sl(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.lq};b instanceof g.cN&&(d.playlist_length=b.length);a.update(d)},k3=function(a){var b=a.T(),c=b.l;
g.X.call(this,{D:"a",K:"ytp-autonav-suggestion-card",U:{href:"{{url}}",target:c?b.C:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",ka:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},ka:["ytp-autonav-timestamp"],ba:"{{duration}}"},{D:"div",ka:["ytp-autonav-live-stamp"],ba:"Live"},{D:"div",
ka:["ytp-autonav-upcoming-stamp"],ba:"Upcoming"},{D:"div",K:"ytp-autonav-list-overlay",S:[{D:"div",K:"ytp-autonav-mix-text",ba:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",ka:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],ba:"{{title}}"},{D:"div",ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],ba:"{{author}}"},{D:"div",ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],ba:"{{views_and_publish_time}}"}]});this.G=a;this.suggestion=
null;this.i=c;this.ya("click",this.onClick);this.ya("keypress",this.l)},m3=function(a,b){b=void 0===b?!1:b;
g.X.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.C=b;this.l=0;var d=a.T(),e=d.l;this.G=a;this.suggestion=null;this.i=new g.X({D:"div",K:"ytp-autonav-endscreen-upnext-container",U:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",ba:"{{autoplayAlternativeHeader}}"},
{D:"a",K:"ytp-autonav-endscreen-link-container",U:{href:"{{url}}",target:e?d.C:""},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},ka:["ytp-autonav-timestamp"],ba:"{{duration}}"},{D:"div",ka:["ytp-autonav-live-stamp"],ba:"Live"},{D:"div",ka:["ytp-autonav-upcoming-stamp"],ba:"Upcoming"}]},{D:"div",K:"ytp-autonav-endscreen-video-info",S:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",
ba:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",ba:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",ba:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",ba:"{{author_and_views}}"}]}]}]});g.I(this,this.i);this.i.fa(this.element);e||this.N(this.i.ha("ytp-autonav-endscreen-link-container"),"click",this.GB);this.G.Jb(this.element,this,115127);this.G.Jb(this.i.ha("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.X({D:"div",K:"ytp-autonav-overlay"});
g.I(this,this.overlay);this.overlay.fa(this.element);this.u=new g.X({D:"div",K:"ytp-autonav-endscreen-button-container"});g.I(this,this.u);this.u.fa(this.element);this.cancelButton=new g.X({D:"button",ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],U:{"aria-label":"Cancel autoplay"},ba:"Cancel"});g.I(this,this.cancelButton);this.cancelButton.fa(this.u.element);this.cancelButton.ya("click",this.AJ,this);this.G.Jb(this.cancelButton.element,this,115129);this.playButton=
new g.X({D:"a",ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],U:{href:"{{url}}",role:"button","aria-label":"Play next video"},ba:"Play Now"});g.I(this,this.playButton);this.playButton.fa(this.u.element);this.playButton.ya("click",this.GB,this);this.G.Jb(this.playButton.element,this,115130);this.B=new g.J(function(){l3(c)},500);
g.I(this,this.B);this.FB();this.N(a,"autonavvisibility",this.FB)},l3=function(a){var b=n3(a),c=Math.min(a.l?Date.now()-a.l:0,b);
o3(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Og()?a.select(!0):a.Og()&&a.B.start()},n3=function(a){var b=a.G.Xm();
return 0<=b?b:g.S(a.G.T().experiments,"autoplay_time")||1E4},o3=function(a,b){b=void 0===b?-1:b;
var c=a.i.ha("ytp-autonav-endscreen-upnext-header");g.Ke(c);if(0<=b){var d=String(b),e="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],f="Up next in $SECONDS".indexOf(e);if(0<=f){c.appendChild(g.Je("Up next in $SECONDS".slice(0,f)));var h=g.Ie("span");g.dn(h,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Qe(h,d);c.appendChild(h);c.appendChild(g.Je("Up next in $SECONDS".slice(f+e.length)));return}}g.Qe(c,"Up next")},p3=function(a,b){g.X.call(this,{D:"div",
ka:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},r3=function(a){g.X.call(this,{D:"div",
ka:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",S:[{D:"span",K:"ytp-upnext-header",ba:"Up Next"},{D:"span",K:"ytp-upnext-title",ba:"{{title}}"},{D:"span",K:"ytp-upnext-author",ba:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},S:[{D:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
S:[{D:"circle",K:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",S:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
ba:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.C=this.ha("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.J(this.nt,5E3,this);this.l=0;var b=this.ha("ytp-upnext-cancel");this.cancelButton=new g.X({D:"button",ka:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},ba:"Cancel"});g.I(this,this.cancelButton);this.cancelButton.ya("click",this.BJ,this);this.cancelButton.fa(b);this.cancelButton&&this.api.Jb(this.cancelButton.element,
this,115129);g.I(this,this.B);this.api.Jb(this.element,this,18788);b=this.ha("ytp-upnext-autoplay-icon");this.N(b,"click",this.CJ);this.api.Jb(b,this,115130);this.HB();this.N(a,"autonavvisibility",this.HB);this.N(a,"mdxnowautoplaying",this.SN);this.N(a,"mdxautoplaycanceled",this.TN);this.N(a,"mdxautoplayupnext",this.zH);q3(this)&&(a=(a=g.TM(this.api.Ta()))?a.nL():null)&&this.zH(a);g.O(this.element,"ytp-upnext-mobile",this.api.T().i)},q3=function(a){return 3===a.api.getPresentingPlayerType()},aHa=
function(a,b){return b?b:0<=a.api.Xm()?a.api.Xm():g.S(a.api.T().experiments,"autoplay_time")||1E4},s3=function(a,b){var c=aHa(a,b),d=Math,e=d.min;
var f=(0,g.Q)()-a.l;d=e.call(d,f,c);c=0===c?1:Math.min(d/c,1);a.C.setAttribute("stroke-dashoffset",""+-211*(c+1));1<=c&&a.Og()&&!q3(a)?a.select(!0):a.Og()&&a.i.start()},t3=function(a){p3.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=this.suggestions=null;this.table=new g.X({D:"div",K:"ytp-suggestion-panel",S:[{D:"div",ka:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],ba:"More videos"}]});this.J=new g.X({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.I=!1;this.l=new m3(this.player);g.I(this,this.l);this.l.fa(this.element);a.getVideoData().tc?this.i=this.l:(this.i=new r3(a),g.XM(this.player,this.i.element,4),g.I(this,this.i));this.overlay=
new g.X({D:"div",K:"ytp-autonav-overlay-cancelled-state"});g.I(this,this.overlay);this.overlay.fa(this.element);this.B=new g.$M(this);g.I(this,this.B);g.I(this,this.table);this.table.fa(this.element);this.table.show();g.I(this,this.J);this.J.fa(this.table.element);this.hide()},bHa=function(a,b){return g.Qc(b.suggestions,function(c){c=g.vP(a.player.T(),c);
g.I(a,c);return c})},u3=function(a){var b=a.yd();
b!==a.C&&(a.C=b,a.player.V("autonavvisibility"),a.C?(a.l!==a.i&&a.l.hide(),a.table.hide()):(a.l!==a.i&&a.l.show(),a.table.show()))},v3=function(a){p3.call(this,a,"subscribecard-endscreen");
this.i=new g.X({D:"div",K:"ytp-subscribe-card",S:[{D:"img",K:"ytp-author-image",U:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",S:[{D:"div",K:"ytp-author-name",ba:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.I(this,this.i);this.i.fa(this.element);var b=a.getVideoData();this.subscribeButton=new g.iO("Subscribe",null,"Unsubscribe",null,!0,!1,b.Wg,b.subscribed,"trailer-endscreen",null,null,a);g.I(this,this.subscribeButton);this.subscribeButton.fa(this.i.ha("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.wa);this.wa();this.hide()},w3=function(a){var b=a.T(),c=g.FA||g.kg?{style:"will-change: opacity"}:void 0,d=b.l,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.X.call(this,{D:"a",ka:e,U:{href:"{{url}}",target:d?b.C:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{D:"div",K:"ytp-videowall-still-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",S:[{D:"span",K:"ytp-videowall-still-info-bg",S:[{D:"span",K:"ytp-videowall-still-info-content",U:c,S:[{D:"span",K:"ytp-videowall-still-info-title",ba:"{{title}}"},{D:"span",K:"ytp-videowall-still-info-author",
ba:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",ba:"Live"},{D:"span",K:"ytp-videowall-still-info-duration",ba:"{{duration}}"}]}]}]},{D:"span",ka:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",K:"ytp-videowall-still-listlabel-length",S:[" (",{D:"span",ba:"{{playlist_length}}"},")"]}]},{D:"span",ka:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],S:[{D:"span",
K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",ba:" (50+)"}]}]});this.suggestion=null;this.l=d;this.api=a;this.i=new g.$M(this);g.I(this,this.i);this.ya("click",this.onClick);this.ya("keypress",this.u);this.i.N(a,"videodatachange",this.Pa);a.Jg(this.element,this);this.Pa()},x3=function(a){p3.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.u=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.J=!1;this.L=null;this.l=new g.$M(this);g.I(this,this.l);this.I=new g.J(function(){g.N(b.element,"ytp-show-tiles")},0);
g.I(this,this.I);var c=new g.X({D:"button",ka:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},S:[g.eL()]});g.I(this,c);c.fa(this.element);c.ya("click",this.GJ,this);this.table=new g.XK({D:"div",K:"ytp-endscreen-content"});g.I(this,this.table);this.table.fa(this.element);c=new g.X({D:"button",ka:["ytp-button","ytp-endscreen-next"],U:{"aria-label":"Next"},S:[g.fL()]});g.I(this,c);c.fa(this.element);c.ya("click",this.FJ,this);a.getVideoData().tc?this.i=new m3(a,!0):this.i=new r3(a);
g.I(this,this.i);g.XM(this.player,this.i.element,4);this.hide()},y3=function(a){return g.YM(a.player)&&a.kq()&&!a.B},cHa=function(a,b){return g.Qc(b.suggestions,function(c){c=g.vP(a.G.T(),c);
g.I(a,c);return c})},z3=function(a){var b=a.yd();
b!==a.J&&(a.J=b,a.player.V("autonavvisibility"))},A3=function(a){g.hN.call(this,a);
var b=this;this.endScreen=null;this.i=this.l=this.u=!1;this.listeners=new g.$M(this);g.I(this,this.listeners);this.env=a.T();dHa(a)?(this.u=!0,eHa(this),this.i?this.endScreen=new t3(a):this.endScreen=new x3(this.player)):this.env.Hc?this.endScreen=new v3(this.player):this.endScreen=new p3(this.player);g.I(this,this.endScreen);g.XM(this.player,this.endScreen.element,4);fHa(this);this.listeners.N(a,"videodatachange",this.Pa,this);this.listeners.N(a,g.BD("endscreen"),function(c){b.Bd(c)});
this.listeners.N(a,g.CD("endscreen"),function(c){b.rf(c)})},eHa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.cf&&a.l===b.tc)return!1;a.i=b.cf;a.l=b.tc;return!0},dHa=function(a){a=a.T();
return a.qb&&!a.Hc},fHa=function(a){a.player.Re("endscreen");
var b=a.player.getVideoData();b=new g.yD(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.yD(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});a.player.ud([b,c])};
g.QM.prototype.Xm=g.ca(4,function(){return this.app.Xm()});
g.fW.prototype.Xm=g.ca(3,function(){return this.getVideoData().NH});
g.u(k3,g.X);k3.prototype.select=function(){(this.G.Fi(this.suggestion.Na().videoId,this.suggestion.Dd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Jx||void 0)||this.G.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.G.ub(this.element)};
k3.prototype.onClick=function(a){g.AN(a,this.G,this.i,this.suggestion.Dd||void 0)&&this.select()};
k3.prototype.l=function(a){switch(a.keyCode){case 13:case 32:g.Zo(a)||(this.select(),g.Yo(a))}};
k3.prototype.Vd=function(a){g.O(this.element,"ytp-suggestion-card-with-margin",a)};g.u(m3,g.X);g.k=m3.prototype;g.k.aq=function(a){this.suggestion!==a&&(this.suggestion=a,j3(this.i,a),this.playButton.Aa("url",this.suggestion.sl()),this.Vd())};
g.k.Vd=function(){var a=this.G.Zi(!0,this.G.isFullscreen());g.O(this.element,"ytp-autonav-endscreen-small-mode",this.Me(a));g.O(this.element,"ytp-autonav-endscreen-is-premium",!!this.suggestion&&!!this.suggestion.jv);g.O(this.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!this.G.yd());g.O(this.G.getRootNode(),"countdown-running",this.Og());g.O(this.element,"ytp-player-content",this.G.yd());g.hg(this.overlay.element,{width:a.width+"px"});if(!this.Og()){this.G.yd()?o3(this,Math.round(n3(this)/
1E3)):o3(this);a=!!this.suggestion&&!!this.suggestion.lq;var b=this.G.yd()||!a;g.O(this.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!b&&a);g.O(this.element,"ytp-autonav-endscreen-upnext-no-alternative-header",b&&!a);g.$K(this.u,this.G.yd())}};
g.k.Og=function(){return 0<this.l};
g.k.wp=function(){this.Og()||(this.l=Date.now(),l3(this),$Ga(this.G,n3(this)),g.O(this.G.getRootNode(),"countdown-running",this.Og()))};
g.k.zn=function(){this.wk();l3(this)};
g.k.wk=function(){this.Og()&&(this.B.stop(),this.l=0)};
g.k.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.wk()};
g.k.GB=function(a){g.AN(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.ub(this.playButton.element):a.currentTarget===this.i.ha("ytp-autonav-endscreen-link-container")&&(a=this.i.ha("ytp-autonav-endscreen-link-container"),this.G.Qa(a,!0),this.G.ub(a)),this.select())};
g.k.AJ=function(){this.G.ub(this.cancelButton.element);g.SM(this.G,!0)};
g.k.FB=function(){var a=this.G.yd();this.C&&this.ab!==a&&g.$K(this,a);this.Vd();this.G.Qa(this.element,a);this.G.Qa(this.cancelButton.element,a);this.G.Qa(this.i.ha("ytp-autonav-endscreen-link-container"),a);this.G.Qa(this.playButton.element,a)};
g.k.Me=function(a){return 400>a.width||459>a.height};g.u(p3,g.X);g.k=p3.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.kq=function(){return!1};
g.k.yd=function(){return!1};
g.k.rE=function(){return!1};g.u(r3,g.X);g.k=r3.prototype;g.k.nt=function(){this.notification&&(this.B.stop(),this.Ib(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.aq=function(a){this.suggestion=a;j3(this,a,"hqdefault.jpg")};
g.k.HB=function(){g.$K(this,this.api.yd());this.api.Qa(this.element,this.api.yd());this.api.Qa(this.ha("ytp-upnext-autoplay-icon"),this.api.yd());this.cancelButton&&this.api.Qa(this.cancelButton.element,this.api.yd())};
g.k.fO=function(){window.focus();this.nt()};
g.k.wp=function(a){var b=this;this.Og()||(g.zo("a11y-announce","Up Next "+this.suggestion.title),this.l=(0,g.Q)(),this.i=new g.J(function(){s3(b,a)},25),s3(this,a),$Ga(this.api,aHa(this,a)));
g.gn(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.X.prototype.hide.call(this)};
g.k.Og=function(){return!!this.i};
g.k.zn=function(){this.wk();this.l=(0,g.Q)();s3(this);g.N(this.element,"ytp-upnext-autoplay-paused")};
g.k.wk=function(){this.Og()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.U(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.Na(),this.nt(),this.notification=new Notification("Up Next",{body:b.title,icon:b.te()}),this.u=this.N(this.notification,"click",this.fO),this.B.start())}this.wk();this.api.nextVideo(!1,a)};
g.k.CJ=function(a){!g.Pe(this.cancelButton.element,g.Uo(a))&&g.AN(a,this.api)&&(this.api.yd()&&this.api.ub(this.ha("ytp-upnext-autoplay-icon")),this.select())};
g.k.BJ=function(){this.api.yd()&&this.cancelButton&&this.api.ub(this.cancelButton.element);g.SM(this.api,!0)};
g.k.SN=function(a){q3(this);this.show();this.wp(a)};
g.k.zH=function(a){q3(this);this.suggestion&&this.suggestion.Na().videoId===a.Na().videoId||this.aq(a)};
g.k.TN=function(){q3(this);this.wk();this.hide()};
g.k.da=function(){this.wk();this.nt();g.X.prototype.da.call(this)};g.u(t3,p3);g.k=t3.prototype;g.k.create=function(){p3.prototype.create.call(this);this.B.N(this.player,"appresize",this.Vd);this.B.N(this.player,"onVideoAreaChange",this.Vd);this.B.N(this.player,"videodatachange",this.Pa);this.B.N(this.player,"autonavchange",this.IB);this.B.N(this.player,"autonavcancel",this.DJ);this.Pa()};
g.k.show=function(){p3.prototype.show.call(this);(this.I||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.SM(this.player,!1);g.YM(this.player)&&this.kq()&&!this.u?(u3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.wp():3===this.videoData.autonavState&&this.i.zn()):(g.SM(this.player,!0),u3(this));this.Vd()};
g.k.hide=function(){p3.prototype.hide.call(this);this.i.zn();u3(this)};
g.k.Vd=function(){var a=this.player.Zi(!0,this.player.isFullscreen());u3(this);this.l.Vd();g.O(this.element,"ytp-autonav-cancelled-small-mode",this.Me(a));g.O(this.element,"ytp-autonav-cancelled-tiny-mode",this.hu(a));g.O(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.hg(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){b=g.q(b.value);var c=b.next().value;b.next().value.Vd(1===c%2)}}};
g.k.Pa=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=bHa(this,a))&&this.suggestions.length)for(this.i.aq(this.suggestions[0]),this.i!==this.l&&this.l.aq(this.suggestions[0]),a=0;a<gHa.length;++a){var b=gHa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new k3(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,j3(c,b));g.I(this,this.videos[a]);this.videos[a].fa(this.J.element)}}this.Vd()}};
g.k.IB=function(a){1===a?(this.I=!1,this.u=this.videoData.clientPlaybackNonce,this.i.wk(),this.ab&&this.Vd()):(this.I=!0,this.yd()&&(2===a?this.i.wp():3===a&&this.i.zn()))};
g.k.DJ=function(a){a?this.IB(1):(this.u=null,this.I=!1)};
g.k.kq=function(){return 1!==this.videoData.autonavState};
g.k.Me=function(a){return(910>a.width||459>a.height)&&!this.hu(a)&&!(400>=a.width||360>=a.height)};
g.k.hu=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.yd=function(){return this.ab&&g.YM(this.player)&&this.kq()&&!this.u};
var gHa=[1,3,2,4];g.u(v3,p3);v3.prototype.wa=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.fg,author:a.author});this.subscribeButton.channelId=a.Wg;var b=this.subscribeButton;a.subscribed?b.l():b.u()};g.u(w3,g.X);w3.prototype.select=function(){(this.api.Fi(this.suggestion.Na().videoId,this.suggestion.Dd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Jx||void 0)||this.api.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.api.ub(this.element)};
w3.prototype.onClick=function(a){g.AN(a,this.api,this.l,this.suggestion.Dd||void 0)&&this.select()};
w3.prototype.u=function(a){switch(a.keyCode){case 13:case 32:g.Zo(a)||(this.select(),g.Yo(a))}};
w3.prototype.Pa=function(){var a=this.api.getVideoData(),b=this.api.T();this.l=a.C?!1:b.l};g.u(x3,p3);g.k=x3.prototype;g.k.create=function(){p3.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=cHa(this,a),this.videoData=a);this.Vd();this.l.N(this.player,"appresize",this.Vd);this.l.N(this.player,"onVideoAreaChange",this.Vd);this.l.N(this.player,"videodatachange",this.Pa);this.l.N(this.player,"autonavchange",this.uw);this.l.N(this.player,"autonavcancel",this.EJ);a=this.videoData.autonavState;a!==this.L&&this.uw(a);this.l.N(this.element,"transitionend",this.sP)};
g.k.destroy=function(){g.St(this.l);g.Ai(this.stills);this.stills=[];this.suggestions=null;p3.prototype.destroy.call(this);g.gn(this.element,"ytp-show-tiles");this.I.stop();this.L=this.videoData.autonavState};
g.k.kq=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){p3.prototype.show.call(this);g.gn(this.element,"ytp-show-tiles");this.player.T().i?this.I.ng():this.I.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.SM(this.player,!1);y3(this)?(z3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.wp():3===this.videoData.autonavState&&this.i.zn()):(g.SM(this.player,!0),z3(this))};
g.k.hide=function(){p3.prototype.hide.call(this);this.i.zn();z3(this)};
g.k.sP=function(a){g.Uo(a)===this.element&&this.Vd()};
g.k.Vd=function(){if(this.suggestions&&this.suggestions.length){g.N(this.element,"ytp-endscreen-paginate");var a=this.G.Zi(!0,this.G.isFullscreen()),b=g.NM(this.G);b&&(b=b.ue()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,w=e<=h-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&w)n-=p*m,e+=2;else if(t)n-=
r*m,b+=2;else if(w)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.wg(a,m,n);g.hg(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.aq(this.suggestions[0]);this.i instanceof m3&&this.i.Vd();g.O(this.element,"ytp-endscreen-takeover",y3(this));z3(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?
r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.fe(p+this.u,l),0!==r){t=this.stills[c];t||(t=new w3(this.player),this.stills[c]=t,a.appendChild(t.element));w=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-w-4,F=Math.floor(m*(f+r)/b)-x-4;g.pg(t.element,x,w);g.wg(t.element,F,y);g.hg(t.element,"transitionDelay",(h+f)/20+"s");g.O(t.element,"ytp-videowall-still-mini",1===r);g.O(t.element,"ytp-videowall-still-large",2<r);r=t;p=this.suggestions[p];r.suggestion!==p&&(r.suggestion=
p,t=r.api.T(),w=g.en(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",j3(r,p,w),g.RF(t)&&(t=p.sl(),t=g.Od(t,g.eO("emb_rel_end")),r.Aa("url",t)),(p=(p=p.Dd)&&p.itct)&&r.api.Tl(r.element,p));c++}g.O(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Me(e.element),g.zi(e);this.stills.length=c}};
g.k.Pa=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.suggestions=cHa(this,a),this.videoData=a,this.Vd())};
g.k.FJ=function(){this.u+=this.stills.length;this.Vd()};
g.k.GJ=function(){this.u-=this.stills.length;this.Vd()};
g.k.rE=function(){return this.i.Og()};
g.k.uw=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.wk(),this.ab&&this.Vd()):(this.C=!0,this.ab&&y3(this)&&(2===a?this.i.wp():3===a&&this.i.zn()))};
g.k.EJ=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Qa(this.stills[a].element,!0);this.uw(1)}else this.B=null,this.C=!1;this.Vd()};
g.k.yd=function(){return this.ab&&y3(this)};g.u(A3,g.hN);g.k=A3.prototype;g.k.Gn=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!dHa(this.player)||b;var c=a.bd||g.aG(a.B),d=this.player.Kq();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.yd=function(){return this.endScreen.yd()};
g.k.UL=function(){return this.yd()?this.endScreen.rE():!1};
g.k.da=function(){this.player.Re("endscreen");g.hN.prototype.da.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.HE;if(b&&b.videoId){var c=this.player.Ta().hd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.fC?a=!1:(this.player.Fi(b.videoId,void 0,void 0,!0,!0,b),c&&c.ou("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.hN.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.hN.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.Bd=function(a){this.Gn()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.rf=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.Pa=function(){fHa(this);this.u&&eHa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new t3(this.player):this.endScreen=new x3(this.player),g.I(this,this.endScreen),g.XM(this.player,this.endScreen.element,4))};g.nN.endscreen=A3;})(_yt_player);
