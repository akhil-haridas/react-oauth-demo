import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <section className="h-screen bg-slate-800">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center">
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
