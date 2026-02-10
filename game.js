let count=0;
for(let i=0;i<10;i++){
  let h=document.createElement("span");
  h.innerHTML="💖";
  h.onclick=()=>{
    h.style.display="none";
    count++;
    if(count==10) secret.classList.remove("hidden");
  };
  gameArea.appendChild(h);
}

