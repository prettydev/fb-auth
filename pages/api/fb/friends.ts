const { Facebook } = require("fb");
const options = {
  appId: process.env.FACEBOOK_ID,
  autoLogAppEvents: true,
  xfbml: true,
  version: "v9.0",
};
const fb = new Facebook(options);
fb.setAccessToken(process.env.FACEBOOK_TOKEN);

export default async (req, res) => {     
  
  let friends = {};
  
  if (req.query.id) {
    friends = await fb.api(`/${req.query.id}/friends`);
  }

  res.send(JSON.stringify(friends, null, 2))
}