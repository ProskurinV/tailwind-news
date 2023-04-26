import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <main className="md:flex">
      {/* breadcrambs */}
      <div className="px-2 flex items-center">
        <div className="py-4 overflow-y-auto whitespace-nowrap flex items-center">
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
          <span className="mx-2 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>

          <Link className="text-gray-600 hover:text-gray-900" href="#">
            News
          </Link>
          <span className="mx-2 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            Tech
          </Link>
          <span className="mx-2 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="w-full flex space-x-2 flex-row-reverse">
        {/* subscribe */}
        <div className="my-5 w-1/3">
          <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
            Subscribe
          </h5>
          <p className="text-gray-600 mb-4">Subscribe to news</p>
          <input
            placeholder="your email"
            type="email"
            className="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600 "
          />
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800">
            Subscribe
          </button>
        </div>
        {/* news */}
        <section className="px-2 flex w-2/3">
          <ul>
            <Link href="" className="block mb-10">
              <div className="flex">
                <div>
                  <h3 className="mt-3 mb-10 text-gray-700 font-bold text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique incidunt accusamus, voluptates suscipit natus
                    consequuntur enim odit fugiat error facilis ut libero quis.
                    Nulla dolorum facilis, quaerat ut quas maxime?
                  </p>
                </div>
              </div>
            </Link>
            <Link href="" className="block mb-10">
              <div className="flex">
                <div>
                  <h3 className="mt-3 mb-10 text-gray-700 font-bold text-2xl">
                    Quisque vel magna vel arcu commodo tincidunt.
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique incidunt accusamus, voluptates suscipit natus
                    consequuntur enim odit fugiat error facilis ut libero quis.
                    Nulla dolorum facilis, quaerat ut quas maxime?
                  </p>
                </div>
              </div>
            </Link>
            <Link href="" className="block mb-10">
              <div className="flex">
                <div>
                  <h3 className="mt-3 mb-10 text-gray-700 font-bold text-2xl">
                    Phasellus pulvinar elit eu nulla efficitur, sit amet
                    tincidunt dui pretium.
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique incidunt accusamus, voluptates suscipit natus
                    consequuntur enim odit fugiat error facilis ut libero quis.
                    Nulla dolorum facilis, quaerat ut quas maxime?
                  </p>
                </div>
              </div>
            </Link>
            <Link href="" className="block mb-10">
              <div className="flex">
                <div>
                  <h3 className="mt-3 mb-10 text-gray-700 font-bold text-2xl">
                    Duis sed velit eget augue feugiat porttitor.
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique incidunt accusamus, voluptates suscipit natus
                    consequuntur enim odit fugiat error facilis ut libero quis.
                    Nulla dolorum facilis, quaerat ut quas maxime?
                  </p>
                </div>
              </div>
            </Link>
          </ul>
        </section>
      </div>
    </main>
  );
}
