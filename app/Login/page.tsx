"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../services/authServices";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      if (data.token) {
        localStorage.setItem("token", data.token);

        router.push("/MainContent");
      } else {
        alert(data.message || "Error login");
      }
    } catch (error: any) {
      alert(error.message || "Internal server error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-6">
        <div>
          <h1 className="font-bold text-2xl py-3 text-slate-800">
            Login
          </h1>

          <p className="text-sm text-gray-500">
            Welcome back! Please enter your details
          </p>
        </div>

        <form onSubmit={handleLogin} className="max-w-xl space-y-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="e"
              className="text-gray-700 text-sm"
            >
              Email
            </label>

            <input
              type="email"
              id="e"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="p"
              className="text-gray-700 text-sm"
            >
              Password
            </label>

            <input
              type="password"
              id="p"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-indigo-500 px-2 py-3 text-white font-bold rounded-lg cursor-pointer hover:bg-indigo-700 transition"
          >
            Login
          </button>

          <p className="text-gray-700 text-center text-sm">
            Do not have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-indigo-500 hover:text-indigo-600 hover:underline"
            >
              Create
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}