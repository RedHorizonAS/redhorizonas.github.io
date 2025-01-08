import Layout from "@/components/Layout";
import { FAQ1 } from "@/components/ui/faq1";

export default function Contact() {
  return (
    <Layout>
      <div>
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4">
          We specialize in making military training more efficient and effective through innovative SaaS services.
        </p>
        <FAQ1 />
      </div>
    </Layout>
  );
}
