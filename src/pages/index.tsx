import React from "react";
import Head from "next/head";
import Stars from "~/components/Stars/Stars";
import GitHubIcon from "~/icons/Github";
import SpotifyIcon from "~/icons/Spotify";
import LinkedinIcon from "~/icons/Linkedin";

export default function Home() {
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

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
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
        <title>Anthony Arellano</title>
        <meta name="description" content="Anthony Arellano's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center scroll-smooth bg-white text-white transition-all delay-150`}
      >
        <Stars number={20} />
        <div
          id="tile-1"
          ref={tileRef1}
          className="z-50 flex h-[100vh] flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="cursor-pointer text-center text-[5rem] font-extrabold tracking-tight text-white sm:text-[5rem]">
            Anthony Arellano
          </h1>
          <h2 className="text-cut background-animation cursor-pointer text-center text-4xl font-extrabold text-white">
            Software Engineer
          </h2>
          <div className={`flex gap-2`}>
            <GitHubIcon color="white" />
            <LinkedinIcon color="white" />
            <SpotifyIcon />
          </div>
        </div>
        <div
          id="tile-2"
          ref={tileRef2}
          className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="z-50 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            About
          </h1>
          {/* <h2
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className=" text-4xl font-extrabold"
          >
            Software Engineer
          </h2> */}
        </div>
        <div
          id="tile-3"
          ref={tileRef3}
          className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="z-50 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Projects
          </h1>
          {/* <h2
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            className=" text-4xl font-extrabold"
          >
            Software Engineer
          </h2> */}
        </div>
        <div
          id="tile-4"
          ref={tileRef4}
          className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="z-50 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Music
          </h1>
          <div className="z-50 flex flex-row flex-wrap gap-2 sm:flex-nowrap">
            <iframe
              src="https://open.spotify.com/embed/artist/1Y3tB2Bs3lxbAA6HD2j6BW?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/artist/76yRWpn2Qg8JHhVdhJbecC?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div
          id="tile-5"
          ref={tileRef5}
          className="container flex  h-[100vh] cursor-pointer flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="z-50 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Resume
          </h1>
          {/* <h2
            className=" text-4xl font-extrabold"
          >
            Software Engineer
          </h2> */}
        </div>
        <div
          id="tile-6"
          ref={tileRef6}
          className="container z-50 flex  h-[100vh] flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Contact
          </h1>
          <h2
            onClick={() => window.open("mailto:theanthonyarellano@gmail.com")}
            className="text-cut background-animation cursor-pointer text-4xl font-extrabold"
          >
            theanthonyarellano@gmail.com
          </h2>
          <h2 className="text-cut background-animation text-4xl font-extrabold text-yellow-200">
            {"(201) 686 4015"}
          </h2>
        </div>
        <div className="fixed bottom-5 z-50 flex gap-2 rounded-lg bg-gray-200/20 px-4 py-2 sm:gap-5">
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
