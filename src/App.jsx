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
const user = JSON.parse(
  localStorage.getItem("grainhub-user")
)

const isLoggedIn = !!user
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

        <a
  href="#products"
  className="hover:text-[#c08a4b] transition"
>
  Products
</a>
<a
  href="#contact"
  className="hover:text-[#c08a4b] transition"
>
  Contact
</a>
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
  "grainhub-user"
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
      <section
  id="products"
  className="max-w-7xl mx-auto px-6 py-24"
>

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

              <section className="max-w-7xl mx-auto px-6 py-20">

  <div className="bg-white rounded-[30px] p-10 border border-[#ece3d7] shadow-lg">

    <h2 className="text-4xl font-bold mb-6">

      Visit Our

      <span className="italic text-[#c08a4b]">
        {" "}Store
      </span>

    </h2>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      <div>

        <h3 className="text-3xl font-bold mb-4">
          SREE LAKSHMI RICE STORE
        </h3>
        <p className="inline-block bg-[#c08a4b] text-white px-4 py-2 rounded-xl font-semibold mb-4">

  ⭐ 22+ Years of Trusted Service

</p>

        <p className="text-lg mb-6 text-gray-600">

          Serving customers in Hyderabad with premium quality rice, cereals, pulses and wholesale grain supplies. Trusted by local families and businesses for quality products and competitive pricing.

        </p>

        <div className="space-y-3 text-lg">

          <p>📍 Rajamohallah, King Koti, Koti, Hyderabad, Telangana 500001</p>

          <p>📞 +91 9246292724</p>

          <p>🚚 Retail & Wholesale Orders Available</p>

          <p>🕒 Mon - Sat : 10 AM - 9 PM & sun :10 AM - 2 PM</p>

        </div>

        <div className="flex gap-4 mt-8">

          <a
            href="https://wa.me/918074572067"
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] text-white px-6 py-3 rounded-2xl hover:opacity-90 transition"
          >
            💬 WhatsApp
          </a>

          <a
            href="https://maps.app.goo.gl/Er65hF9g2F8r5Lre6"
            target="_blank"
            rel="noreferrer"
            className="bg-[#181818] text-white px-6 py-3 rounded-2xl hover:bg-[#c08a4b] transition"
          >
            📍 View Location
          </a>

        </div>

      </div>

      <div>

        <img
          src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
          alt="Sree Lakshmi Rice Store"
          className="rounded-[30px] w-full h-[350px] object-cover"
        />

      </div>

    </div>

  </div>

</section>

      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="bg-white rounded-[30px] p-10 border border-[#ece3d7] shadow-lg">

          <h2 className="text-4xl font-bold mb-6">

            Contact

            <span className="italic text-[#c08a4b]">
              {" "}Us
            </span>

          </h2>

          <div className="space-y-4 text-lg">

            <p>📍 Hyderabad, Telangana</p>

            <p>📞 +91 8074572067</p>

            <p>📧 grainhub@gmail.com</p>

            <p>🕒 Mon - Sat : 9 AM - 8 PM</p>

          </div>

        </div>

      </section>

    </div>

  )
}

function App() {

  return (

    <>

    {window.location.pathname !== "/" && (

  <nav className="bg-white border-b border-[#ece3d7] px-8 py-4 flex justify-center gap-8 sticky top-0 z-50 shadow-sm">

    <Link to="/">Home</Link>

    <Link to="/rice">Rice</Link>

    <Link to="/cereals">Cereals</Link>

    <Link to="/pulses">Pulses</Link>

    <Link to="/cart">Cart</Link>

  </nav>

)}

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

    </>

  )
}
export default App