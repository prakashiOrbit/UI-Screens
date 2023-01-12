import axios from "axios";
const baseUrl = ""
const authToken = ""



export function postApi(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + url, data, {
        headers: {
          Authorization: 'Bearer ' + authToken
        }
      }
      )
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log(url, 'url POST');
      });
  });
}

export function getApi(url) {
  console.log(url, "url from getApi");
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        headers: {
          Authorization: 'Bearer ' + authToken
        }
      }
      )
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log(url, 'url GET');
      });
  });
}

function urlbuilder(protocol, domain, tenant, object, endpoint) {
  var url = protocol + domain + tenant + object + "/" + endpoint;
  console.log(url)
  return url
}


export function postMethod(payload, protocol, domain, tenant, object, endpoint) {
  console.log("post methode");
  var url = urlbuilder(protocol, domain, tenant, object, endpoint);
  //call authenticate function
  var fun = authenticate('http://', 'localhost:9082/', 'apptest/', 'Security', 'Authenticate')
  //localstorage getitem - store the session in a variable
  var id = localStorage.getItem('session', fun)
  //Pass the variable in the header
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Session-Id': id },
    body: JSON.stringify(payload)
  }

  return new Promise((resolve, reject) => {

    fetch(url, req)
      .then((res) => resolve(res))
      .catch(err => { reject(err) })
  })
}

function authenticate(protocol, domain, tenant, object, endpoint) {
  var url = urlbuilder(protocol, domain, tenant, object, endpoint);
  var pay = { "identity": "apptestadmin", "password": "apptestadmin", "type": "custom", "FlowAdmin": { "___smart_action___": "lookup", "___smart_value___": "Security" } }
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pay)
  }

  fetch(url, req)
    .then(res => res.json()
      .then((resp) => {
        var id = (resp.responses[0].sessionId);
        console.log(id);
        localStorage.setItem('session', id);
      }))
};
