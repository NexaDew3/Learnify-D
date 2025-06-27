import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Optional decorative background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 60px, transparent 60px, transparent 120px)",
          }}
        />
      </div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/30 shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8 tracking-wider">
          {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
        </h2>

        <div className="space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-3 px-5 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-3 px-5 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-3 px-5 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full py-3 px-5 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {isLogin && (
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-white hover:underline">
              Forget password
            </a>
          </div>
        )}

        <button className="w-full py-3 mt-6 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-200">
          {isLogin ? "Login" : "Create Account"}
        </button>

        <p className="text-center mt-6 text-white text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleView}
            className="underline text-white hover:text-gray-300 transition"
          >
            {isLogin ? "Create account" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
