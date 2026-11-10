(function(){
  var b=document.getElementById('menu-btn'),m=document.getElementById('menu');
  b.addEventListener('click',function(){var open=m.hidden;m.hidden=!open;b.setAttribute('aria-expanded',String(open));b.textContent=open?'Close':'Menu';});
  m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.hidden=true;b.setAttribute('aria-expanded','false');b.textContent='Menu';}});
  var c=document.getElementById('copy'),s=document.getElementById('copy-state');
  c.addEventListener('click',function(){
    var t='basitibrahim890@gmail.com';
    function ok(){s.textContent='Copied';setTimeout(function(){s.textContent='Copy email';},2000);}
    function sel(){var r=document.createRange();r.selectNodeContents(document.getElementById('email-text'));var g=window.getSelection();g.removeAllRanges();g.addRange(r);s.textContent='Selected, press copy';}
    try{navigator.clipboard.writeText(t).then(ok,sel);}catch(e){sel();}
  });
  document.querySelectorAll('.car').forEach(function(c){var t=c.querySelector('.track'),n=c.querySelector('.count');if(!n)return;var k=t.children.length;
    function upd(){n.textContent=(Math.round(t.scrollLeft/t.clientWidth)+1)+' / '+k;}
    c.querySelector('.prev').addEventListener('click',function(){t.scrollBy({left:-t.clientWidth,behavior:'smooth'});});
    c.querySelector('.next').addEventListener('click',function(){t.scrollBy({left:t.clientWidth,behavior:'smooth'});});
    t.addEventListener('scroll',upd,{passive:true});
    t.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){t.scrollBy({left:t.clientWidth,behavior:'smooth'});}if(e.key==='ArrowLeft'){t.scrollBy({left:-t.clientWidth,behavior:'smooth'});}});});
  var lb=document.getElementById('lb');if(lb){var li=lb.querySelector('img'),lc=lb.querySelector('p');
    document.querySelectorAll('.tile').forEach(function(t){t.addEventListener('click',function(){li.src=t.dataset.src;li.alt=t.dataset.cap;lc.textContent=t.dataset.cap;if(lb.showModal){lb.showModal();}else{lb.setAttribute('open','');}});});
    lb.addEventListener('click',function(e){if(e.target===lb||e.target.className==='x'){if(lb.close){lb.close();}else{lb.removeAttribute('open');}}});}
})();
