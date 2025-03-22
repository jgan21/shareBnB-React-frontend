const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";

/** ShareBnB API. */
class ShareBnB {

  static token;

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL (`${BASE_API_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${ShareBnB.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error", resp.statusText, resp.status);
      const message = (await resp.json()).error;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  /** addProperty: adds a property with form data and image file. */

  static async addProperty(formData, file) {
    const url = `${BASE_API_URL}/properties`;

    const newFormData = new FormData();
    newFormData.append('image', file);

    for (let key in formData) {
      newFormData.append(key, formData[key]);
    }

    const payload = {
      method: "POST",
      body: newFormData,
    };

    const response = await fetch(url, payload);
    const data = await response.json();
    return data;
  }

  /** getProperties: get all properties. */
  static async getProperties(search) {
    // let response = await this.request(
    //   "properties", search ? { term: search } : {}
    // )
    // return response;

    let url = new URL(`${BASE_API_URL}/properties`);

    url.search = (search)
      ? new URLSearchParams({ term: search }).toString()
      : "";

    const response = await fetch(url);
    const data = await response.json();
    console.log("API search data", data);
    return data;

  }

  /** Get the current user. */

  static async getCurrentUser(username) {
    let response = await this.request(`users/${username}`);
    return response.user;
  }

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`login`, data, "POST");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`signup`, data, "POST");
    return res.token;
  }
}

export default ShareBnB;