import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

const Header = () => {
  const [session, loading] = useSession();

  return (
    <header>
      <div>
        <p>
          {!session && (
            <div className="flex flex-row justify-between items-center">
              <span>You are not signed in</span>
              <a
                className="bg-blue-500 p-3 rounded-lg text-white"
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault();
                  signIn("facebook");
                }}
              >
                Sign in with facebook
              </a>
            </div>
          )}
          {session && (
            <div className="flex flex-row justify-between items-center">
              <span>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <a
                className="bg-blue-500 p-3 rounded-lg text-white"
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </div>
          )}
        </p>
      </div>
    </header>
  );
};

export default Header;
