async function getTodoData () {
    const url= "https://localhost:7051/Todo";
    try {
      const response = await fetch(url, {headers: {'Access-Control-Allow-Origin' : 'https://localhost:7051'}});
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      return json
    } catch (error) {
      console.log(error.message);
      return[]
    }
  }

  export default getTodoData;