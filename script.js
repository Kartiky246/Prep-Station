/* ============ STATE ============ */
const LS_DONE = "prep_done_v1";
const LS_START = "prep_start_v1";
const LS_THEME = "prep_theme_v1";
const LS_NOTES = "prep_notes_v1";

/* ============ THEME ============ */
function applyTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  const btn = document.getElementById("themeBtn");
  if(btn) btn.innerHTML = t==="light" ? "&#9728;" : "&#9789;"; // sun / moon
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute("data-theme")==="light" ? "light":"dark";
  const next = cur==="light" ? "dark":"light";
  localStorage.setItem(LS_THEME, next);
  applyTheme(next);
}
applyTheme(localStorage.getItem(LS_THEME) || "dark");

let done = JSON.parse(localStorage.getItem(LS_DONE) || "{}");
let startDate = localStorage.getItem(LS_START) || "";
let notes = JSON.parse(localStorage.getItem(LS_NOTES) || "{}");

const ALL_IDS = [];
PLAN.forEach(w => w.days.forEach(d => d.sections.forEach(s => s.items.forEach(it => ALL_IDS.push(it.id)))));
const DAYS_FLAT = [];
PLAN.forEach(w => w.days.forEach(d => DAYS_FLAT.push(d)));
// id -> {item, day, week, section} so the notes panel can describe any task
const ITEM_INDEX = {};
PLAN.forEach(w => w.days.forEach(d => d.sections.forEach(s => s.items.forEach(it => {
  ITEM_INDEX[it.id] = {item:it, day:d.day, week:w.week, section:s.label};
}))));

function saveDone(){ localStorage.setItem(LS_DONE, JSON.stringify(done)); }

function dayIdsOf(dayNum){
  const day = DAYS_FLAT.find(d=>d.day===dayNum);
  const ids=[]; day.sections.forEach(s=>s.items.forEach(it=>ids.push(it.id))); return ids;
}
function dayStatus(dayNum){
  const ids = dayIdsOf(dayNum);
  const n = ids.filter(id=>done[id]).length;
  if(n===0) return "empty";
  if(n===ids.length) return "full";
  return "partial";
}

function toggle(id, checked){
  if(checked) done[id]=1; else delete done[id];
  saveDone();
  document.querySelectorAll('input[data-id="'+id+'"]').forEach(cb=>{
    cb.checked = !!done[id];
    cb.closest(".task").classList.toggle("done", !!done[id]);
  });
  renderGrid();
  if(!document.getElementById("view-track").classList.contains("hidden")) renderTracker();
}

/* ============ 30-day grid ============ */
function renderGrid(){
  const grid = document.getElementById("dayGrid");
  const realDay = dayDiffFromStart();
  let html = "";
  PLAN.forEach((w, wi)=>{
    html += '<div class="weekrow"><span class="wklbl">W'+w.week+'</span><div class="cells">';
    w.days.forEach(d=>{
      const st = dayStatus(d.day);
      const cur = (realDay===d.day) ? " current" : "";
      html += '<div class="cell '+st+cur+'" title="Day '+d.day+'" onclick="openDay('+d.day+')">'+d.day+'</div>';
    });
    // pad short weeks to 8 columns with invisible placeholders
    for(let k=w.days.length;k<8;k++) html += '<div class="cell pad"></div>';
    html += '</div></div>';
  });
  grid.innerHTML = html;
  const full = DAYS_FLAT.filter(d=>dayStatus(d.day)==="full").length;
  document.getElementById("gDone").textContent = full;
}
function openDay(n){
  showView("track");
  if(startDate){ viewDayNum = n; renderTracker(); }
  else { viewDayNum = n; renderTracker(); }
}

/* ============ render task ============ */
const NOTE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"'
  + ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
  + '<path d="M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>'
  + '<path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>';

// Only a click on the bare label text toggles — links and difficulty badges are inert.
function labelClick(ev, el){
  if(ev.target.closest("a, .diff")) return;
  el.previousElementSibling.click();
}

function taskHTML(it){
  const isDone = !!done[it.id];
  const noted = hasNote(it.id);
  const diff = it.diff ? '<span class="diff '+it.diff+'">'+it.diff+'</span>' : "";
  const link = it.url ? '<a href="'+it.url+'" target="_blank" rel="noopener">'+it.label+'</a>' : it.label;
  return '<div class="task '+(isDone?'done':'')+'">'
    + '<input type="checkbox" data-id="'+it.id+'" '+(isDone?'checked':'')+' onchange="toggle(\''+it.id+'\', this.checked)">'
    + '<label onclick="labelClick(event, this)">'+link+diff+'</label>'
    + '<button class="notebtn'+(noted?' has':'')+'" data-note-id="'+it.id+'" onclick="openNotes(\''+it.id+'\')"'
    + ' title="'+(noted?'Edit your note':'Add a note')+'"'
    + ' aria-label="'+(noted?'Edit note':'Add note')+'">'+NOTE_ICON+'</button>'
    + '</div>';
}
function sectionHTML(s){
  let h = '<div class="section-label">'+s.label+'</div>';
  h += s.items.map(taskHTML).join("");
  if(s.note) h += '<div class="note">'+s.note+'</div>';
  return h;
}
function dayHTML(d){
  let h = '<div class="day-block"><div class="day-title"><span class="day-pill">DAY '+d.day+'</span></div>';
  h += d.sections.map(sectionHTML).join("");
  h += '</div>';
  return h;
}

