import FloatingSection from "@/components/ui/FloatingSection";
import Image from "@/components/ui/Image";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Topic from "@/components/ui/Topic";
import React from "react";
import { Helmet } from "react-helmet";

function Project_CommunicationSoftware() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Communication Software Project</title>
        <link
          rel="canonical"
          href="https://nuwantha005.github.io/portfolio/communication_software"
        />
        <meta name="description" content="My Personnel Portfolio Website" />
      </Helmet>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <header className="relative z-15 flex flex-row items-center top-0 m-2 w-screen justify-center">
          <div className="flex flex-row gap-4 items-center justify-between ml-2 w-full">
            <h1 className="text-4xl">Communication Software</h1>
            <ThemeToggle />
          </div>
        </header>
        {/* Floating Tiles Content */}
        <main className="relative z-10 w-full overflow-y-auto overflow-x-hidden h-full">
          <div className="relative z-10 p-10 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <div className="basis-3/4">
                <FloatingSection>
                  <h1 className="text-2xl mb-4">Overview</h1>
                  <Image
                    loc="./Images/Projects/Communication_SOftware_HomePage.PNG"
                    name="Landing Menu"
                    className="basis-1/2"
                  />
                  <p className="p-4 m-4 text-center">
                    This program was created as the final project for my course
                    at the ATARI city campus. It was a group project; however,
                    it was done all by myself as a test for my own skills.
                    Project assignment subject for our group changed later, and
                    this was never presented. I wrote it entirely using Java and
                    my SQL knowledge was used because MySQL was used as the
                    database. The UI was designed using NetBeans IDE's
                    drag-and-drop UI designer. The MySQL workbench was used to
                    manage the database.
                  </p>
                </FloatingSection>
              </div>
              <div className="basis-1/4 justify-center">
                <FloatingSection className="col-span-4">
                  <h1 className="text-2xl mb-4">Project Structue</h1>
                  <div className="flex flex-col gap-8 justify-center">
                    <Image
                      loc="./Images/Projects/Communication_SOftware_ProjectTree.PNG"
                      name="Project Tree"
                      className="basis-1/2 "
                    />
                  </div>
                </FloatingSection>
              </div>
            </div>
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">Database Structure</h1>
                  <Image
                    loc=".\Images\Projects\CommunicationEER.PNG"
                    name="EER Diagram"
                  />
                </div>
                <p className="m-4 p-5 text-center lg:text-left">
                  Database contains tables to contain data on sales, products,
                  services, suppliers, customers, and much more. Actions such as
                  selling, adding items to inventory, buying from suppliers, and
                  paying salaries to the staff can all be recorded in the
                  database. respective relations between respective tables are
                  drawn for examples between sales and inventory (stock table).
                  Furthermore, suitable data types are assigned to each column.
                </p>
              </div>
            </FloatingSection>
            <Topic topicName="Features" />
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">Chart Generation</h1>
                  <Image
                    loc=".\Images\Projects\Communication_SOftware_Chart.PNG"
                    name="Chart Window"
                  />
                </div>
                <p className="m-4 p-5 text-center lg:text-left">
                  Charts section in the program can generate 2D and 3D charts
                  for different data such as sales, income, inventory, and
                  expenses. These charts can be in the form of line charts, bar
                  charts, or pie charts. A date range can be selected to plot
                  the data, and usually data values are plotted against date.
                  Generated charts can be saved as images to local storage.
                  <a
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href="https://www.jfree.org/jfreechart/"
                  >
                    {" "}
                    JFree Charts
                  </a>{" "}
                  and{" "}
                  <a
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href="https://github.com/jfree/orson-charts"
                  >
                    Orson-Charts
                  </a>{" "}
                  libraries were used to generate charts.
                </p>
              </div>
            </FloatingSection>
            <FloatingSection>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="xl:col-span-2 2xl:col-span-3">
                  <h1 className="text-2xl mb-4">
                    Printable Reports Generation
                  </h1>
                  <Image
                    loc=".\Images\Projects\Communication_Software_Jasper_Report.png"
                    name="Sales Chart"
                  />
                </div>
                <p className="m-4 p-5 text-center lg:text-left">
                  Database contains tables to contain data on sales, products,
                  services, suppliers, customers, and much more. Actions such as
                  selling, adding items to inventory, buying from suppliers, and
                  paying salaries to the staff can all be recorded in the
                  database. respective relations between respective tables are
                  drawn for examples between sales and inventory (stock table).
                  Furthermore, suitable data types are assigned to each column.
                </p>
              </div>
            </FloatingSection>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Project_CommunicationSoftware;
