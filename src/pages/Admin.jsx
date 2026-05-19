import { useState } from "react"

function Admin() {

  const [products, setProducts] = useState(

    JSON.parse(
      localStorage.getItem("grainhub-products")
    ) || []

  )

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [stock, setStock] = useState("")
  const [editingProduct, setEditingProduct] = useState(null)
  const [activeSection, setActiveSection] = useState("products")
  const orders = JSON.parse(
  localStorage.getItem("grainhub-orders")
) || []

  const addProduct = (e) => {

    e.preventDefault()

    const newProduct = {
      id: Date.now(),
      name,
      price,
      category,
      image,
      stock
    }

    const updatedProducts = [
      ...products,
      newProduct
    ]

    setProducts(updatedProducts)

    localStorage.setItem(
      "grainhub-products",
      JSON.stringify(updatedProducts)
    )

    setName("")
    setPrice("")
    setCategory("")
    setImage("")
    setStock("")

  }

  const deleteProduct = (id) => {

    const updatedProducts =
      products.filter(
        (product) => product.id !== id
      )

    setProducts(updatedProducts)

    localStorage.setItem(
      "grainhub-products",
      JSON.stringify(updatedProducts)
    )

  }

  return (

    <div className="min-h-screen bg-[#f7f4ef] flex">

      {/* Sidebar */}
      <div className="w-[280px] bg-[#181818] text-white p-8">

        <h1 className="text-4xl font-bold mb-16">
          GrainHub
        </h1>

        <div className="space-y-6 text-lg">

          <p className="text-[#c08a4b] font-bold">
            Dashboard
          </p>

 <p
  onClick={() =>
    setActiveSection("products")
  }
  className={`cursor-pointer transition ${
    activeSection === "products"
      ? "text-[#c08a4b] font-bold"
      : "hover:text-[#c08a4b]"
  }`}
>

  Products

</p>

          <p className="hover:text-[#c08a4b] cursor-pointer transition">
            Orders
          </p>
<p
  onClick={() =>
    setActiveSection("orders")
  }
  className={`cursor-pointer transition ${
    activeSection === "orders"
      ? "text-[#c08a4b] font-bold"
      : "hover:text-[#c08a4b]"
  }`}
>

  Customers

</p> 

        </div>

      </div>

      {/* Main */}
      <div className="flex-1 p-12">

        {/* Header */}
        <div className="mb-12">

          <p className="uppercase tracking-[6px] text-[#c08a4b] text-sm mb-4">
            Admin Panel
          </p>

          <h1 className="text-6xl font-bold">

            Dashboard

            <br />

            <span className="italic text-[#c08a4b]">
              Overview
            </span>

          </h1>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-8 rounded-[30px] shadow-lg border border-[#ece3d7]">

            <h2 className="text-5xl font-bold text-[#c08a4b] mb-4">
              {products.length}
            </h2>

            <p className="text-gray-600">
              Total Products
            </p>

          </div>

          <div className="bg-white p-8 rounded-[30px] shadow-lg border border-[#ece3d7]">

            <h2 className="text-5xl font-bold text-[#c08a4b] mb-4">
              24
            </h2>

            <p className="text-gray-600">
              Orders Today
            </p>

          </div>

          <div className="bg-white p-8 rounded-[30px] shadow-lg border border-[#ece3d7]">

            <h2 className="text-5xl font-bold text-[#c08a4b] mb-4">
              ₹100K
            </h2>

            <p className="text-gray-600">
              Revenue
            </p>

          </div>

        </div>
        

        {/* Add Product */}
        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-[#ece3d7] mb-16">

          <h2 className="text-4xl font-bold mb-10">

            Add

            <span className="italic text-[#c08a4b]">
              {" "}Product
            </span>

          </h2>

          <form
            onSubmit={addProduct}
            className="grid md:grid-cols-4 gap-6"
          >

            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              
              className="p-4 rounded-2xl border border-[#ece3d7] outline-none"
            />
         <input
  type="text"
  placeholder="Image URL"
  value={image}
  onChange={(e) =>
    setImage(e.target.value)
  }
  className="p-4 rounded-2xl border border-[#ece3d7] outline-none"
/>

<input
  type="number"
  placeholder="Stock Quantity"
  value={stock}
  onChange={(e) =>
    setStock(e.target.value)
  }
  className="p-4 rounded-2xl border border-[#ece3d7] outline-none"
/>

<input
  type="number"
  placeholder="Price"
  value={price}
  onChange={(e) =>
    setPrice(e.target.value)
  }
  className="p-4 rounded-2xl border border-[#ece3d7] outline-none"
/>

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="p-4 rounded-2xl border border-[#ece3d7] outline-none"
            />

            <button
              className="bg-[#181818] text-white rounded-2xl hover:bg-[#c08a4b] transition"
            >

              Add Product

            </button>

          </form>

        </div>

        {/* Product List */}
        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-[#ece3d7]">

          <h2 className="text-4xl font-bold mb-10">

            Product

            <span className="italic text-[#c08a4b]">
              {" "}Management
            </span>

          </h2>

          <div className="space-y-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="flex justify-between items-center border border-[#ece3d7] p-6 rounded-2xl relative z-10"
              >

                <div>

                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-gray-600">
                    {product.category}
                  </p>

                </div>

               <p className="text-2xl font-bold text-[#c08a4b]">

  ₹{product.price}
</p>

<button
  onClick={() =>
    setEditingProduct(product)
  }
  className="bg-[#181818] text-white px-5 py-3 rounded-xl hover:bg-[#c08a4b] transition"
>

  Edit

</button>
<button
  onClick={() =>
    deleteProduct(product.id)
  }
  className="bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition"
>

  Delete

</button>

</div>

            ))}

          </div>

        </div>

      </div>
      {editingProduct && (

  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-10 rounded-[30px] w-[500px] max-h-[90vh] overflow-y-auto">

      <h2 className="text-3xl font-bold mb-8">
        Edit Product
      </h2>

    <div className="space-y-5">

  <div>

    <p className="mb-2 font-semibold text-gray-700">
      Product Name
    </p>

    <input
      type="text"
      value={editingProduct.name}
      onChange={(e) =>
        setEditingProduct({
          ...editingProduct,
          name: e.target.value
        })
      }
      className="w-full p-4 border border-[#ece3d7] rounded-2xl"
    />

  </div>

  <div>

    <p className="mb-2 font-semibold text-gray-700">
      Product Price
    </p>

    <input
      type="number"
      value={editingProduct.price}
      onChange={(e) =>
        setEditingProduct({
          ...editingProduct,
          price: e.target.value
        })
      }
      className="w-full p-4 border border-[#ece3d7] rounded-2xl"
    />

  </div>

  <div>

    <p className="mb-2 font-semibold text-gray-700">
      Product Category
    </p>

    <input
      type="text"
      value={editingProduct.category}
      onChange={(e) =>
        setEditingProduct({
          ...editingProduct,
          category: e.target.value
        })
      }
      className="w-full p-4 border border-[#ece3d7] rounded-2xl"
    />

  </div>

  <div>

    <p className="mb-2 font-semibold text-gray-700">
      Product Image URL
    </p>

    <input
      type="text"
      value={editingProduct.image}
      onChange={(e) =>
        setEditingProduct({
          ...editingProduct,
          image: e.target.value
        })
      }
      placeholder="Paste image URL here"
      className="w-full p-4 border border-[#ece3d7] rounded-2xl"
    />

  </div>

  {/* Image Preview */}
  {editingProduct.image && (

    <img
      src={editingProduct.image}
      alt="Preview"
      className="w-full h-52 object-cover rounded-3xl border border-[#ece3d7]"
    />

  )}

  <div className="flex gap-4 pt-4">

    <button
      onClick={() => {

        const updatedProducts =
          products.map((item) =>

            item.id === editingProduct.id
              ? editingProduct
              : item

          )

        setProducts(updatedProducts)

        localStorage.setItem(
          "grainhub-products",
          JSON.stringify(updatedProducts)
        )

        setEditingProduct(null)

      }}
      className="bg-[#181818] text-white px-6 py-3 rounded-2xl hover:bg-[#c08a4b] transition"
    >

      Save Changes

    </button>

    <button
      onClick={() =>
        setEditingProduct(null)
      }
      className="bg-red-500 text-white px-6 py-3 rounded-2xl"
    >

      Cancel

    </button>

  </div>

</div>

    </div>

  </div>

)}{activeSection === "orders" && (

<div className="bg-white p-10 rounded-[40px] shadow-xl border border-[#ece3d7] mt-16">

  <h2 className="text-4xl font-bold mb-10">

    Customer

    <span className="italic text-[#c08a4b]">
      {" "}Orders
    </span>

  </h2>

  <div className="space-y-6">

    {orders.length === 0 ? (

      <p className="text-gray-500">
        No orders yet
      </p>

    ) : (

      orders.map((order) => (

        <div
          key={order.id}
          className="border border-[#ece3d7] rounded-3xl p-6"
        >

          <div className="flex justify-between items-center mb-4">

            <div>

              <h3 className="text-2xl font-bold">
                {order.customer}
              </h3>

              <p className="text-gray-500">
                Order #{order.id}
              </p>

            </div>

            <p className="text-xl font-bold text-[#c08a4b]">
              ₹{order.total}
            </p>

          </div>

          <div className="space-y-2">

            {order.items.map((item, index) => (

              <p key={index}>
                {item.name} × {item.quantity}
              </p>

            ))}

          </div>

          <div className="mt-4">

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl text-sm font-semibold">

              {order.status}

            </span>

          </div>

        </div>

      ))

    )}

  </div>

</div>

)}

    </div>

  )
}

export default Admin