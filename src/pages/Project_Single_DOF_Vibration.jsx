import FloatingSection from "@/components/ui/FloatingSection";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Topic from "@/components/ui/Topic";
import React from "react";
import { Helmet } from "react-helmet";
import { BlockMath, InlineMath } from "react-katex";

function Project_Single_DOF_Vibration() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Single DOF Vibration Simulation Project</title>
        <link
          rel="canonical"
          href="https://nuwantha005.github.io/portfolio/communication_software"
        />
        <meta name="description" content="My Personnel Portfolio Website" />
      </Helmet>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <header className="relative z-15 flex flex-row items-center top-0 m-2 w-screen justify-center">
          <div className="flex flex-row gap-4 items-center justify-between ml-2 w-full">
            <h1 className="text-4xl">Single DOF Vibration Simulation</h1>
            <ThemeToggle />
          </div>
        </header>
        {/* Floating Tiles Content */}
        <main className="relative z-10 w-full overflow-y-auto overflow-x-hidden h-full">
          <div className="relative z-10 p-10 space-y-6">
            <Topic topicName="MATLAB Example" />
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">Overview</h1>
                  <video
                    src=".\Images\videos\Single_DOF_Hero.mp4"
                    poster=".\Images\videos\Single_DOF_Hero.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg border-4"
                  />
                </div>
                <div className="m-4 p-5 ">
                  <p className="text-center lg:text-left">
                    Single degree of freedom systems contaion only one type of
                    repetitive motion and therefore equation of motion is a
                    single second order differencial equation.
                  </p>
                  <BlockMath math={`m \\ddot{x} + c \\dot{x} + kx = 0`} />
                  <p>
                    Solving this equation often uses assumption that solution is
                    in the form of
                    <InlineMath math={`\\:x = X_0 e^{st}\\:`} />
                    and substituting this will give following quadratic
                    equation.
                  </p>
                  <BlockMath math={"ms^2 + cs + k = 0"} />
                </div>
              </div>
            </FloatingSection>
            <FloatingSection>
              <div>
                <p>
                  Solutions to this can be calculated from usual quadratic
                  solution equation
                </p>
                <BlockMath
                  math={"s_{1,2} = \\frac{-c \\pm \\sqrt{c^2-2mk}}{2m}"}
                />
                <p>
                  Depending on the nature of the solutions of this quadratic
                  equation, there are three ways the system can behave and those
                  are discussed in the examples section. There are several
                  notations that were used in the programme for the convenience
                  such as, Natural Frequency,
                </p>
                <BlockMath math={"\\omega_n = \\sqrt\\frac{k}{m}"} />
                <h3>Critica damping constant</h3>
                <BlockMath math={"C_c = 2\\sqrt{mk} = 2m\\omega_n"} />
                <h3>Damping Ratio</h3>
                <BlockMath math={" \\beta = \\frac{c}{C_c}"} />
                <h3>
                  after using these notations, quadratic formula can be
                  simplidied into following form,
                </h3>
                <BlockMath
                  math={" s_{1,2} = (-\\beta \\pm \\sqrt{\\beta^2-1})\\omega_n"}
                />
                <p>
                  its clear that depending on beta's value the solution to the
                  DE can have various forms. Those forms includeing
                  <InlineMath math={"\\:\\beta = 0\\:"} />
                  are discussed below.
                </p>
              </div>
            </FloatingSection>
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">No Damping</h1>
                  <video
                    src=".\Images\videos\Single_DOF_NoDamping.mp4"
                    poster=".\Images\videos\Single_DOF_NoDamping.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg border-4"
                  />
                </div>
                <div className="m-4 p-5 ">
                  <p className="text-center lg:text-left">
                    When damping coefficient is equal to zero (c = 0), there is
                    no damping happening and harmonic motion continues forever.
                    Motions is represented by following equation.
                  </p>
                  <BlockMath math={"x(t) = X_0 Sin(\\omega_d t+\\phi)"} />
                </div>
              </div>
            </FloatingSection>
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">Under Damped</h1>
                  <video
                    src=".\Images\videos\Single_DOF_Underdamped.mp4"
                    poster=".\Images\videos\Single_DOF_Underdamped.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg border-4"
                  />
                </div>
                <div className="m-4 p-5 ">
                  <p className="text-center lg:text-left">
                    When <InlineMath math={"\\:\\beta < 1\\:"} />, s has two
                    complex solutions and it leads to following form of solution
                    known as underdapmed system.
                  </p>
                  <BlockMath
                    math={
                      "x(t) = X_0e^{-\\beta\\omega_n t} Sin(\\omega_d t + \\phi_0 )"
                    }
                  />
                  <p>
                    Where{" "}
                    <InlineMath
                      math={"X_0, \\phi_0, \\text{ and } \\omega_d"}
                    />{" "}
                    are amplitude, phase angle and frequency of oscillation and,
                  </p>
                </div>
              </div>
            </FloatingSection>
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">Critically Damped</h1>
                  <video
                    src=".\Images\videos\Single_DOF_Critically_Damped.mp4"
                    poster=".\Images\videos\Single_DOF_Critically_Damped.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg border-4"
                  />
                </div>
                <div className="m-4 p-5 ">
                  <p className="text-center lg:text-left">
                    When <InlineMath math={"\\:\\beta = 1, s_1 = s_2\\:"} />
                    .Because of that system is critically damped and it reaches
                    the stability within shortest possible time. the solution to
                    DE is in the following form
                  </p>
                  <BlockMath math={"x(t) = (c_1+c_2t)e^{\\omega_n}"} />
                </div>
              </div>
            </FloatingSection>
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">Overdamped</h1>
                  <video
                    src=".\Images\videos\Single_DOF_Over_Damped.mp4"
                    poster=".\Images\videos\Single_DOF_Over_Damped.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg border-4"
                  />
                </div>
                <div className="m-4 p-5 ">
                  <p className="text-center lg:text-left">
                    When <InlineMath math={"\\:\\beta = 1, s_1 = s_2\\:"} />
                    ,system has two real roots and solution has the following
                    form,
                  </p>
                  <BlockMath math={"x(t) = c_1e^{s_1t}+c_2e^{s_2t}"} />
                </div>
              </div>
            </FloatingSection>
            <section className="bg-slate-400/50 max-h-20 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 border-2 border-gray-800 dark:border-gray-200">
              <div className="flex flex-row justify-between">
                <h1 className="font-bold text-2xl"> Interactive Webpage </h1>
                <div className="flex justify-right gap-4">
                  <a
                    href="https://github.com/nuwantha005/Single_DOF_Vibration_Animation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-500"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub Repo
                  </a>
                  <div className="flex gap-4">
                    <a
                      href="https://nuwantha005.github.io/Single_DOF_Vibration_Animation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <FloatingSection>
              <div className="flex-auto">
                <iframe
                  src="https://nuwantha005.github.io/Single_DOF_Vibration_Animation/"
                  title="Single DOF Vibration Animation"
                  className="w-full h-full rounded-lg border-4 min-h-screen"
                  // style={{ transform: "scale(0.8)", transformOrigin: "0 0" }}
                  allowFullScreen
                ></iframe>
              </div>
            </FloatingSection>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Project_Single_DOF_Vibration;
