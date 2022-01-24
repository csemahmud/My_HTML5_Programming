/*!CK:99285948!*//*1390272319,178137879*/

if (self.CavalryLogger) { CavalryLogger.start_js(["fvBvZ"]); }

__d("PixelzFocus",[],function(a,b,c,d,e,f){"use strict";var g={search:function(h,i){var j=0,k=h.length-1;while(j<=k){var l=j+Math.floor((k-j)/2),m=h[l];if(m>i){k=l-1;}else if(m<i){j=l+1;}else return l;}return Math.min(j,k);},forceSpecificPoint:function(h,i,j){var k=1e-09,l=g.search(h,i-j-k)+1,m=g.search(h,i+j);return h.slice(l,m+1);},findBiggestSets:function(h,i){var j=[],k=-1;for(var l=0;l<h.length;++l){var m=h[l],n=l,o=g.search(h,m+i),p=o-n;if(p>k)j=[];if(p>=k){k=p;j.push({low:n,high:o});}}return j;},getBestSet:function(h,i,j){var k=-1,l=null;for(var m=0;m<i.length;++m){var n=i[m],o=h[n.low],p=h[n.high],q=o+(p-o)/2,r=Math.min(o-(q-j),(q+j)-p);if(r>k){k=r;l=n;}}return l;},getFocusFromSet:function(h,i){var j=h[i.low],k=h[i.high];return j+(k-j)/2;},clampFocus:function(h,i){var j=i/2,k=1-(i/2);if(h<j)return j;if(h>k)return k;return h;},convertFromCenterToCSS:function(h,i){if(Math.abs(1-i)<1e-05)return 0;return (h-i/2)/(1-i);},convertFromCSSToCenter:function(h,i){return h*(1-i)+i/2;},getVisible:function(h,i){if(h<i)return h/i;return i/h;},getHidden:function(h,i){return 1-g.getVisible(h,i);},focusHorizontally:function(h,i){return h<i;},convertVectorFromCenterToCSS:function(h,i,j){var k=g.focusHorizontally(i,j),l;if(k){l=h.x/100;}else l=h.x/100;var m=g.convertFromCenterToCSS(l,g.getVisible(i,j));if(k){return {x:m,y:0};}else return {x:0,y:m};},getCropRect:function(h,i,j){var k=g.focusHorizontally(i,j),l=g.getVisible(i,j);if(k){var m=(1-l)*h.x;return {left:m,top:0,width:l,height:1};}else{var n=(1-l)*h.y;return {left:0,top:n,width:1,height:l};}}};e.exports=g;});
__d("NubController",["ArbiterMixin","Dock","copyProperties"],function(a,b,c,d,e,f){var g=b('ArbiterMixin'),h=b('Dock'),i=b('copyProperties');function j(){}i(j.prototype,g,{init:function(k){this.el=k;h.registerNubController(k,this);return this;},buttonContentChanged:function(){this.inform('nub/button/content-changed');},flyoutContentChanged:function(){this.inform('nub/flyout/content-changed');},hide:function(){h.hide(this.el);},show:function(){h.show(this.el);}});e.exports=j;});
__d("BanzaiLogger",["Banzai"],function(a,b,c,d,e,f){var g=b('Banzai'),h='logger';function i(k){return {log:function(l,m){g.post(h+':'+l,m,k);}};}var j=i();j.create=i;e.exports=j;});
__d("BlobFactory",["emptyFunction"],function(a,b,c,d,e,f){var g=b('emptyFunction'),h,i=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder;if(a.Blob){var j;try{new a.Blob();j=true;}catch(k){j=false;}h={getBlob:function(l,m){l=l||[];m=m||{};if(j){return new a.Blob(l,m);}else{var n=new i();for(var o=0;o<l.length;o++)n.append(l[o]);return n.getBlob(m.type);}},isSupported:g.thatReturnsTrue};}else h={getBlob:function(){},isSupported:g.thatReturnsFalse};e.exports=h;});
__d("endsWith",[],function(a,b,c,d,e,f){function g(h,i){return h.indexOf(i,h.length-i.length)>-1;}e.exports=g;});
__d("RequiredFormListener",["Event","Input"],function(a,b,c,d,e,f){var g=b('Event'),h=b('Input');g.listen(document.documentElement,'submit',function(i){var j=i.getTarget().getElementsByTagName('*');for(var k=0;k<j.length;k++)if(j[k].getAttribute('required')&&h.isEmpty(j[k])){j[k].focus();return false;}},g.Priority.URGENT);});
__d("MercuryErrorInfo",["MercuryErrorType","tx"],function(a,b,c,d,e,f){var g=b('MercuryErrorType'),h=b('tx'),i={getMessage:function(j){var k="This message failed to send.";if(i.isConnectionError(j)){k="Unable to connect to Facebook. This message failed to send. ";}else if(j.description)k=j.description;return k;},isConnectionError:function(j){if(j&&j.type==g.TRANSPORT)return j.code===1001||j.code===1004||j.code===1006;return false;},isTransient:function(j){return j&&j.is_transient;},isPermanent:function(j){return j?!this.isTransient(j):false;}};e.exports=i;});
__d("AsyncUploadBase",["ArbiterMixin","AsyncRequest","AsyncResponse","BrowserSupport","Form","copyProperties","mixin","removeFromArray"],function(a,b,c,d,e,f){var g=b('ArbiterMixin'),h=b('AsyncRequest'),i=b('AsyncResponse'),j=b('BrowserSupport'),k=b('Form'),l=b('copyProperties'),m=b('mixin'),n=b('removeFromArray'),o=m(g);for(var p in o)if(o.hasOwnProperty(p))r[p]=o[p];var q=o===null?null:o.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=o;function r(t){"use strict";this.setURI(t);this.setNetworkErrorRetryLimit(0);}r.prototype.setAllowCrossOrigin=function(t){"use strict";this._allowCrossOrigin=!!t;return this;};r.prototype.setData=function(t){"use strict";this._data=t;return this;};r.prototype.setNetworkErrorRetryLimit=function(t){"use strict";this._retryLimit=t;return this;};r.prototype.setLimit=function(t){"use strict";this._limit=t;return this;};r.prototype.setPreprocessHandler=function(t){"use strict";this._preprocessHandler=t;return this;};r.prototype.setRelativeTo=function(t){"use strict";this._relativeTo=t;return this;};r.prototype.setStatusElement=function(t){"use strict";this._statusElement=t;return this;};r.prototype.setURI=function(t){"use strict";this._uri=t;return this;};r.prototype.suspend=function(){"use strict";this._suspended=true;return this;};r.prototype.resume=function(){"use strict";this._suspended=false;this._processQueue();return this;};r.prototype.isUploading=function(){"use strict";return this._inFlight;};r.prototype._createFileUpload=function(t,u,v){"use strict";return new s(t,u,v);};r.prototype._parseFiles=function(t){"use strict";var u={};for(var v in t){var w=t[v];if(Array.isArray(w)){u[v]=w;}else{u[v]=[];if(w instanceof window.FileList){for(var x=0;x<w.length;x++)u[v].push(w.item(x));}else if(w instanceof window.File||w instanceof window.Blob)u[v].push(w);}}return u;};r.prototype._processQueue=function(){"use strict";if(this._suspended)return;while(this._pending.length<this._limit){if(!this._waiting.length)break;var t=this._waiting.shift();if(this._preprocessHandler){this._preprocessHandler(t,this._processUpload.bind(this));}else this._processUpload(t);this._pending.push(t);}};r.prototype._processUpload=function(t){"use strict";var u=k.createFormData(t.getData()||this._data);if(t.getFile()){u.append(t.getName(),t.getFile());var v=t.getFile().uploadID;if(v)u.append('upload_id',v);}var w=new h().setAllowCrossOrigin(this._allowCrossOrigin).setURI(this._uri).setRawData(u).setStatusElement(this._statusElement).setHandler(this._success.bind(this,t)).setErrorHandler(this._failure.bind(this,t)).setUploadProgressHandler(this._progress.bind(this,t)).setInitialHandler(this._initial.bind(this,t));if(this._relativeTo)w.setRelativeTo(this._relativeTo);w.send();t.setAsyncRequest(w);this._inFlight=true;if(!t.getRetryCount())this.inform('start',t);};r.prototype._abort=function(t){"use strict";n(this._waiting,t);t.abort();};r.prototype._initial=function(t){"use strict";this.inform('initial',t);};r.prototype._success=function(t,u){"use strict";this._complete(t);this.inform('success',t.handleSuccess(u));this._processQueue();};r.prototype._retryUpload=function(t){"use strict";t.increaseRetryCount();this._processUpload(t);};r.prototype._failure=function(t,u){"use strict";if(u.error===1004&&t.getRetryCount()<this._retryLimit)return this._retryUpload(t);this._complete(t);if(this.inform('failure',t.handleFailure(u))!==false)i.defaultErrorHandler(u);this._processQueue();};r.prototype._progress=function(t,event){"use strict";this.inform('progress',t.handleProgress(event));};r.prototype._complete=function(t){"use strict";n(this._pending,t);if(!this._pending.length)this._inFlight=false;};r.isSupported=function(){"use strict";return j.hasFileAPI();};l(r.prototype,{_limit:10});function s(t,u,v){"use strict";this._name=t;this._file=u;this._data=v;this._success=null;this._response=null;this._progressEvent=null;this._request=null;this._numRetries=0;}s.prototype.getName=function(){"use strict";return this._name;};s.prototype.getFile=function(){"use strict";return this._file;};s.prototype.setFile=function(t){"use strict";this._file=t;};s.prototype.getData=function(){"use strict";return this._data;};s.prototype.isComplete=function(){"use strict";return this._success!==null;};s.prototype.isSuccess=function(){"use strict";return this._success===true;};s.prototype.getResponse=function(){"use strict";return this._response;};s.prototype.getProgressEvent=function(){"use strict";return this._progressEvent;};s.prototype.setAsyncRequest=function(t){"use strict";this._request=t;return this;};s.prototype.increaseRetryCount=function(){"use strict";this._numRetries++;return this;};s.prototype.getRetryCount=function(){"use strict";return this._numRetries;};s.prototype.isWaiting=function(){"use strict";return !this._request;};s.prototype.abort=function(){"use strict";this._request&&this._request.abort();this._request=null;};s.prototype.handleSuccess=function(t){"use strict";this._success=true;this._response=t;this._progressEvent=null;return this;};s.prototype.handleFailure=function(t){"use strict";this._success=false;this._response=t;this._progressEvent=null;return this;};s.prototype.handleProgress=function(event){"use strict";this._progressEvent=event;return this;};e.exports=r;});
__d("AsyncUploadRequest",["AsyncUploadBase"],function(a,b,c,d,e,f){var g=b('AsyncUploadBase');for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(){"use strict";if(g!==null)g.apply(this,arguments);}j.prototype.setFiles=function(k){"use strict";this._files=this._parseFiles(k);return this;};j.prototype.send=function(){"use strict";if(this._inFlight)return;this._inFlight=true;this._uploads=[];for(var k in this._files)this._files[k].forEach(function(l){this._uploads.push(this._createFileUpload(k,l));}.bind(this));if(this._uploads.length){this._waiting=this._uploads.slice(0);this._pending=[];this._processQueue();}else this._processUpload(this._createFileUpload(null,null));};j.prototype._processQueue=function(){"use strict";i._processQueue.call(this);if(!this._pending.length&&!this._waiting.length)this.inform('complete',this._uploads);};j.isSupported=function(){"use strict";return g.isSupported();};e.exports=j;});
__d("DocRPC",["ErrorUtils"],function(a,b,c,d,e,f){var g=b('ErrorUtils'),h={_apis:{},_dispatch:function(i){var j;try{i=JSON.parse(i);}catch(k){throw new Error('DocRPC unparsable dispatch: "'+i+'"');}if(h._apis.hasOwnProperty(i.api)){var l=h._apis[i.api];if(l[i.method])j=g.applyWithGuard(l[i.method],l,i.args);}if(j===undefined)j=null;return JSON.stringify(j);},publish:function(i,j){h._apis[j]=i;},proxy:function(i,j,k){var l={};k.forEach(function(m){l[m]=function(){var n={api:j,method:m,args:Array.prototype.slice.call(arguments)},o;try{if(i.closed)throw new Error('DocRPC window closed');o=i.DocRPC._dispatch(JSON.stringify(n));}catch(p){g.reportError(p);return;}if(typeof(o)=='string')try{o=JSON.parse(o);}catch(p){throw new Error('DocRPC '+j+'.'+m+' unparsable return: "'+o+'"');}return o;};});return l;}};e.exports=a.DocRPC=h;});
__d("DOMWrapper",[],function(a,b,c,d,e,f){var g,h,i={setRoot:function(j){g=j;},getRoot:function(){return g||document.body;},setWindow:function(j){h=j;},getWindow:function(){return h||self;}};e.exports=i;});
__d("Flash",["DOMEventListener","DOMWrapper","QueryString","UserAgent","copyProperties","guid","htmlSpecialChars"],function(a,b,c,d,e,f){var g=b('DOMEventListener'),h=b('DOMWrapper'),i=b('QueryString'),j=b('UserAgent'),k=b('copyProperties'),l=b('guid'),m=b('htmlSpecialChars'),n={},o,p=h.getWindow().document;function q(v){var w=p.getElementById(v);if(w)w.parentNode.removeChild(w);delete n[v];}function r(){for(var v in n)if(n.hasOwnProperty(v))q(v);}function s(v){return v.replace(/\d+/g,function(w){return '000'.substring(w.length)+w;});}function t(v){if(!o){if(j.ie()>=9)g.add(window,'unload',r);o=true;}n[v]=v;}var u={embed:function(v,w,x,y){var z=l();v=m(v).replace(/&amp;/g,'&');x=k({allowscriptaccess:'always',flashvars:y,movie:v},x||{});if(typeof x.flashvars=='object')x.flashvars=i.encode(x.flashvars);var aa=[];for(var ba in x)if(x.hasOwnProperty(ba)&&x[ba])aa.push('<param name="'+m(ba)+'" value="'+m(x[ba])+'">');var ca=w.appendChild(p.createElement('span')),da='<object '+(j.ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+v+'" '+(x.height?'height="'+x.height+'" ':'')+(x.width?'width="'+x.width+'" ':'')+'id="'+z+'">'+aa.join('')+'</object>';ca.innerHTML=da;var ea=ca.firstChild;t(z);return ea;},remove:q,getVersion:function(){var v='Shockwave Flash',w='application/x-shockwave-flash',x='ShockwaveFlash.ShockwaveFlash',y;if(navigator.plugins&&typeof navigator.plugins[v]=='object'){var z=navigator.plugins[v].description;if(z&&navigator.mimeTypes&&navigator.mimeTypes[w]&&navigator.mimeTypes[w].enabledPlugin)y=z.match(/\d+/g);}if(!y)try{y=(new ActiveXObject(x)).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);y=Array.prototype.slice.call(y,1);}catch(aa){}return y;},checkMinVersion:function(v){var w=u.getVersion();if(!w)return false;return s(w.join('.'))>=s(v);},isAvailable:function(){return !!u.getVersion();}};e.exports=u;});
__d("LayerHideOnSuccess",["copyProperties"],function(a,b,c,d,e,f){var g=b('copyProperties');function h(i){"use strict";this._layer=i;}h.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe('success',this._layer.hide.bind(this._layer));};h.prototype.disable=function(){"use strict";if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};g(h.prototype,{_subscription:null});e.exports=h;});
__d("Overlay",["CSS","DataStore","DOM","Layer","LayerButtons","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerFormHooks","LayerHideOnBlur","LayerHideOnEscape","LayerHideOnSuccess","LayerHideOnTransition","LayerMouseHooks","LayerTabIsolation","copyProperties"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('DataStore'),i=b('DOM'),j=b('Layer'),k=b('LayerButtons'),l=b('LayerDestroyOnHide'),m=b('LayerFadeOnHide'),n=b('LayerFadeOnShow'),o=b('LayerFormHooks'),p=b('LayerHideOnBlur'),q=b('LayerHideOnEscape'),r=b('LayerHideOnSuccess'),s=b('LayerHideOnTransition'),t=b('LayerMouseHooks'),u=b('LayerTabIsolation'),v=b('copyProperties');for(var w in j)if(j.hasOwnProperty(w))y[w]=j[w];var x=j===null?null:j.prototype;y.prototype=Object.create(x);y.prototype.constructor=y;y.__superConstructor__=j;function y(z,aa){"use strict";z=v({buildWrapper:true},z||{});this._shouldBuildWrapper=z.buildWrapper;j.call(this,z,aa);}y.prototype._configure=function(z,aa){"use strict";x._configure.call(this,z,aa);var ba=this.getRoot();this._overlay=i.scry(ba,'div.uiOverlay')[0]||ba;g.hide(ba);i.appendContent(this.getInsertParent(),ba);h.set(this._overlay,'overlay',this);var ca=h.get(this._overlay,'width');ca&&this.setWidth(ca);if(this.setFixed)this.setFixed(h.get(this._overlay,'fixed')=='true');if(h.get(this._overlay,'fadeonshow')!='false')this.enableBehavior(n);if(h.get(this._overlay,'fadeonhide')!='false')this.enableBehavior(m);if(h.get(this._overlay,'hideonsuccess')!='false')this.enableBehavior(r);if(h.get(this._overlay,'hideonblur')=='true')this.enableBehavior(p);if(h.get(this._overlay,'destroyonhide')!='false')this.enableBehavior(l);return this;};y.prototype._getDefaultBehaviors=function(){"use strict";return x._getDefaultBehaviors.call(this).concat([k,o,t,q,s,u]);};y.prototype.initWithoutBuildingWrapper=function(){"use strict";this._shouldBuildWrapper=false;return this.init.apply(this,arguments);};y.prototype._buildWrapper=function(z,aa){"use strict";aa=x._buildWrapper.call(this,z,aa);if(!this._shouldBuildWrapper){this._contentRoot=aa;return aa;}this._contentRoot=i.create('div',{className:'uiOverlayContent'},aa);return i.create('div',{className:'uiOverlay'},this._contentRoot);};y.prototype.getContentRoot=function(){"use strict";return this._contentRoot;};y.prototype.destroy=function(){"use strict";h.remove(this.getRoot(),'overlay');x.destroy.call(this);};e.exports=y;});
__d("submitForm",["DOM"],function(a,b,c,d,e,f){var g=b('DOM'),h=function(i){var j=g.scry(i,'input[type="submit"]')[0];if(j){j.click();}else{j=g.create('input',{type:'submit',className:'hidden_elem'});g.appendContent(i,j);j.click();g.remove(j);}};e.exports=h;});
__d("SpotlightViewerStageResizer",["Event","SubscriptionsHandler","UserAgent","Vector","copyProperties"],function(a,b,c,d,e,f){var g=b('Event'),h=b('SubscriptionsHandler'),i=b('UserAgent'),j=b('Vector'),k=b('copyProperties');function l(){"use strict";this._init();}l.prototype._init=function(){"use strict";this._subscriptionsHandler=new h();this._subscriptionsHandler.addSubscriptions(g.listen(window,'resize',this._resetStageDimensions.bind(this)));this._resetStageDimensions();};l.prototype.destroy=function(){"use strict";this._subscriptionsHandler.release();};l.prototype._resetStageDimensions=function(){"use strict";this._currentStageDimensions=new j(this._minWidth,this._minHeight);};l.prototype.getImageAndStageDimensions=function(m,n){"use strict";var o=m.getBestFitDimensionsFromPhoto(n,m.getMaxStageDimensions()),p=m.getStageDimensions(o);if(!this._currentStageDimensions)this._resetStageDimensions();this._currentStageDimensions=new j(Math.max(p.x,this._minWidth,this._currentStageDimensions.x),Math.max(p.y,this._minHeight,this._currentStageDimensions.y));var q=m.getImageDimensionsForStage(o,this._currentStageDimensions),r=this._currentStageDimensions.y-q.y;if(r>0&&r<this._padding)this._currentStageDimensions.y=q.y;var s=this._currentStageDimensions.x-q.x;if(s>0&&s<this._padding)this._currentStageDimensions.x-=s;if(i.ie()<8)q.x-=1;return {stageDimensions:this._currentStageDimensions,imageDimensions:q};};l.prototype.getCurrentStageDimensions=function(){"use strict";return this._currentStageDimensions;};k(l.prototype,{_padding:40,_minHeight:520,_minWidth:520,_subscriptions:null,_currentStageDimensions:null});e.exports=l;});
__d("SpotlightViewerUnmountOnClose",[],function(a,b,c,d,e,f){function g(h){"use strict";this.$SpotlightViewerUnmountOnClose0=h;}g.prototype.enable=function(){"use strict";this.$SpotlightViewerUnmountOnClose1=this.$SpotlightViewerUnmountOnClose0.subscribeOnce('close',this.$SpotlightViewerUnmountOnClose0.unmountComponent.bind(this.$SpotlightViewerUnmountOnClose0));};g.prototype.disable=function(){"use strict";this.$SpotlightViewerUnmountOnClose1&&this.$SpotlightViewerUnmountOnClose1.unsubscribe();delete this.$SpotlightViewerUnmountOnClose1;};e.exports=g;});
__d("PhotosUploadWaterfall",["AsyncSignal"],function(a,b,c,d,e,f){var g=b('AsyncSignal'),h={APP_FLASH:'flash_pro',APP_SIMPLE:'simple',APP_ARCHIVE:'archive',APP_COMPOSER:'composer',APP_MESSENGER:'messenger',APP_HTML5:'html5',APP_CHAT:'chat',INSTALL_CANCEL:1,INSTALL_INSTALL:2,INSTALL_UPDATE:3,INSTALL_REINSTALL:4,INSTALL_PERMA_CANCEL:5,INSTALL_SILENT_SKIP:6,INSTALL_DOWNLOAD:7,CERROR_RESIZING_FAILED:6,CERROR_MARKER_EXTRACTION_FAILED:9,BEGIN:1,UPLOAD_START:4,ALL_UPLOADS_DONE:6,CLIENT_ERROR:7,RECOVERABLE_CLIENT_ERROR:12,IMAGES_SELECTED:9,UPGRADE_REQUIRED:11,VERSION:15,SELECT_START:18,SELECT_CANCELED:19,CANCEL:22,CANCEL_DURING_UPLOAD:83,ONE_RESIZING_START:2,ONE_UPLOAD_START:10,ONE_UPLOAD_DONE:29,ONE_RESIZING_DONE:34,PROGRESS_BAR_STOPPED:44,MISSED_BEAT:45,HEART_ATTACK:46,PUBLISH_START:100,PUBLISH_SUCCESS:101,PUBLISH_FAILURE:102,CLUSTERING_START:103,CLUSTERING_SUCCESS:104,CLUSTERING_FAILURE:105,SESSION_POSTED:72,POST_PUBLISHED:80,ONE_UPLOAD_CANCELED:81,ONE_UPLOAD_CANCELED_DURING_UPLOAD:82,RESIZER_AVAILABLE:20,OVERLAY_FIRST:61,ASYNC_AVAILABLE:63,FALLBACK_TO_FLASH:13,RETRY_UPLOAD:17,TAGGED_ALL_FACES:14,VAULT_IMAGES_SELECTED:62,VAULT_CREATE_POST_CANCEL:65,VAULT_SEND_IN_MESSAGE_CLICKED:66,VAULT_DELETE_CANCEL:68,VAULT_ADD_TO_ALBUM_CANCEL:74,VAULT_SHARE_IN_AN_ALBUM_CLICKED:76,VAULT_SHARE_OWN_TIMELINE_CLICKED:77,VAULT_SHARE_FRIENDS_TIMELINE_CLICKED:78,VAULT_SHARE_IN_A_GROUP_CLICKED:79,VAULT_SYNCED_PAGED_LINK_CLICKED:84,VAULTBOX:'vaultbox',GRID:'grid',SPOTLIGHT_VAULT_VIEWER:'spotlight_vault_viewer',REF_VAULT_NOTIFICATION:'vault_notification',sendSignal:function(i,j){new g('/ajax/photos/waterfall.php',{data:JSON.stringify(i)}).setHandler(j).send();}};e.exports=h;});
__d("ContextualDialogFooterLink",["CSS","DOM","Event","copyProperties"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('DOM'),i=b('Event'),j=b('copyProperties');function k(l){"use strict";this._layer=l;}k.prototype.enable=function(){"use strict";var l=this._layer.getRoot(),m=h.scry(l,'.uiContextualDialogFooterLink')[0],n='uiContextualDialogHoverFooterArrow';this._subscriptions=[i.listen(m,'mouseenter',g.addClass.bind(null,l,n)),i.listen(m,'mouseleave',g.removeClass.bind(null,l,n))];};k.prototype.disable=function(){"use strict";this._subscriptions.forEach(function(l){l.remove();});this._subscriptions=null;};j(k.prototype,{_subscriptions:null});e.exports=k;});
__d("LegacyContextualDialog",["Arbiter","ArbiterMixin","ARIA","Bootloader","ContextualDialogFooterLink","ContextualThing","CSS","DataStore","DOM","Event","LayerAutoFocus","LayerRefocusOnHide","Locale","Overlay","Parent","Style","Vector","$","copyProperties","getOverlayZIndex","shield"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('ArbiterMixin'),i=b('ARIA'),j=b('Bootloader'),k=b('ContextualDialogFooterLink'),l=b('ContextualThing'),m=b('CSS'),n=b('DataStore'),o=b('DOM'),p=b('Event'),q=b('LayerAutoFocus'),r=b('LayerRefocusOnHide'),s=b('Locale'),t=b('Overlay'),u=b('Parent'),v=b('Style'),w=b('Vector'),x=b('$'),y=b('copyProperties'),z=b('getOverlayZIndex'),aa=b('shield');for(var ba in t)if(t.hasOwnProperty(ba))da[ba]=t[ba];var ca=t===null?null:t.prototype;da.prototype=Object.create(ca);da.prototype.constructor=da;da.__superConstructor__=t;function da(){"use strict";if(t!==null)t.apply(this,arguments);}da.prototype._configure=function(ea,fa){"use strict";ca._configure.call(this,ea,fa);var ga=this.getRoot(),ha=n.get.bind(null,ga);this.setAlignH(ha('alignh','left'));this.setOffsetX(ha('offsetx',0));this.setOffsetY(ha('offsety',0));this.setPosition(ha('position','above'));this._hasFooter=ha('hasfooter',false);if(this._hasFooter){var ia=o.scry(ga,'.uiContextualDialogFooterLink')[0];ia&&this.enableBehavior(k);}this.enableBehaviors(this._getDefaultBehaviors());this._setContextSubscription=this.subscribe('beforeshow',function(){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;var ka=ha('context');if(ka){this.setContext(x(ka));}else{ka=ha('contextselector');if(ka)this.setContext(o.find(document,ka));}}.bind(this));this._content=o.scry(ga,'.uiContextualDialogContent')[0];if(this._content){this._content.setAttribute('role','dialog');var ja=o.scry(this._content,'.legacyContextualDialogTitle')[0];if(ja)this._content.setAttribute('aria-labelledby',o.getID(ja));}this._showSubscription=this.subscribe('show',function(){var ka=aa(this.updatePosition,this);this._resizeListener=p.listen(window,'resize',ka);this._reflowSubscription=g.subscribe('reflow',ka);this._setupScrollListener(this._scrollParent);l.register(ga,this.context);g.inform('layer_shown',{type:'ContextualDialog'});}.bind(this));this._hideSubscription=this.subscribe('hide',function(){this._teardownResizeAndReflowListeners();this._teardownScrollListener();g.inform('layer_hidden',{type:'ContextualDialog'});}.bind(this));return this;};da.prototype._getDefaultBehaviors=function(){"use strict";return ca._getDefaultBehaviors.call(this).concat([q,r]);};da.prototype._buildWrapper=function(ea,fa){"use strict";var ga=ca._buildWrapper.call(this,ea,fa);if(!this._shouldBuildWrapper)return ga;m.addClass(ga,'uiContextualDialog');return o.create('div',{className:'uiContextualDialogPositioner'},ga);};da.prototype.setWidth=function(ea){"use strict";this._width=Math.floor(ea);return this;};da.prototype.setFixed=function(ea){"use strict";ea=!!ea;m.conditionClass(this.getRoot(),'uiContextualDialogFixed',ea);this._fixed=ea;return this;};da.prototype.setAlignH=function(ea){"use strict";this.alignH=ea;this._updateAlignmentClass();this._shown&&this.updatePosition();this.position&&this._updateArrow();return this;};da.prototype.getContent=function(){"use strict";return this._content;};da.prototype.getContext=function(){"use strict";return this.context;};da.prototype.setContext=function(ea){"use strict";if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}ea=x(ea);if(this.context&&this.context!=ea)n.remove(this.context,'LegacyContextualDialog');this.context=ea;i.setPopup(this.getCausalElement(),this.getRoot());var fa=u.byClass(ea,'fbPhotoSnowlift');this.setInsertParent(fa||document.body);if(this._scrollListener&&this._scrollParent!==fa){this._teardownScrollListener();this._setupScrollListener(fa);}this._scrollParent=fa;var ga=z(ea,this._insertParent);v.set(this.getRoot(),'z-index',ga>200?ga:'');n.set(this.context,'LegacyContextualDialog',this);return this;};da.prototype.getCausalElement=function(){"use strict";return ca.getCausalElement.call(this)||this.context;};da.prototype.listen=function(ea,fa){"use strict";return p.listen(this.getRoot(),ea,fa);};da.prototype.setOffsetX=function(ea){"use strict";this.offsetX=parseInt(ea,10)||0;this._shown&&this.updatePosition();return this;};da.prototype.setOffsetY=function(ea){"use strict";this.offsetY=parseInt(ea,10)||0;this._shown&&this.updatePosition();return this;};da.prototype.setPosition=function(ea){"use strict";this.position=ea;for(var fa in da.POSITION_TO_CLASS)m.conditionClass(this.getRoot(),da.POSITION_TO_CLASS[fa],ea==fa);this._updateAlignmentClass();this._shown&&this.updatePosition();this._updateArrow();return this;};da.prototype.updatePosition=function(){"use strict";if(!this.context)return false;if(this._width)v.set(this._overlay,'width',this._width+'px');var ea=this._fixed?'viewport':'document',fa=w.getElementPosition(this.context,ea),ga=this._scrollParent;if(ga)fa=fa.sub(w.getElementPosition(ga,'document')).add(ga.scrollLeft,ga.scrollTop);var ha=w.getElementDimensions(this.context),ia=this.position=='above'||this.position=='below',ja=s.isRTL();if((this.position=='right'||(ia&&this.alignH=='right'))!=ja)fa=fa.add(ha.x,0);if(this.position=='below')fa=fa.add(0,ha.y);var ka=new w(0,0);if(ia&&this.alignH=='center'){ka=ka.add((ha.x-this._width)/2,0);}else{var la=ia?ha.x:ha.y,ma=2*da.ARROW_INSET;if(la<ma){var na=la/2-da.ARROW_INSET;if(ia&&(this.alignH=='right'!=ja))na=-na;ka=ka.add(ia?na:0,ia?0:na);}}ka=ka.add(this.offsetX,this.offsetY);if(ja)ka=ka.mul(-1,1);fa=fa.add(ka);if(this._fixed)fa=new w(fa.x,fa.y,'document');fa.setElementPosition(this.getRoot());this._adjustVerticalPosition();this._adjustHorizontalPosition();return true;};da.prototype.scrollTo=function(){"use strict";if(this.context)j.loadModules(["DOMScroll"],function(ea){ea.scrollTo(this.context,true,true);}.bind(this));};da.prototype.destroy=function(){"use strict";this.unsubscribe(this._showSubscription);this.unsubscribe(this._hideSubscription);if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}this._teardownScrollListener();this._teardownResizeAndReflowListeners();this.context&&n.remove(this.context,'LegacyContextualDialog');ca.destroy.call(this);};da.prototype._adjustVerticalPosition=function(){"use strict";if(this.position!='left'&&this.position!='right'){v.set(this._overlay,'top','');return;}var ea=this.getRoot(),fa=w.getElementPosition(ea,'viewport').y,ga=w.getElementDimensions(this._overlay).y,ha=w.getViewportDimensions().y,ia=Math.min(Math.max(fa,da.MIN_TOP_GAP),da.TOP_MARGIN),ja=Math.min(Math.max(0,fa+ga+da.BOTTOM_MARGIN-ha),Math.max(-ia,fa-ia),ga-2*da.ARROW_INSET);v.set(this._overlay,'top',(-1*ja)+'px');v.set(this._arrow,'top',da.ARROW_OFFSET+'px');v.set(this._arrow,'marginTop',ja+'px');};da.prototype._adjustHorizontalPosition=function(){"use strict";if((this.position!='above'&&this.position!='below')||this.alignH!='left'){v.set(this._overlay,'left','');v.set(this._overlay,'right','');return;}var ea=this.getRoot(),fa=w.getElementPosition(ea,'viewport').x,ga=w.getElementDimensions(this._overlay).x,ha=w.getViewportDimensions().x,ia=s.isRTL(),ja;if(!ia){ja=fa+ga+da.RIGHT_MARGIN-ha;}else ja=da.LEFT_MARGIN+ga-fa;ja=Math.min(Math.max(0,ja),ga-2*da.ARROW_INSET);v.set(this._overlay,ia?'right':'left',-1*ja+'px');v.set(this._arrow,ia?'right':'left',da.ARROW_OFFSET+'px');v.set(this._arrow,ia?'marginRight':'marginLeft',ja+'px');};da.prototype._updateArrow=function(){"use strict";var ea=0;if(this.position=='above'||this.position=='below')switch(this.alignH){case 'center':ea=50;break;case 'right':ea=100;break;}this._renderArrow(da.POSITION_TO_ARROW[this.position],ea);};da.prototype._renderArrow=function(ea,fa){"use strict";for(var ga in da.ARROW_CLASS)m.conditionClass(this._overlay,da.ARROW_CLASS[ga],ea==ga);m.conditionClass(this._overlay,'uiContextualDialogWithFooterArrowBottom',ea=='bottom'&&this._hasFooter);if(ea=='none')return;if(!this._arrow){this._arrow=o.create('i',{className:'uiContextualDialogArrow'});o.appendContent(this._overlay,this._arrow);}v.set(this._arrow,'top','');v.set(this._arrow,'left','');v.set(this._arrow,'right','');v.set(this._arrow,'margin','');var ha=ea=='top'||ea=='bottom',ia=ha?(s.isRTL()?'right':'left'):'top';fa=fa||0;v.set(this._arrow,ia,fa+'%');var ja=da.ARROW_LENGTH+da.ARROW_OFFSET*2,ka=-(ja*fa/100-da.ARROW_OFFSET);v.set(this._arrow,'margin-'+ia,ka+'px');};da.prototype._updateAlignmentClass=function(){"use strict";m.conditionClass(this.getRoot(),da.RIGHT_ALIGNED_CLASS,(this.position=='above'||this.position=='below')&&this.alignH=='right');};da.prototype._setupScrollListener=function(ea){"use strict";this._scrollListener=p.listen(ea||window,'scroll',aa(this._adjustVerticalPosition,this));};da.prototype._teardownScrollListener=function(){"use strict";if(this._scrollListener){this._scrollListener.remove();this._scrollListener=null;}};da.prototype._teardownResizeAndReflowListeners=function(){"use strict";if(this._resizeListener){this._resizeListener.remove();this._resizeListener=null;}if(this._reflowSubscription){this._reflowSubscription.unsubscribe();this._reflowSubscription=null;}};da.getInstance=function(ea){"use strict";var fa=n.get(ea,'LegacyContextualDialog');if(!fa){var ga=u.byClass(ea,'uiOverlay');if(ga)fa=n.get(ga,'overlay');}return fa;};y(da,h,{ARROW_OFFSET:15,ARROW_LENGTH:16,ARROW_INSET:22,TOP_MARGIN:50,BOTTOM_MARGIN:30,LEFT_MARGIN:15,RIGHT_MARGIN:30,MIN_TOP_GAP:5,POSITION_TO_CLASS:{above:'uiContextualDialogAbove',below:'uiContextualDialogBelow',left:'uiContextualDialogLeft',right:'uiContextualDialogRight'},RIGHT_ALIGNED_CLASS:'uiContextualDialogRightAligned',ARROW_CLASS:{bottom:'uiContextualDialogArrowBottom',top:'uiContextualDialogArrowTop',right:'uiContextualDialogArrowRight',left:'uiContextualDialogArrowLeft'},POSITION_TO_ARROW:{above:'bottom',below:'top',left:'right',right:'left'}});y(da.prototype,{_scrollListener:null,_scrollParent:null,_width:null,_fixed:false,_hasFooter:false,_showSubscription:null,_hideSubscription:null,_setContextSubscription:null,_resizeListener:null,_reflowSubscription:null});e.exports=da;});
__d("ProgressBar",["CSS","DOM","Style","csx","cx","emptyFunction","requestAnimationFrame","removeFromArray","arrayContains"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('DOM'),i=b('Style'),j=b('csx'),k=b('cx'),l=b('emptyFunction'),m=b('requestAnimationFrame'),n=b('removeFromArray'),o=b('arrayContains'),p=[];function q(t,u,v){"use strict";this._root=t;this._min=u||0;this._max=v||100;this._meter=h.find(t,"div._5e4k");this._meter2=h.scry(t,"div._5e2g")[0];this._initialPosition=0;this._position=0;this._initialVelocity=0;this._velocity=0;this._acceleration=0;this.useAcceleration=true;this._targetPosition=0;this._targetTime=0;this._startTime=null;this._onComplete=l;}q.prototype.getRoot=function(){"use strict";return this._root;};q.prototype.setPosition=function(t){"use strict";t=this._normalizePosition(t);this._initialPosition=t;this._position=t;this._updateMeter();this.stop();return this;};q.prototype.changeLabel=function(t){"use strict";var u=h.scry(this._root,"span._5e2h");u.forEach(function(v){h.setContent(v,t);});return this;};q.prototype.setCompleteHandler=function(t){"use strict";this._onComplete=t||l;return this;};q.prototype.setTarget=function(t,u){"use strict";this._stopAnimating();this._clearOnCompleteTimeout();this._targetPosition=t;var v=this._normalizePosition(t);this._targetTime=u;this._initialVelocity=this._velocity;this._initialPosition=this._position;if(this.useAcceleration){this._acceleration=2*(v-this._initialPosition-this._initialVelocity*u)/(u*u);}else{this._acceleration=0;this._velocity=this._initialVelocity=(v-this._initialPosition)/u;}if(this._position>=v){this._onComplete();}else this._start();return this;};q.prototype.setNoAcceleration=function(t){"use strict";this.useAcceleration=!t;return this;};q.prototype._clearOnCompleteTimeout=function(){"use strict";a.clearTimeout(this._onCompleteTimeout);};q.prototype.stop=function(){"use strict";this._clearOnCompleteTimeout();this._velocity=0;this._initialVelocity=0;this._acceleration=0;this._stopAnimating();return this;};q.prototype._start=function(){"use strict";this._startTime=Date.now();this._onCompleteTimeout=a.setTimeout(function(){this.setPosition(this._targetPosition);this._onComplete();}.bind(this),this._targetTime);this._startAnimating();return this;};q.prototype._loop=function(){"use strict";var t=Date.now()-this._startTime;this._position=(.5*this._acceleration*t*t)+(this._initialVelocity*t)+this._initialPosition;var u=this._velocity;this._velocity=this._acceleration*t+this._initialVelocity;var v=u<0!==this._velocity<0;if(this._position>this._normalizePosition(this._targetPosition)||v){this.setPosition(this._targetPosition);this._onComplete();}else this._updateMeter();};q.prototype._updateMeter=function(){"use strict";var t=Math.min(Math.max(this._position,0),1);g.conditionClass(this._meter,"_5e2d",t<=0);g.conditionClass(this._meter,"_5e4j",t>=1);t=t*100+'%';i.set(this._meter,'width',t);if(this._meter2){i.set(this._meter2,'left',t);i.set(this._meter2,'width',t);}};q.prototype._normalizePosition=function(t){"use strict";return Math.min(Math.max((t-this._min)/(this._max-this._min),0),1);};q.prototype._startAnimating=function(){"use strict";if(!o(p,this)){p.push(this);if(p.length===1)m(q.prototype._requestAnimationFrameCallback);}};q.prototype._stopAnimating=function(){"use strict";n(p,this);};q.prototype._requestAnimationFrameCallback=function(){"use strict";p.forEach(function(t){t._loop();});if(p.length)m(q.prototype._requestAnimationFrameCallback);};function r(t,u){t.setPosition(u);}function s(t,u,v){t.setTarget(u,v);}e.exports=q;e.exports.setTarget=s;e.exports.setPosition=r;});
__d("FormSubmitOnChange",["Event","copyProperties","submitForm"],function(a,b,c,d,e,f){var g=b('Event'),h=b('copyProperties'),i=b('submitForm');function j(k){"use strict";this._form=k;}j.prototype.enable=function(){"use strict";this._listener=g.listen(this._form.getRoot(),'change',this._submit.bind(this));};j.prototype.disable=function(){"use strict";this._listener.remove();this._listener=null;};j.prototype._submit=function(){"use strict";i(this._form.getRoot());};h(j.prototype,{_listener:null});e.exports=j;});
__d("XStickersAddPackControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){var g=b('XControllerURIBuilder');e.exports=g.create("\/stickers\/addpack\/",{pack_id:{type:"Int",required:true},size:{type:"String"}});});