import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center" >
      <div className="flex flex-col items-center gap-4">

        <div className="flex flex-col items-center">
          <Hero />
        </div>

        <div className="flex flex-col items-center gap-6 mb-6 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4 rounded">
          <div className="max-w-[434px]">
            <img
              src="/red_horizon.png"
              alt="Red Horizon"
              className="w-full h-auto"
            />
          </div>
          <div className="max-w-2xl text-center text-gray-800 dark:text-gray-300 ">
            <p className="text-2xl font-semibold">
              {/* Enhance quality in military training */}
              Our Mission: Streamline and Innovate
            </p>
            <p className="text-xl">
              We aim to revolutionize your technology chain, making processes smoother, faster, and more efficient.
              While we specialize in air force applications, we are open to collaborating on other defense-related projects.
            </p>
          </div>
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
  );
}
