(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8753],{585:function(e,t,i){"use strict";var s=i(57437);i(2265);var n=i(77533),c=i.n(n);t.Z=e=>{let{text:t,width:i,height:n,fSize:a,count:l,onClick:r}=e;return(0,s.jsxs)("button",{onClick:r,className:c().btn,style:{width:"".concat(i,"px"),height:n?"".concat(n,"px"):"",fontSize:a?"".concat(a,"px"):""},children:[t,l&&(0,s.jsx)("span",{children:l})]})}},74742:function(e,t,i){"use strict";i.r(t);var s=i(57437);i(2265);var n=i(58690),c=i.n(n);t.default=e=>{let{type:t="checkbox",checked:i,handleChecked:n,value:a,setValue:l,current:r}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("input",{type:t||"checkbox",checked:"checkbox"===t?i:a===r,onChange:"checkbox"===t?()=>n(!i):()=>l(a),className:c().inp})})}},58819:function(e,t,i){"use strict";var s=i(57437);i(2265);var n=i(4769),c=i.n(n),a=i(90716),l=i(16691),r=i.n(l);t.Z=e=>{let{title:t="Бонус до 2000 рублей за открытие вклада!",img:i,text:n="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",height:l}=e;return(0,s.jsxs)("div",{className:c().bonus,style:{height:"".concat(l,"px")},children:[i?(0,s.jsx)(r(),{src:i,alt:"logo bank"}):(0,s.jsx)("div",{className:c().logo,children:"Логотип"}),(0,s.jsxs)("div",{className:c().info,children:[(0,s.jsx)("div",{className:c().title,children:t}),(0,s.jsx)("p",{children:n})]}),(0,s.jsx)(r(),{src:a.default,alt:"иконка стрелки вправо"})]})}},81673:function(e,t,i){"use strict";i.r(t);var s=i(57437);i(2265);var n=i(52698),c=i.n(n),a=i(61396),l=i.n(a);t.default=e=>{let{name:t,active:i,setActive:n,href:a}=e,r=()=>{n&&n(t)};return a?(0,s.jsx)(l(),{onClick:r,className:i?c().item_active:c().item,href:a||"",children:t}):(0,s.jsx)("div",{onClick:r,className:i?c().item_active:c().item,children:t})}},81049:function(e,t,i){"use strict";var s=i(57437);i(2265);var n=i(81673);t.Z=e=>{let{choiseItems:t,currentChoise:i,setActive:c}=e;return(0,s.jsx)(s.Fragment,{children:null==t?void 0:t.map((e,t)=>(0,s.jsx)(n.default,{name:e.name,active:(null==i?void 0:i.toLowerCase())===e.name.toLowerCase(),setActive:c,href:e.href},t))})}},42004:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var s=i(57437),n=i(2265),c=i(91550),a=i.n(c),l=i(85361),r=i.n(l),d=i(80760),o=i.n(d),u=i(86245),_=i(16691),m=i.n(_),x=e=>{let{numb:t,sub:i}=e,[c,a]=(0,n.useState)(!1);return(0,s.jsxs)("div",{className:o().acc_item,onClick:()=>a(!c),style:{maxHeight:c&&"250px"},children:[(0,s.jsxs)("div",{className:o().info,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:t}),i]}),(0,s.jsx)(m(),{className:c?o().image_a:o().image,src:u.Z,alt:"стрелочка вниз"})]}),(0,s.jsx)("div",{className:o().text,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque sagittis dolor in ornare. Morbi vitae metus tempor, maximus ante vel, suscipit libero. Vivamus sagittis nunc nec laoreet eleifend. P"})]})},h=e=>{let{items:t}=e;return(0,s.jsx)("div",{className:r().acc_items,children:t.map((e,t)=>(0,s.jsx)(x,{numb:e.numb,sub:e.sub,text:e.text},t))})};let v=[{numb:"01",sub:"Вопрос - ответ",text:""},{numb:"02",sub:"Отзывы о вкладах",text:"Оставьте свое мнение о банковских продуктах. Помогите другим сделать выбор финансового партнёра."},{numb:"03",sub:"Собственный форум",text:""}];var b=()=>(0,s.jsx)("div",{className:a().comm,children:(0,s.jsxs)("div",{className:a().comm_i,children:[(0,s.jsxs)("div",{className:a().title,children:["Как мы ",(0,s.jsx)("mark",{children:"ведем коммуникацию"})," с нашими клиентами"]}),(0,s.jsx)(h,{items:v})]})})},51016:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return v}});var s=i(57437),n=i(2265),c=i(77529),a=i.n(c),l=i(94152),r=i.n(l),d=i(16691),o=i.n(d),u=i(54166),_=()=>(0,s.jsxs)("div",{className:r().feedback_item,children:[(0,s.jsx)("div",{className:r().date,children:"29.07.2023"}),(0,s.jsx)("div",{className:r().title,children:"Отличное обслуживание"}),(0,s.jsxs)("div",{className:r().stars,children:[(0,s.jsx)(o(),{alt:"star icon",src:u.default}),(0,s.jsx)(o(),{alt:"star icon",src:u.default}),(0,s.jsx)(o(),{alt:"star icon",src:u.default}),(0,s.jsx)(o(),{alt:"star icon",src:u.default})]}),(0,s.jsx)("div",{className:r().text,children:"Прежде всего, современная методология разработки однозначно определяет каждого участника как способного. Прежде всего, современная методология разработки однозначно определяет каждого участника как способного..."}),(0,s.jsx)("div",{className:r().more,children:"Читать полностью"}),(0,s.jsx)("div",{className:r().feed,children:"ОТЗЫВЫ О ПОТРЕБИТЕЛЬСКИХ КРЕДИТАХ"})]}),m=i(585),x=e=>{let{title:t,sub:i}=e;return(0,s.jsxs)("div",{className:a().title,children:[t,(0,s.jsx)("mark",{children:i})]})},h=i(81049),v=e=>{let{title:t,sub:i,chois:c}=e,[l,r]=(0,n.useState)("Банки");return(0,s.jsxs)("div",{className:a().feedback,children:[t&&i?(0,s.jsx)(x,{title:t,sub:i}):(0,s.jsxs)("div",{className:a().title,children:[(0,s.jsx)("mark",{children:"Что говорят"}),"наши клиенты"]}),c&&0!==c.length&&(0,s.jsx)("div",{className:a().choise_items,children:(0,s.jsx)(h.Z,{setActive:r,currentChoise:l,choiseItems:c})}),(0,s.jsxs)("div",{className:a().feedback_cont,children:[(0,s.jsx)(_,{}),(0,s.jsx)(_,{}),(0,s.jsx)(_,{})]}),(0,s.jsxs)("div",{className:a().btn_cont,children:[(0,s.jsx)("button",{className:a().blueTrBtn,children:"Оставить отзыв"}),(0,s.jsx)(m.Z,{text:"Смотреть все отзывы",width:300})]})]})}},97317:function(e,t,i){"use strict";var s=i(57437);i(2265);var n=i(14026),c=i.n(n),a=i(38429);t.Z=e=>{let{title:t,items:i}=e;return(0,s.jsxs)("div",{className:c().quests,children:[(0,s.jsx)("div",{className:c().title,children:t}),(0,s.jsx)("div",{className:c().questItems,children:i.map((e,t)=>(0,s.jsx)(a.default,{item:e},t))})]})}},21916:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _}});var s=i(57437),n=i(2265),c=i(90493),a=i.n(c),l={src:"/_next/static/media/rassilka.8e46a562.svg",height:446,width:522,blurWidth:0,blurHeight:0},r=i(16691),d=i.n(r),o=i(585),u=i(74742),_=()=>{let[e,t]=(0,n.useState)(!0),[i,c]=(0,n.useState)(!0);return(0,s.jsxs)("div",{className:a().mailing,children:[(0,s.jsxs)("div",{className:a().info,children:[(0,s.jsxs)("div",{className:a().title,children:["Подпишитесь на нашу рассылку, ",(0,s.jsx)("mark",{children:"чтобы быть в курсе новых предложений"})]}),(0,s.jsxs)("div",{className:a().mailing_i,children:[(0,s.jsxs)("div",{className:a().mail_cont,children:[(0,s.jsx)("input",{type:"email",placeholder:"Введите вашу почту"}),(0,s.jsx)(o.Z,{text:"Подписаться",width:170})]}),(0,s.jsxs)("div",{className:a().inp_label,children:[(0,s.jsx)("div",{children:(0,s.jsx)(u.default,{handleChecked:()=>t(!e),checked:e})}),(0,s.jsxs)("span",{children:["Предоставляю своё ",(0,s.jsx)("a",{href:"",children:"согласие"})," на обработку персональных данных"]})]}),(0,s.jsxs)("div",{className:a().inp_label,children:[(0,s.jsx)("div",{children:(0,s.jsx)(u.default,{handleChecked:()=>c(!i),checked:i})}),(0,s.jsxs)("span",{children:["Предоставляю своё ",(0,s.jsx)("a",{href:"",children:"согласие"})," на получение рекламы и информационных сообщений"]})]})]})]}),(0,s.jsx)(d(),{src:l,alt:"рассылка фото"})]})}},38429:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var s=i(57437),n=i(2265),c=i(65977),a=i.n(c),l=i(16691),r=i.n(l),d={src:"/_next/static/media/plus.53238151.svg",height:26,width:28,blurWidth:0,blurHeight:0},o=e=>{let{item:t}=e,[i,c]=(0,n.useState)(!1);return(0,s.jsxs)("div",{className:i?a().item_active:a().item,onClick:()=>{c(!i)},children:[(0,s.jsxs)("div",{className:a().info,children:[(0,s.jsx)("div",{className:a().title,children:t.title}),(0,s.jsx)(r(),{className:i?a().plus_a:a().plus,src:d,alt:""})]}),(0,s.jsx)("p",{className:a().text,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien vitae tortor vestibulum mollis nec non orci. Phasellus fringilla, odio nec suscipit varius, purus libero bibendum lacus, non vulputate urna tortor eget libero. Etiam efficitur lacus libero, eget blandit libero molestie ut."})]})}},77533:function(e){e.exports={btn:"BlueBtn_btn__Wd1H7"}},58690:function(e){e.exports={inp:"CustomCheckboxAround_inp__bZuoU"}},85361:function(e){e.exports={acc_items:"Accordeon_acc_items__3Mzwj"}},80760:function(e){e.exports={acc_item:"AccordeonItem_acc_item__XgOdX",info:"AccordeonItem_info__Tdt35",text:"AccordeonItem_text__o_OKP",image:"AccordeonItem_image__8WWSB",image_a:"AccordeonItem_image_a__gA7pk"}},4769:function(e){e.exports={bonus:"Bonus_bonus__9qDkX",logo:"Bonus_logo__wV_UX",info:"Bonus_info__OOsSH",title:"Bonus_title__kciNI"}},52698:function(e){e.exports={item:"ChoiseItem_item__R9opB",item_active:"ChoiseItem_item_active__lFdTe"}},91550:function(e){e.exports={comm:"Communicate_comm__ciTne",comm_i:"Communicate_comm_i__bJhsF",title:"Communicate_title__MQQyZ"}},94152:function(e){e.exports={feedback_item:"FeedbackItem_feedback_item__XeYGM",date:"FeedbackItem_date__YiERl",title:"FeedbackItem_title__HrRdy",stars:"FeedbackItem_stars__WDzU9",text:"FeedbackItem_text__E9FJA",more:"FeedbackItem_more__piErE",feed:"FeedbackItem_feed__ViDKu"}},77529:function(e){e.exports={feedback:"Feedback_feedback__RyvzP",title:"Feedback_title__xAU8M",choise_items:"Feedback_choise_items__zKF9d",feedback_cont:"Feedback_feedback_cont__00VnU",btn_cont:"Feedback_btn_cont__coNvc",blueTrBtn:"Feedback_blueTrBtn__LzNHH"}},14026:function(e){e.exports={quests:"FrequentQuestions_quests__8wqkJ",title:"FrequentQuestions_title__fhklN",questItems:"FrequentQuestions_questItems__pZca2"}},90493:function(e){e.exports={mailing:"Mailing_mailing__TRxDO",info:"Mailing_info__8oK4p",title:"Mailing_title__vB1YI",mailing_i:"Mailing_mailing_i__ygwKX",mail_cont:"Mailing_mail_cont__Dould",inp_label:"Mailing_inp_label__TrPKc"}},65977:function(e){e.exports={item:"QuestionItem_item__Ua3yr",info:"QuestionItem_info__WKGCS",title:"QuestionItem_title__ikrJe",text:"QuestionItem_text__K6xtK",item_active:"QuestionItem_item_active__MesBO",plus:"QuestionItem_plus__oWovN",plus_a:"QuestionItem_plus_a__CoIYq"}},54166:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/Star.d126eae7.svg",height:16,width:16,blurWidth:0,blurHeight:0}},86245:function(e,t){"use strict";t.Z={src:"/_next/static/media/arr_d_spec.4684d381.svg",height:12,width:21,blurWidth:0,blurHeight:0}},90716:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/Стрелка_right.22e8dc27.svg",height:43,width:44,blurWidth:0,blurHeight:0}},28481:function(e,t,i){"use strict";i.d(t,{x0:function(){return s}});let s=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"")}}]);