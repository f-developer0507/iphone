const flash = document.querySelector("#flash");
const record = new webkitSpeechRecognition();
record.lang = "ru-RU";
record.start();

record.onresult = function (e) {
  const result = e.results[0][0].transcript;
  if(result == "лю масс") {
    flash.classList.add("active")
  }
};
