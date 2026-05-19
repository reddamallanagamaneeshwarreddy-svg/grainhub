import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {

    e.preventDefault()

    const savedUsers = JSON.parse(
      localStorage.getItem("grainhub-users")
    ) || []

    const matchedUser = savedUsers.find(
      (user) =>
        user.email === email &&
        user.password === password
    )

    if (!matchedUser) {

      alert("Invalid Credentials")

      return

    }

    const userData = {
      name: matchedUser.name,
      email: matchedUser.email,
      isAdmin:
        matchedUser.email === "admin@gmail.com"
    }

    localStorage.setItem(
      "grainhub-user",
      JSON.stringify(userData)
    )

    alert("Login Successful!")

    navigate("/")

  }

  return (

    <div className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md p-10 rounded-[40px] shadow-2xl border border-[#ece3d7]">

        <h1 className="text-5xl font-bold mb-10">

          Welcome

          <span className="italic text-[#c08a4b]">
            {" "}Back
          </span>

        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 rounded-2xl border border-[#ece3d7] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 rounded-2xl border border-[#ece3d7] outline-none"
          />

          <button
            className="w-full bg-[#181818] text-white py-4 rounded-2xl hover:bg-[#c08a4b] transition"
          >

            Login

          </button>

        </form>

        <p className="mt-8 text-center text-gray-600">

          Don’t have an account?

          <Link
            to="/signup"
            className="text-[#c08a4b] font-bold ml-2"
          >
            Signup
          </Link>

        </p>

      </div>

    </div>

  )
}

export default Login