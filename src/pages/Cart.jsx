import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {

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

    <div className="min-h-screen bg-[#f7f4ef] px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl font-bold mb-16">

          Shopping

          <span className="italic text-[#c08a4b]">
            {" "}Cart
          </span>

        </h1>

        <div className="space-y-6">

          {cart.map((item, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#ece3d7] flex justify-between items-center shadow-lg"
            >

              <div>

                <h2 className="text-3xl font-bold mb-2">
                  {item.name}
                </h2>

                <p className="text-gray-600">
                  ₹{item.price} × {item.quantity}
                </p>

              </div>

             <div className="flex items-center gap-6">

  {/* Quantity Controls */}
  <div className="flex items-center gap-4 bg-[#f7f4ef] px-4 py-2 rounded-xl">

    <button
      onClick={() =>
        decreaseQuantity(item.name)
      }
      className="text-2xl font-bold"
    >
      -
    </button>

    <p className="text-xl font-bold">
      {item.quantity}
    </p>

    <button
      onClick={() =>
        addToCart(item)
      }
      className="text-2xl font-bold"
    >
      +
    </button>

  </div>

  <p className="text-2xl font-bold text-[#c08a4b]">

    ₹{item.price * item.quantity}

  </p>

  <button
    onClick={() =>
      removeFromCart(item.name)
    }
    className="bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition"
  >

    Remove

  </button>

</div>

            </div>

          ))}

        </div>

        {/* Total */}
        <div className="mt-16 bg-white p-10 rounded-[40px] border border-[#ece3d7] shadow-xl">

          <div className="flex justify-between items-center">

            <h2 className="text-4xl font-bold">
              Total Amount
            </h2>

            <p className="text-5xl font-bold text-[#c08a4b]">

              ₹{total}

            </p>
            {/* WhatsApp Order Button */}
<div className="mt-10 flex justify-end">

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

      window.open(

        `https://wa.me/918074572067?text=${whatsappMessage}`,

        "_blank"

      )

    }}
    className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl transition"
  >

    Order on WhatsApp

  </button>

</div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Cart