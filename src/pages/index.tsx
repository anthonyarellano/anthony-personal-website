import React, { RefObject } from "react";
import Head from "next/head";
import GitHubIcon from "~/icons/Github";
import SpotifyIcon from "~/icons/Spotify";
import LinkedinIcon from "~/icons/Linkedin";

export default function Home() {
  const [flip, setFlip] = React.useState(false);
  const [inView, setInView] = React.useState<string>();

  const tileRef1 = React.useRef<HTMLDivElement>(null);
  const tileRef2 = React.useRef<HTMLDivElement>(null);
  const tileRef3 = React.useRef<HTMLDivElement>(null);
  const tileRef4 = React.useRef<HTMLDivElement>(null);
  const tileRef5 = React.useRef<HTMLDivElement>(null);
  const tileRef6 = React.useRef<HTMLDivElement>(null);

  const elementsToObserve = [
    "tile-1",
    "tile-2",
    "tile-3",
    "tile-4",
    "tile-5",
    "tile-6",
  ];

  const handleScroll = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current?.offsetTop) {
      window.scrollTo(0, ref.current.offsetTop);
    } else {
      window.scrollTo(0, 0);
    }
  };

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
          ref={tileRef1}
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
          ref={tileRef2}
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
          ref={tileRef3}
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
          ref={tileRef4}
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
          ref={tileRef5}
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
          ref={tileRef6}
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
            onClick={() => handleScroll(tileRef1)}
            className={`cursor-pointer text-sm ${
              inView === "tile-1" ? "font-bold underline" : ""
            }`}
          >
            Home
          </div>
          <div
            onClick={() => handleScroll(tileRef2)}
            className={`cursor-pointer text-sm ${
              inView === "tile-2" ? "font-bold underline" : ""
            }`}
          >
            About
          </div>
          <div
            onClick={() => handleScroll(tileRef3)}
            className={`cursor-pointer text-sm ${
              inView === "tile-3" ? "font-bold underline" : ""
            }`}
          >
            Projects
          </div>
          <div
            onClick={() => handleScroll(tileRef4)}
            className={`cursor-pointer text-sm ${
              inView === "tile-4" ? "font-bold underline" : ""
            }`}
          >
            Music
          </div>
          <div
            onClick={() => handleScroll(tileRef5)}
            className={`cursor-pointer text-sm ${
              inView === "tile-5" ? "font-bold underline" : ""
            }`}
          >
            Resume
          </div>
          <div
            onClick={() => handleScroll(tileRef6)}
            className={`cursor-pointer text-sm ${
              inView === "tile-6" ? "font-bold underline" : ""
            }`}
          >
            Contact
          </div>
        </div>
      </main>
    </>
  );
}
