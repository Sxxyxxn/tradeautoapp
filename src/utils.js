const server_url = "http://localhost:4000/";
const assets_url = server_url + "assets/";
const api_url = "http://localhost:4000/api";
const cars_url = api_url + "/cars";
const comments_url = api_url + "/comments";

// POST
const add_car = api_url + "/cars";

//POST
const add_comment = api_url + "/comments";

export {
  api_url,
  cars_url,
  add_car,
  server_url,
  assets_url,
  add_comment,
  comments_url,
};
