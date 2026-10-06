/* JS Backend School - curriculum + engine */
const CURRICULUM = [
{
id:"m0", title:"المرحلة 0: مدخل الباك اند", desc:"ليه جافاسكريبت تنفع باك اند؟ وازاي تجهز جهازك.",
lessons:[
{id:"m0lz", title:"قبل الصفر: يعني إيه برمجة أصلا؟ 🌱", elzero:"تمهيد قبل الزيرو #001", level:"تأسيس",
html:`<p>لو عمرك ما كتبت سطر كود، الدرس ده ليك. <b>البرمجة = إنك تدي أوامر للكمبيوتر بلغة هو يفهمها</b>، زي ما بتدي وصفة طبخ لحد — خطوة خطوة بالترتيب.</p>
<ul>
<li>الكمبيوتر <b>غبي ومطيع</b>: بينفذ اللي تكتبه حرفيا سطر سطر من فوق لتحت، لا بيفهم نيتك ولا بيكمل الناقص. الغلطة الواحدة في حرف بتوقف البرنامج — وده طبيعي مش فشل منك.</li>
<li>البرنامج ملف نصي فيه أوامر، واللغة (JavaScript) هي طريقة كتابة الأوامر دي. و <b>الخطأ (Error) رسالة مساعدة</b> بتقولك فين المشكلة، مش شهادة غباء.</li>
<li>تخيل مطعم: الزبون يطلب من الجرسون (المتصفح/الفرونت)، والجرسون يودي الطلب للمطبخ (السيرفر/الباك اند) اللي يجهز الأكل من المخزن (الداتابيز). <b>انت هتبقى المطبخ.</b></li>
<li>طريقتك في الكورس: اقرا التمهيد 🌱 → افهم الشرح → شغّل الأمثلة بنفسك → حل المسائل. متنقلش لكلمة جديدة غير وانت فاهم اللي قبلها.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): الكمبيوتر بينفذ بالترتيب", level:"سهل", runnable:true,
code:`// أي سطر يبدأ بـ // تعليق: الكمبيوتر بيطنشه (ملاحظة ليك انت)\nconsole.log("1: صباح الخير");\nconsole.log("2: أنا السطر التاني");\nconsole.log("3: اتنفذت بعد اللي قبلي مش قبله");`,
output:`1: صباح الخير\n2: أنا السطر التاني\n3: اتنفذت بعد اللي قبلي مش قبله`},
{title:"مثال 2 (متوسط): المتغير = علبة مسماة", level:"متوسط", runnable:true,
code:`// let معناها: اعمل علبة جديدة. = معناها: حط جواها القيمة دي\nlet myName = "أحمد";\nlet myAge = 20;\nconsole.log(myName); // اطبع اللي جوه العلبة\nconsole.log(myAge + 5); // الحساب بيتم على القيمة اللي جواها`,
output:`أحمد\n25`},
{title:"مثال 3: الكمبيوتر حرفي جدا", level:"صعب", runnable:true,
code:`let userName = "علي";\nconsole.log(userName); // ✅ شغال\n// console.log(UserName); // ❌ حرف U كابيتال = اسم تاني خالص = خطأ\nconsole.log("الدرس: الحرف الواحد يفرق، انسخ الأسماء بدل ما تكتبها");`,
output:`علي\nالدرس: الحرف الواحد يفرق، انسخ الأسماء بدل ما تكتبها`}
],
exercise:"اعمل 3 علب (متغيرات): اسمك وعمرك ومدينتك، واطبعهم كل واحد في سطر.",
quiz:{q:"الكمبيوتر بينفذ الكود إزاي؟", options:["سطر سطر من فوق لتحت حرفيا","كل السطور مع بعض","بيفهم نيتي ويكمل الناقص","من تحت لفوق"], answer:0}
},
{id:"m0l0", title:"يعني إيه باك اند؟ وليه JavaScript؟", elzero:"الزيرو فيديو #001 - #011 (Introduction + What You Need)", level:"تأسيس",
html:`<p>الباك اند هو <b>مخ السيرفر</b>: بيستقبل الطلبات (Requests)، يكلم الداتابيز، ويعمل حسابات ويرجع رد (Response). الفرونت بيبني الشكل، الباك بيبني المنطق والداتا.</p>
<ul>
<li>زمان: جافاسكريبت كانت بتشتغل في المتصفح بس. سنة 2009 ظهر <b>Node.js</b> وخلاها تشتغل على السيرفر.</li>
<li>ليه تختار JS للباك؟ <b>لغة واحدة للفرونت والباك</b> + سوق شغل كبير + NPM أكبر مكتبة حزم + سريعة (V8 + Event Loop).</li>
<li>أمثلة: PayPal, Netflix, Uber, LinkedIn كلهم بيستخدموا Node في الباك.</li>
<li>الفرق الجوهري: في المتصفح عندك <code>window / document</code>، في Node عندك <code>fs / http / process</code>. عشان كده <b>مش هنشرح DOM و BOM خالص</b> — مش بتوعك.</li>
<li>منهج الزيرو: أول 11 فيديو بيأسس يعني إيه JS وإزاي تذاكر — نفس الكلام هنا بس بتركيز باك اند.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): فرونت VS باك", level:"سهل", runnable:true,
code:`// في المتصفح (فرونت - مش بتاعك)\n// document.getElementById("btn") // ❌ مش هنستخدمه\n\n// في الباك اند (بتاعك ✅)\nconst request = { url: "/products", method: "GET" };\nconsole.log("طلب جاي للسيرفر:", request.method, request.url);\nconsole.log("الباك هيرد بليستة المنتجات من الداتابيز");`,
output:`طلب جاي للسيرفر: GET /products\nالباك هيرد بليستة المنتجات من الداتابيز`},
{title:"مثال 2 (متوسط): شكل طلب ورد", level:"متوسط", runnable:true,
code:`const req = { method: "POST", url: "/login", body: { email: "ali@mail.com" } };\n\nfunction backendHandler(r) {\n  if (r.method === "POST" && r.url === "/login") {\n    return { status: 200, json: { token: "JWT-xxx-123" } };\n  }\n  return { status: 404, json: { error: "Not found" } };\n}\nconsole.log(backendHandler(req));`,
output:`{ status: 200, json: { token: 'JWT-xxx-123' } }`},
{title:"مثال 3 (صعب): دورة حياة طلب باك اند", level:"صعب", runnable:true,
code:`// Request -> Middleware -> Route -> DB -> Response\nconst pipeline = ["auth ✅", "validation ✅", "controller ✅", "database ✅"];\nlet res = { user: "ali" };\npipeline.forEach((step, i) => {\n  console.log(\`خطوة \${i+1}: \${step}\`);\n});\nconsole.log("Response:", JSON.stringify({ data: [1,2,3], user: res.user }));`,
output:`خطوة 1: auth ✅\nخطوة 2: validation ✅\nخطوة 3: controller ✅\nخطوة 4: database ✅\nResponse: {"data":[1,2,3],"user":"ali"}`}
],
exercise:"اكتب في كشكول: 3 مهام يعملها الباك اند (مثال: تسجيل دخول) و 3 مهام يعملها الفرونت (مثال: زرار).",
quiz:{q:"أي حاجة من دول تخص الباك اند في Node؟", options:["document.getElementById","fs.readFile (قراءة ملف على السيرفر)","window.alert","تغيير لون زرار"], answer:1}
},
{id:"m0l1", title:"تجهيز البيئة وأول سكريبت Node", elzero:"الزيرو #002 How To Study + شرح NPM", level:"تأسيس",
html:`<ul>
<li>نزّل <b>Node.js LTS</b> من nodejs.org ثم اتأكد: <code>node -v</code> و <code>npm -v</code></li>
<li>نزّل <b>VS Code</b> + إضافة Thunder Client (لتجربة الـ API بدل المتصفح).</li>
<li>طريقة الزيرو في المذاكرة: <b>اتفرج → اكتب بإيدك → حل التكليف → متنقلش للدرس اللي بعده غير وانت فاهم</b>.</li>
<li>أول أوامر: <code>npm init -y</code> بيعمل ملف package.json، و <code>node index.js</code> بيشغّل ملفك.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): أول سكريبت", level:"سهل", runnable:true,
code:`console.log("أهلا بيا في الباك اند 🚀");\nconsole.log("Node version شغالة تمام");`,
output:`أهلا بيا في الباك اند 🚀\nNode version شغالة تمام`},
{title:"مثال 2 (متوسط): process بتاعة السيرفر", level:"متوسط", runnable:false,
code:`// شغّله عندك في التيرمينال: node info.js\nconsole.log("نظام التشغيل:", process.platform);\nconsole.log("متغير البيئة PORT =", process.env.PORT || 3000);`,
output:`نظام التشغيل: win32\nمتغير البيئة PORT = 3000`,
note:"process موجودة في Node فقط، مش في المتصفح."},
{title:"مثال 3: package.json", level:"متوسط", runnable:false,
code:`// npm init -y  ثم  npm i express\n// package.json:\n{\n  "name": "my-backend",\n  "type": "module",\n  "scripts": { "start": "node index.js", "dev": "node --watch index.js" },\n  "dependencies": { "express": "^4.19.0" }\n}`,
output:`npm start  →  يشغّل السيرفر`}
],
exercise:"عندك: نزّل Node، اعمل فولدر my-backend، جواه ملف index.js فيه console.log باسمك، وشغّله بـ node index.js.",
quiz:{q:"أمر تشغيل ملف node اسمه app.js؟", options:["npm app.js","node app.js","run app.js","open app.js"], answer:1}
}
]}
,
{
id:"m1", title:"المرحلة 1: أساسيات اللغة للباك اند", desc:"المتغيرات والشروط واللوب — نفس شرح الزيرو بس بأمثلة سيرفر.",
lessons:[
{id:"m1l0", title:"المتغيرات var / let / const", elzero:"الزيرو #014 - #022 (Variables)", level:"أساسي",
html:`<ul>
<li><code>var</code> قديمة ومشاكلها كتير (بتتسرب بره البلوك) — <b>انساها في الباك</b>.</li>
<li><code>let</code> لما القيمة هتتغير (عداد، سعر مؤقت).</li>
<li><code>const</code> هي الافتراضي في الباك (اعدادات السيرفر، الاتصال بالداتابيز، الـ app بتاع express).</li>
<li>قاعدة الباك اند: <b>كل حاجة const إلا لو متأكد إنها هتتغير خليها let</b>.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل)", level:"سهل", runnable:true,
code:`const PORT = 3000;\nlet visitors = 0;\nvisitors = visitors + 1;\nconsole.log("السيرفر شغال على بورت:", PORT);\nconsole.log("عدد الزوار:", visitors);`,
output:`السيرفر شغال على بورت: 3000\nعدد الزوار: 1`},
{title:"مثال 2 (متوسط): const مع كائن", level:"متوسط", runnable:true,
code:`const config = { port: 3000, db: "mongodb://localhost/shop" };\nconfig.port = 5000; // ✅ مسموح أغير جوّاه\nconsole.log(config);\n// config = {} // ❌ ممنوع أغير المرجع نفسه`,
output:`{ port: 5000, db: 'mongodb://localhost/shop' }`},
{title:"مثال 3 (صعب): ليه var خطيرة؟", level:"صعب", runnable:true,
code:`// var بتتسرب بره الـ if — سبب bugs في السيرفر\nif (true) { var token = "abc"; let safe = "xyz"; }\nconsole.log("var ظاهرة بره:", token);\n// console.log(safe) // ❌ ReferenceError`,
output:`var ظاهرة بره: abc`,
note:"عشان كده في الباك بنستخدم let/const بس."}
],
exercise:"اعمل config سيرفر بـ const فيه port و dbName و secret، وعدّاد requests بـ let وزوّده 3 مرات واطبعه.",
quiz:{q:"أي تعريف صح لإعدادات سيرفر ثابتة؟", options:["var PORT = 3000","let PORT = 3000","const PORT = 3000","PORT := 3000"], answer:2}
},
{id:"m1l1", title:"أنواع البيانات والـ Template Literals", elzero:"الزيرو #023 - #035 (DataTypes + Operators + Strings)", level:"أساسي",
html:`<ul>
<li>أهم الأنواع للباك: <code>string, number, boolean, null, undefined, object, array</code>. و <code>typeof</code> للكشف.</li>
<li><code>null</code> = قيمة مقصودة فاضية (يوزر مالوش صورة)، <code>undefined</code> = متعرفتش أصلا (حقل ناقص).</li>
<li><code>Template Literals</code> بالباك تيك <code>\` \</code> هي اللي بنبني بيها رسائل السيرفر والـ SQL/URLs.</li>
<li>الـ <code>==</code> بتحوّل الأنواع (خطيرة)، والـ <code>===</code> صارمة — <b>في الباك استعمل === دايما</b> خصوصا مع الباسورد والتوكن.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): typeof", level:"سهل", runnable:true,
code:`console.log(typeof "ahmed"); // string\nconsole.log(typeof 25);        // number\nconsole.log(typeof true);       // boolean\nconsole.log(typeof {a:1});      // object\nconsole.log(typeof [1,2]);      // object (خد بالك!)`,
output:`string\nnumber\nboolean\nobject\nobject`},
{title:"مثال 2 (متوسط): Template Literals للسيرفر", level:"متوسط", runnable:true,
code:`const user = "منى";\nconst orders = 3;\nconst msg = \`أهلا \${user} 👋 عندك \${orders} طلبات بإجمالي \${orders * 150} جنيه\`;\nconsole.log(msg);`,
output:`أهلا منى 👋 عندك 3 طلبات بإجمالي 450 جنيه`},
{title:"مثال 3 (صعب): == vs === (فخ الباك)", level:"صعب", runnable:true,
code:`console.log("123" == 123);  // true 😱 تحويل تلقائي\nconsole.log("123" === 123); // false ✅\n// في تسجيل الدخول لازم === عشان "0" == false = true كارثة!`,
output:`true\nfalse`}
],
exercise:"اعمل متغيرات: اسم منتج (string)، سعره (number)، متوفر (boolean)، ثم اطبع فاتورة بسطر واحد بـ Template Literal.",
quiz:{q:"ليه بنستخدم === بدل == في الباك اند؟", options:["أسرع في الكتابة","تمنع التحويل التلقائي للأنواع وتمنع ثغرات","شكلها أحلى","عشان الفرونت"], answer:1}
},
{id:"m1l2", title:"الشروط if / switch (بوابة السيرفر)", elzero:"الزيرو #036 - #045 (Conditions)", level:"أساسي",
html:`<ul>
<li>كل سيرفر عبارة عن شروط: لو يوزر مسجل؟ لو الدور admin؟ لو المنتج موجود؟</li>
<li><code>truthy / falsy</code>: القيم <code>0, \"\", null, undefined, NaN, false</code> يعتبروا false — مهمة جدا للتحقق من الداتا الجاية من العميل.</li>
<li><code>switch</code> أنضف لما يكون عندك حالات كتير (أدوار المستخدمين، حالات الطلب).</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): التحقق من الدخول", level:"سهل", runnable:true,
code:`const token = ""; // جاي فاضي من العميل\nif (!token) {\n  console.log("❌ 401 غير مسموح - ابعت توكن");\n} else {\n  console.log("✅ أهلا بيك");\n}`,
output:`❌ 401 غير مسموح - ابعت توكن`},
{title:"مثال 2 (متوسط): أدوار المستخدمين", level:"متوسط", runnable:true,
code:`const role = "admin";\nswitch (role) {\n  case "admin": console.log("صلاحيات كاملة 👑"); break;\n  case "seller": console.log("يضيف منتجات فقط"); break;\n  case "user": console.log("يشتري فقط"); break;\n  default: console.log("دور غير معروف");\n}`,
output:`صلاحيات كاملة 👑`},
{title:"مثال 3 (صعب): التحقق من بيانات التسجيل", level:"صعب", runnable:true,
code:`function validate(body) {\n  if (!body.email || !body.email.includes("@")) return "ايميل غلط ❌";\n  if (!body.password || body.password.length < 6) return "الباسورد قصير ❌";\n  return "تمام ✅";\n}\nconsole.log(validate({ email: "a@b.com", password: "123" }));\nconsole.log(validate({ email: "a@b.com", password: "123456" }));`,
output:`الباسورد قصير ❌\nتمام ✅`}
],
exercise:"اكتب فانكشن بتاخد status للطلب (pending/paid/shipped/delivered) وتطبع رسالة مختلفة لكل حالة بـ switch.",
quiz:{q:"أي قيمة falsy؟", options:["\"hello\"","[]","0","\"0\""], answer:2}
},
{id:"m1l3", title:"اللوب والتكرار (معالجة الداتا)", elzero:"الزيرو #046 - #055 (Loops)", level:"أساسي",
html:`<ul>
<li>الباك اند كله لوب: لف على الطلبات، احسب الإجمالي، ابنِ صفحات (pagination).</li>
<li><code>for</code> للعدد المعروف، <code>for...of</code> للف على مصفوفة، <code>while</code> لما الشرط هو اللي يحكم.</li>
<li><code>break</code> يوقف اللوب (لقينا اليوزر)، <code>continue</code> يتخطى عنصر (منتج خلصان).</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): حساب إجمالي سلة", level:"سهل", runnable:true,
code:`const prices = [100, 250, 150];\nlet total = 0;\nfor (let i = 0; i < prices.length; i++) {\n  total += prices[i];\n}\nconsole.log("الإجمالي:", total);`,
output:`الإجمالي: 500`},
{title:"مثال 2 (متوسط): تخطي المنتج الخلصان", level:"متوسط", runnable:true,
code:`const stock = [\n  { name: "موبايل", qty: 5 },\n  { name: "لابتوب", qty: 0 },\n  { name: "سماعة", qty: 3 },\n];\nfor (const p of stock) {\n  if (p.qty === 0) continue; // عدي الخلصان\n  console.log("متاح:", p.name);\n}`,
output:`متاح: موبايل\nمتاح: سماعة`},
{title:"مثال 3 (صعب): pagination باك اند", level:"صعب", runnable:true,
code:`const allUsers = Array.from({length: 25}, (_,i) => "user"+(i+1));\nfunction paginate(arr, page, limit) {\n  const start = (page - 1) * limit;\n  return arr.slice(start, start + limit);\n}\nconsole.log("صفحة 2:", paginate(allUsers, 2, 10));`,
output:`صفحة 2: [ 'user11',...,'user20' ]`,
note:"نفس الفكرة اللي هتستخدمها مع ?page=2&limit=10 في الـ API."}
],
exercise:"عندك مصفوفة طلبات [{total:200},{total:500},{total:100}] — اجمع اللي فوق 150 بس باستخدام for و if.",
quiz:{q:"عايز توقف اللوب أول ما تلاقي اليوزر — تستخدم؟", options:["continue","break","return back","skip"], answer:1}
}
]}
,
{
id:"m2", title:"المرحلة 2: الفانكشنز والمصفوفات والنصوص", desc:"أدوات الشغل اليومي: معالجة الداتا والتحقق منها.",
lessons:[
{id:"m2l0", title:"الفانكشنز و Arrow و Rest/Spread", elzero:"الزيرو #056 - #070 (Functions)", level:"مهم",
html:`<ul>
<li>الباك = فانكشنز صغيرة: <code>validateUser()</code>، <code>hashPassword()</code>، <code>getOrders()</code>.</li>
<li><code>Arrow function</code> هي الستايل الغالب في الباك: <code>const add = (a,b) => a+b</code>.</li>
<li><code>Default params</code> للقيم الاحتياطية (limit = 10)، و <code>Rest ...</code> لتجميع عدد متغير من البراميترز.</li>
<li><code>Spread</code> لدمج الكائنات (مثال: دمج بيانات اليوزر + بيانات إضافية).</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): Arrow", level:"سهل", runnable:true,
code:`const calcTax = (price) => price * 0.14;\nconsole.log("ضريبة 1000 =", calcTax(1000));`,
output:`ضريبة 1000 = 140`},
{title:"مثال 2 (متوسط): Default + Rest", level:"متوسط", runnable:true,
code:`function orderSummary(customer, ...items) {\n  return \`\${customer} طلب \${items.length} منتجات\`;\n}\nconsole.log(orderSummary("أحمد", "موبايل", "جراب", "شاحن"));\nfunction getPage(page = 1, limit = 10) {\n  return \`page=\${page}&limit=\${limit}\`;\n}\nconsole.log(getPage());\nconsole.log(getPage(3));`,
output:`أحمد طلب 3 منتجات\npage=1&limit=10\npage=3&limit=10`},
{title:"مثال 3 (صعب): Spread لدمج بيانات", level:"صعب", runnable:true,
code:`const user = { name: "سارة", email: "s@mail.com" };\nconst extra = { role: "admin", active: true };\nconst fullUser = { id: Date.now(), ...user, ...extra };\nconsole.log(fullUser);`,
output:`{ id: ..., name: 'سارة', email: 's@mail.com', role: 'admin', active: true }`}
],
exercise:"اكتب arrow function اسمها calcShipping بتاخد total ولو فوق 500 الشحن مجاني (0) وإلا 30.",
quiz:{q:"...args في function f(...args) اسمها؟", options:["Spread","Rest params","Loop","Callback"], answer:1}
},
{id:"m2l1", title:"مصفوفات الباك اند (اللي هتستخدمها كل يوم)", elzero:"الزيرو #071 - #090 (Arrays + Methods)", level:"مهم",
html:`<ul>
<li>دول أهم 10 للباك — احفظهم: <code>push, map, filter, find, includes, slice, splice, join, sort, length</code>.</li>
<li><code>map</code> تحوّل كل عنصر، <code>filter</code> تختار اللي يحقق شرط، <code>find</code> تجيب أول واحد.</li>
<li>الباقي بتاع الفرونت (مثل ترتيب DOM) مش مهم ليك.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): push و includes", level:"سهل", runnable:true,
code:`const emails = ["a@mail.com"];\nemails.push("b@mail.com");\nconsole.log(emails);\nconsole.log("موجود؟", emails.includes("b@mail.com"));`,
output:`[ 'a@mail.com', 'b@mail.com' ]\nموجود؟ true`},
{title:"مثال 2 (متوسط): filter طلبات مدفوعة", level:"متوسط", runnable:true,
code:`const orders = [\n  { id: 1, paid: true, total: 300 },\n  { id: 2, paid: false, total: 150 },\n  { id: 3, paid: true, total: 700 },\n];\nconst paid = orders.filter(o => o.paid);\nconsole.log("عدد المدفوع:", paid.length);\nconst big = orders.find(o => o.total > 500);\nconsole.log("أكبر طلب:", big.id);`,
output:`عدد المدفوع: 2\nأكبر طلب: 3`},
{title:"مثال 3 (صعب): map لتنظيف الداتا قبل الرد", level:"صعب", runnable:true,
code:`const users = [\n  { name: "Ali", password: "secret123", email: "a@m.com" },\n  { name: "Sara", password: "xxx", email: "s@m.com" },\n];\n// ⚠️ ممنوع ترجع الباسورد للعميل أبدا!\nconst safe = users.map(u => ({ name: u.name, email: u.email }));\nconsole.log(safe);`,
output:`[ { name: 'Ali', email: 'a@m.com' }, ... ]`,
note:"درس أمني مهم: دايما نظّف الداتا الحساسة قبل ما ترد."}
],
exercise:"عندك منتجات [{name,price}] — استعمل filter تجيب اللي سعره فوق 200، و map تجيب أساميهم بس.",
quiz:{q:"عايز كل الطلبات المدفوعة من مصفوفة — تستخدم؟", options:["map","find","filter","slice"], answer:2}
},
{id:"m2l2", title:"النصوص والأرقام للتحقق والتنسيق", elzero:"الزيرو (String Methods + Numbers + Math)", level:"مهم",
html:`<ul>
<li>للتحقق: <code>trim, includes, startsWith, endsWith, split, toLowerCase</code>.</li>
<li>للأرقام: <code>Number(), parseInt, toFixed(2), Math.round, Math.random</code> (للأكواد والـ OTP).</li>
<li>في الباك: تنظيف الايميل (trim + lowercase)، التأكد من رقم الموبايل، تقريب الأسعار.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): تنظيف ايميل", level:"سهل", runnable:true,
code:`const raw = "  ALI@Mail.com  ";\nconst clean = raw.trim().toLowerCase();\nconsole.log(clean);\nconsole.log("ايميل صحيح؟", clean.includes("@"));`,
output:`ali@mail.com\nايميل صحيح؟ true`},
{title:"مثال 2 (متوسط): تنسيق سعر", level:"متوسط", runnable:true,
code:`const price = 199.9876;\nconsole.log(price.toFixed(2)); // "199.99"\nconsole.log(Math.round(price)); // 200\nconsole.log(Number("250") + 50); // 300`,
output:`199.99\n200\n300`},
{title:"مثال 3 (صعب): كود تحقق OTP", level:"صعب", runnable:true,
code:`function makeOTP() {\n  return Math.floor(100000 + Math.random() * 900000); // 6 أرقام\n}\nconsole.log("كودك:", makeOTP());\nconst phone = "01001234567";\nconsole.log("موبايل مصري؟", phone.startsWith("01") && phone.length === 11);`,
output:`كودك: 483201 (عشوائي)\nموبايل مصري؟ true`}
],
exercise:"اكتب فانكشن cleanName بتاخد اسم فيه مسافات زيادة وتحوله لـ trimmed + أول حرف كابيتال.",
quiz:{q:"تشيل المسافات من أول وآخر النص؟", options:["split","trim","slice","cut"], answer:1}
}
]}
,
{
id:"m3", title:"المرحلة 3: الكائنات والداتا الحديثة", desc:"JSON و Destructuring و map/filter/reduce و Modules.",
lessons:[
{id:"m3l0", title:"الكائنات + Destructuring + JSON", elzero:"الزيرو #100 - #115 (Objects + Destructuring + JSON)", level:"مهم جدا",
html:`<ul>
<li>الـ API كله كائنات: <code>req.body, req.user, product</code>.</li>
<li><code>Destructuring</code> بتفك الكائن في سطر: <code>const {email, password} = req.body</code> — هتشوفها في كل كود باك.</li>
<li><code>Optional chaining ?.</code> بتحميك من الكراش: <code>user?.address?.city</code>.</li>
<li><code>JSON.stringify</code> تحوّل كائن لنص (للإرسال/التخزين)، و <code>JSON.parse</code> العكس.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): Destructuring", level:"سهل", runnable:true,
code:`const body = { email: "a@mail.com", password: "123456", age: 25 };\nconst { email, password } = body;\nconsole.log(email, password);`,
output:`a@mail.com 123456`},
{title:"مثال 2 (متوسط): ?.", level:"متوسط", runnable:true,
code:`const user1 = { name: "Ali" };\nconsole.log(user1.address?.city ?? "لا يوجد عنوان");\nconst user2 = { name: "Sara", address: { city: "القاهرة" } };\nconsole.log(user2.address?.city);`,
output:`لا يوجد عنوان\nالقاهرة`},
{title:"مثال 3 (صعب): JSON للـ API", level:"صعب", runnable:true,
code:`const product = { id: 1, name: "موبايل", price: 8000 };\nconst text = JSON.stringify(product); // للسيرفر/التخزين\nconsole.log(typeof text, text);\nconst back = JSON.parse(text); // رجعناه كائن\nconsole.log(back.name);`,
output:`string {"id":1,"name":"موبايل","price":8000}\nموبايل`}
],
exercise:"فك الكائن {name, email, role} بـ destructuring، واطبع city بأمان بـ ?. مع قيمة افتراضية.",
quiz:{q:"JSON.stringify بتعمل إيه؟", options:["تحوّل نص لكائن","تحوّل كائن لنص JSON","تحذف الكائن","تشفّر الباسورد"], answer:1}
},
{id:"m3l1", title:"أقوى 3 دوال: map / filter / reduce", elzero:"الزيرو #115 - #125 (Higher Order + Map/Filter/Reduce)", level:"مهم جدا",
html:`<ul>
<li>دول قلب معالجة الداتا في الباك اند — أي انترفيو باك هيسألك فيهم.</li>
<li><code>map</code> = تحويل، <code>filter</code> = فلترة، <code>reduce</code> = تجميع (مجموع/إحصائيات).</li>
<li>ميزتهم: سطر واحد بدل لوب كامل، ومش بيعدّلوا الأصل (immutable).</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): map", level:"سهل", runnable:true,
code:`const prices = [100, 200, 300];\nconst withTax = prices.map(p => p * 1.14);\nconsole.log(withTax);`,
output:`[ 114, 228, 342 ]`},
{title:"مثال 2 (متوسط): filter + map معا", level:"متوسط", runnable:true,
code:`const products = [\n  { name: "A", price: 100, stock: 5 },\n  { name: "B", price: 500, stock: 0 },\n  { name: "C", price: 300, stock: 2 },\n];\nconst available = products\n  .filter(p => p.stock > 0)\n  .map(p => p.name);\nconsole.log(available); // ["A","C"]`,
output:`[ 'A', 'C' ]`},
{title:"مثال 3 (صعب): reduce لحساب مبيعات", level:"صعب", runnable:true,
code:`const orders = [\n  { total: 200 }, { total: 500 }, { total: 150 },\n];\nconst revenue = orders.reduce((sum, o) => sum + o.total, 0);\nconsole.log("إجمالي المبيعات:", revenue);\n// إحصائية متقدمة\nconst stats = orders.reduce((acc, o) => ({\n  count: acc.count + 1, sum: acc.sum + o.total\n}), { count: 0, sum: 0 });\nconsole.log(stats);`,
output:`إجمالي المبيعات: 850\n{ count: 3, sum: 850 }`}
],
exercise:"من مصفوفة طلبات احسب بـ reduce متوسط الأسعار (المجموع / العدد).",
quiz:{q:"عايز مجموع عمود total من مصفوفة طلبات؟", options:["map","filter","reduce","find"], answer:2}
},
{id:"m3l2", title:"الـ Modules (تنظيم كود السيرفر)", elzero:"الزيرو OOP + Modules + شرح NPM", level:"مهم جدا",
html:`<ul>
<li>مشروع الباك متقسم ملفات: <code>routes/, controllers/, models/, middlewares/</code> — والرابط بينهم هو Modules.</li>
<li>نوعين: <code>CommonJS (require/module.exports)</code> القديم، و <code>ESM (import/export)</code> الحديث — اختار واحد وكمل بيه.</li>
<li>لو <code>package.json</code> فيه <code>\"type\":\"module\"</code> استعمل import، غير كده require.</li>
</ul>`,
examples:[
{title:"مثال 1: CommonJS", level:"سهل", runnable:false,
code:`// utils.js\nfunction calcTax(p){ return p * 0.14; }\nmodule.exports = { calcTax };\n\n// index.js\nconst { calcTax } = require("./utils");\nconsole.log(calcTax(1000)); // 140`,
output:`140`},
{title:"مثال 2: ESM الحديث", level:"متوسط", runnable:false,
code:`// utils.js\nexport const calcTax = (p) => p * 0.14;\nexport const PORT = 3000;\n\n// index.js\nimport { calcTax, PORT } from "./utils.js";\nconsole.log(PORT, calcTax(1000));`,
output:`3000 140`},
{title:"مثال 3 (صعب): تقسيمة مشروع حقيقي", level:"صعب", runnable:false,
code:`// project/\n// ├── index.js          (يشغّل السيرفر)\n// ├── routes/users.js   (المسارات)\n// ├── controllers/users.js (المنطق)\n// ├── models/User.js    (الداتابيز)\n// └── middlewares/auth.js (الحماية)\n// كل ملف يعمل export والـ index يعمل import`,
output:`تنظيم يخلي المشروع قابل للتوسع`}
],
exercise:"اعمل ملفين: math.js فيه دالة sum وتصدّرها، و app.js يستوردها ويطبع sum(2,3). جرّب الطريقتين.",
quiz:{q:"في ESM عشان تستورد ملف محلي لازم؟", options:["require()","import ... from './x.js' بامتداد .js","copy paste","include()"], answer:1}
}
]}
,
{
id:"m4", title:"المرحلة 4: جافاسكريبت متقدمة للباك", desc:"Closure و OOP و Errors و Regex.",
lessons:[
{id:"m4l0", title:"Scope و Closure و this", elzero:"الزيرو Scope + Closure + this", level:"متقدم",
html:`<ul>
<li><code>Scope</code>: المتغير عايش فين؟ global (كل الملف) vs local (جوه فانكشن/بلوك).</li>
<li><code>Closure</code>: فانكشن فاكرة المتغيرات اللي اتولدت معاها — بتستخدم في عدادات الطلبات والـ rate limiter والـ middleware factory.</li>
<li><code>this</code>: في الباك مع classes بتشاور على الكائن الحالي. ومع Arrow بتورث اللي بره — سبب لخبطة شائعة.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): scope", level:"سهل", runnable:true,
code:`const dbUrl = "global-DB"; // global\nfunction connect() {\n  const password = "local-secret"; // local\n  console.log(dbUrl, "+ connected");\n}\nconnect();\n// console.log(password) // ❌ مش ظاهرة بره`,
output:`global-DB + connected`},
{title:"مثال 2 (متوسط): Closure عداد طلبات", level:"متوسط", runnable:true,
code:`function makeCounter() {\n  let count = 0; // محبوسة جوه الـ closure\n  return () => ++count;\n}\nconst requests = makeCounter();\nconsole.log(requests()); // 1\nconsole.log(requests()); // 2\nconsole.log(requests()); // 3`,
output:`1\n2\n3`},
{title:"مثال 3 (صعب): Closure = Rate Limiter", level:"صعب", runnable:true,
code:`function rateLimiter(max) {\n  let calls = 0;\n  return (ip) => {\n    calls++;\n    if (calls > max) return \`⛔ \${ip} اتحظر - تجاوزت \${max}\`;\n    return \`✅ \${ip} طلب رقم \${calls}\`;\n  };\n}\nconst limit = rateLimiter(2);\nconsole.log(limit("1.2.3.4"));\nconsole.log(limit("1.2.3.4"));\nconsole.log(limit("1.2.3.4"));`,
output:`✅ 1.2.3.4 طلب رقم 1\n✅ 1.2.3.4 طلب رقم 2\n⛔ 1.2.3.4 اتحظر - تجاوزت 2`}
],
exercise:"اعمل closure اسمها bankAccount فيها balance وتدعم deposit/withdraw بدون ما حد يقدر يعدل balance مباشرة.",
quiz:{q:"Closure يعني؟", options:["فانكشن بتنسى متغيراتها","فانكشن فاكرة النطاق اللي اتولدت فيه","نوع لوب","مكتبة"], answer:1}
},
{id:"m4l1", title:"OOP والـ Error Handling", elzero:"الزيرو OOP (Classes + Prototype) + Exceptions", level:"متقدم",
html:`<ul>
<li>في الباك: <code>class User, class Product</code> + <code>try/catch</code> حول أي حاجة ممكن تفشل (داتابيز، ملف، API خارجي).</li>
<li>اعمل <code>Custom Error</code> برسالة و statusCode عشان الـ API يرد بشكل موحد.</li>
<li><code>throw</code> بتوقف التنفيذ وترمي الخطأ لأقرب catch.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): class", level:"سهل", runnable:true,
code:`class Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n  withTax() { return this.price * 1.14; }\n}\nconst p = new Product("موبايل", 1000);\nconsole.log(p.name, p.withTax());`,
output:`موبايل 1140`},
{title:"مثال 2 (متوسط): try/catch", level:"متوسط", runnable:true,
code:`function getUser(id) {\n  try {\n    if (!id) throw new Error("ID ناقص!");\n    return { id, name: "Ali" };\n  } catch (e) {\n    return { error: e.message, status: 400 };\n  }\n}\nconsole.log(getUser());\nconsole.log(getUser(5));`,
output:`{ error: 'ID ناقص!', status: 400 }\n{ id: 5, name: 'Ali' }`},
{title:"مثال 3 (صعب): Custom API Error", level:"صعب", runnable:true,
code:`class ApiError extends Error {\n  constructor(message, status) {\n    super(message);\n    this.status = status;\n  }\n}\nfunction pay(amount) {\n  if (amount <= 0) throw new ApiError("المبلغ غير صالح", 400);\n  if (amount > 10000) throw new ApiError("تجاوزت الحد", 402);\n  return "✅ تم الدفع";\n}\ntry { console.log(pay(20000)); }\ncatch (e) { console.log(e.status, e.message); }`,
output:`402 تجاوزت الحد`}
],
exercise:"اعمل class Order فيها items و method total() تحسب المجموع، وفانكشن تدفع وتعمل throw لو المجموع صفر.",
quiz:{q:"ليه نحط كود الداتابيز جوه try/catch؟", options:["شكل حلو","عشان نمسك أي فشل ونرد بخطأ منظم بدل ما السيرفر يقع","عشان السرعة","إجباري من الشرطة"], answer:1}
},
{id:"m4l2", title:"التاريخ والـ Regex (التحقق الحقيقي)", elzero:"الزيرو Date + Regular Expression", level:"متقدم",
html:`<ul>
<li><code>Date</code>: تسجيل <code>createdAt</code>، حساب انتهاء التوكن، فرق التواريخ.</li>
<li><code>Regex</code>: أقوى أداة تحقق (ايميل، باسورد قوي، موبايل) — استعملها في الـ validation middleware.</li>
<li>نصيحة باك: متخترعش regex معقد — استعمل المشهور والمجرّب.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): Date", level:"سهل", runnable:true,
code:`const now = new Date();\nconsole.log(now.toISOString());\nconst tokenExp = new Date(Date.now() + 60*60*1000); // + ساعة\nconsole.log("التوكن ينتهي:", tokenExp.toLocaleString("ar-EG"));`,
output:`2026-... (تاريخ الآن)\nالتوكن ينتهي: ...`},
{title:"مثال 2 (متوسط): تحقق ايميل", level:"متوسط", runnable:true,
code:`const emailRe = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconsole.log(emailRe.test("ali@mail.com")); // true\nconsole.log(emailRe.test("ali.com"));       // false`,
output:`true\nfalse`},
{title:"مثال 3 (صعب): باسورد قوي", level:"صعب", runnable:true,
code:`// 8+ حروف، حرف كابيتال، حرف سمول، رقم\nconst passRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;\nconsole.log("123456:", passRe.test("123456"));\nconsole.log("Ahmed123:", passRe.test("Ahmed123"));`,
output:`123456: false\nAhmed123: true`}
],
exercise:"اكتب regex يقبل رقم موبايل مصري (11 رقم يبدأ بـ 01) وجرّبه على 3 أرقام.",
quiz:{q:"/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ بتتحقق من؟", options:["موبايل","ايميل","باسورد","تاريخ"], answer:1}
}
]}
,
{
id:"m5", title:"المرحلة 5: الـ Async (قلب الباك اند)", desc:"Event Loop و Promises و async/await — أهم مرحلة.",
lessons:[
{id:"m5l0", title:"Event Loop و Callbacks", elzero:"الزيرو Asynchronous + Callbacks", level:"قلب الباك",
html:`<ul>
<li>السيرفر بيستقبل <b>آلاف الطلبات في نفس الوقت</b> — السر في <code>Event Loop</code>: أي عملية بطيئة (داتابيز/ملف) بتترمي على جنب والسيرفر يكمل، ولما تخلص يرجع لها.</li>
<li><code>Callback</code> = فانكشن بتتنفذ لما العملية تخلص. مشكلتها <b>Callback Hell</b> (هرم صعب القراءة).</li>
<li><code>setTimeout</code> أبسط مثال على عملية غير متزامنة.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): متزامن vs غير متزامن", level:"سهل", runnable:true,
code:`console.log("1: استقبل طلب");\nsetTimeout(() => console.log("2: الداتابيز ردت (بعد ثانيتين)"), 100);\nconsole.log("3: السيرفر استقبل طلب تاني ومستناش!");`,
output:`1: استقبل طلب\n3: السيرفر استقبل طلب تاني ومستناش!\n2: الداتابيز ردت (بعد ثانيتين)`},
{title:"مثال 2 (متوسط): Callback", level:"متوسط", runnable:true,
code:`function getUser(id, callback) {\n  setTimeout(() => callback({ id, name: "Ali" }), 100);\n}\ngetUser(1, (user) => console.log("وصل اليوزر:", user.name));\nconsole.log("... السيرفر مكمل شغل");`,
output:`... السيرفر مكمل شغل\nوصل اليوزر: Ali`},
{title:"مثال 3 (صعب): Callback Hell (ليه هنهرب منه)", level:"صعب", runnable:true,
code:`// ❌ شكل الكود القديم - هرم مرعب\n// getUser(1, u => getOrders(u, o => getPay(o, p => console.log(p))))\nconsole.log("كل عملية مستنية اللي قبلها = كود يصعب صيانته");\nconsole.log("الحل: Promises ثم async/await (الدرسين الجايين) ✅");`,
output:`كل عملية مستنية اللي قبلها = كود يصعب صيانته\nالحل: Promises ثم async/await ✅`}
],
exercise:"اكتب فانكشن orderPizza بتاخد callback وتنده عليه بعد ثانية برسالة 'البيتزا جاهزة 🍕'.",
quiz:{q:"ليه Node سريع مع آلاف الطلبات؟", options:["بيشغّل كل طلب في جهاز لوحده","Event Loop غير متزامن مبيستناش العمليات البطيئة","بيمنع الـ async","عشان لونه أخضر"], answer:1}
},
{id:"m5l1", title:"Promises (.then / .catch)", elzero:"الزيرو Promises", level:"قلب الباك",
html:`<ul>
<li><code>Promise</code> = وعد بنتيجة مستقبلية: <code>pending → fulfilled ✅ أو rejected ❌</code>.</li>
<li>بتتعامل معاها بـ <code>.then()</code> للنجاح و <code>.catch()</code> للفشل — وتقدر تعمل <b>سلسلة then</b> بدل الهرم.</li>
<li>كل مكتبات الباك الحديثة (mongoose, axios, fs/promises) بترجع Promises.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): promise ناجحة وفاشلة", level:"سهل", runnable:true,
code:`const ok = Promise.resolve("✅ الداتا وصلت");\nok.then(msg => console.log(msg));\nconst fail = Promise.reject(new Error("❌ الداتابيز واقعة"));\nfail.catch(e => console.log(e.message));`,
output:`✅ الداتا وصلت\n❌ الداتابيز واقعة`},
{title:"مثال 2 (متوسط): سلسلة عمليات", level:"متوسط", runnable:true,
code:`function findUser(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => id > 0 ? resolve({ id, name: "Ali" }) : reject(new Error("يوزر غلط")), 100);\n  });\n}\nfindUser(1)\n  .then(u => { console.log("يوزر:", u.name); return u; })\n  .then(u => console.log("هنجيب طلباته بعد كده..."))\n  .catch(e => console.log("خطأ:", e.message));`,
output:`يوزر: Ali\nهنجيب طلباته بعد كده...`},
{title:"مثال 3 (صعب): Promise.all", level:"صعب", runnable:true,
code:`const p1 = new Promise(r => setTimeout(() => r("منتجات ✅"), 200));\nconst p2 = new Promise(r => setTimeout(() => r("يوزر ✅"), 100));\n// بدل ما تستنى 300ms ورا بعض → الاتنين مع بعض\nPromise.all([p1, p2]).then(all => console.log(all));`,
output:`[ 'منتجات ✅', 'يوزر ✅' ]`,
note:"Promise.all مهمة في الباك: هات اليوزر وطلباته ومنتجاته في نفس الوقت بدل التتابع البطيء."}
],
exercise:"اعمل promise اسمها pay بتتحل بعد ثانية بـ 'تم الدفع' لو المبلغ > 0 وإلا بتترفض، واتعامل معاها بـ then/catch.",
quiz:{q:"Promise.all بتعمل إيه؟", options:["تشغّل وعود بالتوازي وتستنى الكل","تلغي الوعود","تشغّل واحد بس","تحوّل الكود لمتزامن"], answer:0}
},
{id:"m5l2", title:"async / await (الطريقة الحديثة)", elzero:"الزيرو Async/Await + Fetch", level:"قلب الباك",
html:`<ul>
<li><code>async/await</code> سكر فوق الـ Promises — بتكتب كود غير متزامن <b>كأنه متزامن وسطر ورا سطر</b>.</li>
<li>أي فانكشن <code>async</code> بترجع promise. جواها استعمل <code>await</code> للاستنظار + <code>try/catch</code> للأخطاء.</li>
<li>دي الطريقة اللي هتكتب بيها <b>99% من كود الباك</b> (controllers + DB).</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): أول async", level:"سهل", runnable:true,
code:`function wait(ms) { return new Promise(r => setTimeout(r, ms)); }\nasync function main() {\n  console.log("ببدأ...");\n  await wait(100);\n  console.log("خلصت بعد الانتظار ✅");\n}\nmain();`,
output:`ببدأ...\nخلصت بعد الانتظار ✅`},
{title:"مثال 2 (متوسط): try/catch مع await", level:"متوسط", runnable:true,
code:`function login(email) {\n  return new Promise((res, rej) =>\n    setTimeout(() => email.includes("@") ? res({ token: "JWT-123" }) : rej(new Error("ايميل غلط")), 100));\n}\nasync function run() {\n  try {\n    const r = await login("a@mail.com");\n    console.log("دخلت:", r.token);\n  } catch (e) { console.log("فشل:", e.message); }\n}\nrun();`,
output:`دخلت: JWT-123`},
{title:"مثال 3 (صعب): جلب متوازي + تسلسلي", level:"صعب", runnable:true,
code:`const fakeFetch = (x, ms) => new Promise(r => setTimeout(() => r(x), ms));\nasync function dashboard() {\n  console.time("وقت");\n  const [user, orders] = await Promise.all([fakeFetch("Ali", 200), fakeFetch([1,2,3], 200)]);\n  console.log("داشبورد:", user, "طلباته:", orders.length);\n  console.timeEnd("وقت"); // ~200ms بدل 400ms ✅\n}\ndashboard();`,
output:`داشبورد: Ali طلباته: 3\nوقت: ~200ms`}
],
exercise:"اكتب async فانكشن getProfile بتعمل await لعمليتين (يوزر + طلباته) بـ Promise.all وتطبعهم، مع try/catch.",
quiz:{q:"await لازم تتكتب جوه؟", options:["أي فانكشن عادية","فانكشن async فقط","ملف HTML","الـ CSS"], answer:1}
}
]}
,
{
id:"m6", title:"المرحلة 6: Node.js الأساس", desc:"NPM و الملفات و بناء سيرفر خام.",
lessons:[
{id:"m6l0", title:"NPM و package.json و dotenv", elzero:"شرح NPM + NodeJs Package Manager", level:"باك عملي",
html:`<ul>
<li><code>npm init -y</code> → ملف package.json (بطاقة المشروع). <code>npm i express</code> → ينزل مكتبة. <code>npm i -D nodemon</code> → للتجربة فقط.</li>
<li>ملف <code>.env</code> للأسرار (باسورد الداتابيز، JWT_SECRET) — <b>عمرك ما ترفعه على GitHub</b> (حطه في .gitignore).</li>
<li>مكتبة <code>dotenv</code> بتقرا الـ .env وتحطها في <code>process.env</code>.</li>
</ul>`,
examples:[
{title:"مثال 1: أوامر التيرمينال", level:"سهل", runnable:false,
code:`npm init -y\nnpm i express dotenv mongoose bcryptjs jsonwebtoken\nnpm i -D nodemon\nnode --watch index.js   # يعيد التشغيل تلقائيا`,
output:`جهزت مشروع باك اند حقيقي ✅`},
{title:"مثال 2: ملف .env", level:"متوسط", runnable:false,
code:`# .env (أسرار - مترفعوش!)\nPORT=5000\nMONGO_URL=mongodb://localhost:27017/shop\nJWT_SECRET=my_super_secret_123\n\n# index.js\nimport "dotenv/config";\nconsole.log(process.env.PORT); // 5000`,
output:`5000`},
{title:"مثال 3: scripts عملية", level:"صعب", runnable:false,
code:`// package.json\n{\n  "scripts": {\n    "start": "node index.js",\n    "dev": "node --watch index.js"\n  }\n}`,
output:`npm run dev للتطوير / npm start للإنتاج`}
],
exercise:"اعمل مشروع جديد، نزّل express و dotenv، واعمل .env فيه PORT=4000 واقراه بـ process.env.",
quiz:{q:"فايدة ملف .env؟", options:["تنسيق الصفحة","تخزين الأسرار خارج الكود","تسريع النت","ترجمة الموقع"], answer:1}
},
{id:"m6l1", title:"الملفات والأحداث (fs / path / events)", elzero:"تطبيقات عملية على JS", level:"باك عملي",
html:`<ul>
<li><code>fs</code> للملفات (سجلات logs، رفع صور، قراءة إعدادات). استعمل نسخة الـ promises مع await.</li>
<li><code>path.join</code> لبناء مسارات شغالة على أي نظام (ويندوز/لينكس).</li>
<li><code>EventEmitter</code> هو نفس فكرة أحداث السيرفر (userRegistered → ابعت ايميل).</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): تسجيل طلب في ملف", level:"سهل", runnable:false,
code:`import fs from "node:fs/promises";\n\nasync function logVisit(ip) {\n  const line = \`\${new Date().toISOString()} - \${ip}\\n\`;\n  await fs.appendFile("visits.log", line);\n  console.log("اتسجلت ✅");\n}\nawait logVisit("1.2.3.4");`,
output:`اتسجلت ✅ (+ سطر جديد في visits.log)`},
{title:"مثال 2 (متوسط): path الآمن", level:"متوسط", runnable:true,
code:`// محاكاة لبناء مسار آمن\nconst folder = "uploads";\nconst file = "img.png";\nconst full = folder + "/" + file;\nconsole.log(full); // uploads/img.png\nconsole.log("استعمل path.join في Node الحقيقي لنفس النتيجة بأمان");`,
output:`uploads/img.png`},
{title:"مثال 3 (صعب): EventEmitter", level:"صعب", runnable:false,
code:`import { EventEmitter } from "node:events";\nconst bus = new EventEmitter();\nbus.on("userRegistered", (u) => console.log("📧 ابعت ايميل ترحيب لـ", u));\nbus.on("userRegistered", (u) => console.log("📝 سجل في التحليلات:", u));\nbus.emit("userRegistered", "ali@mail.com");`,
output:`📧 ابعت ايميل ترحيب لـ ali@mail.com\n📝 سجل في التحليلات: ali@mail.com`,
note:"نفس الفكرة في أنظمة حقيقية: حدث واحد → كذا مستمع."}
],
exercise:"اكتب سكريبت يقرا ملف users.json بـ fs ويطبع عدد اليوزرز (استعمل try/catch).",
quiz:{q:"أي موديول Node للملفات؟", options:["dom","fs","window","css"], answer:1}
},
{id:"m6l2", title:"ابنِ سيرفر بـ http بدون فريمورك", elzero:"أساسيات قبل Express", level:"باك عملي",
html:`<ul>
<li>موديول <code>http</code> الخام يوريك السيرفر شغال إزاي من جوه: <code>req.url + req.method → routing يدوي → res.end(JSON)</code>.</li>
<li>مش هتستعمله في شغل حقيقي (Express أسهل)، بس فهمه يخليك فاهم Express بيعمل إيه.</li>
<li>لازم <code>Content-Type: application/json</code> عشان العميل يفهم الرد.</li>
</ul>`,
examples:[
{title:"مثال 1: أبسط سيرفر", level:"سهل", runnable:false,
code:`import http from "node:http";\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "application/json" });\n  res.end(JSON.stringify({ msg: "أهلا من سيرفر Node الخام 🚀" }));\n});\nserver.listen(3000, () => console.log("http://localhost:3000"));`,
output:`افتح http://localhost:3000 وشوف الرد`},
{title:"مثال 2 (متوسط): routing يدوي", level:"متوسط", runnable:false,
code:`const server = http.createServer((req, res) => {\n  res.setHeader("Content-Type", "application/json");\n  if (req.url === "/products" && req.method === "GET")\n    return res.end(JSON.stringify([{ id: 1, name: "موبايل" }]));\n  if (req.url === "/health")\n    return res.end(JSON.stringify({ ok: true }));\n  res.writeHead(404);\n  res.end(JSON.stringify({ error: "Not found" }));\n});`,
output:`GET /products → ليستة | غير كده → 404`},
{title:"مثال 3 (صعب): قراءة body الـ POST", level:"صعب", runnable:false,
code:`// الـ body بييجي على دفعات (chunks) - لازم تجمعه\nlet body = "";\nreq.on("data", chunk => body += chunk);\nreq.on("end", () => {\n  const data = JSON.parse(body || "{}");\n  console.log("وصل:", data);\n});\n// Express بيعمل كل ده بسطر واحد: app.use(express.json()) ✅`,
output:`فهمت ليه Express مريح؟`}
],
exercise:"اعمل سيرفر خام فيه مسارين: / (يرجع welcome) و /time (يرجع الوقت الحالي).",
quiz:{q:"ليه بنستعمل Express بدل http الخام؟", options:["ألوان أحلى"," routing و middlewares و JSON جاهزين","أسرع نت","عشان الفرونت"], answer:1}
}
]}
,
{
id:"m7", title:"المرحلة 7: Express و REST API", desc:"قلب الشغل الحقيقي: routes و CRUD.",
lessons:[
{id:"m7l0", title:"أول API بـ Express", elzero:"Express.js Backend شرح عربي", level:"مشروع",
html:`<ul>
<li><code>Express</code> هو أشهر فريمورك باك لـ Node: routing سهل + middlewares + JSON جاهز.</li>
<li>الأساس 5 سطور: <code>import express → const app → app.get → app.listen</code>.</li>
<li><code>req.params</code> للـ ID في الرابط (/users/5)، و <code>req.query</code> للفلاتر (?page=2).</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): أهلا Express", level:"سهل", runnable:false,
code:`import express from "express";\nconst app = express();\napp.use(express.json()); // ✅ يفهم JSON\n\napp.get("/", (req, res) => res.json({ msg: "أهلا API 🚀" }));\napp.listen(3000, () => console.log("http://localhost:3000"));`,
output:`GET / → { msg: "أهلا API 🚀" }`},
{title:"مثال 2 (متوسط): params و query", level:"متوسط", runnable:false,
code:`// GET /users/7  →  { id: "7" }\napp.get("/users/:id", (req, res) => {\n  res.json({ userId: req.params.id });\n});\n// GET /products?page=2&limit=10\napp.get("/products", (req, res) => {\n  const { page = 1, limit = 10 } = req.query;\n  res.json({ page: Number(page), limit: Number(limit) });\n});`,
output:`params للـ ID / query للفلترة والصفحات`},
{title:"مثال 3 (صعب): تنظيم routes", level:"صعب", runnable:false,
code:`// routes/products.js\nimport { Router } from "express";\nconst r = Router();\nr.get("/", (req, res) => res.json([]));\nr.post("/", (req, res) => res.status(201).json(req.body));\nexport default r;\n\n// index.js\nimport products from "./routes/products.js";\napp.use("/api/products", products);`,
output:`/api/products → ملف منفصل منظم ✅`}
],
exercise:"اعمل API فيه GET /hello يرجع اسمك، و GET /users/:id يرجع الـ id اللي في الرابط.",
quiz:{q:"الفرق بين params و query؟", options:["مفيش فرق","params جزء من المسار (/users/5) و query فلترة اختيارية (?page=2)","query أسرع","params للفرونت"], answer:1}
},
{id:"m7l1", title:"CRUD كامل + Status Codes", elzero:"REST API تطبيقات", level:"مشروع",
html:`<ul>
<li><b>CRUD</b> = Create (POST) - Read (GET) - Update (PUT/PATCH) - Delete (DELETE).</li>
<li>أكواد الرد: <code>200 نجاح / 201 اتعمل / 400 داتا غلط / 401 مش مسجل / 403 ممنوع / 404 مش موجود / 500 خطأ سيرفر</code>.</li>
<li>القاعدة: <b>validate أولا → نفّذ → رد بالكود الصح + JSON موحد</b>.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): ذاكرة مؤقتة بدل DB", level:"سهل", runnable:true,
code:`let products = [{ id: 1, name: "موبايل", price: 8000 }];\n// GET الكل\nconsole.log("المنتجات:", products.length);\n// POST منتج جديد\nproducts.push({ id: 2, name: "سماعة", price: 500 });\nconsole.log("بعد الإضافة:", products.length);`,
output:`المنتجات: 1\nبعد الإضافة: 2`},
{title:"مثال 2 (متوسط): الـ CRUD الخمسة", level:"متوسط", runnable:false,
code:`app.get("/api/products", getAll);       // قراءة الكل\napp.get("/api/products/:id", getOne);   // قراءة واحد\napp.post("/api/products", create);       // 201 إنشاء\napp.put("/api/products/:id", update);    // تعديل كامل\napp.delete("/api/products/:id", remove); // 204 حذف`,
output:`5 مسارات = CRUD كامل`},
{title:"مثال 3 (صعب): controller حقيقي + validation", level:"صعب", runnable:false,
code:`export async function createProduct(req, res, next) {\n  try {\n    const { name, price } = req.body;\n    if (!name || typeof price !== "number")\n      return res.status(400).json({ error: "name و price مطلوبين" });\n    if (price <= 0)\n      return res.status(400).json({ error: "السعر لازم يكون موجب" });\n    const product = await Product.create({ name, price }); // DB\n    res.status(201).json({ data: product });\n  } catch (e) { next(e); }\n}`,
output:`201 + المنتج | 400 + رسالة واضحة | 500 عبر next`}
],
exercise:"اكتب endpoints منتجات كاملة (خمسة) على ورق: الميثود + المسار + الكود المتوقع.",
quiz:{q:"أنشأت منتج جديد بنجاح — الكود الصح؟", options:["200","201","404","500"], answer:1}
},
{id:"m7l2", title:"Middleware (حراس السيرفر)", elzero:"تطبيقات Express متقدمة", level:"مشروع",
html:`<ul>
<li><code>Middleware</code> = فانكشن بتتنفذ <b>بين الطلب والرد</b>: <code>(req, res, next)</code>.</li>
<li>استخدامات: تسجيل الطلبات (logger)، الحماية (auth)، التحقق (validation)، مسك الأخطاء.</li>
<li>الترتيب مهم! و <code>next()</code> هي اللي بتعدّي للي بعده، ولو منادتهاش الطلب هيعلق.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): logger", level:"سهل", runnable:false,
code:`app.use((req, res, next) => {\n  console.log(\`\${req.method} \${req.url} - \${new Date().toISOString()}\`);\n  next(); // ✅ عدّي للي بعده\n});`,
output:`GET /api/products - 2026-...`},
{title:"مثال 2 (متوسط): حارس المصادقة", level:"متوسط", runnable:false,
code:`function auth(req, res, next) {\n  const token = req.headers.authorization;\n  if (!token) return res.status(401).json({ error: "سجّل دخول الأول" });\n  req.user = { id: 1, role: "admin" }; // فك التوكن الحقيقي هنا\n  next();\n}\napp.get("/api/orders", auth, (req, res) => res.json([])); // محمية ✅\napp.get("/api/products", (req, res) => res.json([]));     // عامة`,
output:`/orders محتاجة توكن / /products مفتوحة`},
{title:"مثال 3 (صعب): error handler + 404", level:"صعب", runnable:false,
code:`// 404 لأي مسار مش موجود (آخر حاجة)\napp.use((req, res) => res.status(404).json({ error: "المسار مش موجود" }));\n// ماسك الأخطاء الموحد (4 براميترز!)\napp.use((err, req, res, next) => {\n  console.error(err);\n  res.status(err.status || 500).json({ error: err.message || "خطأ سيرفر" });\n});`,
output:`أي خطأ في أي controller يوصل هنا منظم ✅`}
],
exercise:"اكتب middleware اسمها checkAdmin تمنع أي حد دوره مش admin بـ 403.",
quiz:{q:"نسيت تنادي next() في middleware — إيه اللي يحصل؟", options:["عادي","الطلب هيعلق ومش هيرد","السيرفر هيقع","الداتابيز هتتمسح"], answer:1}
}
]}
,
{
id:"m8", title:"المرحلة 8: قواعد البيانات MongoDB", desc:"تخزين حقيقي بـ Mongoose.",
lessons:[
{id:"m8l0", title:"الاتصال و Schema و Model", elzero:"شرح MongoDB + Mongoose عربي", level:"داتابيز",
html:`<ul>
<li><code>MongoDB</code> داتابيز NoSQL بتخزن <b>مستندات JSON</b> — أنسب واحدة لجافاسكريبت.</li>
<li><code>Schema</code> = شكل الداتا والقواعد (مطلوب؟ نوعه؟). <code>Model</code> = البوابة اللي بتتعامل مع الكولكشن.</li>
<li>الاتصال مرة واحدة عند تشغيل السيرفر بـ <code>mongoose.connect(process.env.MONGO_URL)</code>.</li>
</ul>`,
examples:[
{title:"مثال 1: الاتصال", level:"سهل", runnable:false,
code:`import mongoose from "mongoose";\nawait mongoose.connect(process.env.MONGO_URL);\nconsole.log("✅ متوصل بالداتابيز");`,
output:`✅ متوصل بالداتابيز`},
{title:"مثال 2 (متوسط): Schema منتج", level:"متوسط", runnable:false,
code:`const productSchema = new mongoose.Schema({\n  name: { type: String, required: [true, "الاسم مطلوب"], trim: true },\n  price: { type: Number, required: true, min: [1, "السعر موجب"] },\n  stock: { type: Number, default: 0 },\n}, { timestamps: true }); // ✅ createdAt + updatedAt تلقائيا\nconst Product = mongoose.model("Product", productSchema);`,
output:`Model جاهز للـ CRUD`},
{title:"مثال 3 (صعب): علاقة طلب ↔ يوزر", level:"صعب", runnable:false,
code:`const orderSchema = new mongoose.Schema({\n  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },\n  items: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, qty: Number }],\n  total: Number, status: { type: String, default: "pending" }\n});\n// populate تجيب بيانات اليوزر مع الطلب\nconst order = await Order.findById(id).populate("user", "name email");`,
output:`طلب + بيانات صاحبه في استعلام واحد ✅`}
],
exercise:"اعمل Schema يوزر فيه name (مطلوب) و email (مطلوب + unique) و password (مطلوب + minlength 6).",
quiz:{q:"الفرق بين Schema و Model؟", options:["مفيش فرق","Schema القواعد و Model البوابة للتعامل مع الكولكشن","Model أسرع نت","Schema للفرونت"], answer:1}
},
{id:"m8l1", title:"CRUD بالداتابيز + مشروع منتجات", elzero:"Mongoose CRUD تطبيقات", level:"داتابيز",
html:`<ul>
<li>أهم 6 أوامر: <code>create, find, findById, findByIdAndUpdate, findByIdAndDelete, countDocuments</code>.</li>
<li>دايما <code>await</code> + <code>try/catch</code> لأنها promises.</li>
<li><code>select("-password")</code> عشان مترجعش الحساس.</li>
</ul>`,
examples:[
{title:"مثال 1 (سهل): إنشاء وقراءة", level:"سهل", runnable:false,
code:`const p = await Product.create({ name: "موبايل", price: 8000 });\nconsole.log(p._id);\nconst all = await Product.find(); // الكل\nconst one = await Product.findById(p._id); // واحد`,
output:`اتحفظ في MongoDB ✅`},
{title:"مثال 2 (متوسط): تعديل وحذف", level:"متوسط", runnable:false,
code:`const updated = await Product.findByIdAndUpdate(id, { price: 7500 }, { new: true, runValidators: true });\nawait Product.findByIdAndDelete(id);\n// new:true → رجّع الجديد | runValidators → طبّق القواعد على التعديل`,
output:`اتعدل ✅ / اتمسح ✅`},
{title:"مثال 3 (صعب): controller كامل", level:"صعب", runnable:false,
code:`export async function getProducts(req, res, next) {\n  try {\n    const products = await Product.find().sort("-createdAt").select("-__v");\n    res.json({ count: products.length, data: products });\n  } catch (e) { next(e); }\n}`,
output:`{ count: 5, data: [...] }`}
],
exercise:"اكتب controllers كاملة لمنتجات (getAll, getOne, create, update, delete) بـ Mongoose.",
quiz:{q:"عشان ترجع المنتج بعد التعديل مش قبله؟", options:["{ new: true }","{ old: true }","refresh()","reboot()"], answer:0}
},
{id:"m8l2", title:"بحث وفلترة وصفحات (شغل حقيقي)", elzero:"API Features متقدمة", level:"داتابيز",
html:`<ul>
<li>أي متجر حقيقي فيه: <code>?search=موبايل&minPrice=1000&page=2&limit=10&sort=price</code>.</li>
<li>الأدوات: <code>regex للبحث، gte/lte للأسعار، skip/limit للصفحات، sort للترتيب</code>.</li>
<li>رجّع مع الداتا <code>total + pages</code> عشان الفرونت يعمل أزرار الصفحات.</li>
</ul>`,
examples:[
{title:"مثال 1 (متوسط): بحث وسعر", level:"متوسط", runnable:false,
code:`const { search, minPrice } = req.query;\nconst filter = {};\nif (search) filter.name = { $regex: search, $options: "i" };\nif (minPrice) filter.price = { $gte: Number(minPrice) };\nconst products = await Product.find(filter);`,
output:`فلترة ديناميكية ✅`},
{title:"مثال 2 (صعب): pagination كاملة", level:"صعب", runnable:false,
code:`const page = Number(req.query.page) || 1;\nconst limit = Number(req.query.limit) || 10;\nconst skip = (page - 1) * limit;\nconst [total, data] = await Promise.all([\n  Product.countDocuments(filter),\n  Product.find(filter).sort("-createdAt").skip(skip).limit(limit)\n]);\nres.json({ total, pages: Math.ceil(total / limit), page, data });`,
output:`{ total: 95, pages: 10, page: 2, data: [...] }`},
{title:"مثال 3: جرّب بنفسك (محاكاة)", level:"سهل", runnable:true,
code:`const products = [\n  { name: "موبايل", price: 8000 },\n  { name: "سماعة", price: 500 },\n  { name: "لابتوب", price: 25000 },\n];\nconst min = 1000;\nconst result = products.filter(p => p.price >= min);\nconsole.log("اللي فوق 1000:", result.map(p => p.name));`,
output:`اللي فوق 1000: [ 'موبايل', 'لابتوب' ]`}
],
exercise:"ضيف sort بـ price: لو ?sort=price رتّب تصاعدي، ولو ?sort=-price تنازلي.",
quiz:{q:"skip(20).limit(10) تجيب؟", options:["أول 10","من 21 لـ 30 (صفحة 3)","آخر 10","كل الداتا"], answer:1}
}
]}
,
{
id:"m9", title:"المرحلة 9: الأمان + مشروع التخرج", desc:"تشفير ومصادقة ورفع على سيرفر.",
lessons:[
{id:"m9l0", title:"تشفير الباسورد + JWT", elzero:"bcrypt + JWT شرح", level:"أمان",
html:`<ul>
<li><b>القاعدة الذهبية: ممنوع تخزن باسورد صريح أبدا.</b> خزّن <code>hash</code> بـ <code>bcrypt</code>.</li>
<li>التسجيل: <code>hash(password, 10) → save</code>. الدخول: <code>compare(اللي كتبه, اللي متخزن)</code>.</li>
<li><code>JWT</code> = توكن ممضي فيه بيانات اليوزر (id + role) — العميل يبعته في <code>Authorization: Bearer ...</code> وإنت تفكه بـ <code>jwt.verify</code>.</li>
</ul>`,
examples:[
{title:"مثال 1 (متوسط): التسجيل", level:"متوسط", runnable:false,
code:`import bcrypt from "bcryptjs";\nconst hash = await bcrypt.hash("Ahmed123", 10);\nawait User.create({ name: "Ahmed", email: "a@mail.com", password: hash });\n// المتخزن: $2a$10$XyZ... مش الباسورد ✅`,
output:`الباسورد متشفر في الداتابيز`},
{title:"مثال 2 (متوسط): الدخول + توكن", level:"متوسط", runnable:false,
code:`import jwt from "jsonwebtoken";\nconst user = await User.findOne({ email });\nconst ok = await bcrypt.compare(password, user.password);\nif (!ok) return res.status(401).json({ error: "بيانات غلط" });\nconst token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });\nres.json({ token });`,
output:`{ token: "eyJhbG..." }`},
{title:"مثال 3 (صعب): middleware تفك التوكن", level:"صعب", runnable:false,
code:`export function auth(req, res, next) {\n  try {\n    const header = req.headers.authorization || "";\n    const token = header.replace("Bearer ", "");\n    if (!token) return res.status(401).json({ error: "سجّل دخول" });\n    req.user = jwt.verify(token, process.env.JWT_SECRET); // {id, role}\n    next();\n  } catch { return res.status(401).json({ error: "توكن منتهي أو مزور" }); }\n}\nexport const isAdmin = (req,res,next) => req.user?.role === "admin" ? next() : res.status(403).json({error:"للأدمن فقط"});`,
output:`req.user متاحة في كل المسارات المحمية ✅`}
],
exercise:"اكتب مساري /register و /login كاملين (hash + compare + jwt.sign).",
quiz:{q:"ليه بنعمل hash للباسورد؟", options:["عشان يبقى أقصر","عشان لو الداتابيز اتسربت محدش يعرف الباسوردات","عشان السرعة","عشان الفرونت"], answer:1}
},
{id:"m9l1", title:"حماية السيرفر (helmet و CORS و Rate Limit)", elzero:"Node Security", level:"أمان",
html:`<ul>
<li><code>helmet</code> يظبط الـ headers الأمنية. <code>cors</code> يحدد مين يكلم الـ API. <code>express-rate-limit</code> يمنع الهجوم بالتكرار.</li>
<li>تحقق من كل المدخلات (email regex + password قوي + mongoose validators).</li>
<li>رسائل الخطأ للمستخدم عامة، والتفاصيل في الـ logs عندك بس.</li>
</ul>`,
examples:[
{title:"مثال 1: الحماية الأساسية 3 سطور", level:"سهل", runnable:false,
code:`import helmet from "helmet";\nimport cors from "cors";\nimport rateLimit from "express-rate-limit";\napp.use(helmet());\napp.use(cors({ origin: ["https://my-store.com"] })); // ✅ موقعك بس\napp.use("/api/", rateLimit({ windowMs: 15*60*1000, max: 100 })); // 100 طلب / ربع ساعة`,
output:`سيرفرك محمي من أشهر الهجمات ✅`},
{title:"مثال 2: رسائل خطأ آمنة", level:"متوسط", runnable:true,
code:`function safeError(isDev, err) {\n  if (isDev) return err.message; // للمطور فقط\n  return "حصل خطأ، حاول تاني";   // للمستخدم\n}\nconsole.log("للمستخدم:", safeError(false, new Error("Mongo failed at 10.0.0.5")));`,
output:`للمستخدم: حصل خطأ، حاول تاني`},
{title:"مثال 3: تحقق شامل قبل الحفظ", level:"صعب", runnable:true,
code:`function validateProduct(p) {\n  const errors = [];\n  if (!p.name || p.name.trim().length < 2) errors.push("الاسم قصير");\n  if (typeof p.price !== "number" || p.price <= 0) errors.push("السعر غلط");\n  return errors.length ? { ok: false, errors } : { ok: true };\n}\nconsole.log(validateProduct({ name: " ", price: -5 }));\nconsole.log(validateProduct({ name: "موبايل", price: 8000 }));`,
output:`{ ok: false, errors: [...] }\n{ ok: true }`}
],
exercise:"ركّب helmet + cors + rate-limit في مشروعك، وجرّب تعمل 101 طلب وشوف الحظر.",
quiz:{q:"CORS فايدته؟", options:["تنسيق الألوان","تحديد المواقع المسموح لها تكلم الـ API","تشفير الداتابيز","تسريع الجهاز"], answer:1}
},
{id:"m9l2", title:"🎓 مشروع التخرج: متجر API + الرفع", elzero:"مشاريع + Deploy", level:"مشروع",
html:`<p><b>المشروع اللي تحطه في الـ CV:</b> متجر REST API كامل (يوزرز + منتجات + طلبات) ثم ارفعه على Render.</p>
<ul>
<li>المتطلبات: تسجيل/دخول JWT + أدوار (admin/user) + CRUD منتجات (الأدمن بس يضيف) + إنشاء طلب + بحث وصفحات + حماية كاملة.</li>
<li>الهيكل: <code>index.js / routes / controllers / models / middlewares / .env</code></li>
<li>الرفع: GitHub → موقع <b>render.com</b> → New Web Service → حط متغيرات الـ .env → Deploy. والداتابيز على <b>MongoDB Atlas</b> (مجانية).</li>
</ul>`,
examples:[
{title:"مثال 1 (مشروع): هيكل index.js النهائي", level:"مشروع", runnable:false,
code:`import "dotenv/config";\nimport express from "express";\nimport mongoose from "mongoose";\nimport helmet from "helmet";\nimport cors from "cors";\nimport products from "./routes/products.js";\nimport authRoutes from "./routes/auth.js";\nimport orders from "./routes/orders.js";\n\nconst app = express();\napp.use(helmet());\napp.use(cors());\napp.use(express.json());\napp.use("/api/auth", authRoutes);\napp.use("/api/products", products);\napp.use("/api/orders", orders);\napp.use((req,res)=>res.status(404).json({error:"Not found"}));\n\nawait mongoose.connect(process.env.MONGO_URL);\napp.listen(process.env.PORT || 5000, () => console.log("🚀 live"));`,
output:`سيرفر إنتاج حقيقي ✅`},
{title:"مثال 2 (مشروع): إنشاء طلب يخصم المخزون", level:"مشروع", runnable:false,
code:`export async function createOrder(req, res, next) {\n  try {\n    const { items } = req.body; // [{product, qty}]\n    let total = 0;\n    for (const it of items) {\n      const p = await Product.findById(it.product);\n      if (!p || p.stock < it.qty) return res.status(400).json({ error: "منتج ناقص: " + it.product });\n      total += p.price * it.qty;\n      p.stock -= it.qty; await p.save();\n    }\n    const order = await Order.create({ user: req.user.id, items, total });\n    res.status(201).json({ data: order });\n  } catch(e){ next(e); }\n}`,
output:`طلب حقيقي بمنطق مخزون ✅`},
{title:"مثال 3: خطوات الرفع", level:"متوسط", runnable:false,
code:`1) git init && git add . && git commit -m "store api"\n2) ارفع على GitHub\n3) Atlas: اعمل Cluster مجاني وخد الـ URL\n4) Render: New → Web Service → اختار الريبو\n   Build: npm install | Start: npm start\n   Env vars: MONGO_URL + JWT_SECRET + PORT\n5) جرّب: https://your-app.onrender.com/api/products`,
output:`مبروك 🎉 الـ API بتاعك لايف`}
],
exercise:"نفّذ المشروع كامل ثم ابعت لنفسك طلبات من Thunder Client: سجّل → ادخل → ضيف منتج (كأدمن) → اعمل طلب (كيوزر).",
quiz:{q:"بعد ما تخلص المشروع، أول خطوة للرفع؟", options:["تبعته واتساب","ترفعه GitHub وتوصله بـ Render مع متغيرات البيئة","تمسحه","تطبعه"], answer:1}
}
]}
];

