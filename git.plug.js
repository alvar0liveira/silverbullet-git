var k=Object.defineProperty;var l=(e,t)=>{for(var n in t)k(e,n,{get:t[n],enumerable:!0})};var f=typeof window>"u"&&typeof globalThis.WebSocketPair>"u";typeof Deno>"u"&&(self.Deno={args:[],build:{arch:"x86_64"},env:{get(){}}});var d=new Map,p=0;function m(e){self.postMessage(e)}f&&(globalThis.syscall=async(e,...t)=>await new Promise((n,o)=>{p++,d.set(p,{resolve:n,reject:o}),m({type:"sys",id:p,name:e,args:t})}));function y(e,t){f&&(self.addEventListener("message",n=>{(async()=>{let o=n.data;switch(o.type){case"inv":{let a=e[o.name];if(!a)throw new Error(`Function not loaded: ${o.name}`);try{let c=await Promise.resolve(a(...o.args||[]));m({type:"invr",id:o.id,result:c})}catch(c){console.error("An exception was thrown as a result of invoking function",o.name,"error:",c.message),m({type:"invr",id:o.id,error:c.message})}}break;case"sysr":{let a=o.id,c=d.get(a);if(!c)throw Error("Invalid request id");d.delete(a),o.error?c.reject(new Error(o.error)):c.resolve(o.result)}break}})().catch(console.error)}),m({type:"manifest",manifest:t}))}function F(e){let t=atob(e),n=t.length,o=new Uint8Array(n);for(let a=0;a<n;a++)o[a]=t.charCodeAt(a);return o}function h(e){typeof e=="string"&&(e=new TextEncoder().encode(e));let t="",n=e.byteLength;for(let o=0;o<n;o++)t+=String.fromCharCode(e[o]);return btoa(t)}async function M(e,t){if(typeof e!="string"){let n=new Uint8Array(await e.arrayBuffer()),o=n.length>0?h(n):void 0;t={method:e.method,headers:Object.fromEntries(e.headers.entries()),base64Body:o},e=e.url}return syscall("sandboxFetch.fetch",e,t)}globalThis.nativeFetch=globalThis.fetch;function T(){globalThis.fetch=async function(e,t){let n=t&&t.body?h(new Uint8Array(await new Response(t.body).arrayBuffer())):void 0,o=await M(e,t&&{method:t.method,headers:t.headers,base64Body:n});return new Response(o.base64Body?F(o.base64Body):null,{status:o.status,headers:o.headers})}}f&&T();var i={};l(i,{confirm:()=>ne,copyToClipboard:()=>ge,deleteLine:()=>ye,dispatch:()=>re,downloadFile:()=>Q,filterBox:()=>I,flashNotification:()=>Y,fold:()=>ae,foldAll:()=>ue,getCurrentPage:()=>U,getCursor:()=>E,getSelection:()=>K,getText:()=>R,getUiOption:()=>ie,goHistory:()=>$,hidePanel:()=>z,insertAtCursor:()=>te,insertAtPos:()=>J,moveCursor:()=>Z,moveCursorToLine:()=>ee,navigate:()=>j,openCommandPalette:()=>q,openPageNavigator:()=>G,openSearchPanel:()=>fe,openUrl:()=>W,prompt:()=>oe,redo:()=>de,reloadConfigAndCommands:()=>O,reloadPage:()=>B,reloadUI:()=>_,replaceRange:()=>X,save:()=>L,setSelection:()=>N,setText:()=>D,setUiOption:()=>se,showPanel:()=>H,toggleFold:()=>me,undo:()=>pe,unfold:()=>ce,unfoldAll:()=>le,uploadFile:()=>V,vimEx:()=>he});typeof self>"u"&&(self={syscall:()=>{throw new Error("Not implemented here")}});function r(e,...t){return globalThis.syscall(e,...t)}function U(){return r("editor.getCurrentPage")}function R(){return r("editor.getText")}function D(e){return r("editor.setText",e)}function E(){return r("editor.getCursor")}function K(){return r("editor.getSelection")}function N(e,t){return r("editor.setSelection",e,t)}function L(){return r("editor.save")}function j(e,t=!1,n=!1){return r("editor.navigate",e,t,n)}function G(e="page"){return r("editor.openPageNavigator",e)}function q(){return r("editor.openCommandPalette")}function B(){return r("editor.reloadPage")}function _(){return r("editor.reloadUI")}function O(){return r("editor.reloadConfigAndCommands")}function W(e,t=!1){return r("editor.openUrl",e,t)}function $(e){return r("editor.goHistory",e)}function Q(e,t){return r("editor.downloadFile",e,t)}function V(e,t){return r("editor.uploadFile",e,t)}function Y(e,t="info"){return r("editor.flashNotification",e,t)}function I(e,t,n="",o=""){return r("editor.filterBox",e,t,n,o)}function H(e,t,n,o=""){return r("editor.showPanel",e,t,n,o)}function z(e){return r("editor.hidePanel",e)}function J(e,t){return r("editor.insertAtPos",e,t)}function X(e,t,n){return r("editor.replaceRange",e,t,n)}function Z(e,t=!1){return r("editor.moveCursor",e,t)}function ee(e,t=1,n=!1){return r("editor.moveCursorToLine",e,t,n)}function te(e){return r("editor.insertAtCursor",e)}function re(e){return r("editor.dispatch",e)}function oe(e,t=""){return r("editor.prompt",e,t)}function ne(e){return r("editor.confirm",e)}function ie(e){return r("editor.getUiOption",e)}function se(e,t){return r("editor.setUiOption",e,t)}function ae(){return r("editor.fold")}function ce(){return r("editor.unfold")}function me(){return r("editor.toggleFold")}function ue(){return r("editor.foldAll")}function le(){return r("editor.unfoldAll")}function pe(){return r("editor.undo")}function de(){return r("editor.redo")}function fe(){return r("editor.openSearchPanel")}function ge(e){return r("editor.copyToClipboard",e)}function ye(){return r("editor.deleteLine")}function he(e){return r("editor.vimEx",e)}var u={};l(u,{applyAttributeExtractors:()=>Se,getEnv:()=>Te,getMode:()=>Ue,getSpaceConfig:()=>ke,getVersion:()=>Re,invokeCommand:()=>be,invokeFunction:()=>ve,invokeSpaceFunction:()=>Ae,listCommands:()=>we,listSyscalls:()=>Ce,reloadConfig:()=>Me,reloadPlugs:()=>Fe});function ve(e,...t){return r("system.invokeFunction",e,...t)}function be(e,t){return r("system.invokeCommand",e,t)}function we(){return r("system.listCommands")}function Ce(){return r("system.listSyscalls")}function Ae(e,...t){return r("system.invokeSpaceFunction",e,...t)}function Se(e,t,n){return r("system.applyAttributeExtractors",e,t,n)}async function ke(e,t){return await r("system.getSpaceConfig",e)??t}function Fe(){return r("system.reloadPlugs")}function Me(){return r("system.reloadConfig")}function Te(){return r("system.getEnv")}function Ue(){return r("system.getMode")}function Re(){return r("system.getVersion")}var s={};l(s,{run:()=>Be});function Be(e,t){return r("shell.run",e,t)}async function g(e){e||(e="Snapshot"),console.log("Snapshotting the current space to git with commit message",e);let{code:t}=await s.run("git",["add","./*"]);console.log("Git add code",t);try{await s.run("git",["commit","-a","-m",e])}catch{}console.log("Done!")}async function x(){let e=await i.prompt("Revision name:");e||(e="Snapshot"),console.log("Revision name",e),await g(e),await i.flashNotification("Done!")}async function P(){await i.flashNotification("Syncing with git"),await v(),await i.flashNotification("Git sync complete!")}async function v(){console.log("Going to sync with git"),await g(),console.log("Then pulling from remote"),await s.run("git",["pull"]),console.log("And then pushing to remote"),await s.run("git",["push"]),console.log("Done!")}async function b(){let e=await i.prompt("Github project URL:");if(!e)return;let t=await i.prompt("Github token:");if(!t)return;let n=await i.prompt("Your name:");if(!n)return;let o=await i.prompt("Your email:");if(!o)return;let a=e.split("/");a[2]=`${t}@${a[2]}`,e=a.join("/")+".git",await i.flashNotification("Now going to clone the project, this may take some time."),await s.run("mkdir",["-p","_checkout"]),await s.run("git",["clone",e,"_checkout"]),await s.run("bash",["-c","mv -f _checkout/{.,}* . 2> /dev/null; true"]),await s.run("rm",["-rf","_checkout"]),await s.run("git",["config","user.name",n]),await s.run("git",["config","user.email",o]),await i.flashNotification("Done. Now just wait for sync to kick in to get all the content.")}async function w(){let e=await i.prompt("Gitlab project URL:");if(!e)return;let t=await i.prompt("Gitlab username:");if(!t)return;let n=await i.prompt("Gitlab token:");if(!n)return;let o=await i.prompt("Your name:");if(!o)return;let a=await i.prompt("Your email:");if(!a)return;let c=e.split("/");c[2]=`${t}:${n}@${c[2]}`,e=c.join("/")+".git",await i.flashNotification("Now going to clone the project, this may take some time."),await s.run("mkdir",["-p","_checkout"]),await s.run("git",["clone",e,"_checkout"]),await s.run("bash",["-c","mv -f _checkout/{.,}* . 2> /dev/null; true"]),await s.run("rm",["-rf","_checkout"]),await s.run("git",["config","user.name",o]),await s.run("git",["config","user.email",a]),await i.flashNotification("Done. Now just wait for sync to kick in to get all the content.")}async function C(){let e=await u.getSpaceConfig("git",{});e.autoCommitMinutes&&(console.log("Triggered auto commit with config",e),new Date().getMinutes()%e.autoCommitMinutes===0&&(console.log("Auto commit time!"),e.autoSync?await v():await g("Auto commit")))}var A={autoCommit:C,githubCloneCommand:b,gitlabCloneCommand:w,snapshotCommand:x,syncCommand:P},S={name:"git",requiredPermissions:["shell"],functions:{autoCommit:{path:"git.ts:autoCommit",env:"server",cron:"* * * * *"},githubCloneCommand:{path:"./git.ts:githubCloneCommand",command:{name:"Github: Clone"}},gitlabCloneCommand:{path:"./git.ts:gitlabCloneCommand",command:{name:"Gitlab: Clone"}},snapshotCommand:{path:"./git.ts:snapshotCommand",command:{name:"Git: Snapshot"}},syncCommand:{path:"./git.ts:syncCommand",command:{name:"Git: Sync"}}},assets:{}},At={manifest:S,functionMapping:A};y(A,S);export{At as plug};
