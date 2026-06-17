
function setLang(l){
  document.querySelectorAll('[data-'+l+']').forEach(function(e){ e.innerHTML = e.getAttribute('data-'+l); });
  document.documentElement.lang=l;
  var d=document.getElementById('b-de'), r=document.getElementById('b-ru');
  if(d) d.classList.toggle('on', l==='de');
  if(r) r.classList.toggle('on', l==='ru');
  try{localStorage.setItem('lang',l)}catch(e){}
}
(function(){ var s='de'; try{s=localStorage.getItem('lang')||'de'}catch(e){} if(s==='ru') setLang('ru'); })();
