// Function to fetch jokes from the API
async function fetchJokes() {
    const apiUrl = "https://hindi-jokes-api.onrender.com/jokes?api_key=ded9021bc0373ae262ce60524b4f";
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      // Process the retrieved jokes data
      // For example, you can log the jokes to the console
      console.log(data);
      console.log(data.jokeContent)
      var  jokeshow  = data.jokeContent;
    jokeElement.innerHTML = jokeshow;

      // You can also return the jokes data if needed
      return data;
    } catch (error) {
      console.log("Error fetching jokes:", error);
    }
  }
  
  // Call the fetchJokes() function to retrieve jokes
  fetchJokes();
  
  