import React, { useEffect, useRef } from "react";

const ProgrammingLanguages = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    // Duplicate the list for infinite scrolling effect
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <main className="relative min-h-32 flex flex-col justify-center align-middle rounded-3xl bg-slate-400 dark:bg-slate-900 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto overflow-hidden align-slef-middle">
        <div className="text-center">
          {/* Logo Carousel animation */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              ref={logosRef}
              className="animate-marquee-infinite flex items-center align-middle justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/icons8-c.svg`}
                  alt="C++"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/java-svgrepo-com.svg`}
                  alt="Java"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/javascript-svgrepo-com.svg`}
                  alt="JavaScript"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/matlab-svgrepo-com.svg`}
                  alt="MATLAB"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/mysql-logo-svgrepo-com.svg`}
                  alt="MySQL"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/python-svgrepo-com.svg`}
                  alt="Python"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/react-javascript-js-framework-facebook-svgrepo-com.svg`}
                  alt="React"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/arduino-svgrepo-com.svg`}
                  alt="Arduino"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/icons8-solidworks-240.svg`}
                  alt="SolidWorks"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/icons8-autocad.svg`}
                  alt="AutoCAD"
                />
              </li>
              <li>
                <img
                  width={64}
                  height={64}
                  src={`./src/Images/ANSS.D.svg`}
                  alt="Ansys"
                />
              </li>
            </ul>
          </div>
          {/* End: Logo Carousel animation */}
        </div>
      </div>
    </main>
  );
};

export default ProgrammingLanguages;
