function checkUrlValidity() {
    // Get the value of the input field
    var input = document.getElementById("name").value;
  
    // Define a regular expression pattern to match URLs
    var urlPattern = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/;
  
    // Test whether the input matches the URL pattern
    if (urlPattern.test(input)) {
      // If the input is a valid URL, do something
      console.log("Valid URL: " + input);
    } else {
      // If the input is not a valid URL, do something else
      console.log("Invalid URL: " + input);
      document.getElementById("warning")
        .innerHTML = "Please enter a valid URL, for example: https://www.google.com";
    }
  }