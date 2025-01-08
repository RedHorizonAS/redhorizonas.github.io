import Layout from "@/components/Layout";
import { Hero5 } from "@/components/ui/hero5";

export default function Index() {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center" >
        <div className="flex flex-col items-center gap-4">

          <div className="flex flex-col items-center">
            <Hero5 />
          </div>

          <div className="flex flex-col items-center gap-6 mb-6 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4 rounded">
            <div className="max-w-[434px]">
              <img
                src="/red_horizon.png"
                alt="Red Horizon"
                className="w-full h-auto"
              />
            </div>
            <p className="text-2xl text-gray-800 dark:text-gray-200 font-semibold">
              Enhance quality in military training
            </p>
            <div className="w-full max-w-[434px]">
              <img
                src="/scenario.jpeg"
                alt="Scenario battlefield"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
