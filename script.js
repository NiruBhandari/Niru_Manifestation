// ================= PASSWORD UNLOCK =================
function unlock() {
  if (document.getElementById("pass").value == "niru+aayush") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainUI").classList.remove("hidden");
    typeText();

    // Show proposal after 20 seconds
    setTimeout(showProposal, 20000);
  } else {
    alert("Wrong code 😤");
  }
}

// ================= TYPING EFFECT =================
let text = "Dear Aayush, Welcome to my Love OS 💖";
let i = 0;
function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i++];
    setTimeout(typeText, 60);
  }
}

// ================= COUNTDOWN =================
let date = new Date("2026-02-14");
setInterval(() => {
  let d = (date - new Date()) / (1000 * 60 * 60 * 24);
  document.getElementById("countdown").innerHTML = "⏳ Days till Valentine: " + Math.floor(d);
}, 1000);

// ================= PROPOSAL POPUP LOGIC =================

// Show proposal popup + blur background
function showProposal() {
  document.getElementById("proposalOverlay").classList.remove("hidden");
  document.getElementById("mainUI").classList.add("blur");
}

// YES BUTTON CLICK
function acceptLove() {
  // Hide the proposal popup
  document.getElementById("proposalOverlay").classList.add("hidden");

  // Remove blur from main UI
  document.getElementById("mainUI").classList.remove("blur");
}

// NO BUTTON FUNNY RUNNING
function rejectLove() {
  let btn = document.querySelector("#proposalBox button:last-child");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}