/* ---------- engine ---------- */
let done = JSON.parse(localStorage.getItem("jsb_done") || "[]");
let current = localStorage.getItem("jsb_current") || "m0l0";

const flat = [];
CURRICULUM.forEach(m => m.lessons.forEach(l => flat.push({...l, modTitle: m.title})));

function save(){ localStorage.setItem("jsb_done", JSON.stringify(done)); localStorage.setItem("jsb_current", current); }
function esc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function renderNav(){
  const nav = document.getElementById("nav");
  nav.innerHTML = "";
  CURRICULUM.forEach((m, mi) => {
    const d = document.createElement("div");
    d.className = "mod" + (m.lessons.some(l=>l.id===current) ? " open" : (mi===0?" open":""));
    d.innerHTML = `<div class="mod-head"><div>${esc(m.title)}<small>${esc(m.desc)}</small></div><span>▾</span></div><div class="mod-lessons"></div>`;
    d.querySelector(".mod-head").onclick = () => d.classList.toggle("open");
    const box = d.querySelector(".mod-lessons");
    m.lessons.forEach(l => {
      const b = document.createElement("button");
      b.className = "lesson-link" + (l.id===current?" active":"") + (done.includes(l.id)?" done":"");
      b.textContent = l.title;
      b.onclick = () => { openLesson(l.id); document.getElementById("sidebar").classList.remove("open"); };
      box.appendChild(b);
    });
    nav.appendChild(d);
  });
  const pct = Math.round(done.length / flat.length * 100);
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressText").textContent = pct + "% مكتمل (" + done.length + "/" + flat.length + " درس)";
  document.getElementById("countText").textContent = "مستواك: " + (pct<20?"مبتدئ 🌱":pct<60?"متوسط 🔥":pct<100?"متقدم 🚀":"جاهز للشغل 💼");
}

