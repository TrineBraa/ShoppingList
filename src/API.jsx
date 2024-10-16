async function getData() {
    const url = "https://localhost:7051/Shoppinglist";
    try {
      const response = await fetch(url, {headers: {'Access-Control-Allow-Origin': 'https://localhost:7051'}});
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      return json
    } catch (error) {
      console.error(error.message);
      return []
    }
  }

  export default getData;