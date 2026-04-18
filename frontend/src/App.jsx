import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";

import { Toaster } from "react-hot-toast";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />;

  return (
    <div className="min-h-screen bg-rose-50 relative flex items-center justify-center p-4 overflow-hidden font-sans text-gray-800">
      {/* VIBRANT MESH GRADIENT BG */}
      <div className="absolute inset-0 bg-[#fdfbfb] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      {/* Animated Glow Orbs (Light Mode) */}
      <div className="absolute top-1/4 -left-10 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-pulse transition-all duration-1000" />
      <div className="absolute top-1/3 -right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-pulse transition-all duration-1000 delay-75" />
      <div className="absolute -bottom-10 left-1/3 w-[30rem] h-[30rem] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-pulse transition-all duration-1000 delay-150" />

      <Routes>
        <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster />
    </div>
  );
}
export default App;
