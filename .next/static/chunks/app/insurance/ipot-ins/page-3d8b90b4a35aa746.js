(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3088],{99935:function(t,e,i){Promise.resolve().then(i.bind(i,11752)),Promise.resolve().then(i.bind(i,97921)),Promise.resolve().then(i.bind(i,44057)),Promise.resolve().then(i.bind(i,6591)),Promise.resolve().then(i.bind(i,57441)),Promise.resolve().then(i.bind(i,61926)),Promise.resolve().then(i.bind(i,18907)),Promise.resolve().then(i.bind(i,75563)),Promise.resolve().then(i.bind(i,95113)),Promise.resolve().then(i.bind(i,42145)),Promise.resolve().then(i.bind(i,21955)),Promise.resolve().then(i.bind(i,57773)),Promise.resolve().then(i.bind(i,27738)),Promise.resolve().then(i.bind(i,24904)),Promise.resolve().then(i.bind(i,47253)),Promise.resolve().then(i.bind(i,49533)),Promise.resolve().then(i.bind(i,63284)),Promise.resolve().then(i.bind(i,59985)),Promise.resolve().then(i.bind(i,89955)),Promise.resolve().then(i.bind(i,85644)),Promise.resolve().then(i.bind(i,40336)),Promise.resolve().then(i.bind(i,76310)),Promise.resolve().then(i.bind(i,52987)),Promise.resolve().then(i.bind(i,10122)),Promise.resolve().then(i.bind(i,26351)),Promise.resolve().then(i.bind(i,96719)),Promise.resolve().then(i.bind(i,88483)),Promise.resolve().then(i.bind(i,52437)),Promise.resolve().then(i.bind(i,58220)),Promise.resolve().then(i.bind(i,60718)),Promise.resolve().then(i.bind(i,4844)),Promise.resolve().then(i.bind(i,29977)),Promise.resolve().then(i.bind(i,38817)),Promise.resolve().then(i.bind(i,30332)),Promise.resolve().then(i.bind(i,62993)),Promise.resolve().then(i.bind(i,92303)),Promise.resolve().then(i.bind(i,61457)),Promise.resolve().then(i.bind(i,10320)),Promise.resolve().then(i.bind(i,17226)),Promise.resolve().then(i.bind(i,8364)),Promise.resolve().then(i.bind(i,85111)),Promise.resolve().then(i.bind(i,19403)),Promise.resolve().then(i.bind(i,68343)),Promise.resolve().then(i.bind(i,22835)),Promise.resolve().then(i.bind(i,85917)),Promise.resolve().then(i.bind(i,16069)),Promise.resolve().then(i.bind(i,9989)),Promise.resolve().then(i.bind(i,56533)),Promise.resolve().then(i.bind(i,24567)),Promise.resolve().then(i.bind(i,28235)),Promise.resolve().then(i.bind(i,72411)),Promise.resolve().then(i.bind(i,46117)),Promise.resolve().then(i.bind(i,42548)),Promise.resolve().then(i.bind(i,65283)),Promise.resolve().then(i.bind(i,40741)),Promise.resolve().then(i.bind(i,68966)),Promise.resolve().then(i.bind(i,32567)),Promise.resolve().then(i.bind(i,50634)),Promise.resolve().then(i.bind(i,41316)),Promise.resolve().then(i.bind(i,24521)),Promise.resolve().then(i.bind(i,41524)),Promise.resolve().then(i.bind(i,67268)),Promise.resolve().then(i.bind(i,83515)),Promise.resolve().then(i.bind(i,86907)),Promise.resolve().then(i.bind(i,64995)),Promise.resolve().then(i.bind(i,21653)),Promise.resolve().then(i.bind(i,75711)),Promise.resolve().then(i.bind(i,31914)),Promise.resolve().then(i.bind(i,97779)),Promise.resolve().then(i.bind(i,84189)),Promise.resolve().then(i.bind(i,42259))},74742:function(t,e,i){"use strict";i.r(e);var s=i(57437);i(2265);var r=i(58690),n=i.n(r);e.default=t=>{let{type:e="checkbox",checked:i,handleChecked:r,value:c,setValue:d,current:a}=t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("input",{type:e||"checkbox",checked:"checkbox"===e?i:c===a,onChange:"checkbox"===e?()=>r(!i):()=>d(c),className:n().inp})})}},12962:function(t,e,i){"use strict";i.r(e);var s=i(57437);i(2265);var r=i(25648),n=i.n(r);e.default=t=>{let{title:e,width:i,place:r,colorTitle:c,setValue:d,value:a}=t;return(0,s.jsxs)("div",{className:n().years,style:{width:"".concat(i,"px")},children:[(0,s.jsx)("div",{style:{color:"".concat(c)},children:e}),(0,s.jsx)("input",{type:"text",placeholder:r,onChange:t=>d&&d(t.target.value),defaultValue:a})]})}},83663:function(t,e,i){"use strict";var s=i(57437);i(2265);var r=i(10288),n=i.n(r);e.Z=t=>{let{width:e,height:i,place:r,border:c}=t;return(0,s.jsx)("div",{className:n().cont,style:{width:"".concat(e,"px"),height:"".concat(i,"px"),borderColor:"".concat(c)},children:(0,s.jsx)("input",{className:n().inp,placeholder:r,type:"text"})})}},64588:function(t,e,i){"use strict";i.r(e);var s=i(57437);i(2265);var r=i(19386),n=i.n(r);e.default=t=>{let{title:e,options:i,width:r,value:c,setValue:d}=t;return(0,s.jsxs)("div",{className:n().years,style:{width:r?"".concat(r,"px"):""},children:[e&&(0,s.jsx)("div",{children:e}),(0,s.jsx)("select",{value:c,onChange:t=>d&&d(t.target.value),children:i.map((t,e)=>(0,s.jsx)("option",{value:t,children:t},e))})]})}},49881:function(t,e,i){"use strict";i.r(e);var s=i(57437),r=i(2265),n=i(26884),c=i.n(n),d=i(16691),a=i.n(d),l=i(86855),h=i(61396),u=i.n(h);e.default=t=>{let{placeholder:e,margin:i,height:n,btnHidden:d,itemsSearch:h,setValue:o,value:b,filterArr:g,width:m}=t,[f,x]=(0,r.useState)(!1),[_,v]=(0,r.useState)([]);return h&&(0,r.useEffect)(()=>{(null==b?void 0:b.length)===0?x(!1):x(!0);let t=g(h);v(t)},[b]),(0,s.jsxs)("div",{className:c().search,style:{margin:"".concat(i,"px"),height:"".concat(n,"px"),width:"".concat(m,"px")},children:[(0,s.jsx)(a(),{alt:"lupa",src:l.Z,height:40,width:40}),(0,s.jsx)("input",{type:"text",value:b,onChange:t=>o&&o(t.target.value),placeholder:e}),d?"":(0,s.jsx)("button",{children:"Найти"}),f&&h&&(0,s.jsx)("div",{className:c().drop_down,children:null==_?void 0:_.map((t,e)=>t.link?(0,s.jsx)(u(),{href:t.link,children:t.text||t.name},e):t.a?(0,s.jsx)("a",{target:"_blank",href:t.a,rel:"noreferrer",children:t.name},e):(0,s.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",borderBottom:"1px solid black",fontSize:"14px"},children:[(0,s.jsx)("span",{children:t.name||t.title}),t.rating&&(0,s.jsxs)("span",{children:["рейтинг ",t.rating]})]},e))})]})}},93082:function(t,e,i){"use strict";var s=i(57437);i(2265);var r=i(12655),n=i.n(r),c=i(16691),d=i.n(c);e.Z=t=>{let{img:e}=t;return(0,s.jsx)("div",{className:n().item,children:(0,s.jsx)(d(),{src:e,alt:"иконка банка"})})}},58819:function(t,e,i){"use strict";var s=i(57437);i(2265);var r=i(4769),n=i.n(r),c=i(90716),d=i(16691),a=i.n(d);e.Z=t=>{let{title:e="Бонус до 2000 рублей за открытие вклада!",img:i,text:r="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",height:d}=t;return(0,s.jsxs)("div",{className:n().bonus,style:{height:"".concat(d,"px")},children:[i?(0,s.jsx)(a(),{src:i,alt:"logo bank"}):(0,s.jsx)("div",{className:n().logo,children:"Логотип"}),(0,s.jsxs)("div",{className:n().info,children:[(0,s.jsx)("div",{className:n().title,children:e}),(0,s.jsx)("p",{children:r})]}),(0,s.jsx)(a(),{src:c.default,alt:"иконка стрелки вправо"})]})}},59957:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var s=i(57437);i(2265);var r=i(54010),n=i.n(r),c=i(64912),d=i.n(c),a=i(16691),l=i.n(a),h=t=>{let{img:e,title:i,sub:r,text:n,w_text:c,height:a}=t;return(0,s.jsxs)("div",{className:d().work_item,style:{height:"".concat(a,"px")},children:[(0,s.jsxs)("div",{className:d().info,children:[(0,s.jsx)("div",{className:d().img,children:(0,s.jsx)(l(),{src:e,alt:"иконка наших сторон"})}),(0,s.jsxs)("div",{className:d().name,children:[(0,s.jsx)("mark",{children:i}),(0,s.jsx)("br",{}),r]})]}),(0,s.jsx)("p",{style:{width:"".concat(c,"px")},children:n})]})},u=t=>{let{items:e}=t;return(0,s.jsx)(s.Fragment,{children:e.map((t,e)=>(0,s.jsx)(h,{height:t.height,w_text:t.w_text,img:t.img,title:t.title,sub:t.sub,text:t.text},e))})},o=t=>{let{title:e,sub:i,items:r}=t;return(0,s.jsxs)("div",{className:n().howWorks,children:[(0,s.jsxs)("div",{className:n().title,children:[(0,s.jsx)("mark",{children:e}),i]}),(0,s.jsx)("div",{className:n().work_items,children:(0,s.jsx)(u,{items:r})})]})}},13741:function(t,e,i){"use strict";var s=i(57437);i(2265),e.Z=t=>{let{children:e}=t;return(0,s.jsx)("main",{className:"container",style:{paddingTop:"20px",overflowX:"hidden",paddingBottom:"2rem"},children:e})}},69441:function(t,e,i){"use strict";i.r(e);var s=i(57437),r=i(2265),n=i(96186),c=i.n(n),d=i(90716),a=i(16691),l=i.n(a),h=i(69478);i(87021);var u=i(93082),o=i(28481);e.default=t=>{let{data:e}=t,i=(0,r.useRef)(null),[n,a]=(0,r.useState)([(0,s.jsx)("div",{},(0,o.x0)())]);return(0,r.useEffect)(()=>{let t=e.map((t,e)=>(0,s.jsx)(h.o5,{style:{zIndex:"-1"},children:(0,s.jsx)(u.Z,{img:t})},e));a(t)},[]),(0,s.jsxs)("div",{className:c().slider,children:[(0,s.jsx)(h.tq,{id:"swiperBanksCons",ref:i,spaceBetween:5,slidesPerView:6,loop:!0,style:{zIndex:"-1"},children:n}),(0,s.jsx)(l(),{src:d.default,className:c().arr,alt:"стрелка вправо",onClick:()=>{i.current&&i.current.swiper.slideNext()}})]})}},16095:function(t,e,i){"use strict";i.r(e);var s=i(57437),r=i(2265),n=i(28814),c=i.n(n),d=i(49881),a=i(69441);e.default=t=>{let{data:e,title:i,isTitle:n,searchItems:l}=t,[h,u]=(0,r.useState)("");return(0,s.jsxs)("div",{className:c().wrapper,children:[n?(0,s.jsx)("div",{className:c().title,children:i||"Страховые компании"}):"",(0,s.jsx)(d.default,{placeholder:"Введите название компании",filterArr:t=>t.filter(t=>t.name.toLowerCase().includes(h.toLowerCase())),btnHidden:!0,value:h,setValue:u,itemsSearch:l}),(0,s.jsx)(a.default,{data:e})]})}},42259:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return j}});var s=i(57437),r=i(2265),n=i(13741),c=i(26702),d=i.n(c),a=i(64588),l=i(12962),h=i(585),u=i(83663),o=i(74742),b=()=>{let[t,e]=(0,r.useState)("Квартира");return(0,s.jsx)("div",{className:d().intro,children:(0,s.jsxs)("div",{className:d().info_cont,children:[(0,s.jsxs)("div",{className:d().breadCrumbs,children:["Главная / ",(0,s.jsx)("mark",{children:"Страхование"})]}),(0,s.jsx)("div",{className:d().title,children:(0,s.jsx)("mark",{children:"Страхование"})}),(0,s.jsxs)("div",{className:d().sub,children:["Выбирайте и сравнивайте предложения ведущих страховых компаний онлайн. Мы покажем цены,",(0,s.jsx)("br",{}),"условия и реальные отзывы клиентов. Сразу после оплаты направим на email электронный полис —",(0,s.jsx)("br",{}),"он имеет ту же юридическую силу, что и бумажный."]}),(0,s.jsxs)("div",{className:d().infoCont,children:[(0,s.jsxs)("div",{className:d().l,children:[(0,s.jsxs)("div",{className:d().cont_checks,children:[(0,s.jsxs)("div",{className:d().check,children:[(0,s.jsx)(o.default,{value:"Квартира",current:t,setValue:e,checked:!0,type:"radio"}),"Квартира"]}),(0,s.jsxs)("div",{className:d().check,children:[(0,s.jsx)(o.default,{value:"Жизнь",current:t,setValue:e,checked:!1,type:"radio"}),"Жизнь"]}),(0,s.jsxs)("div",{className:d().check,children:[(0,s.jsx)(o.default,{value:"Квартира + жизнь",current:t,setValue:e,checked:!1,type:"radio"}),"Квартира + жизнь"]}),(0,s.jsxs)("div",{className:d().check,children:[(0,s.jsx)(o.default,{value:"Квартира + жизнь1",current:t,setValue:e,checked:!1,type:"radio"}),"Квартира + жизнь"]})]}),(0,s.jsxs)("div",{className:d().inps_cont,children:[(0,s.jsx)(a.default,{width:385,title:"Банк, где у меня ипотека",options:["Сбербанк"]}),(0,s.jsx)(h.Z,{text:"Показать цены",width:173}),(0,s.jsx)(l.default,{title:"Остаток кредита",width:385}),(0,s.jsx)(a.default,{width:385,title:"Пол",options:["Мужской"]}),(0,s.jsx)(u.Z,{place:"Дата рождения",width:385})]})]}),(0,s.jsxs)("div",{className:d().right,children:[(0,s.jsx)("div",{className:d().name,children:"Здесь будут показаны ваши последние расчеты и оформленные полисы"}),(0,s.jsx)("div",{className:d().btn,children:"Войти"})]})]})]})})},g=i(58819),m=i(16095),f=i(11834),x=i(59957),_=i(79189),v=i.n(_),p=()=>(0,s.jsx)("div",{className:v().our_strongs,children:(0,s.jsxs)("div",{className:v().info,children:[(0,s.jsxs)("div",{className:v().title,children:["В чём наши ",(0,s.jsx)("mark",{children:"преимущества"})]}),(0,s.jsxs)("div",{className:v().strong_item,children:[(0,s.jsxs)("div",{className:v().title,children:[(0,s.jsx)("span",{children:"01"}),(0,s.jsx)("span",{children:"Высокие страховые суммы по программам"})]}),(0,s.jsx)("p",{children:"Поликлиника — 2 млн руб., экстренная стационарная помощь — 3 млн руб., стоматология — 1 млн руб."})]}),(0,s.jsxs)("div",{className:v().strong_item,children:[(0,s.jsxs)("div",{className:v().title,children:[(0,s.jsx)("span",{children:"02"}),(0,s.jsx)("span",{children:"Жителям Москвы доступен выбор сети клиник"})]}),(0,s.jsxs)("p",{children:["\xabАВС-Медицина\xbb, \xabОн-Клиник\xbb и \xabОн-Клиник Бейби\xbb, \xabБудь Здоров\xbb, \xabПоликлиника.ру\xbb,",(0,s.jsx)("br",{})," АО \xabМедицина\xbb."]})]}),(0,s.jsxs)("div",{className:v().strong_item,children:[(0,s.jsxs)("div",{className:v().title,children:[(0,s.jsx)("span",{children:"03"}),(0,s.jsx)("span",{children:"Возможность выбора дополнительных опций"})]}),(0,s.jsxs)("p",{children:["Экстренная скорая и стационарная помощь,",(0,s.jsx)("br",{})," стоматология, аптека."]})]})]})}),A=i(65843),w=i(51016),j=t=>{let{data:e}=t;return(0,r.useEffect)(()=>{},[]),(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(b,{}),(0,s.jsx)(g.Z,{height:147,title:"Кэшбэк 20% за страхование ипотеки",text:"Получите до 4000 рублей на карту"}),(0,s.jsx)(m.default,{isTitle:!0,data:e.sliderItems}),(0,s.jsx)(f.default,{}),(0,s.jsx)(x.Z,{title:"Как оформить полис ",sub:"для ипотеки онлайн",items:e.worksData}),(0,s.jsx)(p,{}),(0,s.jsx)(A.default,{}),(0,s.jsx)(w.default,{sub:"об ипотечном страховании",title:"Отзывы "})]})}},58690:function(t){t.exports={inp:"CustomCheckboxAround_inp__bZuoU"}},25648:function(t){t.exports={years:"CustomInputTitle_years__Ij3IS"}},10288:function(t){t.exports={cont:"CustomInput_cont__8XN_N",inp:"CustomInput_inp__pFaxM"}},19386:function(t){t.exports={years:"CustomWhiteSelectTitle_years__cRVe0"}},26884:function(t){t.exports={search:"Search_search__1H_QS",drop_down:"Search_drop_down__wZQha",drop_item:"Search_drop_item__U_kqf"}},12655:function(t){t.exports={item:"BankImgItemSlide_item__QUv5K"}},4769:function(t){t.exports={bonus:"Bonus_bonus__9qDkX",logo:"Bonus_logo__wV_UX",info:"Bonus_info__OOsSH",title:"Bonus_title__kciNI"}},96186:function(t){t.exports={slider:"SliderBanksCons_slider__cOOgq",arr:"SliderBanksCons_arr___cH0v"}},28814:function(t){t.exports={wrapper:"InsuranceCompanys_wrapper__mcZ40",title:"InsuranceCompanys_title__47pXs"}},26702:function(t){t.exports={intro:"IntroInsuranceMort_intro__ul2rE",info_cont:"IntroInsuranceMort_info_cont__FVgg2",breadCrumbs:"IntroInsuranceMort_breadCrumbs__0ZcFl",title:"IntroInsuranceMort_title___12US",sub:"IntroInsuranceMort_sub___KDiv",ch_cont:"IntroInsuranceMort_ch_cont__9Du5n",infoCont:"IntroInsuranceMort_infoCont__XTm7o",l:"IntroInsuranceMort_l__Q_cE8",cont_checks:"IntroInsuranceMort_cont_checks__MRXMU",check:"IntroInsuranceMort_check__ysU9P",inps_cont:"IntroInsuranceMort_inps_cont__WVFnd",right:"IntroInsuranceMort_right__eZzRv",name:"IntroInsuranceMort_name__K21u7",btn:"IntroInsuranceMort_btn___bLaY",inp:"IntroInsuranceMort_inp__Sz8Xi"}},79189:function(t){t.exports={our_strongs:"OurStrongsMort_our_strongs__zcxDQ",info:"OurStrongsMort_info__Pth4g",title:"OurStrongsMort_title__Bc3BJ",strong_item:"OurStrongsMort_strong_item__A7MUW"}},92303:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Banknote_icon.5db55095.svg",height:40,width:40,blurWidth:0,blurHeight:0}},27738:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Buildings.0f5814b3.svg",height:40,width:41,blurWidth:0,blurHeight:0}},75563:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Card Send.07458e5b.svg",height:40,width:41,blurWidth:0,blurHeight:0}},10320:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Clipboard_Check_icon.075b761c.svg",height:40,width:40,blurWidth:0,blurHeight:0}},49533:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Famyle.af537208.svg",height:40,width:41,blurWidth:0,blurHeight:0}},85111:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Flame_icon.c586b480.svg",height:40,width:40,blurWidth:0,blurHeight:0}},30332:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Globus.76170f66.svg",height:40,width:41,blurWidth:0,blurHeight:0}},24567:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Hearts.bfb7b5cb.svg",height:40,width:40,blurWidth:0,blurHeight:0}},95113:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Laptop.8cb181f7.svg",height:40,width:40,blurWidth:0,blurHeight:0}},17226:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Restart_icon.fbcf1478.svg",height:40,width:40,blurWidth:0,blurHeight:0}},60718:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Rocket.e679fd50.svg",height:40,width:40,blurWidth:0,blurHeight:0}},52987:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Sale Square.9404ed5a.svg",height:40,width:41,blurWidth:0,blurHeight:0}},76310:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Sale.a6267f3f.svg",height:40,width:41,blurWidth:0,blurHeight:0}},72411:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Scooter.9d81ea57.svg",height:40,width:41,blurWidth:0,blurHeight:0}},68343:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Shield_protect.56df0b26.svg",height:40,width:40,blurWidth:0,blurHeight:0}},8364:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Smartphone_Rotate_Angle.e1d69636.svg",height:40,width:40,blurWidth:0,blurHeight:0}},24904:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Target.46ede00d.svg",height:40,width:40,blurWidth:0,blurHeight:0}},58220:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Verified Check.5fa95515.svg",height:40,width:40,blurWidth:0,blurHeight:0}},19403:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Wheel_Angle_icon.0bc9e5a8.svg",height:40,width:40,blurWidth:0,blurHeight:0}},84189:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/sbi_big.28324e02.png",height:102,width:161,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAqElEQVR42mOAgf9hRmr/LSUt/gdFcoP4e+WVGMESP3onyp4p623cltdbfamwvf9TeaU9WMP//4zr1q1jYtjXsVQ5uGjxLrP8RVcYClfVzF8813Pp0qVTFixcWLRgwQIfhq1HTsqv37Q7esOGXeE7t+122bN7l/vWrVuDt23bFrhjxw5lhgtnToucOHZI/+ihvRr79u7W3rdvn9bBgwcV9u/fr3Xo0CEeAFgrTdHUMUBDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},89955:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/3-line.66a6819d.svg",height:24,width:24,blurWidth:0,blurHeight:0}},63284:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Ruble.1e400b2a.svg",height:24,width:24,blurWidth:0,blurHeight:0}},42145:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/bars.3775e410.svg",height:36,width:57,blurWidth:0,blurHeight:0}},75711:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/c.ce96f902.svg",height:50,width:50,blurWidth:0,blurHeight:0}},85644:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/dom.6db0d600.svg",height:49,width:122,blurWidth:0,blurHeight:0}},4844:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/ekspo.e9b3c928.svg",height:50,width:115,blurWidth:0,blurHeight:0}},10122:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/europe.3f2050b9.svg",height:49,width:122,blurWidth:0,blurHeight:0}},31914:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/ifk_solid.ed7aa7eb.svg",height:60,width:61,blurWidth:0,blurHeight:0}},47253:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/loco.9665dab2.svg",height:50,width:50,blurWidth:0,blurHeight:0}},96719:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/norvik.14bd8b5e.svg",height:49,width:122,blurWidth:0,blurHeight:0}},64995:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/orange_bank.11d4195f.svg",height:49,width:50,blurWidth:0,blurHeight:0}},46117:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/orgs_1.15d7ae74.svg",height:60,width:61,blurWidth:0,blurHeight:0}},42548:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/orgs_2.ab00f738.svg",height:60,width:61,blurWidth:0,blurHeight:0}},38817:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/psb.461c5351.svg",height:50,width:115,blurWidth:0,blurHeight:0}},52437:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/sber.1774d382.svg",height:60,width:61,blurWidth:0,blurHeight:0}},28235:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/sber_text.2253d8b7.svg",height:50,width:115,blurWidth:0,blurHeight:0}},29977:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/spm.4904c4d5.svg",height:50,width:115,blurWidth:0,blurHeight:0}},62993:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/tinkoff_text.d9a3a2fd.svg",height:50,width:115,blurWidth:0,blurHeight:0}},57773:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/calendar.fdc0eb6c.svg",height:40,width:41,blurWidth:0,blurHeight:0}},44057:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/carta.622f4784.svg",height:40,width:41,blurWidth:0,blurHeight:0}},32567:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Banknote.79064006.svg",height:40,width:41,blurWidth:0,blurHeight:0}},50634:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Card Send.3db0f798.svg",height:40,width:41,blurWidth:0,blurHeight:0}},40741:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Clipboard Check.8cb684cd.svg",height:40,width:41,blurWidth:0,blurHeight:0}},41524:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Flame.34d2fde6.svg",height:40,width:41,blurWidth:0,blurHeight:0}},24521:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Smartphone.9f86b5bd.svg",height:40,width:41,blurWidth:0,blurHeight:0}},68966:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Star.36c6a1db.svg",height:40,width:41,blurWidth:0,blurHeight:0}},67268:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/WadOfMoney.dc04bbaa.svg",height:40,width:41,blurWidth:0,blurHeight:0}},65283:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Wallet Money.96b91987.svg",height:40,width:41,blurWidth:0,blurHeight:0}},83515:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/Wheel.c3dc8a22.svg",height:40,width:41,blurWidth:0,blurHeight:0}},41316:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/procent.670832ef.svg",height:40,width:41,blurWidth:0,blurHeight:0}},86907:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/protect.3ffbdfd2.svg",height:40,width:41,blurWidth:0,blurHeight:0}},97921:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/credit.a6f17223.svg",height:40,width:41,blurWidth:0,blurHeight:0}},97779:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/gasprom.542d6b60.svg",height:40,width:40,blurWidth:0,blurHeight:0}},61457:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/home_icon.7769e241.svg",height:40,width:40,blurWidth:0,blurHeight:0}},61926:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/invest.cb02ede6.svg",height:40,width:41,blurWidth:0,blurHeight:0}},18907:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/ipoteka.e4cd46a0.svg",height:40,width:41,blurWidth:0,blurHeight:0}},59985:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/offer_img1.49af31b0.png",height:165,width:279,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AOjf1O/m3Ofc0MWpmvXt4fbx6fDq4vTz7wDWy7zUybHFvqp0aUPHuKXlzLfa08Td2s8AraCMtKqRpaGMuLu4pJOGm25M1c3B1tLJAJN/ZLKfhZqKdqyqrIp+dq6hldC6peXUwACokna1oIaoln7TxLPJuKXWw63GrZHXvJrmoVVT2uTWPgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},40336:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/offer_img2.13156c20.png",height:165,width:279,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AKqfla2jmbiwpruyp6iekqKbkqmhmb22rgCEenJ7c2ufmJGcmJOloJ+Vkoujm5GxrKMAaFtWc2RgV0RAdnZ6qLTAbGBgd2dhi4J4AFxOSnpmX5uJfZWOjJ+eoH5zcFpKRlxNSABWSUFzZFysnpN5Z1mUioFmXFYuGxJgVEshIjvFCZ2engAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},26351:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/offer_img3.6c877365.png",height:165,width:279,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ANra2u3w8uvr6evq4sfIzpS2o+Ds9N/n8ADc3d7l4dzmxXvz4ZPUyqagm4Dn4c7a19gA3eHj2sGm7cdW9/Gx692ezplB27VRkoFpAN7h4tvIueW3RPbijOHJgseTPtq3XbuvowDd3dzY2dnJqoXhwXyzlna9kWHWunrOwbon/1pf1YpL6wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},88483:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/offer_img4.9e81e1a6.png",height:165,width:279,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AJSzx6e+zrTAzae6ysLR29vd4LTK2qbG2gCiw9W51OKmkJ2bnKvR4uzq6uvf5evI3OgAy93l2OnxusXMwMLG9fj58vLz8fP16PD0ANfe387Z4LK6wMbN0NHf5trl6+7x8uXs7wCKpbeanqCzqZyxqp/HxLrO0tLH2ObR3uhi8mB7pMfPqQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},11752:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/osago.7e263da4.svg",height:40,width:41,blurWidth:0,blurHeight:0}},86855:function(t,e){"use strict";e.Z={src:"/_next/static/media/search.bea25486.svg",height:24,width:24,blurWidth:0,blurHeight:0}},21653:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/sfk_icon_stock.ff990493.svg",height:61,width:60,blurWidth:0,blurHeight:0}},56533:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/template.bc9ef04d.svg",height:40,width:40,blurWidth:0,blurHeight:0}},6591:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/vklad.5d936e97.svg",height:40,width:41,blurWidth:0,blurHeight:0}},22835:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/w_1.fead6fb5.svg",height:24,width:24,blurWidth:0,blurHeight:0}},85917:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/w_2.c0914e8f.svg",height:24,width:24,blurWidth:0,blurHeight:0}},16069:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/w_3.eaeabb74.svg",height:24,width:24,blurWidth:0,blurHeight:0}},9989:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/w_4.31575c44.svg",height:24,width:24,blurWidth:0,blurHeight:0}},21955:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/wave.92f5afe0.svg",height:40,width:40,blurWidth:0,blurHeight:0}},57441:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/zaymi.5c005656.svg",height:40,width:41,blurWidth:0,blurHeight:0}},28481:function(t,e,i){"use strict";i.d(e,{x0:function(){return s}});let s=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((t,e)=>((e&=63)<36?t+=e.toString(36):e<62?t+=(e-26).toString(36).toUpperCase():e>62?t+="-":t+="_",t),"")}},function(t){t.O(0,[3222,5435,952,1238,8401,8821,2971,596,1744],function(){return t(t.s=99935)}),_N_E=t.O()}]);