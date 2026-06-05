import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
function Rice() {

  const {
    addToCart,
    message
  } = useContext(CartContext)

  const [quantities, setQuantities] = useState({})
  const products = JSON.parse(
  localStorage.getItem("grainhub-products")
) || []

const riceProducts = products.filter(
  (product) =>
    product.category.toLowerCase() === "rice"
)

  return (

    <div className="min-h-screen bg-[#f7f4ef] px-6 py-20 relative">
      <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center">

  <Link
    to="/"
    className="bg-white px-6 py-3 rounded-2xl shadow-md border border-[#ece3d7] hover:bg-[#181818] hover:text-white transition"
  >
    🏠 Home
  </Link>

  <Link
    to="/cart"
    className="bg-[#c08a4b] text-white px-6 py-3 rounded-2xl shadow-md hover:bg-[#181818] transition"
  >
    🛒 Go To Cart
  </Link>

</div>

      {/* Popup */}
      {message && (

        <div className="fixed top-6 right-6 bg-[#181818] text-white px-6 py-4 rounded-2xl shadow-2xl z-50 animate-bounce">

          {message}

        </div>

      )}

      <div className="max-w-7xl mx-auto">

        <div className="mb-16">

          <p className="uppercase tracking-[6px] text-[#c08a4b] text-sm mb-4">
            Rice Collection
          </p>

          <h1 className="text-6xl font-bold">

            Premium

            <br />

            <span className="italic text-[#c08a4b]">
              Rice Products
            </span>

          </h1>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          

           {riceProducts.map((product) => (

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
      Premium quality rice product.
    </p>

    {/* Quantity */}
    <div className="flex items-center gap-4 mb-6">
<button
  onClick={() =>
    setQuantities({
      ...quantities,
      [product.id]: Math.max(
        (quantities[product.id] || 1) - 1,
        1
      )
    })
  }
  className="bg-[#f3e7d7] px-4 py-2 rounded-xl text-xl font-bold"
>

  -

</button>

      <p className="text-xl font-bold">
        {quantities[product.id] || 1}
      </p>

      <button
  onClick={() =>
    setQuantities({
      ...quantities,
      [product.id]:
        (quantities[product.id] || 1) + 1
    })
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
  i < (quantities[product.id] || 1);
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

export default Rice
