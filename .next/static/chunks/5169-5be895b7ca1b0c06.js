(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5169],{1295:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},unstable_getImgProps:function(){return l}});let i=s(21024),n=s(32301),r=s(27873),c=s(63222),a=i._(s(75033)),l=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},o=c.Image},585:function(e,t,s){"use strict";var i=s(57437);s(2265);var n=s(77533),r=s.n(n);t.Z=e=>{let{text:t,width:s,height:n,fSize:c,count:a,onClick:l}=e;return(0,i.jsxs)("button",{onClick:l,className:r().btn,style:{width:"".concat(s,"px"),height:n?"".concat(n,"px"):"",fontSize:c?"".concat(c,"px"):""},children:[t,a&&(0,i.jsx)("span",{children:a})]})}},74742:function(e,t,s){"use strict";s.r(t);var i=s(57437);s(2265);var n=s(58690),r=s.n(n);t.default=e=>{let{type:t="checkbox",checked:s,handleChecked:n,value:c,setValue:a,current:l}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("input",{type:t||"checkbox",checked:"checkbox"===t?s:c===l,onChange:"checkbox"===t?()=>n(!s):()=>a(c),className:r().inp})})}},81673:function(e,t,s){"use strict";s.r(t);var i=s(57437);s(2265);var n=s(52698),r=s.n(n),c=s(61396),a=s.n(c);t.default=e=>{let{name:t,active:s,setActive:n,href:c}=e,l=()=>{n&&n(t)};return c?(0,i.jsx)(a(),{onClick:l,className:s?r().item_active:r().item,href:c||"",children:t}):(0,i.jsx)("div",{onClick:l,className:s?r().item_active:r().item,children:t})}},81049:function(e,t,s){"use strict";var i=s(57437);s(2265);var n=s(81673);t.Z=e=>{let{choiseItems:t,currentChoise:s,setActive:r}=e;return(0,i.jsx)(i.Fragment,{children:null==t?void 0:t.map((e,t)=>(0,i.jsx)(n.default,{name:e.name,active:(null==s?void 0:s.toLowerCase())===e.name.toLowerCase(),setActive:r,href:e.href},t))})}},51016:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var i=s(57437),n=s(2265),r=s(77529),c=s.n(r),a=s(94152),l=s.n(a),o=s(16691),u=s.n(o),d=s(54166),_=()=>(0,i.jsxs)("div",{className:l().feedback_item,children:[(0,i.jsx)("div",{className:l().date,children:"29.07.2023"}),(0,i.jsx)("div",{className:l().title,children:"Отличное обслуживание"}),(0,i.jsxs)("div",{className:l().stars,children:[(0,i.jsx)(u(),{alt:"star icon",src:d.default}),(0,i.jsx)(u(),{alt:"star icon",src:d.default}),(0,i.jsx)(u(),{alt:"star icon",src:d.default}),(0,i.jsx)(u(),{alt:"star icon",src:d.default})]}),(0,i.jsx)("div",{className:l().text,children:"Прежде всего, современная методология разработки однозначно определяет каждого участника как способного. Прежде всего, современная методология разработки однозначно определяет каждого участника как способного..."}),(0,i.jsx)("div",{className:l().more,children:"Читать полностью"}),(0,i.jsx)("div",{className:l().feed,children:"ОТЗЫВЫ О ПОТРЕБИТЕЛЬСКИХ КРЕДИТАХ"})]}),m=s(585),f=e=>{let{title:t,sub:s}=e;return(0,i.jsxs)("div",{className:c().title,children:[t,(0,i.jsx)("mark",{children:s})]})},x=s(81049),h=e=>{let{title:t,sub:s,chois:r}=e,[a,l]=(0,n.useState)("Банки");return(0,i.jsxs)("div",{className:c().feedback,children:[t&&s?(0,i.jsx)(f,{title:t,sub:s}):(0,i.jsxs)("div",{className:c().title,children:[(0,i.jsx)("mark",{children:"Что говорят"}),"наши клиенты"]}),r&&0!==r.length&&(0,i.jsx)("div",{className:c().choise_items,children:(0,i.jsx)(x.Z,{setActive:l,currentChoise:a,choiseItems:r})}),(0,i.jsxs)("div",{className:c().feedback_cont,children:[(0,i.jsx)(_,{}),(0,i.jsx)(_,{}),(0,i.jsx)(_,{})]}),(0,i.jsxs)("div",{className:c().btn_cont,children:[(0,i.jsx)("button",{className:c().blueTrBtn,children:"Оставить отзыв"}),(0,i.jsx)(m.Z,{text:"Смотреть все отзывы",width:300})]})]})}},38429:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var i=s(57437),n=s(2265),r=s(65977),c=s.n(r),a=s(16691),l=s.n(a),o={src:"/_next/static/media/plus.53238151.svg",height:26,width:28,blurWidth:0,blurHeight:0},u=e=>{let{item:t}=e,[s,r]=(0,n.useState)(!1);return(0,i.jsxs)("div",{className:s?c().item_active:c().item,onClick:()=>{r(!s)},children:[(0,i.jsxs)("div",{className:c().info,children:[(0,i.jsx)("div",{className:c().title,children:t.title}),(0,i.jsx)(l(),{className:s?c().plus_a:c().plus,src:o,alt:""})]}),(0,i.jsx)("p",{className:c().text,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien vitae tortor vestibulum mollis nec non orci. Phasellus fringilla, odio nec suscipit varius, purus libero bibendum lacus, non vulputate urna tortor eget libero. Etiam efficitur lacus libero, eget blandit libero molestie ut."})]})}},29886:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var i=s(57437),n=s(2265),r=s(72619),c=s.n(r),a=s(16691),l=s.n(a),o=s(12768),u=s(90716),d=s(20674),_=s.n(d),m=e=>{let{img:t,name:s,info:n,title:r,sub:c}=e;return(0,i.jsxs)("div",{className:_().item,children:[(0,i.jsxs)("div",{className:_().info,children:[(0,i.jsx)(l(),{src:t,alt:"bank icon"}),(0,i.jsxs)("div",{className:_().info_i,children:[(0,i.jsx)("div",{className:_().title,children:r}),(0,i.jsx)("div",{className:_().sub,children:c})]})]}),(0,i.jsxs)("div",{className:_().item_info,children:[(0,i.jsx)("div",{className:_().title,children:s}),(0,i.jsx)("div",{className:_().sub,children:n})]})]})},f=s(69478);s(87021);var x=e=>{let{items:t}=e,s=(0,n.useRef)(null);return(0,i.jsxs)("div",{className:c().wrap,children:[(0,i.jsxs)("div",{className:c().title,children:["Предложения ",(0,i.jsx)("mark",{children:"месяца"})]}),(0,i.jsxs)("div",{className:c().cont,children:[(0,i.jsx)(l(),{src:o.Z,onClick:()=>{s.current&&s.current.swiper.slidePrev()},className:c().arr,alt:"arrow left"}),(0,i.jsx)(f.tq,{ref:s,id:"swiper",loop:!0,spaceBetween:5,slidesPerView:4,children:t.map((e,t)=>(0,i.jsx)(f.o5,{children:(0,i.jsx)(m,{img:e.img,name:e.name,info:e.info,title:e.title,sub:e.sub})},t))}),(0,i.jsx)(l(),{src:u.default,onClick:()=>{s.current&&s.current.swiper.slideNext()},className:c().arr,alt:"arrow right"})]})]})}},40653:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var i=s(57437),n=s(2265),r=s(12768),c=s(90716),a=s(15248),l=s.n(a),o=s(16691),u=s.n(o),d=s(68460),_=s.n(d),m=e=>{let{title:t,sub:s}=e;return(0,i.jsxs)("div",{className:_().item,children:[(0,i.jsx)("h1",{className:_().title,children:t}),(0,i.jsx)("h2",{className:_().sub,children:s})]})},f=s(69478);s(87021);var x=e=>{let{items:t}=e,s=(0,n.useRef)(null);return(0,i.jsxs)("div",{className:l().cont,children:[(0,i.jsx)(u(),{onClick:()=>{s.current&&s.current.swiper.slidePrev()},style:{cursor:"pointer"},src:r.Z,alt:"arrow left"}),(0,i.jsx)(f.tq,{id:"swiper",slidesPerView:5,ref:s,loop:!0,spaceBetween:5,children:t.map((e,t)=>(0,i.jsx)(f.o5,{children:(0,i.jsx)(m,{title:e.title,sub:e.sub})},t))}),(0,i.jsx)(u(),{onClick:()=>{s.current&&s.current.swiper.slideNext()},style:{cursor:"pointer"},src:c.default,alt:"arrow right"})]})}},77533:function(e){e.exports={btn:"BlueBtn_btn__Wd1H7"}},58690:function(e){e.exports={inp:"CustomCheckboxAround_inp__bZuoU"}},4769:function(e){e.exports={bonus:"Bonus_bonus__9qDkX",logo:"Bonus_logo__wV_UX",info:"Bonus_info__OOsSH",title:"Bonus_title__kciNI"}},52698:function(e){e.exports={item:"ChoiseItem_item__R9opB",item_active:"ChoiseItem_item_active__lFdTe"}},94152:function(e){e.exports={feedback_item:"FeedbackItem_feedback_item__XeYGM",date:"FeedbackItem_date__YiERl",title:"FeedbackItem_title__HrRdy",stars:"FeedbackItem_stars__WDzU9",text:"FeedbackItem_text__E9FJA",more:"FeedbackItem_more__piErE",feed:"FeedbackItem_feed__ViDKu"}},77529:function(e){e.exports={feedback:"Feedback_feedback__RyvzP",title:"Feedback_title__xAU8M",choise_items:"Feedback_choise_items__zKF9d",feedback_cont:"Feedback_feedback_cont__00VnU",btn_cont:"Feedback_btn_cont__coNvc",blueTrBtn:"Feedback_blueTrBtn__LzNHH"}},14026:function(e){e.exports={quests:"FrequentQuestions_quests__8wqkJ",title:"FrequentQuestions_title__fhklN",questItems:"FrequentQuestions_questItems__pZca2"}},65977:function(e){e.exports={item:"QuestionItem_item__Ua3yr",info:"QuestionItem_info__WKGCS",title:"QuestionItem_title__ikrJe",text:"QuestionItem_text__K6xtK",item_active:"QuestionItem_item_active__MesBO",plus:"QuestionItem_plus__oWovN",plus_a:"QuestionItem_plus_a__CoIYq"}},68460:function(e){e.exports={item:"SliderBusinessItem_item__NkMWp",title:"SliderBusinessItem_title__gDGxN",sub:"SliderBusinessItem_sub__OedDG"}},72619:function(e){e.exports={wrap:"OffersInvest_wrap__ns3gE",title:"OffersInvest_title__Y_smN",cont:"OffersInvest_cont__RKTFV",arr:"OffersInvest_arr___56cP"}},20674:function(e){e.exports={item:"OffersInvestItem_item__9i0R3",info:"OffersInvestItem_info__KIMds",info_i:"OffersInvestItem_info_i__dMbY7",title:"OffersInvestItem_title__oqSrn",sub:"OffersInvestItem_sub__vICh_",item_info:"OffersInvestItem_item_info__esahS"}},15248:function(e){e.exports={cont:"SlipsBanksSlider_cont__147Kn",items_cont:"SlipsBanksSlider_items_cont__qpGCU"}},54166:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/Star.d126eae7.svg",height:16,width:16,blurWidth:0,blurHeight:0}},12768:function(e,t){"use strict";t.Z={src:"/_next/static/media/Стрелка_left.8c8b40c8.svg",height:43,width:44,blurWidth:0,blurHeight:0}},90716:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/Стрелка_right.22e8dc27.svg",height:43,width:44,blurWidth:0,blurHeight:0}},16691:function(e,t,s){e.exports=s(1295)},61396:function(e,t,s){e.exports=s(46685)},28481:function(e,t,s){"use strict";s.d(t,{x0:function(){return i}});let i=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"")}}]);