/* ============ full plan ============ */
function renderPlan(){
  let h = "";
  PLAN.forEach((w,i)=>{
    const parts = w.wtitle.split(" — ");
    const title = parts.length>1 ? parts.slice(1).join(" — ") : w.wtitle;
    h += '<div class="week"><div class="week-head"><span class="week-num">WEEK '+w.week+'</span>'
      + '<span class="week-title">'+title+'</span></div>'
      + '<div class="week-sub">'+w.wsub+'</div>';
    h += w.days.map(dayHTML).join("");
    h += '</div>';
  });
  document.getElementById("view-plan").innerHTML = h;
}

/* ============ tracker ============ */
let viewDayNum = 1;
function dayDiffFromStart(){
  if(!startDate) return null;
  const s = new Date(startDate+"T00:00:00");
  const now = new Date(); now.setHours(0,0,0,0);
  return Math.floor((now - s)/(1000*60*60*24)) + 1;
}
function setStart(){
  startDate = document.getElementById("startDate").value;
  localStorage.setItem(LS_START, startDate);
  goToday(); renderGrid();
}
function goToday(){
  const d = dayDiffFromStart();
  if(d!==null) viewDayNum = Math.min(30, Math.max(1, d));
  renderTracker();
}
function navDay(delta){
  viewDayNum = Math.min(30, Math.max(1, viewDayNum+delta));
  renderTracker();
}
function renderTracker(){
  document.getElementById("startDate").value = startDate || "";
  const body = document.getElementById("trackerBody");
  if(!startDate){
    body.innerHTML = '<div class="emptymsg">Pick your Day 1 start date above to begin tracking &mdash; or tap any day in the grid.</div>';
    return;
  }
  const realDay = dayDiffFromStart();
  const day = DAYS_FLAT.find(d=>d.day===viewDayNum);
  const s = new Date(startDate+"T00:00:00");
  const thisDate = new Date(s); thisDate.setDate(s.getDate()+(viewDayNum-1));
  const dateStr = thisDate.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'});
  const isToday = (realDay===viewDayNum);
  const week = PLAN.find(w=>w.days.some(d=>d.day===viewDayNum));

  let h = '<div class="daynav">'
    + '<button class="btn ghost" onclick="navDay(-1)" '+(viewDayNum<=1?'disabled':'')+'>&larr; Prev</button>'
    + '<div class="center"><div class="big">Day '+viewDayNum+' <span class="of">/ 30</span>'
    + (isToday?'<span class="today-badge">TODAY</span>':'')+'</div>'
    + '<div class="small">'+dateStr+' &middot; Week '+week.week+'</div></div>'
    + '<button class="btn ghost" onclick="navDay(1)" '+(viewDayNum>=30?'disabled':'')+'>Next &rarr;</button></div>';

  if(realDay!==null){
    if(realDay<1) h += '<div class="note">Your plan hasn\'t started yet &mdash; Day 1 is '+new Date(startDate+"T00:00:00").toLocaleDateString()+'.</div>';
    else if(realDay>30) h += '<div class="note">You\'re past Day 30 &mdash; nicely done. Browse any day to revisit.</div>';
  }

  h += '<div class="day-block">';
  h += day.sections.map(sectionHTML).join("");
  const ids = dayIdsOf(viewDayNum);
  const dn = ids.filter(id=>done[id]).length;
  const complete = dn===ids.length;
  h += '<div class="dayprog '+(complete?'complete':'')+'">Day progress &mdash; '+dn+' / '+ids.length+(complete?' &middot; complete ✓':'')+'</div>';
  h += '</div>';
  body.innerHTML = h;
}

/* ============ view switch ============ */
function showView(v){
  const plan = document.getElementById("view-plan");
  const track = document.getElementById("view-track");
  plan.classList.toggle("hidden", v!=="plan");
  track.classList.toggle("hidden", v!=="track");
  document.getElementById("tab-plan").classList.toggle("active", v==="plan");
  document.getElementById("tab-track").classList.toggle("active", v==="track");
  const active = v==="plan"?plan:track;
  active.classList.remove("fade"); void active.offsetWidth; active.classList.add("fade");
  if(v==="track") renderTracker();
}

function resetAll(){
  if(!confirm("Clear all checkmarks and your start date?")) return;
  done={}; startDate="";
  localStorage.removeItem(LS_DONE); localStorage.removeItem(LS_START);
  renderPlan(); renderTracker(); renderGrid();
}

/* ============ init ============ */
renderPlan();
renderGrid();
if(startDate){ goToday(); } else { renderTracker(); }