function runCode(code, outEl){
  const logs = [];
  const fakeConsole = { log: (...a) => logs.push(a.map(x => typeof x === "object" ? JSON.stringify(x) : String(x)).join(" ")) };
  try {
    const fn = new Function("console", `"use strict";(async()=>{${code}})().catch(e=>console.log("خطأ: "+e.message));`);
    // run sync capture: wrap without async for simple cases
    const syncFn = new Function("console", code);
    syncFn(fakeConsole);
    setTimeout(()=>{ outEl.textContent = logs.join("\n") || "(مفيش طباعة)"; }, 350);
    outEl.textContent = logs.join("\n") || "⏳ بيتنفذ...";
  } catch(e){ outEl.textContent = "خطأ: " + e.message; }
}

function openLesson(id){
  current = id; save(); renderNav();
  const l = flat.find(x => x.id === id);
  const idx = flat.findIndex(x => x.id === id);
  const box = document.getElementById("lessonBox");
  let h = `<article class="lesson-card">
    <div class="meta">
      <span class="tag backend">باك اند ✅</span>
      <span class="tag elzero">📺 ${esc(l.elzero||"")}</span>
      <span class="tag">${esc(l.modTitle)}</span>
      <span class="tag">الدرس ${idx+1} من ${flat.length}</span>
    </div>
    <h2>${esc(l.title)}</h2>
    ${(typeof BEGINNER !== "undefined" && BEGINNER[l.id])?`<div class="beginner">🌱 <b>لو أول مرة تتعلم برمجة — اقرا ده الأول:</b><br>${BEGINNER[l.id]}</div>`:""}
    <div class="explain">${l.html}</div>
    ${(typeof STRONG !== "undefined" && STRONG[l.id])?`<div class="strong">💪 <b>تثبيت الأساس:</b> ${STRONG[l.id]}</div>`:""}
    <h3>💻 الأمثلة (من السهل للصعب)</h3>`;
  l.examples.forEach((ex, i) => {
    const w = (typeof WHY !== "undefined" && WHY[l.id] && WHY[l.id][i]) || "";
    const b = (typeof BETTER !== "undefined" && BETTER[l.id] && BETTER[l.id][i]) || "";
    h += `<div class="example">
      <div class="ex-head"><b>${esc(ex.title)}</b><span class="level ${esc(ex.level)}">${esc(ex.level)}</span></div>
      <pre>${esc(ex.code)}</pre>
      ${w?`<div class="why">🔍 <b>ليه كتبناه كده؟</b> ${w}</div>`:""}
      ${b?`<div class="better">🚀 <b>في أحسن؟</b> ${b}</div>`:""}
      ${ex.note?`<div class="note">💡 ${esc(ex.note)}</div>`:""}
      <div class="ex-actions">
        ${ex.runnable?`<button class="btn small primary" onclick="runExample(${idx},${i})">▶ تشغيل المثال</button>`:`<span class="tag">💻 شغّله عندك في التيرمينال (Node)</span>`}
        <button class="btn small" onclick="copyExample(${idx},${i})">📋 نسخ الكود</button>
      </div>
      <div class="output" id="out-${idx}-${i}">${esc(ex.output||"")}</div>
    </div>`;
  });
  h += `<div class="exercise"><b>✏️ تمرين:</b> ${esc(l.exercise)}</div>`;
  if (l.quiz) {
    h += `<div class="quiz" id="quiz-${idx}"><b>🧠 اختبر نفسك:</b> ${esc(l.quiz.q)}<div>`;
    l.quiz.options.forEach((op, oi) => { h += `<button onclick="answerQuiz(${idx},${oi},this)">${esc(op)}</button>`; });
    h += `</div><div class="quiz-msg" id="qmsg-${idx}"></div></div>`;
  }
  const probs = (typeof PROBLEMS !== "undefined" && PROBLEMS[l.id]) || [];
  let probsHtml = "";
  if (probs.length) {
    probsHtml = `<div class="probs"><h3>🧩 مسائل تثبيت الأساس</h3><p class="probs-sub">حل بنفسك الأول — ولو وقفت افتح التلميح، والحل آخر حاجة تبص عليها.</p>`;
    probs.forEach((p, i) => {
      probsHtml += `<div class="prob"><div><b>مسألة ${i+1} <span class="level ${p.level}">${p.level}</span>:</b> ${esc(p.q)}</div>
      <div class="prob-btns"><button class="btn small" onclick="toggleBox('h-${idx}-${i}')">💡 تلميح</button><button class="btn small" onclick="toggleBox('s-${idx}-${i}')">✅ الحل النموذجي</button></div>
      <div class="hintbox hidden" id="h-${idx}-${i}">💡 ${esc(p.hint)}</div>
      <div class="solbox hidden" id="s-${idx}-${i}"><b>✅ الحل:</b><pre>${esc(p.sol)}</pre></div></div>`;
    });
    probsHtml += `</div>`;
  }
  const prev = flat[idx-1], next = flat[idx+1];
  h += probsHtml + `<div class="nav-btns">
    ${prev?`<button class="btn" onclick="openLesson('${prev.id}')">→ السابق: ${esc(prev.title)}</button>`:"<span></span>"}
    ${next?`<button class="btn primary" onclick="openLesson('${next.id}')">التالي: ${esc(next.title)} ←</button>`:""}
  </div>
  <div class="done-row"><button class="btn ${done.includes(id)?"":"primary"}" onclick="toggleDone('${id}')">${done.includes(id)?"✅ خلصته — إلغاء":"✔ علّم الدرس كمكتمل"}</button></div>
  </article>`;
  box.innerHTML = h;
  document.getElementById("hero").style.display = "none";
  box.scrollIntoView({behavior:"smooth", block:"start"});
  renderRoadmap();
}

