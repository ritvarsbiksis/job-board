export const Hero = () => (
  <section className="py-12">
    <h1 className="text-4xl font-bold text-center">
      Find your next
      <br />
      dream job
    </h1>
    <form className="flex gap-2 mt-4 max-w-md mx-auto">
      <input
        type="search"
        className="border border-gray-400 w-full py-2 px-3 rounded-md"
        placeholder="Search phrase ..."
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
    </form>
  </section>
)
