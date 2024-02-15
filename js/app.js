const flash = document.querySelector("#flash");
const record = new webkitSpeechRecognition();
record.start();
record.lang = "ru-RU";

record.onresult = function (e) {
  const result = e.results[0][0].transcript;
  if (result == "включи") {
    flash.classList.add("active");
  }
};
