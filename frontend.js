/* F_CURRICULUM — مسار الفرونت اند من منهج الزيرو (DOM/BOM/Events/Projects) */
const F_CURRICULUM = [
{
id:"f0", title:"المرحلة 0: مدخل الفرونت", desc:"إزاي جافاسكريبت بتشتغل جوّا المتصفح.",
lessons:[
{id:"f0l0", title:"إزاي JS بتشتغل في المتصفح؟ 🌱", elzero:"الزيرو #001 - #011 + What is DOM", level:"تأسيس",
html:`<p><b>يعني إيه فرونت؟</b> كل اللي المستخدم بيشوفه ويدوس عليه: الصفحة، الأزرار، الفورم، الألوان. المتصفح بيفهم 3 لغات: HTML للهيكل و CSS للشكل و JavaScript للحركة والتفاعل.</p><p><b>ليه JS في المتصفح؟</b> من غيرها الصفحة تمثال: مفيش زرار بيستجيب، مفيش تحقق من الفورم قبل الإرسال، مفيش تحديث من غير تحديث الصفحة. هي اللي بتحيي الصفحة.</p><p><b>الأدوات وامتى تستخدمها:</b></p><ul><li><b>Console (F12):</b> شاشة تجربة الأوامر — <b>امتى؟</b> تجربة أي سطر بسرعة قبل كتابته في الملف.</li><li><b>Elements:</b> فحص هيكل الصفحة — <b>امتى؟</b> لما عنصر ميظهرش أو شكله غريب.</li><li><b>script tag:</b> ربط الكود بالصفحة — <b>امتى؟</b> كل صفحة فيها تفاعل.</li></ul>`,
examples:[
{title:"مثال 1 (سهل): أول أمر في الكونسول", level:"سهل", runnable:true,
code:`console.log("أهلا من المتصفح 🎨");\nconsole.log(2 + 3); // الكونسول آلة حاسبة كمان`,
output:`أهلا من المتصفح 🎨\n5`},
{title:"مثال 2 (متوسط): تنبيه للمستخدم", level:"متوسط", runnable:true,
code:`// alert بتطلع نافذة للمستخدم — للتجربة فقط\nconsole.log("بدل alert استعمل console.log في التطوير");\nconsole.log("alert مزعجة للمستخدم الحقيقي");`,
output:`بدل alert استعمل console.log في التطوير\nalert مزعجة للمستخدم الحقيقي`},
{title:"مثال 3: أنواع رسائل الكونسول", level:"متوسط", runnable:true,
code:`console.log("معلومة عادية");\nconsole.warn("تحذير: حاجة غريبة");\nconsole.error("خطأ: حاجة باظت");\nconsole.table([{name: "Ali"}, {name: "Sara"}]);`,
output:`معلومة عادية\nتحذير: حاجة غريبة\nخطأ: حاجة باظت\n(جدول)`}
],
exercise:"افتح أي موقع ودوس F12 واكتب في الكونسول: اسمك + عمرك بعد 5 سنين (عمرك + 5).",
quiz:{q:"عايز تجرب سطر JS بسرعة من غير ملف؟", options:["الكونسول (F12)","الفوتوشوب","الإعدادات","سلة المحذوفات"], answer:0}
},
{id:"f0l1", title:"ربط الملفات + أول تفاعل", elzero:"الزيرو ربط JS + أول تفاعل", level:"تأسيس",
html:`<p><b>يعني إيه ربط؟</b> ملف <code>app.js</code> منفصل يتربط بالصفحة بوسم <code>script</code> قبل قفلة <code>body</code> عشان عناصر الصفحة تكون اتبنت قبله.</p><p><b>ليه ملف خارجي؟</b> عشان نفس الكود يشتغل في صفحات كتير، والكاش يحفظه، والتنظيم يبقى أسهل من الكتابة جوّا كل صفحة.</p><p><b>القواعد وامتى:</b></p><ul><li><b>script آخر body:</b> الوضع الافتراضي — <b>امتى؟</b> دايما إلا لو عندك سبب.</li><li><b>defer:</b> حمّل بالتوازي ونفذ بعد البناء — <b>امتى؟</b> سكريبت في الـ head.</li><li><b>زرار + فانكشن:</b> أبسط تفاعل — <b>امتى؟</b> أول تجربة لأي فكرة.</li></ul>`,
stageHtml: `<button id="hiBtn">دوس عليا 👋</button> <span id="hiOut"></span>`,
examples:[
{title:"مثال 1 (سهل): الزرار بيرد عليك", level:"سهل", runnable:true,
code:`stage.querySelector("#hiBtn").onclick = () => {\n  stage.querySelector("#hiOut").textContent = "أهلا بيك 🎉";\n};\nconsole.log("دوس الزرار اللي فوق 👆");`,
output:`دوس الزرار اللي فوق 👆`},
{title:"مثال 2 (متوسط): عدّاد دوسات", level:"متوسط", runnable:true,
code:`let n = 0;\nstage.querySelector("#hiBtn").onclick = () => {\n  n++;\n  stage.querySelector("#hiOut").textContent = "دست " + n + " مرات";\n};\nconsole.log("عداد جاهز — دوس كذا مرة");`,
output:`عداد جاهز — دوس كذا مرة`},
{title:"مثال 3: تغيير النص مباشرة", level:"متوسط", runnable:true,
code:`stage.querySelector("#hiOut").textContent = "اتغيرت من الكود ✅";\nconsole.log("غيرنا الصفحة من غير ما نلمس HTML");`,
output:`غيرنا الصفحة من غير ما نلمس HTML`}
],
exercise:"اعمل صفحة فيها زرار كل دوسة يزود رقم معروض (عدّاد).",
quiz:{q:"وسم script يتحط فين غالبا؟", options:["أول head","آخر body قبل القفلة","جوّا CSS","في الداتابيز"], answer:1}
}
]}
,
{
id:"f1", title:"المرحلة 1: DOM الأساس", desc:"تمسك عناصر الصفحة وتتحكم فيها.",
lessons:[
{id:"f1l0", title:"اختيار العناصر (أهم درس)", elzero:"الزيرو What Is DOM + Select Elements", level:"مهم جدا",
html:`<p><b>يعني إيه DOM؟</b> نسخة حية من الصفحة على شكل شجرة كائنات يقدر الكود يمسكها ويعدلها. كل وسم بقى كائن له خصائص ودوال.</p><p><b>ليه؟</b> من غير اختيار مفيش تفاعل: عايز تغير نص؟ تمسكه الأول. تخفي عنصر؟ تمسكه الأول. كل حاجة تبدأ بالاختيار.</p><p><b>كل طريقة وامتى تستخدمها:</b></p><ul><li><b>getElementById:</b> عنصر واحد له id — <b>امتى؟</b> العناصر المميزة (فورم، زرار رئيسي) وهي الأسرع.</li><li><b>querySelector:</b> أول عنصر يطابق CSS selector — <b>امتى؟</b> 90% من شغلك: أي اختيار معقد (<code>.list li</code>).</li><li><b>querySelectorAll:</b> كل المطابقين — <b>امتى؟</b> اللف على مجموعة (كل الأزرار).</li><li><b>getElementsByClassName:</b> الطريقة القديمة — <b>امتى؟</b> تقرأها في أكواد قديمة فقط.</li></ul>`,
stageHtml: `<p id="p1">فقرة بالـ id</p><p class="c">فقرة بالكلاس 1</p><p class="c">فقرة بالكلاس 2</p>`,
examples:[
{title:"مثال 1 (سهل): امسك بالـ id", level:"سهل", runnable:true,
code:`const p = stage.querySelector("#p1");\nconsole.log(p.textContent);`,
output:`فقرة بالـ id`},
{title:"مثال 2 (متوسط): امسك الكل", level:"متوسط", runnable:true,
code:`const all = stage.querySelectorAll(".c");\nconsole.log("عددهم:", all.length);\nall.forEach(el => console.log(el.textContent));`,
output:`عددهم: 2\nفقرة بالكلاس 1\nفقرة بالكلاس 2`},
{title:"مثال 3 (صعب): اختيار مركب", level:"صعب", runnable:true,
code:`// أول فقرة جوّا المسرح فقط (نطاق محدد!)\nconst first = stage.querySelector("p");\nconsole.log("أول فقرة:", first.textContent);`,
output:`أول فقرة: فقرة بالـ id`,
note:"تحديد النطاق (stage.) يحميك من التأثير على باقي الصفحة."}
],
exercise:"اعمل صفحة فيها 3 فقرات بنفس الكلاس، وامسكهم كلهم واطبع عددهم.",
quiz:{q:"عايز كل العناصر اللي كلاسها item؟", options:["querySelector('.item')","querySelectorAll('.item')","getElementById('item')","find('.item')"], answer:1}
},
{id:"f1l1", title:"المحتوى والكلاسات والخصائص", elzero:"الزيرو DOM Elements + ClassList", level:"مهم جدا",
html:`<p><b>يعني إيه؟</b> بعد ما تمسك العنصر تقدر: تغير نصه، تغير شكله (كلاسات CSS)، تقرا وتغير خصائصه (رابط صورة، قيمة input).</p><p><b>ليه؟</b> التفاعل كله = تغيير. رسالة نجاح تظهر، زرار يتقفل، صورة تتبدل، حقل يتملي — كلها تعديلات على عناصر ممسوكة.</p><p><b>كل أداة وامتى تستخدمها:</b></p><ul><li><b>textContent:</b> النص فقط (آمن) — <b>امتى؟</b> أي نص من المستخدم أو رسائل.</li><li><b>innerHTML:</b> نص + وسوم — <b>امتى؟</b> بناء عناصر جاهزة من عندك فقط (مش من المستخدم).</li><li><b>classList (add/remove/toggle):</b> التحكم في الشكل — <b>امتى؟</b> إظهار/إخفاء وتمييز (الأنضف من تعديل style مباشرة).</li><li><b>get/setAttribute + value:</b> الخصائص والقيم — <b>امتى؟</b> قراءة مدخلات الفورم وتعديل الروابط والصور.</li></ul>`,
stageHtml: `<div id="card">بطاقة عادية</div><input id="nameIn" placeholder="اكتب اسمك"> <button id="showBtn">اعرض</button>`,
examples:[
{title:"مثال 1 (سهل): غيّر النص", level:"سهل", runnable:true,
code:`stage.querySelector("#card").textContent = "اتغيرت ✅";\nconsole.log("النص الجديد:", stage.querySelector("#card").textContent);`,
output:`النص الجديد: اتغيرت ✅`},
{title:"مثال 2 (متوسط): بدّل الشكل بالكلاس", level:"متوسط", runnable:true,
code:`const card = stage.querySelector("#card");\ncard.style.background = "#22c55e33";\ncard.style.padding = "10px";\ncard.style.borderRadius = "8px";\nconsole.log("لوّناها من الكود 🎨");`,
output:`لوّناها من الكود 🎨`},
{title:"مثال 3 (صعب): اقرا input واعرضه", level:"صعب", runnable:true,
code:`stage.querySelector("#showBtn").onclick = () => {\n  const v = stage.querySelector("#nameIn").value.trim();\n  stage.querySelector("#card").textContent = v ? "أهلا " + v : "اكتب اسمك الأول";\n};\nconsole.log("اكتب اسمك ودوس اعرض");`,
output:`اكتب اسمك ودوس اعرض`}
],
exercise:"اعمل input وزرار: الزرار يعرض اللي اتكتب في div، ولو فاضي يعرض تحذير.",
quiz:{q:"عايز تعرض نص جاي من المستخدم بأمان؟", options:["innerHTML","textContent","eval","document.write"], answer:1}
},
{id:"f1l2", title:"إنشاء وحذف عناصر + التنقل", elzero:"الزيرو Create/Remove + Traversing", level:"مهم",
html:`<p><b>يعني إيه؟</b> تبني عناصر جديدة من الكود (عنصر قائمة لكل منتج)، تمسح عناصر (حذف مهمة)، وتتنقل بين القرايب (الأب، الأبناء، الإخوات).</p><p><b>ليه؟</b> الصفحات الحية بتتبني ديناميكيا: نتائج بحث، تعليقات، مهام — عددها مجهول فمينفعش تتكتب في HTML ثابت.</p><p><b>كل أداة وامتى تستخدمها:</b></p><ul><li><b>createElement + append:</b> بناء وإضافة — <b>امتى؟</b> عناصر بعدد مجهول (نتائج، مهام).</li><li><b>remove:</b> حذف عنصر — <b>امتى؟</b> زرار حذف بيمسح عنصره نفسه.</li><li><b>parentElement / children:</b> التنقل — <b>امتى؟</b> من الزرار توصل للبطاقة اللي شايلاه.</li><li><b>closest:</b> أقرب أب يطابق شرط — <b>امتى؟</b> الأنضف للوصول للحاوية من أي زرار جواها.</li></ul>`,
stageHtml: `<ul id="list"><li>عنصر 1</li></ul><button id="addBtn">+ ضيف عنصر</button>`,
examples:[
{title:"مثال 1 (سهل): ضيف عنصر", level:"سهل", runnable:true,
code:`stage.querySelector("#addBtn").onclick = () => {\n  const li = document.createElement("li");\n  li.textContent = "عنصر جديد ✨";\n  stage.querySelector("#list").append(li);\n};\nconsole.log("دوس + ضيف عنصر كذا مرة");`,
output:`دوس + ضيف عنصر كذا مرة`},
{title:"مثال 2 (متوسط): احذف بالضغط", level:"متوسط", runnable:true,
code:`stage.querySelectorAll("#list li").forEach(li => {\n  li.onclick = () => li.remove();\n};\nconsole.log("دوس على أي عنصر يتمسح 🗑️");`,
output:`دوس على أي عنصر يتمسح 🗑️`},
{title:"مثال 3 (صعب): عدّ العناصر", level:"صعب", runnable:true,
code:`const count = stage.querySelector("#list").children.length;\nconsole.log("عدد العناصر حاليا:", count);`,
output:`عدد العناصر حاليا: 1`}
],
exercise:"اعمل قائمة: input + زرار إضافة، وكل عنصر جديد لما تدوس عليه يتمسح.",
quiz:{q:"عايز تبني عنصر جديد من الكود؟", options:["document.createElement","document.write","new HTML()","make()"], answer:0}
}
]}
,
{
id:"f2", title:"المرحلة 2: الأحداث والنماذج", desc:"التفاعل الحقيقي مع المستخدم.",
lessons:[
{id:"f2l0", title:"الأحداث (روح الصفحة)", elzero:"الزيرو DOM Events", level:"مهم جدا",
html:`<p><b>يعني إيه حدث؟</b> حاجة حصلت: دوسة، كتابة، تحريك ماوس، تحميل صفحة. وانت بتقول: لما يحصل كذا نفذ كذا.</p><p><b>ليه؟</b> من غير أحداث الصفحة صماء. كل تفاعل = حدث + مستمع + رد فعل.</p><p><b>كل حدث وامتى تستخدمه:</b></p><ul><li><b>click:</b> الدوس — <b>امتى؟</b> الأزرار (90% من التفاعل).</li><li><b>input:</b> كل حرف يتكتب — <b>امتى؟</b> البحث اللحظي وعدّ الحروف.</li><li><b>submit:</b> إرسال فورم — <b>امتى؟</b> تسجيل الدخول والتسجيل (مع منع التحديث).</li><li><b>addEventListener:</b> التركيب الحديث — <b>امتى؟</b> دايما بدل onclick (بتسمح بأكتر من مستمع).</li></ul>`,
stageHtml: `<input id="live" placeholder="اكتب هنا..."><p>عدد الحروف: <b id="cnt">0</b></p>`,
examples:[
{title:"مثال 1 (سهل): عدّاد حروف لحظي", level:"سهل", runnable:true,
code:`stage.querySelector("#live").addEventListener("input", (e) => {\n  stage.querySelector("#cnt").textContent = e.target.value.length;\n});\nconsole.log("اكتب في المربع وشوف العداد");`,
output:`اكتب في المربع وشوف العداد`},
{title:"مثال 2 (متوسط): Enter يرحب بيك", level:"متوسط", runnable:true,
code:`stage.querySelector("#live").addEventListener("keydown", (e) => {\n  if (e.key === "Enter") console.log("أهلا " + e.target.value + " 🎉");\n});\nconsole.log("اكتب اسمك ودوس Enter");`,
output:`اكتب اسمك ودوس Enter`},
{title:"مثال 3: أكتر من مستمع", level:"متوسط", runnable:true,
code:`const inp = stage.querySelector("#live");\ninp.addEventListener("focus", () => console.log("دخلت المربع 👀"));\ninp.addEventListener("blur", () => console.log("خرجت من المربع 👋"));\nconsole.log("دوس جوّا المربع وبرّاه");`,
output:`دوس جوّا المربع وبرّاه`}
],
exercise:"اعمل مربع بحث: كل حرف يتكتب يطبع اللي اتكتب في الكونسول.",
quiz:{q:"عايز تنفذ كود مع كل حرف يتكتب؟", options:["click","input","load","submit"], answer:1}
},
{id:"f2l1", title:"الفورم والتحقق في المتصفح", elzero:"الزيرو Form Validation", level:"مهم",
html:`<p><b>يعني إيه تحقق؟</b> فحص المدخلات قبل الإرسال: الايميل شكله صح؟ الباسورد طويل كفاية؟ الحقل الفاضي مرفوض؟</p><p><b>ليه في الفرونت؟</b> لرد فوري من غير انتظار السيرفر (تجربة أحسن). ومهم: ده تحسين تجربة فقط — الباك لازم يتحقق تاني لأن كود المتصفح مكشوف.</p><p><b>الأدوات وامتى تستخدمها:</b></p><ul><li><b>required / type=email:</b> تحقق HTML جاهز — <b>امتى؟</b> دايما كأول خط دفاع.</li><li><b>preventDefault:</b> منع تحديث الصفحة — <b>امتى؟</b> أي submit هتعالجه بـ JS.</li><li><b>فحص JS يدوي:</b> الطول والشكل — <b>امتى؟</b> رسائل خطأ مخصصة تحت كل حقل.</li></ul>`,
stageHtml: `<form id="f"><input id="em" placeholder="الايميل"><button>سجّل</button></form><p id="msg"></p>`,
examples:[
{title:"مثال 1 (سهل): امنع التحديث", level:"سهل", runnable:true,
code:`stage.querySelector("#f").addEventListener("submit", (e) => {\n  e.preventDefault();\n  stage.querySelector("#msg").textContent = "اتمسكت! الصفحة متحدثتش ✅";\n});\nconsole.log("دوس سجّل — الصفحة مش هتتحدث");`,
output:`دوس سجّل — الصفحة مش هتتحدث`},
{title:"مثال 2 (متوسط): تحقق ايميل", level:"متوسط", runnable:true,
code:`stage.querySelector("#f").addEventListener("submit", (e) => {\n  e.preventDefault();\n  const v = stage.querySelector("#em").value.trim();\n  stage.querySelector("#msg").textContent = v.includes("@") ? "ايميل تمام ✅" : "ايميل غلط ❌";\n});\nconsole.log("جرّب ايميل صح وغلط");`,
output:`جرّب ايميل صح وغلط`},
{title:"مثال 3 (صعب): تلوين الخطأ", level:"صعب", runnable:true,
code:`stage.querySelector("#f").addEventListener("submit", (e) => {\n  e.preventDefault();\n  const inp = stage.querySelector("#em");\n  const ok = inp.value.includes("@");\n  inp.style.border = ok ? "2px solid green" : "2px solid red";\n});\nconsole.log("الحدود هتلون حسب الصحة");`,
output:`الحدود هتلون حسب الصحة`}
],
exercise:"اعمل فورم تسجيل: اسم (3 حروف على الأقل) + ايميل (فيه @)، ورسالة خطأ تحت كل حقل غلط.",
quiz:{q:"ليه بنمنع التحديث في submit؟", options:["عشان نعالج الفورم بـ JS من غير ما الصفحة تضيع","عشان السرعة فقط","ممنوع دايما","عشان الشكل"], answer:0}
},
{id:"f2l2", title:"التخزين + تطبيق مهام ToDo", elzero:"الزيرو localStorage + ToDo App", level:"مشروع مصغر",
html:`<p><b>يعني إيه localStorage؟</b> مخزن صغير جوّا المتصفح بيحفظ نصوص حتى بعد قفل الصفحة. مناسب للتفضيلات والمهام والسلة المؤقتة.</p><p><b>ليه؟</b> عشان المستخدم يلاقي حاجته زي ما سابها: مهامه محفوظة، والوضع الليلي فاكره، من غير سيرفر ولا حساب.</p><p><b>الأدوات وامتى تستخدمها:</b></p><ul><li><b>setItem / getItem:</b> حفظ وقراءة نص — <b>امتى؟</b> أي بيانات بسيطة دائمة.</li><li><b>JSON.stringify / parse:</b> تخزين المصفوفات والكائنات — <b>امتى؟</b> لازم لأن المخزن نصوص فقط.</li><li><b>removeItem:</b> مسح مفتاح — <b>امتى؟</b> تسجيل الخروج ومسح البيانات.</li></ul>`,
stageHtml: `<input id="t" placeholder="مهمة جديدة"><button id="addT">ضيف</button><ul id="todos"></ul>`,
examples:[
{title:"مثال 1 (سهل): احفظ واقرا", level:"سهل", runnable:true,
code:`localStorage.setItem("myName", "أحمد");\nconsole.log("المحفوظ:", localStorage.getItem("myName"));\nconsole.log("اقفل الصفحة وافتحها — لسه موجود ✅");`,
output:`المحفوظ: أحمد\nاقفل الصفحة وافتحها — لسه موجود ✅`},
{title:"مثال 2 (متوسط): مصفوفة مهام", level:"متوسط", runnable:true,
code:`const tasks = ["مذاكرة", "رياضة"];\nlocalStorage.setItem("tasks", JSON.stringify(tasks));\nconst back = JSON.parse(localStorage.getItem("tasks"));\nconsole.log("رجعت:", back.length, "مهام");`,
output:`رجعت: 2 مهام`},
{title:"مثال 3 (مشروع): ToDo كاملة", level:"مشروع", runnable:true,
code:`const list = stage.querySelector("#todos");\nlet todos = JSON.parse(localStorage.getItem("todos") || "[]");\nfunction render() {\n  list.innerHTML = "";\n  todos.forEach((t, i) => {\n    const li = document.createElement("li");\n    li.textContent = t + " ✖";\n    li.onclick = () => { todos.splice(i, 1); save(); render(); };\n    list.append(li);\n  });\n}\nfunction save() { localStorage.setItem("todos", JSON.stringify(todos)); }\nstage.querySelector("#addT").onclick = () => {\n  const v = stage.querySelector("#t").value.trim();\n  if (v) { todos.push(v); stage.querySelector("#t").value = ""; save(); render(); }\n};\nrender();\nconsole.log("✅ تطبيق مهام كامل: ضيف ودوس على المهمة تمسحها");`,
output:`✅ تطبيق مهام كامل: ضيف ودوس على المهمة تمسحها`}
],
exercise:"ضيف للـ ToDo زرار (مسح الكل) يفضي القائمة والمخزن.",
quiz:{q:"عايز تخزن مصفوفة في localStorage؟", options:["مباشرة","JSON.stringify ثم parse عند القراءة","مستحيل","في CSS"], answer:1}
}
]}
,
{
id:"f3", title:"المرحلة 3: المتصفح والشبكة", desc:"مؤقتات و BOM وجلب البيانات.",
lessons:[
{id:"f3l0", title:"المؤقتات + ساعة حية", elzero:"الزيرو setTimeout / setInterval", level:"مهم",
html:`<p><b>يعني إيه مؤقت؟</b> تنفيذ كود بعد مدة (مرة واحدة) أو تكراره كل مدة (ساعة، سلايدر تلقائي، عد تنازلي).</p><p><b>ليه؟</b> حاجات كتير وقتية: رسالة تختفي بعد ثانيتين، ساعة حية، تحديث تلقائي.</p><p><b>كل واحد وامتى تستخدمه:</b></p><ul><li><b>setTimeout:</b> مرة واحدة بعد مدة — <b>امتى؟</b> إخفاء رسالة، تأخير بسيط.</li><li><b>setInterval:</b> تكرار كل مدة — <b>امتى؟</b> الساعات والعدادات والتحديث الدوري.</li><li><b>clearInterval:</b> إيقاف التكرار — <b>امتى؟</b> لازم مع كل مؤقت له نهاية (عد تنازلي).</li></ul>`,
stageHtml: `<h2 id="clock">--:--:--</h2>`,
examples:[
{title:"مثال 1 (سهل): رسالة متأخرة", level:"سهل", runnable:true,
code:`console.log("استنى ثانيتين...");\nsetTimeout(() => console.log("وصلت بعد ثانيتين ⏰"), 2000);`,
output:`استنى ثانيتين...\nوصلت بعد ثانيتين ⏰`},
{title:"مثال 2 (متوسط): ساعة حية", level:"متوسط", runnable:true,
code:`setInterval(() => {\n  stage.querySelector("#clock").textContent = new Date().toLocaleTimeString("ar-EG");\n}, 1000);\nconsole.log("الساعة شغالة فوق 👆");`,
output:`الساعة شغالة فوق 👆`},
{title:"مثال 3 (صعب): عد تنازلي ويقف", level:"صعب", runnable:true,
code:`let s = 5;\nconst timer = setInterval(() => {\n  console.log(s);\n  s--;\n  if (s < 0) { clearInterval(timer); console.log("خلص 🎉"); }\n}, 500);`,
output:`5\n4\n3\n2\n1\n0\nخلص 🎉`}
],
exercise:"اعمل عد تنازلي من 10 لعرض منتج (ينتهي بجملة انتهى العرض).",
quiz:{q:"عايز كود يتكرر كل ثانية؟", options:["setTimeout","setInterval","clearInterval","delay"], answer:1}
},
{id:"f3l1", title:"BOM: المتصفح نفسه", elzero:"الزيرو BOM (window/location/navigator)", level:"مهم",
html:`<p><b>يعني إيه BOM؟</b> كائنات المتصفح نفسه (مش الصفحة): النافذة، الرابط الحالي، معلومات الجهاز. لو DOM للصفحة فـ BOM للمتصفح.</p><p><b>ليه؟</b> التنقل بين الصفحات، معرفة حالة الاتصال والشاشة، والتعامل مع الرابط (مشاركة، رجوع).</p><p><b>كل كائن وامتى تستخدمه:</b></p><ul><li><b>location:</b> الرابط الحالي — <b>امتى؟</b> التنقل (<code>href</code>) وقراءة الصفحة الحالية.</li><li><b>history:</b> سجل التنقل — <b>امتى؟</b> زرار رجوع مخصص (<code>back()</code>).</li><li><b>navigator:</b> معلومات الجهاز — <b>امتى؟</b> حالة الاتصال (<code>onLine</code>) واللغة.</li><li><b>window:</b> النافذة نفسها — <b>امتى؟</b> الأبعاد وفتح نوافذ.</li></ul>`,
examples:[
{title:"مثال 1 (سهل): معلومات الصفحة", level:"سهل", runnable:true,
code:`console.log("الرابط:", location.href);\nconsole.log("متصل بالنت؟", navigator.onLine);\nconsole.log("اللغة:", navigator.language);`,
output:`الرابط: ... (رابط الصفحة الحالية)\nمتصل بالنت؟ true\nاللغة: ar`},
{title:"مثال 2 (متوسط): أبعاد الشاشة", level:"متوسط", runnable:true,
code:`console.log("عرض النافذة:", window.innerWidth);\nconsole.log("موبايل؟", window.innerWidth < 768);`,
output:`عرض النافذة: ...\nموبايل؟ ...`},
{title:"مثال 3: تنقل برمجي (لا تشغله)", level:"متوسط", runnable:false,
code:`// location.href = "https://google.com"; // ينقلك لصفحة تانية\n// history.back(); // زرار رجوع\nconsole.log("أوامر التنقل — شيل التعليق وجرب بنفسك");`,
output:`أوامر التنقل`}
],
exercise:"اعمل زرار (شارك) يطبع رابط الصفحة الحالية، وزرار (رجوع) يرجع للصفحة اللي فاتت.",
quiz:{q:"عايز تعرف المستخدم متصل بالنت ولا لأ؟", options:["navigator.onLine","window.color","location.name","document.net"], answer:0}
},
{id:"f3l2", title:"جلب البيانات fetch وعرضها", elzero:"الزيرو Fetch API", level:"مهم جدا",
html:`<p><b>يعني إيه fetch؟</b> طلب يبعته المتصفح للسيرفر (API) ويرجعله داتا JSON من غير تحديث الصفحة. دي اللي بتملى المتاجر والفيسبوك بالمحتوى.</p><p><b>ليه؟</b> الصفحة الثابتة مملة: الأخبار والمنتجات والتعليقات كلها داتا جاية من سيرفر لحظة بلحظة.</p><p><b>الخطوات وامتى:</b></p><ul><li><b>fetch(url):</b> ابعت الطلب — <b>امتى؟</b> أول تحميل القائمة أو مع كل بحث.</li><li><b>.json():</b> حوّل الرد لكائن — <b>امتى؟</b> دايما بعد fetch (الرد خام أولا).</li><li><b>عرض + catch:</b> ارسم وحالة الخطأ — <b>امتى؟</b> رسالة تحميل أثناء الانتظار ورسالة خطأ عند الفشل.</li></ul>`,
stageHtml: `<button id="loadBtn">حمّل يوزر من API حقيقي</button><div id="userCard"></div>`,
examples:[
{title:"مثال 1 (سهل): أول fetch", level:"سهل", runnable:true,
code:`fetch("https://jsonplaceholder.typicode.com/users/1")\n  .then(r => r.json())\n  .then(u => console.log("وصل:", u.name, "-", u.email))\n  .catch(() => console.log("مفيش نت ❌"));\nconsole.log("الطلب اتبعت... مستني الرد");`,
output:`الطلب اتبعت... مستني الرد\nوصل: Leanne Graham - ...`},
{title:"مثال 2 (متوسط): عرض في الصفحة", level:"متوسط", runnable:true,
code:`stage.querySelector("#loadBtn").onclick = () => {\n  stage.querySelector("#userCard").textContent = "بيحمّل... ⏳";\n  fetch("https://jsonplaceholder.typicode.com/users/1")\n    .then(r => r.json())\n    .then(u => { stage.querySelector("#userCard").textContent = u.name + " | " + u.email; })\n    .catch(() => { stage.querySelector("#userCard").textContent = "فشل التحميل ❌"; });\n};\nconsole.log("دوس الزرار 👆 (محتاج نت)");`,
output:`دوس الزرار 👆 (محتاج نت)`},
{title:"مثال 3 (صعب): async/await", level:"صعب", runnable:true,
code:`async function getUser(id) {\n  try {\n    const r = await fetch("https://jsonplaceholder.typicode.com/users/" + id);\n    const u = await r.json();\n    console.log("async:", u.name);\n  } catch { console.log("فشل ❌"); }\n}\ngetUser(2);`,
output:`async: Ervin Howell`,
note:"نفس async اللي في الباك — اللغة واحدة والفرق السياق فقط."}
],
exercise:"اعرض أول 5 بوستات (title فقط) من نفس الـ API في قائمة.",
quiz:{q:"بعد fetch لازم تعمل إيه قبل استعمال الداتا؟", options:["r.json() للتحويل","تحدث الصفحة","تحفظ في CSS","لا شيء"], answer:0}
}
]}
,
{
id:"f4", title:"المرحلة 4: مشاريع فرونت", desc:"طبّق كل حاجة في مشاريع حقيقية.",
lessons:[
{id:"f4l0", title:"مشروع سلايدر صور", elzero:"الزيرو Slider Project", level:"مشروع",
html:`<p><b>يعني إيه سلايدر؟</b> عارض صور بقلب (التالي/السابق) ونقط تنقل وتبديل تلقائي — موجود في كل متجر وموقع.</p><p><b>ليه كأول مشروع؟</b> لأنه يجمع: اختيار عناصر + أحداث + مؤقت + تبديل كلاسات — كل الأساسيات في مشروع واحد.</p><p><b>المكونات:</b></p><ul><li><b>index للصورة الحالية:</b> رقم يلف دائريا — <b>امتى؟</b> أي تنقل متسلسل.</li><li><b>النقط:</b> قفز مباشر — <b>امتى؟</b> الوصول السريع.</li><li><b>التبديل التلقائي:</b> setInterval + إيقاف عند التحويم — <b>امتى؟</b> العروض الدعائية.</li></ul>`,
stageHtml: `<div id="sl" style="font-size:50px">🖼️ 1</div><button id="prev">→ السابق</button> <button id="nxt">التالي ←</button>`,
examples:[
{title:"مثال 1 (مشروع): السلايدر شغال", level:"مشروع", runnable:true,
code:`const pics = ["🖼️ 1", "🌅 2", "🌃 3"];\nlet i = 0;\nfunction show() { stage.querySelector("#sl").textContent = pics[i]; }\nstage.querySelector("#nxt").onclick = () => { i = (i + 1) % pics.length; show(); };\nstage.querySelector("#prev").onclick = () => { i = (i - 1 + pics.length) % pics.length; show(); };\nshow();\nconsole.log("جرّب الأزرار 👆");`,
output:`جرّب الأزرار 👆`},
{title:"مثال 2: تبديل تلقائي", level:"متوسط", runnable:true,
code:`console.log("التلقائي: كل 3 ثواني صورة (في مشروعك الحقيقي)");\nconsole.log("الكود: setInterval(() => { i = (i+1) % pics.length; show(); }, 3000);");`,
output:`التلقائي: كل 3 ثواني صورة`},
{title:"مثال 3: لف دائري بالباقي %", level:"صعب", runnable:true,
code:`// % هو سر اللف الدائري: بعد الأخيرة يرجع للأولى\nfor (let k = 0; k < 5; k++) console.log("الصورة:", (k % 3) + 1);`,
output:`الصورة: 1\nالصورة: 2\nالصورة: 3\nالصورة: 1\nالصورة: 2`}
],
exercise:"ضيف نقط (3 أزرار صغيرة) كل واحدة تقفز لصورة مباشرة + تبديل تلقائي كل 3 ثواني.",
quiz:{q:"سر اللف الدائري في السلايدر؟", options:["if طويلة","باقي القسمة %","لوب لانهائي","نسخ الصور"], answer:1}
},
{id:"f4l1", title:"مشروع لعبة تخمين الرقم", elzero:"الزيرو Guess Game", level:"مشروع",
html:`<p><b>يعني إيه؟</b> الكمبيوتر يختار رقما سريا والمستخدم يخمن مع تلميحات (أكبر/أصغر) وعدّ محاولات — لعبة كاملة بمنطق حقيقي.</p><p><b>ليه؟</b> بتعلمك دورة اللعبة: حالة (الرقم والمحاولات) + مدخلات + منطق مقارنة + رسائل — نفس دورة أي تطبيق تفاعلي.</p>`,
stageHtml: `<input id="g" type="number" placeholder="خمن 1-20"><button id="go">خمّن</button><p id="gr"></p>`,
examples:[
{title:"مثال 1 (مشروع): اللعبة كاملة", level:"مشروع", runnable:true,
code:`const secret = Math.floor(Math.random() * 20) + 1;\nlet tries = 0;\nstage.querySelector("#go").onclick = () => {\n  const v = Number(stage.querySelector("#g").value);\n  tries++;\n  const r = stage.querySelector("#gr");\n  if (v === secret) r.textContent = "صح 🎉 من " + tries + " محاولات";\n  else if (v < secret) r.textContent = "أكبر ⬆️";\n  else r.textContent = "أصغر ⬇️";\n};\nconsole.log("رقم سري بين 1 و 20 — خمّن 👆");`,
output:`رقم سري بين 1 و 20 — خمّن 👆`},
{title:"مثال 2: توليد الرقم السري", level:"سهل", runnable:true,
code:`console.log("رقم سري:", Math.floor(Math.random() * 20) + 1);`,
output:`رقم سري: ... (عشوائي 1-20)`},
{title:"مثال 3: تقييم اللاعب", level:"متوسط", runnable:true,
code:`function rank(t) {\n  if (t <= 3) return "أسطوري 🏆";\n  if (t <= 6) return "ممتاز 👍";\n  return "حاول تاني 💪";\n}\nconsole.log(rank(2), "|", rank(5), "|", rank(9));`,
output:`أسطوري 🏆 | ممتاز 👍 | حاول تاني 💪`}
],
exercise:"ضيف حد أقصى 5 محاولات: لو خلصوا اعرض الرقم وقفل اللعبة.",
quiz:{q:"أول خطوة في أي لعبة تخمين؟", options:["توليد الرقم السري","التلوين","النشر","الإعلانات"], answer:0}
},
{id:"f4l2", title:"مشروع متجر واجهة + سلة 🎓", elzero:"الزيرو E-commerce UI", level:"مشروع",
html:`<p><b>يعني إيه؟</b> واجهة متجر: عرض منتجات من مصفوفة، زرار إضافة للسلة، عرض السلة والإجمالي، والحفظ في localStorage — مشروع التخرج الفرونتاوي.</p><p><b>ليه؟</b> ده اللي هتحطه في الـ CV، وهو اللي هيتكلم مع API الباك اند لما تتعلم المسار التاني.</p>`,
stageHtml: `<div id="shop"></div><p>السلة: <b id="cartN">0</b> | الإجمالي: <b id="cartT">0</b></p>`,
examples:[
{title:"مثال 1 (مشروع): عرض المنتجات", level:"مشروع", runnable:true,
code:`const products = [\n  { id: 1, name: "موبايل 📱", price: 8000 },\n  { id: 2, name: "سماعة 🎧", price: 500 },\n  { id: 3, name: "شاحن 🔌", price: 300 },\n];\nlet cart = JSON.parse(localStorage.getItem("cart") || "[]");\nconst shop = stage.querySelector("#shop");\nshop.innerHTML = "";\nproducts.forEach(p => {\n  const d = document.createElement("div");\n  d.innerHTML = p.name + " - " + p.price + " "; \n  const b = document.createElement("button");\n  b.textContent = "ضيف للسلة";\n  b.onclick = () => { cart.push(p.id); save(); draw(); };\n  d.append(b); shop.append(d);\n});\nfunction save() { localStorage.setItem("cart", JSON.stringify(cart)); }\nfunction draw() {\n  const items = cart.map(id => products.find(p => p.id === id));\n  stage.querySelector("#cartN").textContent = items.length;\n  stage.querySelector("#cartT").textContent = items.reduce((s, p) => s + p.price, 0);\n}\ndraw();\nconsole.log("متجر كامل 👆 — ضيف منتجات وحدّث الصفحة، السلة فاكراك");`,
output:`متجر كامل 👆 — ضيف منتجات وحدّث الصفحة، السلة فاكراك`},
{title:"مثال 2: حساب الإجمالي", level:"متوسط", runnable:true,
code:`const prices = [8000, 500, 300];\nconsole.log("الإجمالي:", prices.reduce((s, p) => s + p, 0));`,
output:`الإجمالي: 8800`},
{title:"مثال 3: تفريغ السلة", level:"سهل", runnable:true,
code:`console.log("للتفريغ: cart = []; save(); draw();");\nconsole.log("نفس الدوال — إعادة استعمال الكود ✅");`,
output:`للتفريغ: cart = []; save(); draw();`}
],
exercise:"ضيف زرار (إفراغ السلة) + عرض عدد كل منتج مكرر مرة واحدة مع كميته.",
quiz:{q:"السلة محفوظة بعد تحديث الصفحة بفضل؟", options:["localStorage","الذاكرة المؤقتة","CSS","الكوكيز فقط"], answer:0}
}
]}
];
