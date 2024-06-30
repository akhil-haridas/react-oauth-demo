import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  return (
    <section className="h-screen bg-slate-800">
      <div className="container h-full px-6 py-24">
        <div className="g-6 gap-8 flex h-full flex-col flex-wrap items-center justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
              setUser(decoded);
            }}
            onError={() => {
              setError("Login Failed");
            }}
          />
          {user && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={user?.picture}
                  alt="Profile Picture"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <h1 className="text-2xl font-semibold text-white">{user?.name}</h1>
              <p className="text-gray-300">{user?.email}</p>
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default App;
