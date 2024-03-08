import{Y as E}from"./framework.XiqD54nH.js";function _(w={}){const{immediate:m=!1,onNeedRefresh:r,onOfflineReady:t,onRegistered:n,onRegisteredSW:d,onRegisterError:o}=w;let e,c,s;const u=async(p=!0)=>{await c,await(s==null?void 0:s())};async function g(){if("serviceWorker"in navigator){const{Workbox:p}=await E(()=>import("./workbox-window.prod.es5.prqDwDSL.js"),__vite__mapDeps([]));e=new p("/sw.js",{scope:"/",type:"classic"}),s=async()=>{await(e==null?void 0:e.messageSkipWaiting())};{let i=!1;const l=()=>{i=!0,e==null||e.addEventListener("controlling",a=>{a.isUpdate&&window.location.reload()}),r==null||r()};e.addEventListener("installed",a=>{typeof a.isUpdate>"u"?typeof a.isExternal<"u"?a.isExternal?l():!i&&(t==null||t()):a.isExternal?window.location.reload():!i&&(t==null||t()):a.isUpdate||t==null||t()}),e.addEventListener("waiting",l),e.addEventListener("externalwaiting",l)}e.register({immediate:m}).then(i=>{d?d("/sw.js",i):n==null||n(i)}).catch(i=>{o==null||o(i)})}}return c=g(),u}_({immediate:!0});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}