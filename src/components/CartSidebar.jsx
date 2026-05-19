import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartSidebar({ isOpen, setIsOpen }) {

  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart
  } = useContext(CartContext)

  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  )

  return (

    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-2xl z-50 transition-transform duration-500 ${
        isOpen
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >

      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b">

        <h2 className="text-3xl font-bold">

          Shopping

          <span className="italic text-[#c08a4b]">
            {" "}Cart
          </span>

        </h2>

        <button
          onClick={() => setIsOpen(false)}
          className="text-3xl"
        >
          ×
        </button>

      </div>

      {/* Cart Items */}
      <div className="p-6 space-y-6 overflow-y-auto h-[70%]">

        {cart.length === 0 ? (

          <p className="text-gray-500">
            Your cart is empty
          </p>

        ) : (

          cart.map((item, index) => (

            <div
              key={index}
              className="border border-[#ece3d7] rounded-3xl p-5"
            >

              <h3 className="text-2xl font-bold mb-3">
                {item.name}
              </h3>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.name)
                    }
                    className="bg-[#f3e7d7] px-3 py-1 rounded-lg"
                  >
                    -
                  </button>

                  <p className="font-bold">
                    {item.quantity}
                  </p>

                  <button
                    onClick={() =>
                      addToCart(item)
                    }
                    className="bg-[#f3e7d7] px-3 py-1 rounded-lg"
                  >
                    +
                  </button>

                </div>

                <p className="font-bold text-[#c08a4b]">

                  ₹{item.price * item.quantity}

                </p>

              </div>

              <button
                onClick={() =>
                  removeFromCart(item.name)
                }
                className="mt-4 text-red-500"
              >

                Remove

              </button>

            </div>

          ))

        )}

      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full p-6 border-t bg-white">

        <div className="flex justify-between items-center mb-6">

          <p className="text-2xl font-bold">
            Total
          </p>

          <p className="text-3xl font-bold text-[#c08a4b]">

            ₹{total}

          </p>

        </div>

       <button
  onClick={() => {

    const orderText = cart
      .map(
        (item) =>
          `${item.name} - ${item.quantity}kg - ₹${item.price * item.quantity}`
      )
      .join("%0A")

    const totalAmount = cart.reduce(
      (acc, item) =>
        acc + item.price * item.quantity,
      0
    )


    const whatsappMessage =
      `Hello GrainHub,%0A%0AI want to place an order:%0A%0A${orderText}%0A%0ATotal: ₹${totalAmount}`
      const savedOrders = JSON.parse(
  localStorage.getItem("grainhub-orders")
) || []

const user = JSON.parse(
  localStorage.getItem("grainhub-user")
)

const newOrder = {
  id: Date.now(),
  customer: user?.name || "Guest",
  items: cart,
  total: total,
  status: "Pending"
}

savedOrders.push(newOrder)

localStorage.setItem(
  "grainhub-orders",
  JSON.stringify(savedOrders)
)

    window.open(
      `https://wa.me/918074572067?text=${whatsappMessage}`,
      "_blank"
    )

  }}
  className="w-full bg-green-500 text-white py-4 rounded-2xl text-xl font-bold hover:bg-green-600 transition"
>

  Checkout on WhatsApp

</button>

      </div>

    </div>

  )
}

export default CartSidebar