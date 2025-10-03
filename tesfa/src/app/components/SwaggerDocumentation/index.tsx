import Image from "next/image";
export default function SwaggerDocumentation() {
  return (
    <main className="mt-25 text-[#0B4747] flex flex-col items-start justify-center px-4 py-15">
      <section className="w-full lg:px-40">
        <h1 className="text-2xl lg:text-6xl text-[#C59D2C] font-bold mb-10">
          Swagger Documentation
        </h1>
        <div className="lg:flex w-full lg:space-x-4 items-center">

          <div className="text-left lg:w-1/2 w-full">
            <p className="text-lg mb-4 lg:text-2xl">
              The Swagger documentation for the Tesfa API offers a comprehensive and well-structured REST API for managing agents, predictions, tasks, assignments, countries, and user authentication, enabling backend data management and process control for our platform.
            </p>
            <p className="text-lg mb-4 lg:text-2xl">
              The API is protected, with authentication required for all sensitive operations. It supports both individual and bulk operations where appropriate. The documentation provides a clear interface for developers to understand and interact with all available endpoints, parameters, and supported operations.
            </p>
            <p className="text-lg mb-8 lg:text-2xl">
              Click here to see the details:{" "}
              <a
                href="https://tesfa-53b1c4b2cf65.herokuapp.com/swagger/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#eefcfc] hover:text-[#5EEAD4]"
              >
                https://tesfa-53b1c4b2cf65.herokuapp.com/swagger/
              </a>
            </p>
          </div>
         
          <div className="hidden lg:block h-[400px] w-1 bg-[#D4A323] mx-8" />
       
          <div className="flex justify-end items-center lg:w-1/2 w-full ">
            <Image
              src="/Images/swagger.png"
              alt="Swagger endpoints full preview"
              width={1500}
              height={400}
              className="rounded shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}