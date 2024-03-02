// Arrays 
const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extension = ['.com', '.es', '.net', '.us', '.io'];

// TOTALLY RANDOM DOMAIN NAME

// function for contact all the arrays in a new array and generate a random element of every array

    function generateDomain() {
      let domains = [];
      for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
          for (let k = 0; k < noun.length; k++) {
            for(let l = 0; l < extension.length; l++) {
                domains.push(pronoun[i] + adj[j] + noun[k] + extension[l]);
            }
          }
        }
      }
      let randomIndex = Math.floor(Math.random() * domains.length);
      // print de value of the new array in the input of HTML called domainInput
      document.getElementById('domainInput').value = domains[randomIndex];
    }


// CUSTOM RANDOM DOMAIN NAME

// function for contact all the arrays in a new array and generate a random element of every array. Includes custom noun.

    function generateCustomDomain() {
        // custonNoun recives de value typed in the input of HTML called customNounInput deleting whitespaces
        let customNoun = document.getElementById('customNounInput').value.trim();
        if (customNoun === '') {
          alert('Type a word for the noun');
          return;
        }
  
        let domains = [];
        for (let i = 0; i < pronoun.length; i++) {
          for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < extension.length; k++) {
                domains.push(pronoun[i] + adj[j] + customNoun + extension[k]);
            }
          }
        }
  
        let randomIndex = Math.floor(Math.random() * domains.length);
        // print de value of the new array in the input of HTML called customDomainInput
        document.getElementById('customDomainInput').value = domains[randomIndex];
      }


// Generates a list of oll the cominations
    function generateDomainList() {
      let domains = [];
      for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
          for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extension.length; l++) {
              domains.push(pronoun[i] + adj[j] + noun[k] + extension[l]);
            }
          }
        }
      }
        return domains;
}
// Print a list of oll the cominations
    function printDomainList() {
      let domainList = generateDomainList();
      let listContainer = document.getElementById('listas');
      listContainer.innerHTML = ''; // Clean de div's content
      let ul = document.createElement('ul');
      domainList.forEach(function (domain) {
      let li = document.createElement('li');
      li.textContent = domain;
      ul.appendChild(li);
    });
  listContainer.appendChild(ul);
}

// Call the function for print de list when page is loaded
  window.onload = printDomainList;