function runExample(li, ei){
  const ex = flat[li].examples[ei];
  const out = document.getElementById(`out-${li}-${ei}`);
  runCode(ex.code, out);
}
function copyExample(li, ei){
  navigator.clipboard.writeText(flat[li].examples[ei].code).then(()=>alert("اتنسخ ✅ الصقه في VS Code وجرّبه"));
}
function answerQuiz(li, oi, btn){
  const q = flat[li].quiz;
  const msg = document.getElementById(`qmsg-${li}`);
  const box = document.getElementById(`quiz-${li}`);
  [...box.querySelectorAll("button")].forEach(b=>{b.classList.remove("correct","wrong")});
  if (oi === q.answer){ btn.classList.add("correct"); msg.textContent = "✅ صح! عاش"; msg.style.color = "var(--green)"; }
  else { btn.classList.add("wrong"); msg.textContent = "❌ غلط — حاول تاني"; msg.style.color = "var(--red)"; }
}
function toggleDone(id){
  if (done.includes(id)) done = done.filter(x=>x!==id);
  else done.push(id);
  save(); renderNav(); openLesson(id);
}
function startFirst(){ const first = flat.find(l=>!done.includes(l.id)) || flat[0]; openLesson(first.id); }
function goProjects(){ openLesson("m9l2"); }

