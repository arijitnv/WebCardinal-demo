import{r as t,c as s,h as i}from"./p-d4191909.js";import"./p-f124fbbf.js";import{V as e,w as o}from"./p-61cc1f50.js";import{H as r}from"./p-f0bd18cd.js";import{C as n}from"./p-b9b0147a.js";import{B as l}from"./p-4a530275.js";import{e as a}from"./p-98698eac.js";import{p as h}from"./p-794858b0.js";import"./p-0c3518a5.js";import{C as c}from"./p-8deebf2d.js";import"./p-ad52b503.js";import{i as f}from"./p-a247a1f7.js";import{C as d}from"./p-9f8e961a.js";const m=class{constructor(i){t(this,i),this.getModelEvent=s(this,"webcardinal:model:get",7),this.getTranslationModelEvent=s(this,"webcardinal:translationModel:get",7),this.controller="",this.disableContainer=!1}async componentWillLoad(){if(!this.host.isConnected)return;const[t,s]=this.resolveControllerElement();this.controllerElement=t;let i,r,c=this.history;if(this.chain=a(this.host),this.chain)try{i=await h(this.getModelEvent),r=await h(this.getTranslationModelEvent),this.controllerInstance=await this.loadController(t,c,i,r)}catch(t){console.error(t)}else this.controllerInstance=await this.loadController(t,c),i=this.controllerInstance.model,r=this.controllerInstance.translationModel;this.host.hasAttribute("default-controller")&&!this.host.hasAttribute(e)||(l.bindChildNodes(s,{model:i,translationModel:r,recursive:!0,chainPrefix:this.chain?this.chain.slice(1):null,enableTranslations:o()}),this.listeners=new n(s,{model:i,translationModel:r}),this.listeners.getModel.add(),this.listeners.getTranslationModel.add())}async connectedCallback(){if(this.listeners){const{getModel:t,getTranslationModel:s}=this.listeners;null==t||t.add(),null==s||s.add()}}async disconnectedCallback(){if(this.listeners){const{getModel:t,getTranslationModel:s}=this.listeners;null==t||t.remove(),null==s||s.remove()}setTimeout((()=>{var t;document.body.contains(this.controllerElement)||null===(t=this.controllerInstance)||void 0===t||t.disconnectedCallback()}),100)}async componentDidLoad(){this.disableContainer&&(Array.from(this.host.childNodes).forEach((t=>this.host.parentNode.insertBefore(t,this.host))),this.host.remove())}async getModel(){if(this.controllerInstance)return this.controllerInstance.model}async getTranslationModel(){if(this.controllerInstance)return this.controllerInstance.translationModel}resolveControllerElement(){let t=this.host;return this.disableContainer?[t.parentElement,t]:[t,t]}async loadController(t,s,i,e){const o=()=>(this.host.setAttribute("controller-default",""),new d(t,s,i,e));if(this.host.hasAttribute("controller-name")&&!this.controller&&(console.warn(['Attribute "controller-name" is deprecated!','Use "controller" instead!'].join("\n"),"target:",this.host),this.controller=this.host.getAttribute("controller-name")),"string"!=typeof this.controller)return console.error('"controller" must be a string!'),o();if(0===this.controller.length)return o();try{return new(await c.getController(this.controller))(t,s,i,e)}catch(t){return console.error(`Error while loading controller "${this.controller}"`,t),o()}}render(){return this.disableContainer?null:i("slot",null)}};(function(t,s,i,e){var o,r=arguments.length,n=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,s,i,e);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(n=(r<3?o(n):r>3?o(s,i,n):o(s,i))||n);r>3&&n&&Object.defineProperty(s,i,n)})([r()],m.prototype,"host",void 0),f(m);export{m as webc_container}