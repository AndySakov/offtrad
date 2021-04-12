import * as consts from './constants'

export const login = (email, pass) => {

  const raw = {
    email: email,
    pwd: pass
  }

  let parsed = []

  for (var property in raw) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(raw[property]);
    parsed.push(encodedKey + "=" + encodedValue);
  }

  parsed = parsed.join("&");

  return fetch(`${consts.server}/users/login`, {
    method: 'POST',
    body: parsed,
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  }).then(res => res.json()).catch((e) => console.log(e))

  // .then(data => {
  //   this._data =  data.status ? data.data : {id: null}
  //   console.log({result: true, ..._data})
  // })
}
