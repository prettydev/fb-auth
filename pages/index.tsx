import Layout from "../components/layout";
import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
} from "react-share";

const video_list = [
  "https://www.youtube.com/embed/EXM7hkosdEQ",
  "https://www.youtube.com/embed/hOQzZ3oowXM",
  "https://www.youtube.com/embed/PkiG_R2FOGA",
  "https://www.youtube.com/embed/WKmDFS7VDW8",
  "https://www.youtube.com/embed/3bfRXvOWWrA",
  "https://www.youtube.com/embed/qdnbAd_vbVE",
];

const Page = () => {
  const [session, loading] = useSession();
  const [friends_count, setFriendsCount] = useState(0);

  const getFriendsCount = async () => {
    const { data } = await axios("/api/fb/friends");
    if (data && data.summary) {
      setFriendsCount(data.summary.total_count);
    }
  };

  useEffect(() => {
    getFriendsCount();
  }, []);

  return (
    <Layout>
      <div className="flex">
        <h1 className="mt-8 font-semibold mx-auto text-3xl">
          Facebook Auth Demo
        </h1>
      </div>

      {session && (
        <table className="w-full table-auto">
          <thead className="justify-between">
            <div className="bg-gray-800 px-16 py-2 flex flex-row justify-between">
              <span className="text-gray-300">Field</span>
              <span className="text-gray-300">Value</span>
            </div>
          </thead>
          <tbody className="bg-gray-200">
            <div className="border-4 border-gray-200 flex flex-row items-center px-16 py-2 justify-between">
              <div>image</div>
              <img
                className="h-8 w-8 rounded-full object-cover "
                src={session.user.image}
                alt={session.user.image}
                title={session.user.image}
              />
            </div>
            <div className="border-4 border-gray-200 flex flex-row items-center px-16 py-2 justify-between">
              <div>Name</div>
              <div className="text-center ml-2 font-semibold">
                {session.user.name}
              </div>
            </div>
            <div className="border-4 border-gray-200 flex flex-row items-center px-16 py-2 justify-between">
              <div>Email</div>
              <div className="text-center ml-2 font-semibold">
                {session.user.email}
              </div>
            </div>
            <div className="border-4 border-gray-200 flex flex-row items-center px-16 py-2 justify-between">
              <div>Expires</div>
              <div>{session.expires}</div>
            </div>
          </tbody>
        </table>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
        {video_list.map((v, i) => (
          <div className="">
            <ReactPlayer url={v} width="260px" height="180px" />
            <div className="m-1">
              <FacebookShareButton url={v}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Page;
