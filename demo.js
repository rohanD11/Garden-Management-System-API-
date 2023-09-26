// Define a variable to store the token
let authToken = null;

// Function to perform the login
function login() {
  const apiUrl = "https://garden-management.onrender.com/api/v1/admin/login";
  const username = "rohan11@gmail.com";
  const password = "password";

  const data = {
    username: username,
    password: password,
  };

  // Perform POST request for login
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      authToken = data.token; // Store the obtained token

      console.log("Login Successful!");
      console.log("Token: ", authToken);

      // Call a function to make other requests with the token
      makeOtherRequests();
    })
    .catch((error) => {
      console.error("Login Failed!");
      console.error(error.message);
    });
}

// Function to make other requests with the stored token
function makeOtherRequests() {
  if (!authToken) {
    console.error("Token is missing. Please log in first.");
    return;
  }

  const otherApiUrl =
    "https://garden-management.onrender.com/api/v1/some-other-endpoint";

  // Perform other requests with the stored token in the authorization header
  fetch(otherApiUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Other Request Successful!");
      console.log(data);
    })
    .catch((error) => {
      console.error("Other Request Failed!");
      console.error(error.message);
    });
}

// Call the login function to initiate the login process
