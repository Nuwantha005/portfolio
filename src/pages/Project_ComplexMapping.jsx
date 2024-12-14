import React from "react";
import FloatingSection from "@/components/ui/FloatingSection";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Topic from "@/components/ui/Topic";
import { Helmet } from "react-helmet";
import { InlineMath } from "react-katex";

function Project_ComplexMapping() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Complex Mapping Project</title>
        <link
          rel="canonical"
          href="https://nuwantha005.github.io/portfolio/complex_mapping"
        />
        <meta name="description" content="Complex Mapping Project" />
      </Helmet>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <header className="relative z-15 flex flex-row items-center top-0 m-2 w-screen justify-center">
          <div className="flex flex-row gap-4 items-center justify-between ml-2 w-full">
            <h1 className="text-4xl">Complex Mapping Project</h1>
            <ThemeToggle />
          </div>
        </header>
        <main className="relative z-10 w-full overflow-y-auto overflow-x-hidden h-full">
          <div className="relative z-10 p-10 space-y-6">
            <Topic topicName="Overview" />
            <FloatingSection>
              <div>
                <p>
                  Use f function in functions section to change the functions to
                  be visualized. Note that functions are on complex plane so,
                  variables must be complex numbers.
                </p>
                <p>For example,</p>
                <p>
                  <InlineMath math={`f(z) = \\frac{1}{z} = \\frac{1}{x+iy}`} />{" "}
                  can be written as <code>w = z.reciprocal();</code>
                </p>
                <p>
                  <InlineMath math={`f(z) = z^2`} /> can be written using{" "}
                  <code>w = z.power(2);</code>
                </p>
                <p>
                  <InlineMath math={`f(z) = 3z^3`} /> can be written as{" "}
                  <code>Complex w = z.times(3).power(3);</code>
                </p>
              </div>
            </FloatingSection>
            <Topic topicName="Examples" />
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">
                    <InlineMath math={`f(z) = \\frac{1}{z}`} />
                  </h1>
                  <img
                    src="https://github.com/Nuwantha005/complex_mapping_in_cartesian_gird_using_lines/assets/132461834/bfb96479-ac7e-44e8-ac86-c7cd0e60396b"
                    alt="complex4"
                    className="w-full h-auto rounded-lg border-4"
                  />
                </div>
              </div>
            </FloatingSection>
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">
                    <InlineMath math={`f(z) = 3z^3`} />
                  </h1>
                  <img
                    src="https://github.com/Nuwantha005/complex_mapping_in_cartesian_gird_using_lines/assets/132461834/42a61822-8543-4d9b-ada3-30f29327e036"
                    alt="ezgif-5-996c4e2bec"
                    className="w-full h-auto rounded-lg border-4"
                  />
                </div>
              </div>
            </FloatingSection>
            <Topic topicName="Controls" />
            <FloatingSection>
              <div>
                <ul>
                  <li>Left click: Visualize the mapping and reverse it</li>
                  <li>Mouse scroll: Zoom in and out</li>
                  <li>Mouse middle button: Pan</li>
                </ul>
              </div>
            </FloatingSection>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Project_ComplexMapping;
