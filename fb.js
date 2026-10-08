/* F_BASICS — أساسيات اللغة لمسار الفرونت (تُدمج قبل دروس DOM) */
const F_BASICS = [
{
id:"fb0", title:"المرحلة 1: أساسيات اللغة للفرونت", desc:"المتغيرات والشروط واللوب — وتظهر نتيجتها في الصفحة.",
lessons:[
{id:"fb00", title:"المتغيرات وعرضها في الصفحة", elzero:"الزيرو Variables", level:"أساسي",
html:`<p><b>يعني إيه متغير؟</b> علبة مسماة جواها قيمة. في الفرونت القيمة دي غالبا هتتعرض في الصفحة: اسم المستخدم، عدد المنتجات، حالة الزرار.</p><p><b>ليه؟</b> عشان الصفحة حية: الرقم المعروض لازم يتحدث لما الداتا تتغير، والمتغير هو اللي شايل القيمة الحالية.</p><p><b>كل واحد وامتى:</b></p><ul><li><b>const:</b> الافتراضي — <b>امتى؟</b> عناصر الصفحة الممسوكة والإعدادات الثابتة.</li><li><b>let:</b> للقيم المتغيرة — <b>امتى؟</b> العدادات والنصوص المتبدلة.</li><li><b>var:</b> قديم وبيتسرب — <b>امتى؟</b> أبدا.</li></ul>`,
stageHtml: `<div id="vout">هنا يظهر الاسم</div>`,
examples:[
{title:"مثال 1 (سهل): اعرض متغير في الصفحة", level:"سهل", runnable:true,
code:`const userName = "منى";\nstage.querySelector("#vout").textContent = "أهلا " + userName;\nconsole.log("ظهر الاسم فوق 👆");`,
output:`ظهر الاسم فوق 👆`},
{title:"مثال 2 (متوسط): عدّاد يزيد", level:"متوسط", runnable:true,
code:`let visits = 0;\nvisits++;\nstage.querySelector("#vout").textContent = "زيارة رقم " + visits;\nconsole.log("العداد:", visits);`,
output:`العداد: 1`},
{title:"مثال 3: const للعناصر الممسوكة", level:"متوسط", runnable:true,
code:`const box = stage.querySelector("#vout"); // عنصر ثابت — const ✅\nlet msg = "مرحبا"; // نص متغير — let ✅\nbox.textContent = msg;\nconsole.log("القاعدة: العنصر const والمحتوى let");`,
output:`القاعدة: العنصر const والمحتوى let`}
],
exercise:"اعمل div واعرض فيه اسمك + عمرك من متغيرين.",
quiz:{q:"عنصر مسكته ومش هيتغير — تعرّفه بإيه؟", options:["let","var","const","لا شيء"], answer:2}
},
{id:"fb01", title:"الشروط لإظهار وإخفاء العناصر", elzero:"الزيرو Conditions", level:"أساسي",
html:`<p><b>يعني إيه شرط؟</b> لو تحقق نفذ، وإلا نفذ البديل. في الفرونت: لو مسجل اعرض حسابه، لو لا اعرض زرار الدخول.</p><p><b>ليه؟</b> الصفحة الواحدة لها حالات: مسجل/زائر، فاضي/مليان، صح/غلط — والشرط هو اللي يبدّل بينها.</p><p><b>كل أداة وامتى:</b></p><ul><li><b>if:</b> حالة أو حالتين — <b>امتى؟</b> إظهار/إخفاء حسب شرط.</li><li><b>ternary:</b> اختيار قيمة بسطر — <b>امتى؟</b> نص الزر (دخول/خروج).</li><li><b>! للقيم الفاضية:</b> فحص الوجود — <b>امتى؟</b> حقل فاضي أو داتا ناقصة.</li></ul>`,
stageHtml: `<div id="box1">محتوى الأعضاء ⭐</div><button id="tBtn">بدّل الحالة</button>`,
examples:[
{title:"مثال 1 (سهل): إظهار حسب الدخول", level:"سهل", runnable:true,
code:`const loggedIn = true;\nif (loggedIn) {\n  stage.querySelector("#box1").textContent = "أهلا عضو ⭐";\n} else {\n  stage.querySelector("#box1").textContent = "سجّل دخول";\n}`,
output:`أهلا عضو ⭐`},
{title:"مثال 2 (متوسط): زرار يبدّل", level:"متوسط", runnable:true,
code:`let shown = true;\nstage.querySelector("#tBtn").onclick = () => {\n  shown = !shown;\n  stage.querySelector("#box1").style.display = shown ? "block" : "none";\n};\nconsole.log("دوس الزرار يخفي ويظهر 👆");`,
output:`دوس الزرار يخفي ويظهر 👆`},
{title:"مثال 3: رسالة حسب الرصيد", level:"متوسط", runnable:true,
code:`const balance = 0;\nconst msg = balance > 0 ? "رصيدك " + balance : "اشحن رصيدك 💳";\nconsole.log(msg);`,
output:`اشحن رصيدك 💳`}
],
exercise:"اعمل زرار (وضع ليلي) يبدّل خلفية الصفحة بين الأبيض والأسود.",
quiz:{q:"عايز تخفي عنصر من الكود؟", options:["el.hide()","el.style.display='none'","el.delete()","el.visible=false"], answer:1}
},
{id:"fb02", title:"اللوب لبناء القوائم", elzero:"الزيرو Loops", level:"أساسي",
html:`<p><b>يعني إيه لوب؟</b> تكرار شغل على كل عنصر: عندك 20 منتجا؟ اللوب يبني 20 بطاقة بسطور معدودة.</p><p><b>ليه؟</b> عدد العناصر مجهول دايما (نتائج بحث، تعليقات) — مستحيل تكتبها يدويا في HTML.</p><p><b>كل نوع وامتى:</b></p><ul><li><b>for:</b> عدد معروف — <b>امتى؟</b> بناء عناصر بعدد محسوب.</li><li><b>for...of:</b> لف على العناصر — <b>امتى؟</b> عرض قائمة كاملة.</li><li><b>forEach:</b> ستايل الدوال — <b>امتى؟</b> نفس for...of بصياغة أقصر.</li></ul>`,
stageHtml: `<ul id="menu"></ul>`,
examples:[
{title:"مثال 1 (سهل): ابنِ قائمة من مصفوفة", level:"سهل", runnable:true,
code:`const items = ["رئيسية", "منتجات", "اتصل بنا"];\nconst ul = stage.querySelector("#menu");\nul.innerHTML = "";\nfor (const t of items) {\n  const li = document.createElement("li");\n  li.textContent = t;\n  ul.append(li);\n}\nconsole.log("اتبنت", items.length, "روابط 👆");`,
output:`اتبنت 3 روابط 👆`},
{title:"مثال 2 (متوسط): بطاقات منتجات", level:"متوسط", runnable:true,
code:`const ps = [{n:"موبايل", p:8000}, {n:"سماعة", p:500}];\nconst ul = stage.querySelector("#menu");\nul.innerHTML = "";\nps.forEach(x => {\n  const li = document.createElement("li");\n  li.textContent = x.n + " - " + x.p + " جنيه";\n  ul.append(li);\n});\nconsole.log("بطاقات من داتا حقيقية ✅");`,
output:`بطاقات من داتا حقيقية ✅`},
{title:"مثال 3: تخطي الغالي", level:"متوسط", runnable:true,
code:`const ps = [{n:"موبايل", p:8000}, {n:"جراب", p:100}];\nfor (const x of ps) {\n  if (x.p > 1000) continue; // عدي الغالي\n  console.log("رخيص:", x.n);\n}`,
output:`رخيص: جراب`}
],
exercise:"من مصفوفة 5 أصدقاء ابنِ قائمة بهم، واللي اسمه يبدأ بحرف الألف حط جنبه ⭐.",
quiz:{q:"عايز تبني عناصر بعدد مجهول من الداتا؟", options:["انسخ HTML كثير","لوب يبني من المصفوفة","ارسمها","مستحيل"], answer:1}
},
{id:"fb03", title:"النصوص لبناء HTML ديناميكي", elzero:"الزيرو String Methods + Template", level:"أساسي",
html:`<p><b>يعني إيه؟</b> تركيب كتل HTML من الداتا بالنصوص: بطاقة منتج = نص فيه الاسم والسعر والصورة.</p><p><b>ليه؟</b> أسرع طريقة لرسم قوائم كبيرة: تركب النص كله ثم تحقنه مرة واحدة بدل عنصر عنصر.</p><p><b>كل أداة وامتى:</b></p><ul><li><b>Template Literals:</b> تركيب القوالب — <b>امتى؟</b> أي HTML ديناميكي.</li><li><b>trim/toLowerCase:</b> تنظيف المدخلات — <b>امتى؟</b> قبل المقارنة والحفظ.</li><li><b>join:</b> لحم المصفوفة في نص — <b>امتى؟</b> تجميع القالب قبل الحقن.</li></ul>`,
stageHtml: `<div id="cards"></div>`,
examples:[
{title:"مثال 1 (سهل): بطاقة بقالب نصي", level:"سهل", runnable:true,
code:`const p = { name: "موبايل", price: 8000 };\nstage.querySelector("#cards").innerHTML = "<b>" + p.name + "</b> - " + p.price + " جنيه";\nconsole.log("بطاقة واحدة من قالب");`,
output:`بطاقة واحدة من قالب`},
{title:"مثال 2 (متوسط): قائمة كاملة بسطرين", level:"متوسط", runnable:true,
code:`const ps = [{n:"A", p:100}, {n:"B", p:200}];\nconst html = ps.map(x => "<div>" + x.n + " - " + x.p + "</div>").join("");\nstage.querySelector("#cards").innerHTML = html;\nconsole.log("map + join = أسرع رسم 🚀");`,
output:`map + join = أسرع رسم 🚀`},
{title:"مثال 3: تنظيف قبل العرض", level:"متوسط", runnable:true,
code:`const raw = "  موبايل جديد  ";\nconsole.log("قبل: [" + raw + "]");\nconsole.log("بعد: [" + raw.trim() + "]");`,
output:`قبل: [  موبايل جديد  ]\nبعد: [موبايل جديد]`}
],
exercise:"من مصفوفة 3 منتجات ابنِ بطاقاتهم بـ map/join في حقنة واحدة.",
quiz:{q:"أسرع طريقة لرسم قائمة من 100 منتج؟", options:["100 سطر HTML يدوي","map + join ثم حقنة واحدة","100 alert","رسمها باليد"], answer:1}
}
]}
,
{
id:"fb1", title:"المرحلة 2: الدوال والمصفوفات", desc:"وصفات جاهزة وقوائم ذكية للصفحة.",
lessons:[
{id:"fb10", title:"الفانكشنز ومشغّلات الأحداث", elzero:"الزيرو Functions", level:"مهم",
html:`<p><b>يعني إيه فانكشن؟</b> وصفة محفوظة باسم تناديها وقت الحاجة. في الفرونت معظم الوصفات = ردود على أحداث (دوس، كتابة، إرسال).</p><p><b>ليه؟</b> عشان نفس الرد يتكرر: كل دوسة على (أضف للسلة) تنادي نفس الفانكشن بمنتج مختلف.</p><p><b>كل صيغة وامتى:</b></p><ul><li><b>العادية:</b> الوصفات الكبيرة — <b>امتى؟</b> منطق متعدد السطور.</li><li><b>Arrow:</b> المختصرة — <b>امتى؟</b> الـ handlers القصيرة ودوال المصفوفات.</li><li><b>البراميتر:</b> الجزء المتغير — <b>امتى؟</b> نفس الفانكشن لعناصر مختلفة (id المنتج).</li></ul>`,
stageHtml: `<button id="b1">منتج 1</button> <button id="b2">منتج 2</button><p id="fb"></p>`,
examples:[
{title:"مثال 1 (سهل): فانكشن ترحب", level:"سهل", runnable:true,
code:`function welcome(name) {\n  stage.querySelector("#fb").textContent = "أهلا " + name;\n}\nwelcome("كريم");`,
output:`أهلا كريم`},
{title:"مثال 2 (متوسط): نفس الفانكشن لزرارين", level:"متوسط", runnable:true,
code:`function buy(id) {\n  stage.querySelector("#fb").textContent = "اشتريت منتج " + id + " ✅";\n}\nstage.querySelector("#b1").onclick = () => buy(1);\nstage.querySelector("#b2").onclick = () => buy(2);\nconsole.log("دوس أي زرار 👆");`,
output:`دوس أي زرار 👆`},
{title:"مثال 3: arrow للقصير", level:"متوسط", runnable:true,
code:`const total = (p, q) => p * q;\nconsole.log("3 قطع × 150 =", total(150, 3));`,
output:`3 قطع × 150 = 450`}
],
exercise:"اعمل 3 أزرار منتجات وفانكشن واحدة addToCart(id) تعرض رقم المنتج المضاف.",
quiz:{q:"ليه نمرر id للفانكشن بدل فانكشن لكل زرار؟", options:["إعادة استعمال الكود","أسرع نت","أحلى شكل","إجباري"], answer:0}
},
{id:"fb11", title:"المصفوفات للعرض والفلترة", elzero:"الزيرو Arrays Methods", level:"مهم جدا",
html:`<p><b>يعني إيه؟</b> الدوال الجاهزة للقوائم: حوّل كل عنصر، اختار منهم، دوّر على واحد — بدل اللوب اليدوي.</p><p><b>ليه للفرونت؟</b> كل قائمة معروضة مرت بفلترة أو تحويل: منتجات متاحة فقط، أسعار بالضريبة، بحث باسم.</p><p><b>كل دالة وامتى:</b></p><ul><li><b>map:</b> تحويل الكل — <b>امتى؟</b> تجهيز الداتا للعرض.</li><li><b>filter:</b> اختيار حسب شرط — <b>امتى؟</b> المتاح فقط / البحث.</li><li><b>find:</b> أول مطابق — <b>امتى؟</b> تفاصيل منتج بالـ id.</li><li><b>push/splice:</b> إضافة وحذف — <b>امتى؟</b> السلة والمهام.</li></ul>`,
stageHtml: `<div id="plist"></div><button id="cheapBtn">اعرض الرخيص بس</button> <button id="allBtn">اعرض الكل</button>`,
examples:[
{title:"مثال 1 (سهل): اعرض الكل", level:"سهل", runnable:true,
code:`const ps = [{n:"موبايل", p:8000}, {n:"سماعة", p:500}];\nfunction draw(list) {\n  stage.querySelector("#plist").innerHTML = list.map(x => "<div>" + x.n + " - " + x.p + "</div>").join("");\n}\ndraw(ps);\nstage.querySelector("#allBtn").onclick = () => draw(ps);\nconsole.log("القائمة معروضة 👆");`,
output:`القائمة معروضة 👆`},
{title:"مثال 2 (متوسط): فلترة بزر واحد", level:"متوسط", runnable:true,
code:`const ps = [{n:"موبايل", p:8000}, {n:"سماعة", p:500}];\nstage.querySelector("#cheapBtn").onclick = () => {\n  const cheap = ps.filter(x => x.p < 1000);\n  stage.querySelector("#plist").innerHTML = cheap.map(x => "<div>" + x.n + "</div>").join("");\n};\nconsole.log("دوس (اعرض الرخيص) 👆");`,
output:`دوس (اعرض الرخيص) 👆`},
{title:"مثال 3: تفاصيل منتج", level:"متوسط", runnable:true,
code:`const ps = [{id:1, n:"موبايل"}, {id:2, n:"سماعة"}];\nconsole.log("منتج 2:", ps.find(x => x.id === 2).n);`,
output:`منتج 2: سماعة`}
],
exercise:"ضيف مربع بحث: كل حرف يفلتر المنتجات اللي اسمها يحتوي النص.",
quiz:{q:"عايز المنتجات اللي سعرها أقل من 1000؟", options:["map","filter","find","push"], answer:1}
},
{id:"fb12", title:"الفرز والبحث اللحظي", elzero:"الزيرو Sort + Search", level:"مهم",
html:`<p><b>يعني إيه؟</b> ترتيب القائمة (الأرخص أولا) والبحث فيها لحظة بلحظة من غير سيرفر.</p><p><b>ليه؟</b> أي قائمة حقيقية محتاجة ترتيب وبحث — والمستخدم يتوقع النتيجة مع كل حرف.</p><p><b>كل أداة وامتى:</b></p><ul><li><b>sort:</b> الترتيب — <b>امتى؟</b> (الأرخص/الأغلى/الأحدث) مع نسخة أولا.</li><li><b>includes:</b> الاحتواء — <b>امتى؟</b> البحث الجزئي في الأسماء.</li><li><b>slice:</b> أول N — <b>امتى؟</b> (الأعلى تقييما: أول 5).</li></ul>`,
stageHtml: `<input id="sq" placeholder="ابحث..."><div id="sres"></div>`,
examples:[
{title:"مثال 1 (سهل): بحث لحظي", level:"سهل", runnable:true,
code:`const ps = ["موبايل", "سماعة", "شاحن", "ماوس"];\nstage.querySelector("#sq").addEventListener("input", (e) => {\n  const q = e.target.value.trim();\n  const res = ps.filter(x => x.includes(q));\n  stage.querySelector("#sres").textContent = res.join(" | ") || "لا نتائج";\n});\nconsole.log("اكتب في مربع البحث 👆");`,
output:`اكتب في مربع البحث 👆`},
{title:"مثال 2 (متوسط): ترتيب أسعار", level:"متوسط", runnable:true,
code:`const prices = [8000, 300, 2500];\nconsole.log("تصاعدي:", [...prices].sort((a, b) => a - b));\nconsole.log("الأصل محفوظ:", prices);`,
output:`تصاعدي: [300, 2500, 8000]\nالأصل محفوظ: [8000, 300, 2500]`},
{title:"مثال 3: أول 2 فقط", level:"متوسط", runnable:true,
code:`const top = ["A", "B", "C", "D"];\nconsole.log(top.slice(0, 2));`,
output:`[ 'A', 'B' ]`}
],
exercise:"اعمل زرارين (الأرخص أولا) و(الأغلى أولا) يرتبان قائمة منتجات معروضة.",
quiz:{q:"ليه بننسخ المصفوفة قبل sort؟", options:["sort بتعدل الأصل","ممنوع الترتيب","أسرع","للشكل"], answer:0}
}
]}
,
{
id:"fb2", title:"المرحلة 3: الكائنات والحديث", desc:"داتا منظمة وصياغات عصرية.",
lessons:[
{id:"fb20", title:"الكائنات + JSON + الحفظ", elzero:"الزيرو Objects + JSON", level:"مهم",
html:`<p><b>يعني إيه كائن؟</b> حزمة صفات لشيء واحد: المنتج له اسم وسعر وصورة — كائن واحد بدل 3 متغيرات.</p><p><b>ليه؟</b> الداتا الجاية من أي API كائنات، والمخزن localStorage بيحفظها كنصوص JSON — لازم تعرف التحويل رايح جاي.</p><p><b>كل أداة وامتى:</b></p><ul><li><b>Destructuring:</b> فك الحقول — <b>امتى؟</b> استعمال اسم وسعر من كائن منتج.</li><li><b>stringify/parse:</b> التحويل — <b>امتى؟</b> قبل الحفظ وبعد القراءة من المخزن.</li><li><b>?.:</b> الوصول الآمن — <b>امتى؟</b> بيانات قد تكون ناقصة (صورة المنتج).</li></ul>`,
examples:[
{title:"مثال 1 (سهل): فك منتج", level:"سهل", runnable:true,
code:`const p = { name: "موبايل", price: 8000 };\nconst { name, price } = p;\nconsole.log(name, "-", price);`,
output:`موبايل - 8000`},
{title:"مثال 2 (متوسط): حفظ واسترجاع", level:"متوسط", runnable:true,
code:`const user = { name: "سارة", theme: "dark" };\nlocalStorage.setItem("user", JSON.stringify(user));\nconst back = JSON.parse(localStorage.getItem("user"));\nconsole.log("رجعت:", back.name, back.theme);`,
output:`رجعت: سارة dark`},
{title:"مثال 3: وصول آمن لصورة", level:"متوسط", runnable:true,
code:`const p1 = { name: "A" };\nconsole.log(p1.img?.url ?? "لا توجد صورة 🖼️");\nconst p2 = { name: "B", img: { url: "x.png" } };\nconsole.log(p2.img?.url);`,
output:`لا توجد صورة 🖼️\nx.png`}
],
exercise:"احفظ كائن إعدادات {theme, lang} في المخزن واقراه عند فتح الصفحة وطبقه.",
quiz:{q:"ليه بنحوّل الكائن لنص قبل localStorage؟", options:["المخزن يقبل نصوص فقط","أسرع","إجباري من الشرطة","ل Lالشكل"], answer:0}
},
{id:"fb21", title:"الإحصائيات بـ reduce", elzero:"الزيرو Reduce", level:"مهم",
html:`<p><b>يعني إيه reduce؟</b> تلمّ قائمة كاملة في قيمة واحدة: مجموع، عدد، أعلى قيمة.</p><p><b>ليه للفرونت؟</b> إجمالي السلة، عدد العناصر، متوسط التقييم — كلها تجميعات تعرض للمستخدم.</p>`,
stageHtml: `<div id="stats"></div>`,
examples:[
{title:"مثال 1 (سهل): إجمالي سلة", level:"سهل", runnable:true,
code:`const cart = [8000, 500, 300];\nconst total = cart.reduce((s, p) => s + p, 0);\nstage.querySelector("#stats").textContent = "الإجمالي: " + total;\nconsole.log("الإجمالي:", total);`,
output:`الإجمالي: 8800`},
{title:"مثال 2 (متوسط): عدد ومتوسط", level:"متوسط", runnable:true,
code:`const rates = [5, 4, 5, 3];\nconst avg = rates.reduce((s, r) => s + r, 0) / rates.length;\nconsole.log("التقييم:", avg.toFixed(1), "من", rates.length);`,
output:`التقييم: 4.3 من 4`},
{title:"مثال 3: أعلى سعر", level:"متوسط", runnable:true,
code:`const ps = [8000, 500, 25000];\nconsole.log("الأغلى:", ps.reduce((m, p) => p > m ? p : m, 0));`,
output:`الأغلى: 25000`}
],
exercise:"من سلة [{price, qty}] احسب الإجمالي (السعر × الكمية لكل عنصر).",
quiz:{q:"عايز مجموع عمود من قائمة؟", options:["map","filter","reduce","find"], answer:2}
},
{id:"fb22", title:"الصياغات الحديثة ES6", elzero:"الزيرو ES6 (Spread/Modules)", level:"مهم",
html:`<p><b>يعني إيه؟</b> اختصارات عصرية: دمج الكائنات، نسخ المصفوفات، وتقسيم الكود لملفات.</p><p><b>ليه؟</b> لأنها صارت لغة المشاريع والمكتبات — لازم تقراها وتكتبها.</p><p><b>كل صيغة وامتى:</b></p><ul><li><b>Spread للدمج:</b> تحديث الإعدادات — <b>امتى؟</b> ({...old, ...new}).</li><li><b>Spread للنسخ:</b> نسخة قبل التعديل — <b>امتى؟</b> قبل sort أو أي تعديل.</li><li><b>Modules:</b> تقسيم الملفات — <b>امتى؟</b> المشاريع المتوسطة فأكبر.</li></ul>`,
examples:[
{title:"مثال 1 (سهل): تحديث إعدادات", level:"سهل", runnable:true,
code:`const old = { theme: "light", lang: "ar" };\nconst updated = { ...old, theme: "dark" };\nconsole.log(updated);\nconsole.log("الأصل محفوظ:", old.theme);`,
output:`{ theme: 'dark', lang: 'ar' }\nالأصل محفوظ: light`},
{title:"مثال 2 (متوسط): نسخة آمنة", level:"متوسط", runnable:true,
code:`const a = [3, 1, 2];\nconst sorted = [...a].sort();\nconsole.log("مرتبة:", sorted, "| أصلية:", a);`,
output:`مرتبة: [1, 2, 3] | أصلية: [3, 1, 2]`},
{title:"مثال 3: ملفات منفصلة", level:"متوسط", runnable:false,
code:`// data.js: export const products = [...];\n// app.js: import { products } from "./data.js";\n// type="module" في وسم script`,
output:`تنظيم المشاريع المتوسطة`}
],
exercise:"عندك سلة قديمة + منتج جديد: ابنِ سلة جديدة بالدمج من غير تعديل القديمة.",
quiz:{q:"عايز نسخة من مصفوفة قبل تعديلها؟", options:["نفس المرجع","[...arr]","arr.copy()","لا يمكن"], answer:1}
}
]}
,
{
id:"fb3", title:"المرحلة 4: غير المتزامن للفرونت", desc:"التحميل والانتظار وجلب البيانات.",
lessons:[
{id:"fb30", title:"الانتظار وحالات التحميل", elzero:"الزيرو Async + Promises", level:"مهم",
html:`<p><b>يعني إيه async؟</b> عمليات تاخد وقت (تحميل داتا) — الصفحة تكمل شغلها وتتعامل مع النتيجة لما تجهز، مع رسالة (بيحمّل...) أثناء الانتظار.</p><p><b>ليه؟</b> المستخدم لازم يشوف حالة دايما: تحميل ثم داتا أو خطأ — الصفحة الصامتة تجربة سيئة.</p><p><b>كل أداة وامتى:</b></p><ul><li><b>setTimeout:</b> تأخير — <b>امتى؟</b> المحاكاة والتجربة والرسائل المؤقتة.</li><li><b>Promise:</b> وعد بنتيجة — <b>امتى؟</b> فهم ما يرجعه fetch.</li><li><b>async/await:</b> الصياغة الواضحة — <b>امتى؟</b> أي تحميل داتا في مشروع.</li></ul>`,
stageHtml: `<div id="ld">اضغط وحمّل</div><button id="ldBtn">حمّل</button>`,
examples:[
{title:"مثال 1 (سهل): محاكاة تحميل", level:"سهل", runnable:true,
code:`stage.querySelector("#ld").textContent = "بيحمّل... ⏳";\nsetTimeout(() => {\n  stage.querySelector("#ld").textContent = "وصلت الداتا ✅";\n}, 1500);\nconsole.log("شوف المربع فوق 👆");`,
output:`شوف المربع فوق 👆`},
{title:"مثال 2 (متوسط): وعد بسيط", level:"متوسط", runnable:true,
code:`const p = new Promise((res) => setTimeout(() => res("تم 🎉"), 500));\np.then(msg => console.log(msg));\nconsole.log("الوعد اتعمل... مستني");`,
output:`الوعد اتعمل... مستني\nتم 🎉`},
{title:"مثال 3: async تنتظر", level:"متوسط", runnable:true,
code:`function wait(ms) { return new Promise(r => setTimeout(r, ms)); }\nasync function go() {\n  console.log("بدأت...");\n  await wait(500);\n  console.log("خلصت ✅");\n}\ngo();`,
output:`بدأت...\nخلصت ✅`}
],
exercise:"اعمل زرار: عند الضغط يعرض (بيحمّل...) ثم بعد ثانيتين يعرض (تم).",
quiz:{q:"ليه بنعرض (بيحمّل...) أثناء الجلب؟", options:["تجربة أحسن من صفحة صامتة","إجباري تقنيا","أسرع نت","للشكل فقط"], answer:0}
},
{id:"fb31", title:"الإرسال POST + دورة كاملة", elzero:"الزيرو Fetch POST", level:"مشروع مصغر",
html:`<p><b>يعني إيه POST؟</b> إرسال داتا للسيرفر (تسجيل، تعليق، طلب) — عكس GET اللي بيجيب فقط.</p><p><b>ليه؟</b> أي فورم حقيقي بيبعت: الاسم والرسالة يروحوا للسيرفر يتخزنوا ويرجع تأكيد.</p>`,
stageHtml: `<input id="cmt" placeholder="اكتب تعليقا"><button id="sendBtn">ابعت</button><p id="cmtOut"></p>`,
examples:[
{title:"مثال 1 (سهل): ابعت تعليق حقيقي", level:"سهل", runnable:true,
code:`stage.querySelector("#sendBtn").onclick = () => {\n  const text = stage.querySelector("#cmt").value.trim();\n  if (!text) return;\n  stage.querySelector("#cmtOut").textContent = "بيتبعت... ⏳";\n  fetch("https://jsonplaceholder.typicode.com/posts", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ body: text })\n  })\n    .then(r => r.json())\n    .then(d => { stage.querySelector("#cmtOut").textContent = "اتبعت برقم " + d.id + " ✅"; })\n    .catch(() => { stage.querySelector("#cmtOut").textContent = "فشل ❌"; });\n};\nconsole.log("اكتب تعليقا ودوس ابعت (محتاج نت)");`,
output:`اكتب تعليقا ودوس ابعت (محتاج نت)`},
{title:"مثال 2: مكونات الطلب", level:"متوسط", runnable:true,
code:`console.log("POST = method + headers + body");\nconsole.log("body لازم نص JSON: JSON.stringify(...)");`,
output:`POST = method + headers + body`},
{title:"مثال 3: async كاملة", level:"متوسط", runnable:true,
code:`async function sendIt(text) {\n  try {\n    const r = await fetch("https://jsonplaceholder.typicode.com/posts", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({ body: text })\n    });\n    const d = await r.json();\n    console.log("اتبعت:", d.id);\n  } catch { console.log("فشل ❌"); }\n}\nsendIt("تجربة");`,
output:`اتبعت: 101 (محتاج نت)`}
],
exercise:"اعمل فورم (اسم + رسالة) يبعت POST ويعرض رقم التأكيد الراجع.",
quiz:{q:"الـ body في طلب POST لازم يكون؟", options:["كائن مباشرة","نص JSON","رقم فقط","فاضي"], answer:1}
}
]}
];
