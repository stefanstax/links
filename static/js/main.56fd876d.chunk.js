(this.webpackJsonpgetlinx=this.webpackJsonpgetlinx||[]).push([[0],{18:function(e,t,o){},19:function(e,t,o){},23:function(e,t,o){},25:function(e,t,o){"use strict";o.r(t);o(3);var n=o(8),s=o.n(n),i=(o(18),o(7)),r=(o(19),{name:"Stefan Stax",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1634218049/stefanstax.webp",description:"Find my Links Below",socials:{instagram:"https://instagram.com/devstax",discord:"https://discord.gg/KUDVsDWa7T"}}),c={showTitleProjects:!0,showTitleGroups:!0,showTitlePartners:!0,showTitleTemp:!1,showTemp:!1,showProjects:!0,showGroups:!0,showPartners:!0,showReferrals:!1,showSetup:!1},l=[{name:"EnterMedSchool",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1633858215/Untitled_4.png",description:"IMAT - NEET - MCAT - Free Medical Resources for world known exams",linkTo:"https://entermedschool.com",category:"Projects",buttonText:"Discover",weight:1,hot:!0,development:!1},{name:"L Professeur",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1633858215/Untitled_3.png",description:"Project still under development. Feel free to report bugs by viewing the website.",linkTo:"https://lprofesseur.com",category:"Projects",buttonText:"Discover",weight:4,hot:!1,development:!0},{name:"Thriving Stockwell",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1633858215/Untitled_2.png",description:"Project still under development. Feel free to report bugs by viewing the website.",linkTo:"https://featuresdev.wpengine.com",category:"Projects",buttonText:"Discover",weight:5,hot:!1,development:!0},{name:"Zepter International | Live Better",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1633858716/Untitled_6.png",description:"Live better with Zepter. You can buy here Bioptron light therapy, Hyperlight Eyewear Glasses, Masterpiece Zepter cookware, ect. You can benefit from Zepter Club loyalty program opportunities and discounts",linkTo:"https://zepter.com",category:"Projects",buttonText:"Discover",weight:2,hot:!1,development:!1},{name:"Ari Horesh Branding",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1633858215/Untitled_1.png",description:"Creating a community of people dedicated to the pursuit of knowledge. Education should be accessible to everyone.",linkTo:"https://arihoresh.com",category:"Projects",buttonText:"Discover",weight:3,hot:!1,development:!1},{name:"Study Lions | Focus & Community",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1633857110/Untitled.png",description:"From High school students to Postdoctoral researchers, The Study Lions is where everyone comes to study together. | over 26,000 members",linkTo:"https://discord.gg/KUDVsDWa7T",category:"Groups",buttonText:"Discover",weight:1,hot:!1,development:!1},{name:"EMS | Medical Community All-In-One",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1633858779/Untitled_7.png",description:"Check out the EnterMedSchool community on Discord - hang out with 298 other members and enjoy free voice and text chat.",linkTo:"https://discord.gg/rvxs62FDwH",category:"Groups",buttonText:"Discover",weight:2,hot:!1,development:!1},{name:"Kate Estrabo | Graphic Design - All-In-One",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1634216165/Untitled_9.png",description:"Truly unique person that possibly cares more about your brand than you do.",linkTo:"https://kateestrabo.com",category:"Partners",buttonText:"Collaboration",weight:1,hot:!1,development:!1},{name:"EMS | Volunteer Program Signup",imageUrl:"https://res.cloudinary.com/dnqicdh71/image/upload/v1634216834/Untitled_10.png",description:"Join one of the fast growing platforms by making expensive materials free for medical students worldwide.",linkTo:"https://entermedschool.com/tutoring",category:"Partners",buttonText:"Volunteering",weight:2,hot:!1,development:!0}],a=o(6),d=o.n(a),h=o(1);l.sort((function(e,t){return e.weight-t.weight}));var m=function(e){return l.filter((function(t){return t.category.includes("".concat(e.categoryList))})).map((function(e){return Object(h.jsx)("div",{className:"link--block projects text-white m-2 md:m-0",style:{opacity:e.development?"0.7":"1.0"},children:Object(h.jsxs)("div",{className:"link--container m-0 md:m-2 ".concat(e.hot&&e.development?"":e.hot?"hot":""),children:[Object(h.jsx)("div",{className:"link--block-image",children:Object(h.jsx)("img",{src:e.imageUrl,alt:""})}),Object(h.jsxs)("div",{className:"link--block-content",children:[Object(h.jsx)(d.a,{line:2,element:"h1",truncateText:"\u2026",text:e.name,className:"font-bold text-md ".concat(e.hot&&e.development?"":e.hot?"invert":"")}),Object(h.jsx)(d.a,{line:2,element:"p",truncateText:"\u2026",className:"text-sm font-medium ".concat(e.hot&&e.development?"":e.hot?"invert":""),text:e.description})]}),Object(h.jsx)("a",{className:"font-bold",href:e.development?null:e.linkTo,target:"_blank",rel:"noreferrer",children:e.development?"Under Development":e.buttonText})]})},e.linkTo)}))},u=function(e){var t=e.showTemp,o=e.showProjects,n=e.showGroups,s=e.showPartners,i=e.showTitleTemp,r=e.showTitleProjects,c=e.showTitleGroups,l=e.showTitlePartners;return Object(h.jsxs)("div",{className:"links--bar",children:[Object(h.jsxs)("div",{className:"container mx-auto py-5 max-w-6xl",children:[i?Object(h.jsx)("h2",{className:"text-2xl font-bold pl-6 text-white",children:"Available for 24h"}):null,Object(h.jsx)("div",{className:"scroller",children:t?Object(h.jsx)(m,{categoryList:"Temp"}):null}),r?Object(h.jsx)("h2",{className:"text-2xl font-bold pl-6 text-white",children:"Projects I'm Enrolled In"}):null,Object(h.jsx)("div",{className:"scroller",children:o?Object(h.jsx)(m,{categoryList:"Projects"}):null}),c?Object(h.jsx)("h2",{className:"text-2xl font-bold pl-6 text-white",children:"Groups that can benefit you"}):null,Object(h.jsx)("div",{className:"scroller",children:n?Object(h.jsx)(m,{categoryList:"Groups"}):null}),l?Object(h.jsx)("h2",{className:"text-2xl font-bold pl-6 text-white",children:"Partners of Confidence"}):null,Object(h.jsx)("div",{className:"scroller",children:s?Object(h.jsx)(m,{categoryList:"Partners"}):null})]}),Object(h.jsxs)("h5",{className:"text-center font-bold text-md py-5 text-white",children:["From"," ",Object(h.jsx)("a",{href:"mailto:stax@stefanstax.com",target:"_blank",rel:"noreferrer",className:"animate-pulse",children:"Stefan Stax"})," ","for you"]})]})},p=(o(23),o(5)),g=o(10),j=o(9),b=function(e){var t=e.name,o=e.imageUrl,n=e.description,s=e.socials;return Object(h.jsx)("div",{className:"social--bar text-white",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("img",{src:o,alt:""}),Object(h.jsx)("h3",{className:"text-3xl font-black my-3",children:t}),Object(h.jsx)("p",{className:"text-md font-bold",children:n}),Object(h.jsxs)("div",{className:"socials--mini",children:[s.instagram&&s.instagram.includes("https://instagram.com/")?Object(h.jsx)("a",{href:s.instagram,children:Object(h.jsx)(p.a,{})}):null,s.twitch&&s.twitch.includes("https://www.twitch.tv/")?Object(h.jsx)("a",{href:s.twitch,children:Object(h.jsx)(j.a,{})}):null,s.discord&&s.discord.includes("https://discord.gg/")&&!s.discord.length<15?Object(h.jsx)("a",{href:s.discord,children:Object(h.jsx)(g.a,{})}):null,s.youtube&&s.youtube.includes("https://www.youtube.com/channel/")?Object(h.jsx)("a",{href:s.youtube,children:Object(h.jsx)(p.b,{})}):null]})]})})},x=o(11),v=function(){return Object(h.jsxs)("div",{className:"main--container",children:[Object(h.jsxs)(x.a,{children:[Object(h.jsx)("meta",{charSet:"utf-8"}),Object(h.jsx)("title",{children:"Stefan Stax | Links"}),Object(h.jsx)("meta",{name:"description",content:"\r Welcome to Stefan Stax Links, only place to get all of my links\r straight on the go. Follow and join my projects as I thrive for their\r success. If you wish to collaborate with me please use the presented contact links."})]}),Object(h.jsx)(b,Object(i.a)({},r)),Object(h.jsx)(u,Object(i.a)({},c))]})},w=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,27)).then((function(t){var o=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;o(e),n(e),s(e),i(e),r(e)}))};s.a.render(Object(h.jsx)(v,{}),document.getElementById("root")),w()}},[[25,1,2]]]);
//# sourceMappingURL=main.56fd876d.chunk.js.map