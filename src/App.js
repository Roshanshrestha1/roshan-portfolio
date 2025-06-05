import React from "react";

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-mono">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <div className="text-2xl font-bold text-purple-400">Roshan Shrestha</div>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#about" className="hover:text-purple-400">About Me</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-purple-400">Roshan Shrestha</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">Web Designer & Front-end Developer</p>
        <p className="text-gray-400 max-w-xl mx-auto">
          I'm currently into DSA, Frontend Dev, Backend Dev
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-purple-400 mb-8">#projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Cards Placeholder */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-400 mb-4">Description of project 1.</p>
            <a href="#" className="text-purple-400 underline">Live</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-400 mb-4">Description of project 2.</p>
            <a href="#" className="text-purple-400 underline">Live</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-400 mb-4">Description of project 3.</p>
            <a href="#" className="text-purple-400 underline">Live</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold text-purple-400 mb-8">#skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-4 rounded-lg text-center">HTML</div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">CSS</div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">JavaScript</div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">ReactJS</div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">NodeJS</div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">MySQL</div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">Git</div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">Figma</div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-purple-400 mb-8">#about-me</h2>
        <div className="max-w-2xl mx-auto text-gray-300">
          <p className="mb-4">Hello, I'm Roshan Shrestha!</p>
          <p className="mb-4">I'm a self-taught front-end developer based in [Your Location]. I can develop responsive websites from scratch and turn them into modern, user-friendly web experiences.</p>
          <p className="mb-4">I'm passionate about improving my coding skills and building applications & websites. I always strive to learn about the newest technologies and frameworks.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold text-purple-400 mb-8">#contacts</h2>
        <div className="max-w-xl mx-auto text-gray-300">
          <p className="mb-4">I'm interested in freelance opportunities. If you have a request or question, don't hesitate to contact me.</p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div>Email: <a href="mailto:your.email@example.com" className="text-purple-400 underline">your.email@example.com</a></div>
            <div>GitHub: <a href="https://github.com/your-github" className="text-purple-400 underline">github.com/your-github</a></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800 mt-8">
        © {new Date().getFullYear()} Roshan Shrestha. Made with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
