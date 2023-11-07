import {FaFacebook, FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="mx-auto container pb-8 px-2 border-t pt-5 border-gray-600">
        {/* Main Big Footer */}
        <div className="mt-16 hidden lg:grid grid-cols-1 gap-8 lg:grid-cols-3 place-items-center">
          <div>
            <div className="flex justify-start">
              <img src="/logo.svg" alt="HireHarbor" className="w-56" />
            </div>
            <p className="mt-6 max-w-md text-left leading-relaxed text-whitish text-opacity-50">
              Harboring Opportunities <br /> Crafting Careers
            </p>
            <div className="grid grid-flow-col mt-4  text-3xl text-primary/70">
              <FaFacebook className="cursor-pointer transition hover:text-primary" />
              <FaXTwitter className="cursor-pointer transition hover:text-primary" />
              <FaInstagram className="cursor-pointer transition hover:text-primary" />
              <FaYoutube className="cursor-pointer transition hover:text-primary" />
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-2 gap-16">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-primary/70">About Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Company History
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Employee Handbook
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-primary/70">
                Our Services
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Company History
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Employee Handbook
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-primary/70">Quick Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Company History
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Employee Handbook
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-primary/70">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Company History
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Employee Handbook
                  </Link>
                </li>

                <li>
                  <Link className="text-whitish/40 transition hover:text-whitish/75">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Main Small Footer */}
        <section className="footer footer-center p-10 lg:hidden">
          <div>
            <img src="/logo.svg" alt="H" className="w-44 md:w-56" />
            <p className="mt-6 max-w-md text-center leading-relaxed text-whitish text-opacity-50">
              Harboring Opportunities <br /> Crafting Careers
            </p>
          </div>
          <div className="grid grid-flow-col gap-4 text-3xl text-primary/70">
            <FaFacebook className="cursor-pointer transition hover:text-primary" />
            <FaXTwitter className="cursor-pointer transition hover:text-primary" />
            <FaInstagram className="cursor-pointer transition hover:text-primary" />
            <FaYoutube className="cursor-pointer transition hover:text-primary" />
          </div>
        </section>
        <p className="mt-5 lg:mt-20 text-center border-t pt-5 border-gray-600">
          Copyright &copy;{" "}
          <Link
            className="text-accent"
            to={"https://github.com/thecodermehedi"}
          >
            TheCoderMehedi
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
