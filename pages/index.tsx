import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-light-blue-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <img src="/vercel.svg" className="h-7 sm:h-8" />
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                  <p>
                    An advanced online playground for Tailwind CSS, including
                    support for things like:
                  </p>
                  <ul className="space-y-2 list-disc">
                    <li className="flex items-start">
                      <span className="flex items-center h-6 sm:h-7">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Customizing your
                        <code className="text-sm font-bold text-gray-900">
                          tailwind.config.js
                        </code>{' '}
                        file
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex items-center h-6 sm:h-7">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Extracting classes with
                        <code className="text-sm font-bold text-gray-900">
                          @apply
                        </code>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex items-center h-6 sm:h-7">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Code completion with instant preview
                      </p>
                    </li>
                  </ul>
                  <p>
                    Perfect for learning how the framework works, prototyping a
                    new idea, or creating a demo to share online.
                  </p>
                </div>
                <div className="pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7">
                  <p>Want to dig deeper into Tailwind?</p>
                  <p>
                    <a
                      href="https://tailwindcss.com/docs"
                      className="text-cyan-600 hover:text-cyan-700"
                    >
                      {' '}
                      Read the docs &rarr;{' '}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
