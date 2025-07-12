export default function Header() {
  return (
    <div className=" flex flex-col text-amber-50 h-20 justify-center items-center ">
      <div className="flex flex-row h-12 justify-between items-center bg-[#131921] min-w-screen p-5">
        <div className="flex items-center space-x-2">
            {/* <img src="/Amazon-Logo.png" alt="Logo" className="flex w-auto h-15"/> */}
            <img src="/White-Amazon-Logo-Background-PNG-Image.png" alt="Logo" className="w-auto h-30 "/>
        </div>
        <div className="flexitems-center w-150 mx-4">
            <input
          type="text"
          placeholder="Search products"
          className="w-full px-4 py-2 border-1 rounded-md text-black bg-amber-50"
            />
        </div>
        <div className="flex items-center space-x-2">
            <button className=" text-2xl hover:underline">Login</button>
            <button className=" text-2xl hover:underline">Cart</button>
        </div>
      </div>
      <div className=" flex h-8 justify-center items-center bg-[#232f3e] bg-cover min-w-screen ">
        <div className=" flex">
          <ul className=" flex gap-10">
            <li>Prime Day Deals</li>
            <li>Fresh</li>
            <li>Gift Ideas</li>
            <li>Keep Shopping for</li>
            <li>Amazon Pay</li>
            <li>MX Player</li>
            <li>Sell</li>
            <li>Gift Cards</li>
            <li>Buy Again</li>

          </ul>
        </div>
      </div>
    </div>
  );
}
