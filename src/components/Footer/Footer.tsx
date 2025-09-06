import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Tagline */}
        <div>
          <Logo />
          <h3 className="text-lg font-semibold text-foreground">
            Vaschatue Caribean University
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Nurturing minds, building futures.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:text-center">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Academics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Admissions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:text-right">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
            Contact Us
          </h4>
          <p className="mt-4 text-sm text-muted-foreground">
            123 Knowledge Lane, Kolkata, India
          </p>
          <p className="mt-2 text-sm text-muted-foreground">+91 98765 43210</p>
          <p className="mt-2 text-sm text-muted-foreground">
            info@springfield.edu
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Springfield International School. All
          rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Designed with ❤️ by Riki
        </p>
      </div>
    </footer>
  );
}

export default Footer;
