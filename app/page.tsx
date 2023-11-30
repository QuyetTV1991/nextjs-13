import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <section className="bg-white pb-4">
        <div className="container mx-2 mt-4">
          <h1 className="text-2xl font-semibold">My Ecommerce Website</h1>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 p-2 mr-2 flex-1"
            />
            <Button type="button" label="Search" route="/search" />
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to My Website!
          </h2>
          <p className="text-gray-800">
            This is a simple home page. You can customize it with your own
            content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Featured Content</h2>

          {/* Add your featured content here */}
          <p className="text-gray-800">
            Feature 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-gray-800">
            Feature 2: Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Latest News</h2>

          {/* Add your latest news or updates here */}
          <div className="flex mb-4">
            <div className="w-1/4">
              <Image
                src="/assets/icons/image-thumbail.svg"
                alt="News Image"
                width={150}
                height={150}
                className="w-full h-auto"
              />
            </div>
            <div className="w-3/4 ml-4">
              <h3 className="text-xl font-semibold mb-2">News Title 1</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <Image
                src="/assets/icons/image-thumbail.svg"
                alt="News Image"
                width={150}
                height={150}
                className="w-full h-auto"
              />
            </div>
            <div className="w-3/4 ml-4">
              <h3 className="text-xl font-semibold mb-2">News Title 2</h3>
              <p className="text-gray-800">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
