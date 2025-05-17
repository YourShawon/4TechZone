"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="relative isolate bg-gradient-to-br from-[#cfe2ff] via-[#fff] to-[#e9ecef] px-4 py-16 sm:py-24 lg:px-8 rounded-2xl shadow border border-[#0d6efd]/20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[60vw] h-[60vw] bg-gradient-to-tr from-[#0d6efd]/30 to-[#6610f2]/20 blur-2xl opacity-60"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0d6efd] sm:text-3xl drop-shadow">
          Get in Touch
        </h2>
        <p className="mt-3 text-lg text-[#343a40]">
          Let's talk about your project or idea. Our team will get back to you
          as soon as possible.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-8 max-w-xl sm:mt-12 w-full"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-[#0d6efd] mb-1"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-lg border border-[#cfe2ff] bg-[#f8f9fa] px-4 py-2 text-base text-[#212529] placeholder:text-[#adb5bd] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd] transition"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-[#0d6efd] mb-1"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-lg border border-[#cfe2ff] bg-[#f8f9fa] px-4 py-2 text-base text-[#212529] placeholder:text-[#adb5bd] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd] transition"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-[#0d6efd] mb-1"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-lg border border-[#cfe2ff] bg-[#f8f9fa] px-4 py-2 text-base text-[#212529] placeholder:text-[#adb5bd] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd] transition"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#0d6efd] mb-1"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-lg border border-[#cfe2ff] bg-[#f8f9fa] px-4 py-2 text-base text-[#212529] placeholder:text-[#adb5bd] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd] transition"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold text-[#0d6efd] mb-1"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-lg border border-[#cfe2ff] bg-[#f8f9fa] focus-within:border-[#0d6efd] focus-within:ring-2 focus-within:ring-[#0d6efd] transition">
                <div className="grid shrink-0 grid-cols-1 relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-lg py-2 pr-7 pl-3.5 text-base text-[#6c757d] placeholder:text-[#adb5bd] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd] sm:text-sm bg-transparent"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[#adb5bd] sm:size-4 absolute right-2 top-1/2 -translate-y-1/2"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-2 pr-3 pl-1 text-base text-[#212529] bg-transparent placeholder:text-[#adb5bd] focus:outline-none sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-[#0d6efd] mb-1"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-lg border border-[#cfe2ff] bg-[#f8f9fa] px-4 py-2 text-base text-[#212529] placeholder:text-[#adb5bd] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd] transition"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2 mt-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-10 flex-none cursor-pointer rounded-full bg-[#e9ecef] p-px ring-1 ring-[#adb5bd] transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d6efd] data-[checked]:bg-[#0d6efd]"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-5 transform rounded-full bg-[#fff] shadow-xs ring-1 ring-[#adb5bd] transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                />
              </Switch>
            </div>
            <Label className="text-sm text-[#6c757d]">
              By selecting this, you agree to our{" "}
              <a
                href="#"
                className="font-semibold text-[#0d6efd] hover:text-[#6610f2]"
              >
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-lg bg-gradient-to-r from-[#0d6efd] to-[#6610f2] px-3.5 py-3 text-center text-base font-bold text-[#fff] shadow-lg hover:from-[#6610f2] hover:to-[#0d6efd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d6efd] transition-all cursor-pointer"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
