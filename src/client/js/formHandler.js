export function handleSubmit(event) {
    event.preventDefault()

    console.log("handleSubmit")

    // check what text was put into the form field
    let formText = document.getElementById('name').value
   
    checkUrlValidity(formText)

   
}


export function checkUrlValidity(input) {  
  
    // Define a regular expression pattern to match URLs
    var urlPattern = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/;
  
    // Test whether the input matches the URL pattern
    if (urlPattern.test(input)) {
      // If the input is a valid URL, do something
      console.log("Valid URL: " + input);
      extractTopicsServer()
    } else {
      // If the input is not a valid URL, do something else
      console.log("Invalid URL: " + input);
      document.getElementById("warning")
        .innerHTML = "Please enter a valid URL, for example: https://www.google.com";
    }
  }

export function extractTopicsServer(){

    fetch("/meaning")
    .then(response => response.json())
    .then(data => {
      console.log("Topics Extraction API response:", data);
      // Use the response data to analyze the topics
      console.log(data['concept_list'])
      showResults(data['concept_list'])

    })
    .catch(error => console.log("Error:", error));

    


}


export function showResults(concepts){
    const results = document.getElementById('results');
    results.innerHTML = '';
    concepts.forEach(concept => {
        const conceptDiv = document.createElement('div');
        conceptDiv.innerHTML = concept.form;
        results.appendChild(conceptDiv);
    });
}

