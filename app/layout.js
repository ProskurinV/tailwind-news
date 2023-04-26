import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-xl mx-auto">
          <header className="px-2 border-b flex items-center justify-between h-14">
            <Link href="#" className="uppercase font-bold text-purple-800">
              v.g
            </Link>
            <nav className="hidden md:flex items-center">
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
            <button className="inline-block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </header>
          {/* footer>div>div>h6+ul>li*2>Link[href=#] */}
          {children}

          {/* pagination */}
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
            <div className="flex">
              <div className="mb-5 w-2/5">
                <h6 className="font-semibold text-gray-700 mb-3">Company</h6>
                <ul>
                  <li>
                    <Link className="footer-link " href="#">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link " href="#">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-2/5">
                <h6 className="font-semibold text-gray-700 mb-3">Content</h6>
                <ul>
                  <li>
                    <Link className="footer-link" href="#">
                      Block
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" href="#">
                      Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" href="#">
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/5">
                <h6 className="font-semibold text-gray-700 mb-3">Contact us</h6>
                <ul className="flex">
                  <li className="mr-2">
                    <Link className="footer-link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="mr-2">
                    <Link className="footer-link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
