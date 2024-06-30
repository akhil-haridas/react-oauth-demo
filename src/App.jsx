import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <section className="h-screen bg-slate-800">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center">
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
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
      </div>
    </section>
  );
}

export default App;
