/* NAV CLICK */
document.querySelectorAll(".nav-link").forEach(link=>{
  link.addEventListener("click",()=>{
    document.getElementById(link.dataset.target)
      .scrollIntoView({behavior:"smooth"});
  });
});

/* BURGER */
const burger = document.getElementById("burger");
const menu = document.getElementById("navMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

/* NAV HIDE */
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let current = window.scrollY;
  if (current > lastScroll && current > 80) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }
  lastScroll = current;
});

/* TYPING */
let text="Hi, I'm Hilman A.K 👋";
let i=0;

function type(){
  if(i<text.length){
    document.getElementById("typingText").textContent+=text[i++];
    setTimeout(type,50);
  } else finishHero();
}

function finishHero(){
  document.querySelector(".cursor").style.display="none";

  setTimeout(()=>{
    document.getElementById("subtitle").classList.add("show");
    document.getElementById("photo").classList.add("show");
    setTimeout(startReveal, 500);
  },200);
}

window.onload=()=>setTimeout(type,400);

/* SEQUENCE */
function startReveal(){
  showAbout();
  showFooter();
  setTimeout(showProjects,600);
  setTimeout(showSkills,900);
  setTimeout(showHobbies,1200);
  setTimeout(showContact,1500);
  setTimeout(showSocial,1800);
}

function showAbout(){ document.getElementById("about").classList.add("show"); }
function showFooter(){ document.getElementById("footer").classList.add("show"); }
function showProjects(){
  const section = document.getElementById("projects");
  section.classList.add("show");

  document.querySelectorAll("#projects .column").forEach((col,i)=>{
    setTimeout(()=>col.classList.add("show"), i*200);
  });
}

function showSkills(){
  const section = document.getElementById("skills");
  section.classList.add("show");

  document.querySelectorAll("#skills .column").forEach((col,i)=>{
    setTimeout(()=>col.classList.add("show"), i * 120);
  });
}

function showHobbies(){ document.getElementById("hobbies").classList.add("show"); }

function showContact(){
  document.getElementById("contact").classList.add("show");
  document.querySelector("footer").classList.add("show");
}

function showSocial(){
  const section = document.getElementById("social");
  section.classList.add("show");

  document.querySelectorAll("#social .column").forEach((col,i)=>{
    setTimeout(()=>col.classList.add("show"), i * 200);
  });
}



/* CANVAS */
const canvas=document.getElementById("bgCanvas");
const ctx=canvas.getContext("2d");

function resize(){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
}
resize();

let particles=Array.from({length:70},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  vx:(Math.random()-0.5)*0.6,
  vy:(Math.random()-0.5)*0.6
}));

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x+=p.vx;
    p.y+=p.vy;

    if(p.x<0||p.x>canvas.width)p.vx*=-1;
    if(p.y<0||p.y>canvas.height)p.vy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,2,0,Math.PI*2);
    ctx.fillStyle="rgba(56,189,248,0.9)";
    ctx.fill();
  });

  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      let dx=particles[i].x-particles[j].x;
      let dy=particles[i].y-particles[j].y;
      let d=Math.sqrt(dx*dx+dy*dy);

      if(d<130){
        ctx.beginPath();
        ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(particles[j].x,particles[j].y);
        ctx.strokeStyle="rgba(99,102,241,"+(1-d/130)*0.6+")";
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}
draw();

window.addEventListener("resize",resize);