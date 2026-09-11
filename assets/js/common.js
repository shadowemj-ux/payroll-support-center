
const { createClient } = supabase;
const db = createClient(
  window.APP_CONFIG.SUPABASE_URL,
  window.APP_CONFIG.SUPABASE_PUBLISHABLE_KEY
);

function esc(v){
  return String(v ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function fmtDate(v){
  if(!v) return "-";
  const d = new Date(v);
  if(Number.isNaN(d.getTime())) return v;
  return new Intl.DateTimeFormat("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"}).format(d);
}
function fmtDateTime(v){
  if(!v) return "-";
  const d = new Date(v);
  if(Number.isNaN(d.getTime())) return v;
  return new Intl.DateTimeFormat("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(d);
}
function q(name){
  return new URLSearchParams(location.search).get(name);
}
function setActiveNav(){
  const page = document.body.dataset.page;
  document.querySelectorAll("nav a[data-page]").forEach(a=>{
    if(a.dataset.page === page) a.classList.add("active");
  });
}
async function isAdmin(){
  const { data:{ user } } = await db.auth.getUser();
  if(!user) return false;
  const { data, error } = await db.rpc("is_admin");
  return !error && data === true;
}
async function requireAdmin(){
  const ok = await isAdmin();
  if(!ok){
    location.href = "./login.html";
    return false;
  }
  return true;
}
function publicFileUrl(path){
  if(!path) return "";
  const { data } = db.storage.from("program-files").getPublicUrl(path);
  return data?.publicUrl || "";
}
document.addEventListener("DOMContentLoaded", setActiveNav);
