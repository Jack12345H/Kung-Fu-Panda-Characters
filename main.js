// KF Panda Search

//HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
//button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //input
  let name = document.getElementById("char-in").value.toLowerCase();

  // if statement - test the input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "boss-wolf") {
    charNameEl.innerHTML = "Boss-Wolf";
    charQuoteEl.innerHTML =
      "Guess nobody told you: If you mess with the wolf, you get the fangs.";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "Vengeance is served!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      "I fought by his side. I loved him like a brother. And he.. betrayed me. Well, now I will destroy everything he has created!";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr.ping") {
    charNameEl.innerHTML = "Mr.Ping";
    charQuoteEl.innerHTML = "We are noodle folk. Broth runs through our veins!";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML =
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML =
      "Your parents didn't love you. But here... let me heal you.";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML =
      "If you only do what you can do, you will never be more than you are now.";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "SoothSayer";
    charQuoteEl.innerHTML =
      "Even with his poor eyesight, he can see the truth. Why is it that you cannot?";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "storming-ox") {
    charNameEl.innerHTML = "Storming-Ox";
    charQuoteEl.innerHTML = "You insolent fool!";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "tai-lung") {
    charNameEl.innerHTML = "Tai-Lung";
    charQuoteEl.innerHTML =
      "Fly back there and tell them... the real Dragon Warrior is coming home.";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "----------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

document.getElementById("theme-btn").addEventListener("click", changeTheme);

function changeTheme() {
  let theme = document.getElementById("theme-in").value.toLowerCase();

  if (theme === "black" || theme === "dark") {
    document.getElementById("body").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
    document.getElementById("body").style.color = "white";
  } else if (theme === "white" || theme === "light") {
    document.getElementById("body").style.backgroundColor =
      "rgba(255, 255, 255, 0.7)";
    document.getElementById("body").style.color = "black";
  }
}
