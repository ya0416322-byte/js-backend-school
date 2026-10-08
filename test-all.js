const fs = require('fs');
// ---------- stubs ----------
const store = {};
global.localStorage = { getItem: k => store[k] ?? null, setItem: (k, v) => store[k] = String(v), removeItem: k => delete store[k] };
function mkEl() {
  return { innerHTML: '', textContent: '', value: '', style: {}, children: [],
    classList: { add(){}, remove(){}, toggle(){} },
    appendChild(){}, append(){}, remove(){},
    querySelector: () => mkEl(), querySelectorAll: () => [],
    addEventListener(){}, scrollIntoView(){}, onclick: null, dataset: {} };
}
const els = {};
const listeners = {};
global.document = {
  getElementById: id => els[id] || (els[id] = mkEl()),
  createElement: () => mkEl(),
  body: mkEl(),
};
global.window = { scrollTo(){}, innerWidth: 1280 };
global.navigator = { onLine: true, language: 'ar-EG', clipboard: { writeText: () => Promise.resolve() } };
global.location = { href: 'http://localhost/index.html', reload(){} };
global.history = { back(){} };
const asyncRejections = [];
process.on('unhandledRejection', (e) => { asyncRejections.push(String(e && e.message || e)); console.log('UNHANDLED:', String(e && e.stack || e).slice(0,300)); });
global.fetch = () => Promise.resolve({ json: () => Promise.resolve({ id: 101, name: 'Test User', email: 't@t.com' }) });
// ---------- load ----------
let ctx = '';
for (const f of ['why1.js','why2.js','beginner.js','deep1.js','deep2.js','problems.js','fb.js','fwhy-b.js','frontend.js','fwhy.js']) ctx += fs.readFileSync(f, 'utf8') + '\n';
ctx += fs.readFileSync('app.js', 'utf8');
const sleep = ms => new Promise(r => setTimeout(r, ms));
ctx += `;(async function(){
const fails = [];
const ok = (c, msg) => { if (!c) fails.push(msg); };
const allIds = [];
for (const t of ['backend','frontend']) {
  chooseTrack(t);
  const lessons = flat.slice();
  lessons.forEach(l => allIds.push(l.id));
  ok(lessons.length > 0, t + ': empty track');
  for (const l of lessons) {
    try { openLesson(l.id); } catch(e) { fails.push(t+'/'+l.id+' openLesson threw: '+e.message); continue; }
    const html = document.getElementById('lessonBox').innerHTML;
    ok(html.includes(l.title), t+'/'+l.id+' title missing');
    ok(html.includes('ليه كتبناه كده'), t+'/'+l.id+' why missing');
    const q = l.quiz;
    if (!q || !q.q || !Array.isArray(q.options) || q.answer < 0 || q.answer >= q.options.length) fails.push(t+'/'+l.id+' bad quiz');
    l.examples.forEach((ex, i) => {
      if (!ex.title || !ex.code) fails.push(t+'/'+l.id+' ex'+i+' empty');
      if (ex.runnable) {
        try {
          const out = { textContent: '' };
          const st = mkEl();
          runCode(ex.code, out, st);
        } catch(e) { fails.push(t+'/'+l.id+' ex'+i+' threw sync: '+e.message); }
      }
    });
  }
  console.log(t + ': lessons=' + lessons.length + ' examples=' + lessons.reduce((n,l)=>n+l.examples.length,0));
}
// async examples: run and verify output after wait
const asyncFails = [];
for (const t of ['backend','frontend']) {
  chooseTrack(t);
  for (const l of flat) {
    for (let i = 0; i < l.examples.length; i++) {
      const ex = l.examples[i];
      if (!ex.runnable) continue;
      const out = { textContent: '' };
      try { runCode(ex.code, out, mkEl()); } catch(e) { asyncFails.push(t+'/'+l.id+' ex'+i+' threw: '+e.message); continue; }
      const needWait = /setTimeout|setInterval|fetch|Promise|await/.test(ex.code);
      await sleep(needWait ? 900 : 30);
      if (/^خطأ/.test(out.textContent)) asyncFails.push(t+'/'+l.id+' ex'+i+' runtime error: '+out.textContent.slice(0,80));
      else if (!out.textContent.trim()) asyncFails.push(t+'/'+l.id+' ex'+i+' empty output');
    }
  }
}
// coverage maps
for (const [name, map, need] of [['WHY',WHY,3],['BETTER',BETTER,3]]) {
  for (const id of allIds) { if (!map[id] || map[id].length !== need) fails.push(name+' missing/short: '+id); }
}
for (const id of Object.keys(Object.assign({},STRONG,PROBLEMS,BEGINNER,DEEP))) {
  if (!allIds.includes(id)) fails.push('orphan key: '+id);
}
const dupes = allIds.filter((id,i) => allIds.indexOf(id) !== i);
if (dupes.length) fails.push('dup ids: '+dupes);
console.log('ASYNC-FAILS:', asyncFails.length ? asyncFails : 'none');
console.log('UNHANDLED-REJECTIONS:', asyncRejections.length ? asyncRejections.slice(0,10) : 'none');
console.log('FAILS:', fails.length ? fails : 'none');
console.log((fails.length + asyncFails.length) === 0 ? 'ALL TESTS PASSED' : 'TESTS FAILED');
process.exit((fails.length + asyncFails.length) === 0 ? 0 : 1);
})();`;
eval(ctx);
