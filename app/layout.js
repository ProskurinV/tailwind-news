import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="px-2 border-b flex items-center justify-between">
          <Link href="#" className="uppercase font-bold text-purple-800">
            v.g
          </Link>
          <nav className="flex items-center">
            <ul className=" inline-flex items-center">
              <li>
                <Link className="header-link" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="header-link" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="header-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="inline-flex items-center">
              <li>
                <button className="header-btn">Login</button>
              </li>
              <li>
                <button className="header-btn">Register</button>
              </li>
            </ul>
          </nav>
        </header>
        {/* footer>div>div>h6+ul>li*2>Link[href=#] */}
        {children}
        <div className="mt-20 mb-10">
          <ul className="flex justify-center">
            <li>
              <Link className="pagination-item rounded-l-lg" href="#">
                Previous
              </Link>
            </li>
            <li>
              <Link className="pagination-item " href="#">
                1
              </Link>
            </li>
            <li>
              <Link className="pagination-item " href="#">
                2
              </Link>
            </li>
            <li>
              <Link className="pagination-item " href="#">
                3
              </Link>
            </li>
            <li>
              <Link className="pagination-item " href="#">
                4
              </Link>
            </li>
            <li>
              <Link className="pagination-item " href="#">
                5
              </Link>
            </li>
            <li>
              <Link className="pagination-item rounded-r-lg" href="#">
                Next
              </Link>
            </li>
          </ul>
        </div>
        <footer className="px-2 border-t mt-10 py-10">
          <div>
            <div className="mb-5">
              <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li>
                  <Link
                    className="inline-block py-2 text-gray-700 hover:underline  decoration-gray-700 underline-offset-2"
                    href="#"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block py-2 text-gray-700 hover:underline  decoration-gray-700 underline-offset-2"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
              <ul>
                <li>
                  <Link
                    className="inline-block py-2 text-gray-700 hover:underline  decoration-gray-700 underline-offset-2"
                    href="#"
                  >
                    Block
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block py-2 text-gray-700 hover:underline  decoration-gray-700 underline-offset-2"
                    href="#"
                  >
                    Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block py-2 text-gray-700 hover:underline decoration-gray-700 underline-offset-2"
                    href="#"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
