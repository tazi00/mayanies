import React from "react";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative bg-card text-card-foreground py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Side - Image */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl"></div>
            <img
              src="https://imgs.search.brave.com/0FyygXF7GHptVY0NcQ0pYfpoMF7H2GguYNQ_evcBYSE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbnRlcmlvci1l/bGVtZW50YXJ5LXNj/aG9vbF82OTU5My01/Nzc5LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA"
              alt="Students studying together"
              className="relative rounded-2xl shadow-lg ring-1 ring-border"
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About <span className="text-primary">Our School</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              At Greenfield International School, we believe education is more
              than academics. Our mission is to nurture curiosity, creativity,
              and character in every child.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              With a blend of modern teaching methods and traditional values, we
              prepare our students not only for success in exams but also for
              success in life.
            </p>

            <div className="mt-8 flex gap-x-4">
              <a
                href="#vision"
                className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90"
              >
                Our Vision
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
