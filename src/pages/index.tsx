import Head from "next/head";
import React from "react";

export default function Home() {
  const [flip, setFlip] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollY);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Anthony Arellano's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center scroll-smooth transition-all delay-150 ${
          flip ? "bg-black text-white" : "bg-white"
        } `}
      >
        <div className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16">
          <h1
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Anthony Arellano
          </h1>
          <h2
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-4xl font-extrabold"
          >
            Software Engineer
          </h2>
        </div>
        <div className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16">
          <h1
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            About
          </h1>
          {/* <h2
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-4xl font-extrabold"
          >
            Software Engineer
          </h2> */}
        </div>
        <div className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16">
          <h1
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Projects
          </h1>
          {/* <h2
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-4xl font-extrabold"
          >
            Software Engineer
          </h2> */}
        </div>
        <div className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16">
          <h1
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Music
          </h1>
          {/* <h2
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-4xl font-extrabold"
          >
            Software Engineer
          </h2> */}
        </div>
        <div className="fixed bottom-5 flex gap-5">
          <div
            className={`und cursor-pointer ${
              scrollY >= 0 && scrollY < 955 ? "underline" : ""
            }`}
          >
            Home
          </div>
          <div
            className={` cursor-pointer ${
              scrollY >= 955 && scrollY < 1910 ? "underline" : ""
            }`}
          >
            About
          </div>
          <div
            className={`cursor-pointer ${
              scrollY >= 1910 && scrollY < 2865 ? "underline" : ""
            }`}
          >
            Projects
          </div>
          <div className={`cursor-pointer`}>Music</div>
          <div className={`cursor-pointer`}>Resume</div>
          <div className={`cursor-pointer`}>Contact</div>
        </div>
      </main>
    </>
  );
}
