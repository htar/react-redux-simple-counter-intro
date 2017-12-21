
const headers = {
  "Accept":"application/json",
  "Content-Type":"application/json",
  "Authorization": 'put_your_bearer_here'
}

class Base {
  constructor() {
    this.root = 'https://ws.fanteam.com'
  }

  load(params,route){ 
    let endpoint = `${this.root}/${route}`
    let qs = {...{}, params} //not used yet
    return fetch(endpoint, {headers, method:'GET'}).then(res => res.json())
  }
}

export default new Base();