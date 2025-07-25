import React from "react";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with dark overlay */}
        <div
          className={`absolute inset-0 bg-[url('/home-bg.jpg')] bg-cover bg-center brightness-50`}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Centered Text Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold capitalize mb-4">
            About Me
          </h1>
          <p className=" text-lg md:text-xl max-w-2xl mx-auto">Who am I ?</p>
        </div>
      </div>
      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-base md:text-lg leading-relaxed space-y-6">
        <p>
          I am <strong>Sundeep Acharya</strong>, a raw human, an uncooked poet,
          underdone yogi, and an enthusiast of economics. I come from Nepal, a
          beautiful land that has shaped who I am, both spiritually and
          intellectually.
        </p>

        <p>
          Reading is something I deeply enjoy, and I admire anyone who loves
          books too. I’m really fascinated by the lives of Himalayan yogis and
          the lessons they share about life and the universe. Their wisdom has
          inspired me to explore deeper truths about the world around us.
        </p>

        <p>
          I also love to travel, especially to rural villages in Nepal. I enjoy
          talking to older people I meet along the way—they always have amazing
          stories and life lessons to share. Music is another big part of my
          life. I play some traditional Nepali instruments and even a few
          Western ones. Music brings me peace and helps me connect with myself
          and the world around me.
        </p>

        <p>
          I’m on a journey to practice <strong>Swadharma</strong>—living in
          alignment with my true self. It’s a work in progress, but every day
          brings me closer to understanding my purpose, and I hope to keep
          growing through this path.
        </p>

        <p>
          In the future, I want to share what I’ve learned with those who are
          seeking knowledge. I believe that education has the power to change
          lives, and that’s why I want to contribute to my community, especially
          by teaching students in the rural villages of Nepal.
        </p>

        <p>
          I also aim to contribute to the world through my research in
          economics, hoping to add value and offer new insights that can help
          shape a better future.
        </p>

        <p>
          <strong>Let’s connect:</strong>{" "}
          <a
            href="mailto:sundeep.acharya134@gmail.com"
            className="text-primary-dull hover:underline"
          >
            sundeep.acharya134@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default About;
