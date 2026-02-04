import { useNavigate } from "react-router-dom";
import Router from "./components/Router/Router";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoginSuccess = (event: CustomEvent) => {
      const { token } = event.detail;
      localStorage.setItem("token", token);
      navigate("/");
    };

    window.addEventListener(
      "auth:login-success",
      handleLoginSuccess as EventListener,
    );

    return () => {
      window.removeEventListener(
        "auth:login-success",
        handleLoginSuccess as EventListener,
      );
    };
  }, [navigate]);
  return <Router />;
}

export default App;
