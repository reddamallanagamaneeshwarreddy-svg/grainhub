import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

function Cereals() {

  const {
    addToCart,
    message
  } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)
  const products = JSON.parse(
  localStorage.getItem("grainhub-products")
) || []

const cerealsProducts = products.filter(
  (product) =>
    product.category.toLowerCase() === "cereals"
)

  return (

    <div className="min-h-screen bg-[#f7f4ef] px-6 py-20 relative">

      {/* Popup */}
      {message && (

        <div className="fixed top-6 right-6 bg-[#181818] text-white px-6 py-4 rounded-2xl shadow-2xl z-50 animate-bounce">

          {message}

        </div>

      )}

      <div className="max-w-7xl mx-auto">

        <div className="mb-16">

          <p className="uppercase tracking-[6px] text-[#c08a4b] text-sm mb-4">
            Cereals Collection
          </p>

          <h1 className="text-6xl font-bold">

            Healthy

            <br />

            <span className="italic text-[#c08a4b]">
              Cereals
            </span>

          </h1>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {cerealsProducts.map((product) => (

  <div
    key={product.id}
    className="bg-white rounded-[30px] p-6 border border-[#ece3d7] shadow-lg"
  >

    <img
      src={product.image}
      alt={product.name}
      className="rounded-3xl h-64 w-full object-cover mb-6"
    />

    <h2 className="text-3xl font-bold mb-3">
      {product.name}
    </h2>

    <p className="text-gray-600 mb-6">
      Nutritious premium cereal product.
    </p>

    {/* Quantity */}
    <div className="flex items-center gap-4 mb-6">

      <button
        onClick={() =>
          quantity > 1 &&
          setQuantity(quantity - 1)
        }
        className="bg-[#f3e7d7] px-4 py-2 rounded-xl text-xl font-bold"
      >
        -
      </button>

      <p className="text-xl font-bold">
        {quantity}
      </p>

      <button
        onClick={() =>
          setQuantity(quantity + 1)
        }
        className="bg-[#f3e7d7] px-4 py-2 rounded-xl text-xl font-bold"
      >
        +
      </button>

    </div>

    <div className="flex justify-between items-center">

      <p className="text-2xl font-bold text-[#c08a4b]">
        ₹{product.price}/kg
      </p>

      <button
        onClick={() => {

          for (
            let i = 0;
            i < quantity;
            i++
          ) {

            addToCart({
              name: product.name,
              price: Number(product.price)
            })

          }

        }}
        className="bg-[#c08a4b] text-white px-5 py-3 rounded-xl hover:bg-[#181818] transition"
      >

        Add to Cart

      </button>

    </div>

  </div>

))}
</div>

</div>

</div>
)
}

export default Cereals