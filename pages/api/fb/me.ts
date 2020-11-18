const { Facebook, FacebookApiException } = require("fb");
const options = {
  appId: process.env.FACEBOOK_ID,
  autoLogAppEvents: true,
  xfbml: true,
  version: "v9.0",
};
const fb = new Facebook(options);
fb.setAccessToken(process.env.FACEBOOK_TOKEN);

export default async (req, res) => {  
  const result = await fb.api('/me');  
  res.send(JSON.stringify(result, null, 2))
}