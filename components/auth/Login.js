import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative h-screen bg-gray-100">
      <div className="shadow-sm flex flex-col bg-white items-center justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-lg p-4 w-4/5 md:w-1/4 h-25 gap-5">
        <p className="text-2xl"> Metaverse</p>
        <button
          onClick={() => {
            authenticate({ provider: "metamask" });
          }}
          className="bg-blue-600 rounded-md py-2 w-full font-bold text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
