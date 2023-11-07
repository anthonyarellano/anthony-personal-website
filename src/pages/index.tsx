import React from "react";
import Head from "next/head";
import GitHubIcon from "~/icons/Github";
import LinkedinIcon from "~/icons/Linkedin";
import SpotifyIcon from "~/icons/Spotify";

export default function Home() {
  const [flip, setFlip] = React.useState(false);
  const [inView, setInView] = React.useState<string>();

  const elementsToObserve = [
    "tile-1",
    "tile-2",
    "tile-3",
    "tile-4",
    "tile-5",
    "tile-6",
  ];

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const elementId: string = entry.target.id;
      const isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        setInView(elementId);
      }
    });
  };

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    elementsToObserve.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsToObserve.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [elementsToObserve]);

  return (
    <>
      <Head>
        <title>Anthony Aellano</title>
        <meta name="description" content="Anthony Arellano's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center scroll-smooth transition-all delay-150 ${
          flip ? "bg-black text-white" : "bg-white"
        } `}
      >
        <div
          id="tile-1"
          className="container flex  h-[100vh] flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz cursor-pointer text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Anthony Arellano
          </h1>
          <h2
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz cursor-pointer text-4xl font-extrabold"
          >
            Software Engineer
          </h2>
          <div className={`flex gap-2 ${flip && "opacity-0"}`}>
            <GitHubIcon color="black" />
            <LinkedinIcon />
            <SpotifyIcon />
          </div>
        </div>
        <div
          id="tile-2"
          className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16"
        >
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
        <div
          id="tile-3"
          className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16"
        >
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
        <div
          id="tile-4"
          className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16"
        >
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
        <div
          id="tile-5"
          className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Resume
          </h1>
          {/* <h2
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-4xl font-extrabold"
          >
            Software Engineer
          </h2> */}
        </div>
        <div
          id="tile-6"
          className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className="xyz text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Contact
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
              inView === "tile-1" ? "underline" : ""
            }`}
          >
            Home
          </div>
          <div
            className={` cursor-pointer ${
              inView === "tile-2" ? "underline" : ""
            }`}
          >
            About
          </div>
          <div
            className={`cursor-pointer ${
              inView === "tile-3" ? "underline" : ""
            }`}
          >
            Projects
          </div>
          <div
            className={`cursor-pointer ${
              inView === "tile-4" ? "underline" : ""
            }`}
          >
            Music
          </div>
          <div
            className={`cursor-pointer ${
              inView === "tile-5" ? "underline" : ""
            }`}
          >
            Resume
          </div>
          <div
            className={`cursor-pointer ${
              inView === "tile-6" ? "underline" : ""
            }`}
          >
            Contact
          </div>
        </div>
      </main>
    </>
  );
}
