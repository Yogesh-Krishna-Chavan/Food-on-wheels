const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
      <form className="m-4 p-4">
        <div className="mb-4">
          <label className="block mb-1 font-bold">Name</label>
          <input
            type="text"
            className="border border-black m-2 p-2 w-full"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold">Email</label>
          <input
            type="email"
            className="border border-black m-2 p-2 w-full"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold">Message</label>
          <textarea
            className="border border-black m-2 p-2 w-full"
            placeholder="Message"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
