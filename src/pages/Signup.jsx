import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 const handleSignup = (e) => {

  e.preventDefault()

  const savedUsers = JSON.parse(
    localStorage.getItem("grainhub-users")
  ) || []

  const userData = {
    name,
    email,
    password
  }

  savedUsers.push(userData)

  localStorage.setItem(
    "grainhub-users",
    JSON.stringify(savedUsers)
  )

  alert("Signup Successful!")

  navigate("/login")

}

  return (

    <div className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md p-10 rounded-[40px] shadow-2xl border border-[#ece3d7]">

        <h1 className="text-5xl font-bold mb-10">

          Create

          <span className="italic text-[#c08a4b]">
            {" "}Account
          </span>

        </h1>

        <form
          onSubmit={handleSignup}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-4 rounded-2xl border border-[#ece3d7] outline-none"
          />

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

            Signup

          </button>

        </form>

        <p className="mt-8 text-center text-gray-600">

          Already have an account?

          <Link
            to="/login"
            className="text-[#c08a4b] font-bold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  )
}

export default Signup