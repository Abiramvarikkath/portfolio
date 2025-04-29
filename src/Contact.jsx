import React from "react";

function Contact() {
  return (
    <div id="Contact" className="scroll-smooth px-4 sm:px-8 md:px-16 lg:px-32 py-12">
      <div className="text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6">Contact</h1>
        <h2 className="text-base sm:text-lg md:text-xl">
          Feel free to reach out to me on the following platforms or via email:
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 mt-10">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abhiram-v-02701a341/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-600 hover:underline"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76...z" />
          </svg>
          <span className="text-sm sm:text-base md:text-lg">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Abiramvarikkath"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-600 hover:underline"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12...z" />
          </svg>
          <span className="text-sm sm:text-base md:text-lg">GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:abhiramv730@email.com"
          className="flex items-center space-x-2 text-blue-600 hover:underline"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 12.713l-11.713-8.713h23.426...z" />
          </svg>
          <span className="text-sm sm:text-base md:text-lg">Email: abhiramv730@email.com</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
