import { ChevronDownIcon } from '@heroicons/react/16/solid'

const Contact = () => {
  return (
    // Added id="Contact-Us" to enable smooth scrolling
    <div id="Contact-Us" className="isolate contact px-6 py-10 sm:py-32 lg:px-8 ">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Contact Us</h2>
        <p className="mt-2 text-lg/8 text-gray-400">
          We are ready to build the future with you. Reach out today.
        </p>
      </div>
      
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">First name</label>
            <div className="mt-2.5">
              <input id="first-name" name="first-name" type="text" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:outline-indigo-500" />
            </div>
          </div>
          
          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">Last name</label>
            <div className="mt-2.5">
              <input id="last-name" name="last-name" type="text" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:outline-indigo-500" />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">Email</label>
            <div className="mt-2.5">
              <input id="email" name="email" type="email" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:outline-indigo-500" />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">Message</label>
            <div className="mt-2.5">
              <textarea id="message" name="message" rows={4} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:outline-indigo-500" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact