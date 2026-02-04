import LoginForm from "authMF/LoginForm";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Login
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
