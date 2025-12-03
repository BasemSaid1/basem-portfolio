import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  // رواقع التواصل الاجتماعي العالمية
  const socialPlatforms = [
    {
      id: 1,
      icon: "fa-brands fa-linkedin",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/basem-said-468b7b274",
      color: "bg-blue-600 hover:bg-blue-700",
      iconColor: "text-white",
    },
    {
      id: 2,
      icon: "fa-brands fa-github",
      name: "GitHub",
      link: "https://github.com/BasemSaid1",
      color: "bg-gray-800 hover:bg-gray-900",
      iconColor: "text-white",
    },
    {
      id: 3,
      icon: "fa-brands fa-whatsapp",
      name: "WhatsApp",
      link: "https://wa.me/201095435168",
      color: "bg-green-600 hover:bg-green-700",
      iconColor: "text-white",
    },
    {
      id: 4,
      icon: "fa-brands fa-telegram",
      name: "Telegram",
      link: "https://t.me/basem_said",
      color: "bg-blue-500 hover:bg-blue-600",
      iconColor: "text-white",
    },
    {
      id: 5,
      icon: "fa-solid fa-envelope",
      name: "Email",
      link: "mailto:bbasemsaid@gmail.com",
      color: "bg-gray-900",
      iconColor: "text-white",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال البيانات
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Global Contact Form Submitted:", formData);

    // إعادة تعيين النموذج
    setFormData({
      name: "",
      age: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
    setIsSubmitted(true);

    // إخفاء رسالة النجاح بعد 5 ثواني
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Let's Build Something
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 animate-gradient">
                Amazing Together
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              I'm available for global projects and collaborations. Whether
              you're from North America, Europe, Asia, or anywhere else, let's
              connect and create something extraordinary.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "contact"
                    ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-envelope mr-2"></i>
                Contact Form
              </button>
              <button
                onClick={() => setActiveTab("info")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "info"
                    ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-address-card mr-2"></i>
                Contact Info
              </button>
            </div>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="max-w-2xl mx-auto mb-8 animate-fade-in">
              <div className="bg-gradient-to-r from-emerald-900/40 to-green-900/40 border border-emerald-700 rounded-xl p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-white text-xl"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white text-xl font-bold">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-300 mt-1">
                      Thank you for your message. I'll respond within 24 hours.
                      Looking forward to our collaboration!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Info Tab */}
          {activeTab === "info" && (
            <div className="max-w-6xl mx-auto">
              {/* Social Platforms */}
              <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 mb-12">
                <h2 className="text-white text-3xl font-bold text-center mb-10">
                  <i className="fa-solid fa-share-nodes mr-3 text-emerald-400"></i>
                  Connect With Me On
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {socialPlatforms.map((platform) => (
                    <a
                      key={platform.id}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${platform.color} rounded-xl p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
                    >
                      <i
                        className={`${platform.icon} ${platform.iconColor} text-2xl mb-2`}
                      ></i>
                      <p className="text-white font-medium text-sm">
                        {platform.name}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Contact Form Tab */}
          {activeTab === "contact" && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-10 shadow-2xl">
                <div className="text-center mb-10">
                  <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    Global Project Inquiry
                  </h2>
                  <p className="text-gray-400">
                    Fill out this form to discuss your project requirements. I
                    work with clients worldwide.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative">
                      <label className="block text-white mb-2 font-medium">
                        <i className="fa-solid fa-user mr-2 text-emerald-400"></i>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Age */}
                    <div className="relative">
                      <label className="block text-white mb-2 font-medium">
                        <i className="fa-solid fa-calendar-days mr-2 text-emerald-400"></i>
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Optional"
                        min="18"
                        max="100"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block text-white mb-2 font-medium">
                        <i className="fa-solid fa-envelope mr-2 text-emerald-400"></i>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block text-white mb-2 font-medium">
                        <i className="fa-solid fa-phone mr-2 text-emerald-400"></i>
                        Phone Number (with country code)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-white mb-2 font-medium">
                      <i className="fa-solid fa-message mr-2 text-emerald-400"></i>
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-12 py-4 rounded-full font-bold text-white text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                        isSubmitting
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 hover:shadow-emerald-500/30 hover:from-emerald-600 hover:to-blue-600"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="fa-solid fa-spinner fa-spin mr-3"></i>
                          Processing Your Request...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <i className="fa-solid fa-paper-plane mr-3"></i>
                          Send Project Inquiry
                        </span>
                      )}
                    </button>
                    <p className="text-gray-400 text-sm mt-4">
                      * Required fields. I respect your privacy and will not
                      share your information.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Floating Contact Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/201095435168"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
          </a>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style>
        {`
          @keyframes gradient {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s ease infinite;
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s infinite;
          }
        `}
      </style>
    </>
  );
}
