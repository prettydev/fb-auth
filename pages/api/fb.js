const { Facebook, FacebookApiException } = require("fb");
const options = {
  appId: process.env.FACEBOOK_ID,
  autoLogAppEvents: true,
  xfbml: true,
  version: "v8.0",
};
const fb = new Facebook(options);

const pd_token = "EAAEYSkpRCywBAEbVwghs4KnBXybRSlOVM5ZBmbdSYlVfqPO4RqmuOsehl7WWw5UMKPYQYR77JiZC7ohamSGyxgK1u9fZClvlA5xXbdJf0CZAyFDi6VlDId3fSCi2hFox2PHQrsZBwPEKnzMoV9hHbfmsA0mEM6Iiev1MF28XZC1NWQH5JqIzb1zPres4vaJqQZD";
const ruler_token = "EAAxEHmks7dIBAGN5ktwhzodxTZAN4tIoopZCctLCzaY9nQv6lMBPWcsgV3s76RZCzovmnAY63LLg8XHqNZCV1LO3PoBp4joXrwYrhCkDPCxa0x6TuRAfeZCWsBJ3bdTgLsFGOT4hrlsuCUgpJqRFsK6J2ZC1Bl6Y7gB0tvazxE9I5hB2hQdFcIz1DV1he6w1kZD";

fb.setAccessToken(
ruler_token  
);

export default async (req, res) => {
        
    // const res = await fb.api("/112821927130490/friends");
    const friends = await fb.api("/393604105027532/friends");
    console.log(res);

    res.send(JSON.stringify(friends, null, 2))
}