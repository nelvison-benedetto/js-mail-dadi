
const invites = [
    "sample@email.com",
    "alice.morris@example.com",
    "john.doe123@example.org",
    "charlie_baker92@mail.com",
    "susan_wilson78@webmail.net",
    "michael.roberts@company.org",
    "lucy.parkers@service.com"
  ];

  var email = prompt("Please insert your email").replace(/\s+/g, "");
  //let newemail = email.replace(/\s+/g, "");  // \s qualsiasi space,+ means uno o piu,g global on all str
  if (invites.includes(email)) {
      alert("Welcome! You are in");
  } else {
      alert("You are out of the list");
  }
  
  let numrandPlayer = Math.floor(Math.random() * 6) + 1;
    //.random() range 0-1, .floor arrotonda down per get int, +1 for get also 6
  let numrandBot = Math.floor(Math.random() * 6) + 1;

  if (numrandPlayer>numrandBot){console.log("You win!");}
  else {console.log("You lose");}