function renderRoadmap(){
  const r = document.getElementById("roadmap");
  r.innerHTML = CURRICULUM.map(m=>{
    const c = m.lessons.filter(l=>done.includes(l.id)).length;
    return `<div class="rm-card"><h3>${esc(m.title)} — ${c}/${m.lessons.length} ✅</h3><p style="color:var(--muted);margin:0">${esc(m.desc)}</p><div>${m.lessons.map(l=>`<button class="btn small" style="margin:4px" onclick="openLesson('${l.id}')">${done.includes(l.id)?"✅":"○"} ${esc(l.title)}</button>`).join("")}</div></div>`;
  }).join("");
}

/* search */
document.getElementById("searchInput").addEventListener("input", e=>{
  const q = e.target.value.trim();
  const box = document.getElementById("searchResults");
  if (!q){ box.classList.add("hidden"); box.innerHTML=""; return; }
  const res = flat.filter(l => (l.title+l.html+l.elzero).includes(q)).slice(0,8);
  box.classList.remove("hidden");
  box.innerHTML = "<b>نتائج البحث:</b>" + (res.length? res.map(l=>`<button onclick="openLesson('${l.id}')">📄 ${esc(l.title)} <small style='color:var(--muted)'>— ${esc(l.modTitle)}</small></button>`).join("") : "<p>مفيش نتيجة — جرّب كلمة تانية</p>");
});
document.getElementById("themeBtn").onclick = e => {
  document.body.classList.toggle("light");
  e.target.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};
document.getElementById("resetBtn").onclick = () => { if(confirm("تصفّر تقدمك كله؟")){ done=[]; save(); renderNav(); renderRoadmap(); } };

renderNav(); renderRoadmap();
