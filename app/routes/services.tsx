import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      <div>
        <Card>
          <CardHeader>
            <h1>Welcome to Our SaaS Service</h1>
          </CardHeader>
          <CardContent>
            <p>
              Our company provides a cutting-edge SaaS service that integrates
              our advanced map-application with hardware emitters on the ground.
              This combination offers unparalleled accuracy and real-time data
              for various applications.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h1>Welcome to Our SaaS Service</h1>
          </CardHeader>
          <CardContent>
            <p>
              Our company provides a cutting-edge SaaS service that integrates
              our advanced map-application with hardware emitters on the ground.
              This combination offers unparalleled accuracy and real-time data
              for various applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;