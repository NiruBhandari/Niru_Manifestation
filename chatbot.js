let replies = [
"Hi mutu 😘",
"I love you more than anything ❤️",
"I miss you a lot alot a lot a lot 🥺",
"Promise to stay forever?",
"come back soon , i waiting.....",
"Sending hugs and kiss 💋"
];

function sendChat(){
  let input = userInput.value;
  chatLog.innerHTML += "<p>You: "+input+"</p>";
  let r = replies[Math.floor(Math.random()*replies.length)];
  setTimeout(()=>chatLog.innerHTML+="<p>Niru Bot: "+r+"</p>",500);
  userInput.value="";
}
