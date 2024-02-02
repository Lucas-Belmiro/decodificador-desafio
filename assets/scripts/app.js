function getValue() {
  let valueInput = document.getElementById("text").value;
  return valueInput;
}

function disableDefaultMessage() {
  let element = document.getElementById("text-space");
  element.style.display = "none";
}

function enableMessage() {
  let element2 = document.getElementById("text-insert");
  element2.style.display = "flex";
}

function updateScreen(result) {
  let element3 = document.getElementById("text-content");
  element3.textContent = result;
}

function copyText() {
  let copiedText = document.getElementById("text-content").innerHTML;
  navigator.clipboard.writeText(copiedText);
  alert("Copiado " + copiedText + " para a Área de Trânsferência...");
}

function encryptOn() {
  const substitutions = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  let result = getValue();

  if (result !== "") {
    for (const char in substitutions) {
      const regex = new RegExp(char, "g");
      result = result.replace(regex, substitutions[char]);
    }

    disableDefaultMessage();
    enableMessage();
    updateScreen(result);
  }
}

function decryptOn() {
  const substitutions = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  let result = getValue();

  if (result !== "") {
    for (const char in substitutions) {
      const regex = new RegExp(char, "g");
      result = result.replace(regex, substitutions[char]);
    }
    disableDefaultMessage();
    enableMessage();
    updateScreen(result);
  }
}
