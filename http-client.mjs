import https from "https";

const endpoint = "https://hookb.in/7Z0wj9kk0BCWNgjjNno1";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Lovina",
  lastName: "Aulia",
});

request.write(body);
request.end();
