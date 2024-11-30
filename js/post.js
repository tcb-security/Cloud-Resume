fetch("https://fym6dt7zn7.execute-api.us-east-1.amazonaws.com/Prod", {
    method: "OPTIONS",
    headers: {
        "Content-Type":"application/json"
    }
}
);

request = fetch("https://fym6dt7zn7.execute-api.us-east-1.amazonaws.com/Prod", {
    method: "POST",
    headers: {
        "Content-Type":"application/json"
    }})
    .then(response => {
        return response.json();
    })
    .then(data => {
        document.getElementById("testingcount").innerHTML += data["body"];
    });

