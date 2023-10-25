import React from "react";

function Intro() {
  return (
    <section className=" min-h-[90vh] h-[90vh] flex items-start flex-col justify-center max-w-[1000px] m-auto mt-[-20px]">
      <div className="animate-fadeUp" style={{ animationDuration: "1500ms" }}>
        <h1 className="text-[--green] font-mono text-[18px] leading-snug ">
          Hi, my name is
        </h1>
      </div>
      <div className="animate-fadeUp" style={{ animationDuration: "1700ms" }}>
        <h2 className="text-white/90 text-7xl  font-bold leading-snug">
          Avernold Emocling.
        </h2>
      </div>
      <div
        className="w-[90%] animate-fadeUp"
        style={{ animationDuration: "1900ms" }}
      >
        <h3 className="text-white/50 text-6xl  font-medium leading-tight tracking-tight">
          creating beautiful and engaging frontend designs.
        </h3>
        <br />
      </div>
      <div
        className="w-[100%] md:w-[50%] animate-fadeUp"
        style={{ animationDuration: "2100ms" }}
      >
        <p className="text-white/50 text-[17px]  ">
          I am a front-end developer with one year of experience who can assist
          you in launching your UI designs on the Web. I'm looking for work
          right now and working freelance. <br />
          <a
            href="mailto:averemocling@gmail.com"
            target="_blank"
            className="text-[--green] hover:opacity-70"
          >
            Message me.
          </a>
        </p>
      </div>
    </section>
  );
}

export default Intro;
