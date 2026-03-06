"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState<{ email?: string; captcha?: string }>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validateEmail = (email: string) => {
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      return "Email is required";
    }

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    // Check for common typos in domain
    const domain = email.split("@")[1];
    const commonDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
    ];
    const typos: { [key: string]: string } = {
      "gmial.com": "gmail.com",
      "gmai.com": "gmail.com",
      "yahooo.com": "yahoo.com",
      "hotmial.com": "hotmail.com",
      "outlok.com": "outlook.com",
    };

    if (typos[domain]) {
      return `Did you mean ${email.split("@")[0]}@${typos[domain]}?`;
    }

    // Check for missing TLD
    if (!domain.includes(".")) {
      return "Email must include a domain (e.g., @example.com)";
    }

    return null;
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    if (value && errors.captcha) {
      setErrors((prev) => ({ ...prev, captcha: undefined }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear email error when user types
    if (name === "email" && errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    // Validate captcha
    if (!captchaValue) {
      setErrors({ captcha: "Please complete the CAPTCHA verification" });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Include captchaValue in API request for server-side verification
      console.log("Form submitted:", {
        ...formData,
        captchaToken: captchaValue,
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        subscribe: false,
      });
      setCaptchaValue(null);
      recaptchaRef.current?.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ captcha: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl text-[#002D72] tracking-[-1px] uppercase mb-4 sm:mb-6">
                Get in Touch
              </h1>
              <p className="font-light text-base sm:text-lg lg:text-xl text-[#4a5565] leading-relaxed">
                Have a question about our products or installation? We're here
                to help! Send us a message and we'll respond as quickly as
                possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#0056FF] to-[#002D72] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#002D72] uppercase mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:support@snappytrap.com"
                    className="font-light text-sm sm:text-base lg:text-lg text-[#4a5565] hover:text-[#0056FF] transition-colors break-all"
                  >
                    support@snappytrap.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#0056FF] to-[#002D72] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#002D72] uppercase mb-1">
                    Visit Us
                  </h3>
                  <p className="font-light text-sm sm:text-base lg:text-lg text-[#4a5565]">
                    CFX Plumbing,
                    <br />
                    700 N St Mary's Street,
                    <br />
                    Suite 1400, San Antonio, TX, 78205
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-[#002D72] via-[#003A8C] to-[#0056FF] rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="font-black text-xl sm:text-2xl text-white uppercase mb-3 sm:mb-4">
                Need Immediate Help?
              </h3>
              <p className="font-light text-base sm:text-lg text-blue-100 mb-5 sm:mb-6">
                Check out our FAQ section or installation guides for quick
                answers to common questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/how-it-works"
                  className="bg-white hover:bg-blue-50 text-[#002D72] px-5 sm:px-6 py-3 font-bold text-sm rounded-2xl uppercase transition-all text-center"
                >
                  How It Works
                </a>
                <a
                  href="/products"
                  className="border-2 border-white text-white hover:bg-white/10 px-5 sm:px-6 py-3 font-bold text-sm rounded-2xl uppercase transition-all text-center"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
            <h2 className="font-black text-xl sm:text-2xl text-[#002D72] uppercase mb-5 sm:mb-6">
              Send Us a Message
            </h2>

            {submitSuccess && (
              <div className="mb-5 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl">
                <p className="font-medium text-sm sm:text-base text-green-800">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-bold text-xs sm:text-sm text-[#002D72] uppercase mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 h-12 sm:h-14 text-base sm:text-lg font-medium rounded-xl sm:rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-[#0056FF] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-bold text-xs sm:text-sm text-[#002D72] uppercase mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-200"} text-black placeholder:text-gray-400 h-12 sm:h-14 text-base sm:text-lg font-medium rounded-xl sm:rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-[#0056FF] focus:border-transparent`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-xs sm:text-sm text-red-600 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-bold text-xs sm:text-sm text-[#002D72] uppercase mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 h-12 sm:h-14 text-base sm:text-lg font-medium rounded-xl sm:rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-[#0056FF] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-bold text-xs sm:text-sm text-[#002D72] uppercase mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 h-12 sm:h-14 text-base sm:text-lg font-medium rounded-xl sm:rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-[#0056FF] focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-bold text-xs sm:text-sm text-[#002D72] uppercase mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 text-base sm:text-lg font-medium rounded-xl sm:rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0056FF] focus:border-transparent resize-none"
                  placeholder="Tell us more about your question or project..."
                />
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="w-4 h-4 sm:w-5 sm:h-5 mt-1 border-2 border-gray-300 rounded focus:ring-2 focus:ring-[#0056FF] text-[#0056FF]"
                />
                <label
                  htmlFor="subscribe"
                  className="font-medium text-xs sm:text-sm text-[#4a5565] cursor-pointer"
                >
                  Subscribe to our newsletter for early access to new products,
                  special discounts, and free resources.
                </label>
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-center sm:justify-start">
                <div className="transform scale-90 sm:scale-100 origin-left">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={
                      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                      "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    }
                    onChange={handleCaptchaChange}
                    theme="light"
                  />
                </div>
                {errors.captcha && (
                  <p className="mt-2 text-xs sm:text-sm text-red-600 font-medium">
                    {errors.captcha}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#0056FF] to-[#002D72] hover:from-[#0066FF] hover:to-[#003A8C] text-white font-bold text-base sm:text-lg py-3 sm:py-4 rounded-xl sm:rounded-2xl tracking-wide uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
