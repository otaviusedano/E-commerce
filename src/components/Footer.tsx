export function Footer() {
  return (
    <footer className="flex justify-center gap-[6.33%] p-10 bg-stone-800 h-[30vh] text-[#e2e8f0]">
      <div className="flex flex-col gap-2">
        <h1 className="mb-4 text-lg font-bold">CUSTOMER SERVICE</h1>
        <span>Resolution Center</span>
        <span>How to Shop</span>
        <span>Payment</span>
        <span>Free Shipping</span>
        <span>Unique Furnitures</span>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="mb-4 text-lg font-bold text-green-400">MINIMA</h1>
        <span>About Information</span>
        <span>Blog</span>
        <span>Catalogies</span>
        <span>Sales</span>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="mb-4 text-lg font-bold">HELP</h1>
        <span>Privacy Policy</span>
        <span>Terms & Condition</span>
        <span>Contact Us</span>
        <span>FAQs</span>
      </div>
      <div className="w-[20%]">
        <div className="mb-8">
          <h1 className="text-xl font-bold mb-2">NEWSLETTER LIST</h1>
          <span>
            Be the first to get information on discounts and attractive offers
            from <strong className="text-green-400">minima</strong>.
          </span>
        </div>
        <input
          type="email"
          placeholder="Enter your email"
          className="mr-2 p-2 px-4 rounded-md text-stone-900"
        />
        <button className="p-2 px-4 rounded-md transition hover:border-green-400 hover:bg-green-400 hover:text-stone-900 border border-[#e2e8f0]">
          Subscribe
        </button>
      </div>
    </footer>
  )
}
