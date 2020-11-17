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
    const friends = await fb.api("/112821927130490/friends");
    res.send(JSON.stringify(friends, null, 2))
}