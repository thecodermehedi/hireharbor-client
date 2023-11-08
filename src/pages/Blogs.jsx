import {Link} from "react-router-dom";
import BannerComponent from "../components/ui/BannerComponent";
import {Helmet} from "react-helmet-async";

const Blogs = () => {
  return (
    <section>
      <Helmet>
        <title>Blogs - HireHarbor</title>
        <meta
          name="description"
          content="Explore our blogs and dive into a world of knowledge and insights."
        />
      </Helmet>
      <BannerComponent
        title="Explore Our Blogs"
        subTitle="Dive into a world of knowledge and insights"
      />
      <section className="bg-neutral">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 rounded-2xl  shadow-md bg-blackish">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-2xl">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span className="text-sm text-primary">November 08, 2023</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                What is an access token and refresh token?
              </h2>
              <p className="mb-5 font-light text-gray-500">
                <span className="text-primary ">An access token</span> is a
                credential that can be used by an application to access an API.
                It informs the API that the bearer of the token has been
                authorized to access the API and perform specific actions
                specified by the scope that has been granted.
                <br />
                <br />
                On the other hand, a{" "}
                <span className="text-primary ">refresh token</span> is a
                special kind of token that can be used to obtain a renewed
                access token. This is useful for extending the session of a user
                without asking them to re-authenticate. When the access token
                expires, the application can use the refresh token to get a new
                access token, allowing the user to continue their session.
              </p>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                How do they work and where should we store them on the
                client-side?
              </h2>
              <p className="mb-5 font-light text-gray-500">
                <span className="text-primary">Access tokens</span> and{" "}
                <span className="text-primary">refresh tokens</span> are used in
                token-based authentication to allow users to stay authenticated
                to a server. When a user logs in, the server generates an access
                token and a refresh token. The access token is used to
                authenticate subsequent requests from the user. When the access
                token expires, the refresh token is used to generate a new
                access token without requiring the user to log in again.
                <br />
                <br />
                <span className="text-primary">On the client-side,</span> these
                tokens need to be stored securely to prevent unauthorized
                access. There are several places where you can store these
                tokens:
                <br />
                <br />
                <span className="text-primary">Cookies:</span> You can store the
                tokens in HTTP-only cookies. This is a secure option because
                HTTP-only cookies can&#39;t be accessed by JavaScript, which
                protects them from cross-site scripting (XSS) attacks.
                <br />
                <br />
                <span className="text-primary">Local Storage:</span> You can
                also store the tokens in local storage. However, this is less
                secure because local storage can be accessed by JavaScript. If
                your website has an XSS vulnerability, an attacker could steal
                the tokens.
                <br />
                <br />
                <span className="text-primary">Session Storage:</span> Similar
                to local storage, but the data is cleared when the page session
                ends.
                <br />
                <br />
                <span className="text-primary">Memory:</span> You can store the
                tokens in memory (e.g., in a JavaScript variable). This is
                secure because the tokens are cleared when the user closes the
                tab or browser, but it means the user will have to log in again
                when they return to your site.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://avatars.githubusercontent.com/u/89072438?v=4"
                    alt="Mehedi Hasan avatar"
                  />

                  <Link
                    to={"https://github.com/thecodermehedi"}
                    className="font-medium text-primary"
                  >
                    Mehedi Hasan
                  </Link>
                </div>
              </div>
            </article>
            <article className="p-6 rounded-2xl  shadow-md bg-blackish">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-2xl">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span className="text-sm text-primary">November 08, 2023</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                What is Express.js
              </h2>
              <p className="mb-5 font-light text-gray-500">
                Express.js, or simply Express, is a web application framework
                for Node.js. It is designed for building web applications and
                APIs. It is known as the de facto standard server framework for
                Node.js.
                <br />
                <br />
                Express simplifies the process of building a web server by
                providing a simple and flexible API to configure different
                routes and responses to HTTP requests. It supports middleware
                modules which can be used to add extra functionality like
                logging, cookie handling, and more to your web applications.
                <br />
                <br />
                Express.js is part of the MEAN (MongoDB, Express.js, AngularJS,
                Node.js) and MERN (MongoDB, Express.js, React, Node.js) stacks,
                popular technology stacks for building modern full-stack web
                applications.
              </p>

              <div className="hidden lg:block rounded-2xl my-5">
                <img
                  src="https://i.postimg.cc/Nj78GMt5/1-WEmcyw-Rc-FIlkp8u-G1l-MKs-A.webp"
                  className="rounded-2xl"
                />
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                What is NestJS ?
              </h2>
              <p className="mb-5 font-light text-gray-500">
                NestJS is a framework for building efficient, scalable Node.js
                server-side applications. It uses progressive JavaScript and is
                built with TypeScript, but still preserves compatibility with
                JavaScript, which makes it easy to use.
                <br />
                <br />
                NestJS combines elements of Object-Oriented Programming (OOP),
                Functional Programming (FP), and Functional Reactive Programming
                (FRP). It also uses Express.js under the hood, but provides a
                more robust framework with a strong abstraction layer.
                <br />
                <br />
                One of the key features of NestJS is its use of decorators,
                which add metadata to your classes, making the code more
                readable and maintainable. It also provides a modular structure
                that organizes code into separate modules, making it easier to
                manage large applications.
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://avatars.githubusercontent.com/u/89072438?v=4"
                    alt="Mehedi Hasan avatar"
                  />

                  <Link
                    to={"https://github.com/thecodermehedi"}
                    className="font-medium text-primary"
                  >
                    Mehedi Hasan
                  </Link>
                </div>
              </div>
            </article>
            <article className="p-6 rounded-2xl  shadow-md bg-blackish lg:col-span-2">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-2xl">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span className="text-sm text-primary">November 08, 2023</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Explaining HireHarbor Client Code :
              </h2>
              <p className="mb-5 font-light text-gray-500">
                <span className="text-primary ">An access token</span> is a
                credential that can be used by an application to access an API.
                It informs the API that the bearer of the token has been
                authorized to access the API and perform specific actions
                specified by the scope that has been granted.
                <br />
                <br />
                On the other hand, a{" "}
                <span className="text-primary ">refresh token</span> is a
                special kind of token that can be used to obtain a renewed
                access token. This is useful for extending the session of a user
                without asking them to re-authenticate. When the access token
                expires, the application can use the refresh token to get a new
                access token, allowing the user to continue their session.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://avatars.githubusercontent.com/u/89072438?v=4"
                    alt="Mehedi Hasan avatar"
                  />

                  <Link
                    to={"https://github.com/thecodermehedi"}
                    className="font-medium text-primary"
                  >
                    Mehedi Hasan
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blogs;
