import React from "react";
import Container from "@/components/container";
import Link from "next/link";
import ContactForm from "@/components/contact-form";

const ContactPage = () => {
  return (
    <div>
      <div className="h-80 flex items-center justify-center flex-col gap-2 bg-gradient-to-b from-[#cfe2ff] via-[#f8f9fa] to-[#fff] pb-8">
        <h2 className="font-jakarta-sans text-4xl text-[#0d6efd] drop-shadow-md">
          Contact Us
        </h2>
        <nav
          className="text-[#6610f2] text-sm font-semibold"
          aria-label="Breadcrumb"
        >
          <ol className="list-none flex space-x-2">
            <li>
              <Link href="/" className="hover:underline text-[#0d6efd]">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-1 text-[#6c757d]">/</span>
            </li>
            <li className="text-[#6610f2] font-bold">Contact Us</li>
          </ol>
        </nav>
      </div>
      <Container>
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactPage;
