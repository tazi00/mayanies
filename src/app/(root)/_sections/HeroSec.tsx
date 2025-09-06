import React from "react";

function HeroSec() {
  return (
    <section className="relative bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-12 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to{" "}
            <span className="text-primary">Vaschatue Caribean University</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Inspiring young minds to learn, grow, and achieve excellence. A
            place where education meets values, creativity, and future-ready
            skills.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#admissions"
              className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Apply for Admission
            </a>
            <a
              href="#about-us"
              className="text-sm font-semibold leading-6 text-foreground hover:text-secondary"
            >
              Learn About Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="relative mt-16 flex justify-center lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl"></div>
            <img
              src="https://imgs.search.brave.com/s4I5v1pmoDWo9_OFDhA1cheGTb6Q3qg__TDJI5WB1xI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY5LzUzLzMw/LzM2MF9GXzE2OTUz/MzAwM19zaWtRVmRk/M2VlT0w4ODg1S2ZB/RzRlQlpxcGExWGc4/Ry5qcGc"
              alt="Students learning illustration"
              className="relative rounded-2xl shadow-lg ring-1 ring-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
