import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-6" >
        <div className="bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4 rounded">
          <div className="max-w-2xl text-center text-gray-800 dark:text-gray-300 ">
            <p className="text-xl font-semibold">
              About us:
            </p>
            <p className="text-l">
              We are a team of four seasoned professionals with decades of combined experience and a passion for innovation. 
              Our maturity and expertise, coupled with fresh ideas, enable us to tackle complex challenges in the air defense sector. 
              Our mission is to enhance military training by safely unclassifying and hosting services on the internet, driving innovation while protecting sensitive information. 
              Committed to excellence, we support defense teams with tools that save time, resources, and lives. 
              We are here to help.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

