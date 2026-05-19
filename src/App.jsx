import { Routes, Route, Link } from "react-router-dom"
import { useContext, useState } from "react"

import Rice from "./pages/Rice"
import Cereals from "./pages/Cereals"
import Pulses from "./pages/Pulses"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Admin from "./pages/Admin"

import { CartContext } from "./context/CartContext"

import ProtectedRoute from "./components/ProtectedRoute"
import CartSidebar from "./components/CartSidebar"

function Home() {

  const { message, cart } = useContext(CartContext)

  const isLoggedIn =
    localStorage.getItem("grainhub-auth")

  const user = JSON.parse(
    localStorage.getItem("grainhub-user")
  )

  const [showMenu, setShowMenu] = useState(false)

  const [cartOpen, setCartOpen] = useState(false)

  return (

    <div className="min-h-screen bg-[#f7f4ef] text-[#181818]">

      {/* Popup */}
      {message && (

        <div className="fixed top-6 right-6 bg-[#181818] text-white px-6 py-4 rounded-2xl shadow-2xl z-50 animate-bounce">

          {message}

        </div>

      )}

      {/* Sidebar */}
      <CartSidebar
        isOpen={cartOpen}
        setIsOpen={setCartOpen}
      />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-[#e8dfd2] bg-[#f7f4ef]/80">

        <h1 className="text-3xl font-bold tracking-wide">
          GrainHub
        </h1>

        <div className="flex gap-8 text-lg font-medium items-center">

          <Link
            to="/"
            className="hover:text-[#c08a4b] transition"
          >
            Home
          </Link>

          <Link
            to="/"
            className="hover:text-[#c08a4b] transition"
          >
            Products
          </Link>

          <Link
            to="/"
            className="hover:text-[#c08a4b] transition"
          >
            Contact
          </Link>

          {/* Cart Button */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative hover:text-[#c08a4b] transition"
          >

            Cart

            <span className="absolute -top-3 -right-4 bg-[#c08a4b] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">

              {cart.length}

            </span>

          </button>

          {/* User */}
          {isLoggedIn ? (

            <div className="relative">

              <button
                onClick={() =>
                  setShowMenu(!showMenu)
                }
                className="font-bold text-[#c08a4b]"
              >

                {user?.name}

              </button>

              {showMenu && (

                <div className="absolute right-0 mt-4 bg-white border border-[#ece3d7] rounded-2xl shadow-xl p-4 min-w-[140px] z-50">

                  <button
                    onClick={() => {

                      localStorage.removeItem(
                        "grainhub-auth"
                      )

                      window.location.reload()

                    }}
                    className="text-red-500 hover:text-red-600 transition"
                  >

                    Logout

                  </button>

                </div>

              )}

            </div>

          ) : (

            <Link
              to="/login"
              className="hover:text-[#c08a4b] transition"
            >
              Login
            </Link>

          )}

        </div>

      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-16">

          <p className="uppercase tracking-[6px] text-[#c08a4b] text-sm mb-4">
            Featured Categories
          </p>

          <h1 className="text-6xl font-bold leading-tight">

            Premium

            <br />

            <span className="italic text-[#c08a4b]">
              Food Collection
            </span>

          </h1>

        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Rice */}
          <Link to="/rice">

            <div className="group bg-white rounded-[30px] overflow-hidden border border-[#ece3d7] shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer h-full flex flex-col">

              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
                alt="Rice"
                className="h-72 w-full object-cover"
              />

              <div className="p-8 flex flex-col flex-grow">

                <h3 className="text-4xl font-bold mb-5 min-h-[100px]">
                  Premium Rice
                </h3>

                <p className="text-gray-600 leading-relaxed flex-grow">
                  Explore premium quality rice varieties.
                </p>

              </div>

            </div>

          </Link>

          {/* Cereals */}
          <Link to="/cereals">

            <div className="group bg-white rounded-[30px] overflow-hidden border border-[#ece3d7] shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer h-full flex flex-col">

              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b"
                alt="Cereals"
                className="h-72 w-full object-cover"
              />

              <div className="p-8 flex flex-col flex-grow">

                <h3 className="text-4xl font-bold mb-5 min-h-[100px]">
                  Cereals
                </h3>

                <p className="text-gray-600 leading-relaxed flex-grow">
                  Healthy cereals including wheat and millets.
                </p>

              </div>

            </div>

          </Link>

          {/* Pulses */}
          <Link to="/pulses">

            <div className="group bg-white rounded-[30px] overflow-hidden border border-[#ece3d7] shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer h-full flex flex-col">

              <img
                src="https://images.unsplash.com/photo-1515543904379-3d757afe72e4"
                alt="Pulses"
                className="h-72 w-full object-cover"
              />

              <div className="p-8 flex flex-col flex-grow">

                <h3 className="text-4xl font-bold mb-5 min-h-[100px]">
                  Pulses
                </h3>

                <p className="text-gray-600 leading-relaxed flex-grow">
                  Protein-rich premium quality pulses.
                </p>

              </div>

            </div>

          </Link>

        </div>

      </section>

    </div>

  )
}

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/rice" element={<Rice />} />

      <Route path="/cereals" element={<Cereals />} />

      <Route path="/pulses" element={<Pulses />} />
     <Route
  path="/admin"
  element={
    <ProtectedRoute adminOnly={true}>
      <Admin />
    </ProtectedRoute>
  }
/>

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

    </Routes>

  )
}

export default App