(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(20),s=a.n(c),r=(a(27),a(28),a(29),a(4)),i=a(0),l=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{id:"header",className:"sec-home",children:Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-10 mx-auto",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column",children:[Object(i.jsxs)("h1",{children:[e.name," ",Object(i.jsx)("strong",{className:"brand-name",children:"NalSan Infotech"})]}),Object(i.jsx)("h2",{className:"my-3 h-text",children:e.paragraph}),Object(i.jsx)("div",{className:"mt-3 btn",children:Object(i.jsx)(r.b,{to:e.visit,className:"hvr-sweep-to-top",children:e.buttonName})})]}),Object(i.jsx)("div",{className:"col-lg-6 order-1 order-lg-2 header-img",children:Object(i.jsx)("img",{src:e.imgSrc,className:"img-fluid animated",alt:"home-img"})})]})})})})})})},o=a.p+"static/media/home.50727472.svg",m=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(l,{name:"Grow your business with",visit:"/services",buttonName:"Get Started",imgSrc:o,paragraph:"We are the team of talented developers."})})},d=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"col-md-4 col-10 mx-auto",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:e.imgsrc,className:"card-img-top",alt:"..."}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h5",{className:"card-title",children:e.title}),Object(i.jsx)("p",{className:"card-text",children:e.content}),Object(i.jsx)(r.b,{to:"#",className:"hvr-sweep-to-top",children:"Check Now"})]})]})})})},b=a.p+"static/media/application.d0d6e3e0.svg",j=a.p+"static/media/website.47caea86.svg",h=a.p+"static/media/software.d218d757.svg",v=a.p+"static/media/enterprise.1df72453.svg",u=[{imgsrc:b,title:"Mobile Application Development",content:"Talented pool of developers experienced in building mHealth apps, mobile payment apps, and m-commerce apps"},{imgsrc:j,title:"Web Application Development",content:"Make solutions that accelerate workflows, optimize operations and boost revenues"},{imgsrc:h,title:"Software Development",content:"We partner with entrepreneurs and organizations to transform their ideas into software products"},{imgsrc:a.p+"static/media/ai.bf1f01d3.svg",title:"AI/ML Development",content:"AI automates repetitive learning through data. Through AI, machines and applications can analyze images, understand data, comprehend speech, and make predictions."},{imgsrc:v,title:"Enterprise Application Development",content:"You get robust and scalable enterprise app that maximize business growth."},{imgsrc:a.p+"static/media/marketing.2c2d18f3.svg",title:"Digital Marketing",content:"Thrive works with you to produce customized digital marketing services and a plan that aligns with your unique business needs. We become an extension of your team, a partner that understands your market and goals."}],x=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"my-5",children:Object(i.jsx)("h1",{className:"text-center gradient",children:"Our Services"})}),Object(i.jsx)("div",{className:"container-fluid mb-5",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-10 mx-auto",children:Object(i.jsx)("div",{className:"row gy-4",children:u.map((function(e,t){return Object(i.jsx)(d,{imgsrc:e.imgsrc,title:e.title,content:e.content},t)}))})})})})]})},p=a.p+"static/media/about.3c0cb375.svg",O=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(l,{name:"Welcome to About us page",visit:"/contact",buttonName:"Contact Us",imgSrc:p,paragraph:"You run your business. We take care of your development needs. Get access to an entire team of experts, ready whenever you need us."})})},g=a(10),f=a(16),N=a(22),D=function(){var e=Object(n.useState)({name:"",phone:"",email:"",message:""}),t=Object(N.a)(e,2),a=t[0],c=t[1],s=function(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(g.a)({},a,n))}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"my-4",children:Object(i.jsx)("h1",{className:"text-center gradient",children:"Contact Us"})}),Object(i.jsx)("div",{className:"container contact_div",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-md-6 col-10 mx-auto",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("Name :- ".concat(a.name," \n            Phone :- ").concat(a.phone," \n            Email :- ").concat(a.email," \n            Message :- ").concat(a.message," "))},children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{for:"exampleFormControlInput1",className:"form-label",children:"FullName"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",name:"name",value:a.name,onChange:s,placeholder:"Enter your name"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{for:"exampleFormControlInput1",className:"form-label",children:"Phone"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",name:"phone",value:a.phone,onChange:s,placeholder:"mobile number"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{for:"exampleFormControlInput1",className:"form-label",children:"Email address"}),Object(i.jsx)("input",{type:"email",className:"form-control",id:"exampleFormControlInput1",name:"email",value:a.email,onChange:s,placeholder:"name@example.com"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{for:"exampleFormControlTextarea1",className:"form-label",children:"Message"}),Object(i.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",name:"message",value:a.message,onChange:s,rows:"3"})]}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("button",{className:"hvr-sweep-to-top",type:"submit",children:"Submit"})})]})})})})]})},y=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container-fluid nav_bg",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-10 mx-auto",children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:Object(i.jsx)("img",{src:"data:image/png;base64,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",className:"img-logo"})}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"navvbar",children:Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav ml-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{activeClassName:"menu_active",className:"nav-link ","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{activeClassName:"menu_active",className:"nav-link",to:"/services",children:"Services"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{activeClassName:"menu_active",className:"nav-link",to:"/about",children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{activeClassName:"menu_active",className:"nav-link",to:"contact",children:"Contact"})})]})})})]})})})})})})},w=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("footer",{className:"w-100 bg-light text-center",children:Object(i.jsx)("p",{children:"\xa9\ufe0f 2021 NalSan Infotech. All Rights Reserved   |   Developed By :- Sanket Naliyadra"})})})},P=a(2),G=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y,{}),Object(i.jsxs)(P.d,{children:[Object(i.jsx)(P.b,{exact:!0,path:"/",component:m}),Object(i.jsx)(P.b,{exact:!0,path:"/about",component:O}),Object(i.jsx)(P.b,{exact:!0,path:"/services",component:x}),Object(i.jsx)(P.b,{exact:!0,path:"/contact",component:D}),Object(i.jsx)(P.a,{to:"/"})]}),Object(i.jsx)(w,{})]})};s.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(r.a,{children:Object(i.jsx)(G,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.6ae889f3.chunk.js.map