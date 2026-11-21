document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
(function(){
  const upcoming=document.getElementById('upcoming-list');
  const archive=document.getElementById('archive-grid');
  if(!upcoming||!archive)return;
  const now=new Date();
  document.querySelectorAll('#upcoming-list [data-event-date]').forEach(card=>{
    const [y,m,d]=card.dataset.eventDate.split('-').map(Number);
    const end=new Date(y,m-1,d,23,59,59);
    if(now>end){
      const f=card.querySelector('img');
      const title=card.querySelector('h2')?.innerText.replace(/\s+/g,' ').trim()||'PAST EVENT';
      const fig=document.createElement('figure');
      const im=document.createElement('img');
      im.src=f.getAttribute('src');im.alt=f.alt;im.loading='lazy';
      const caption=document.createElement('figcaption');caption.textContent=title.toUpperCase()+' / '+card.dataset.eventDate;
      fig.append(im,caption);archive.prepend(fig);card.remove();
    }
  });
  const note=document.getElementById('events-status');
  if(note && !upcoming.querySelector('[data-event-date]'))note.textContent='UPCOMING / CHECK INSTAGRAM FOR NEW DATES';
})();

(function(){
 const grid=document.getElementById('home-events');
 if(!grid)return;
 const now=new Date();
 grid.querySelectorAll('[data-event-date]').forEach(el=>{
   const [y,m,d]=el.dataset.eventDate.split('-').map(Number);
   if(now>new Date(y,m-1,d,23,59,59))el.remove();
 });
})();
