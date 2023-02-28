import { checkForName } from './js/nameChecker.js'
import { handleSubmit, checkUrlValidity } from './js/formHandler.js'
import { test } from './js/simpleCheck.js'


checkForName("test")
test()

// index.js
document.getElementById("submit-button").addEventListener("click", handleSubmit);
document.getElementById("name").addEventListener("blur", checkUrlValidity);





