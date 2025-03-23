import Layout from "@/components/Layout";
import { Hero5 } from "@/components/ui/hero5";

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-8" >
        <div className="flex flex-col">
          <Hero5 />
        </div>
        <div className="bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4 rounded">
          <div className="w-full max-w-[434px] mx-auto">
            <img
              src="/scenario.png"
              alt="Scenario battlefield"
              className="w-full h-auto object-contain rounded-lg shadow-lg opacity-80"
            />
          </div>
          <div className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center mt-4">
            <p className="font-semibold">
              Our Mission: Streamline and Innovate
            </p>
            <p className="text-l">
              We aim to revolutionize your technology chain, making processes smoother, faster, and more efficient. 
              While we specialize in air force applications, we are open to collaborating on other defense-related projects.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
