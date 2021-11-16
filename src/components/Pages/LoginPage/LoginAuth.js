export async function loginAuth(user, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": "mor_2314",
    "password": "83r5^_"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", requestOptions)
    const data = await response.json();
    return data.token
  } catch (err) {
    console.log(err)
  }
}
