(function(){
var t=document.querySelector('.menu-toggle'),m=document.getElementById('menu');
if(t&&m){t.addEventListener('click',function(){var o=m.classList.toggle('open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Close menu':'Open menu');});}
var y=document.querySelector('[data-year]');if(y)y.textContent=new Date().getFullYear();
var c=document.querySelector('[data-countdown]');
if(c){var end=new Date(c.getAttribute('data-countdown')).getTime();var f=function(n){return String(n).padStart(2,'0')};
var tick=function(){var s=Math.max(0,Math.floor((end-Date.now())/1000));c.querySelector('[data-d]').textContent=Math.floor(s/86400);c.querySelector('[data-h]').textContent=f(Math.floor(s%86400/3600));c.querySelector('[data-m]').textContent=f(Math.floor(s%3600/60));c.querySelector('[data-s]').textContent=f(s%60);};tick();setInterval(tick,1000);}
var r=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});r.forEach(function(el){io.observe(el)});}else{r.forEach(function(el){el.classList.add('in')});}
})();