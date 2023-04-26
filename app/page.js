import { Inter } from "next/font/google";
import styles from "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="px-2 flex items-center">
        <div className="py-4 overflow-y-auto whitespace-nowrap flex items-center">
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            Home
          </Link>
          <span className="mx-2 text-gray-500">&gt;</span>

          <Link className="text-gray-600 hover:text-gray-900" href="#">
            News
          </Link>
          <span className="mx-2 text-gray-500">&gt;</span>
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            Tech
          </Link>
          <span className="mx-2 text-gray-500">&gt;</span>
        </div>
      </div>

      <div className="border border-dotted"></div>

      <div className="my-5">
        <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
          Subscribe
        </h5>
        <p className="text-gray-600 mb-4">Subscribe to news</p>
        <input
          placeholder="your email"
          type="email"
          className="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600 "
        />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800">
          Subscribe
        </button>
      </div>

      <div className="border border-dotted"></div>

      <section className="px-2">
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
                Phasellus pulvinar elit eu nulla efficitur, sit amet tincidunt
                dui pretium.
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
      </section>
    </main>
  );
}
