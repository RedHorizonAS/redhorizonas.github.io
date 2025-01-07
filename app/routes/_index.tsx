import { Button } from "app/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">[Your Company Name]</h1>
          <ul className="flex space-x-4">
            <li><a href="/services" className="hover:underline">Core Services</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="text-center py-20 bg-gray-900 text-white">
          <h2 className="text-4xl font-bold">Redefining Military Training</h2>
          <p className="mt-4">Streamline military training with our innovative SaaS solutions.</p>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
            Explore Our Services
          </Button>
        </section>
        
        <section className="container mx-auto py-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-md">
              <h4 className="font-semibold">Remote Control Automation</h4>
              <p className="text-gray-600">Streamline operations with cutting-edge remote-control technology.</p>
            </div>
            <div className="p-4 border rounded-md">
              <h4 className="font-semibold">Realistic Training</h4>
              <p className="text-gray-600">Create complex and realistic scenarios for fighter jets.</p>
            </div>
            <div className="p-4 border rounded-md">
              <h4 className="font-semibold">Cost-Effective Solutions</h4>
              <p className="text-gray-600">Save resources while achieving superior training outcomes.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2025 [Your Company Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}
