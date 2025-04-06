"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(username, password)
    router.push("/tasks")
  }

  return (
    <div className="absolute top-[8rem] bottom-0 left-0 right-0 flex items-center justify-center bg-[var(--primary-color)] px-4 sm:px-0 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--form-bg)] text-[var(--form-text)] shadow-xl rounded-3xl px-10 py-10 w-full max-w-md border border-[var(--primary-color-dark)] transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-[var(--powerful-color)]">
          Welcome Back 👋
        </h2>

        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-[var(--input-bg)] text-[var(--form-text)] border border-[var(--input-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--powerful-color)] transition-all duration-200 placeholder:text-sm"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-[var(--input-bg)] text-[var(--form-text)] border border-[var(--input-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--powerful-color)] transition-all duration-200 placeholder:text-sm"
            placeholder="••••••••"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[var(--powerful-color)] text-white font-semibold py-3 px-8 rounded-xl hover:bg-[var(--secondary-color)] hover:text-[var(--form-text)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--powerful-color)] shadow-md"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
