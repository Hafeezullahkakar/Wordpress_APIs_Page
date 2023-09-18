const fetchData = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=h6a5ca0dgcsutahvpssm1p6ika");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch("https://buyandsellabusiness.com/tbdc/qb48c8b30425f6a92a5e87e02f9d37d5649bdf6e", requestOptions);
    const data = await response.json();

    // Check if the API response is successful
    if (data.status === "OK") {
      // Assign the fetched data to the products variable
      const products = data.data;

     console.log(products)

      // Do something with the filtered cities
      // ...

    } else {
      console.error("Error: Failed to fetch data from the API");
    }
  } catch (error) {
    console.error("Error: Failed to fetch data from the API", error);
  }
};

// Call the fetchData function to fetch and process the data
fetchData();
