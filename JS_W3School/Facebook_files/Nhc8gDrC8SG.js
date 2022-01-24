/*!CK:655644884!*//*1390272319,178137879*/

if (self.CavalryLogger) { CavalryLogger.start_js(["baw4B"]); }

__d("UFITracking",["Bootloader"],function(a,b,c,d,e,f){var g=b('Bootloader');function h(j){g.loadModules(["DOM","collectDataAttributes"],function(k,l){j.forEach(function(m){var n=k.scry(document.body,m);if(!n||n.link_data)return;var o=l(n,['ft']).ft;if(Object.keys(o).length){var p=k.create('input',{type:'hidden',name:'link_data',value:JSON.stringify(o)});n.appendChild(p);}});});}var i={addAllLinkData:function(){h(['form.commentable_item']);},addAllLinkDataForQuestion:function(){h(['form.fbEigenpollForm','form.fbQuestionPollForm']);}};e.exports=i;});