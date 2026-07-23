import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What Is a URL Shortener?",
      answer:
        "A URL shortener, also known as a link shortener, is a useful tool that trims long and intricate URLs into shorter and more understandable links.",
    },
    {
      question: "How Does a URL Shortener Work?",
      answer:
        "URL shorteners work like simple signposts: they create new links (redirects) that serve the single purpose of bouncing users to an eventual destination. Since all URLs are essentially just instructions for where your web browser should send you online, you can think of shortening a URL as turning geographic coordinates into handy, easy-to-understand street addresses.",
    },
    {
      question: "What Are the Benefits of Using a Short URL?",
      answer:
        "Brands, organizations, and individuals use link shorteners to make sharing links more convenient. They make it possible to fit links into emails, social media posts, print materials, billboards, or even make it so links can be read aloud on audio-dependent media like podcasts. With our paid plans, you can even shorten links using your own brand’s domain, and then track detailed click analytics for sharper, faster decision-making!",
    },
    {
      question: "What Is a Custom URL Shortener?",
      answer:
        "A custom URL shortener (also known as a branded URL shortener) is a link shortener that lets you use a personalized domain in place of a default like tinyurl.com. These fully custom or branded links are great for building trust with audiences, earning higher click-through rates, giving more information about a link’s destination, and improving brand recall.",
    },
    {
      question: "How Do I Shorten a URL for Free?",
      answer:
        "You can shorten a URL for free using TinyURL’s link shortening platform. The process is incredibly straightforward: Just visit our URL shortener tool on your browser of choice, key in your long URL into the indicated field, and generate a shortened URL by clicking the 'Shorten URL' button. If you’re feeling creative, you can try and attach a unique back half (ex. tinyurl.com/example) by using the ‘Alias’ field.",
    },
    {
      question: "How Do I Know Your Service Is Reliable and Scalable?",
      answer:
        "TinyURL is a cutting-edge link-shortening platform that caters to a broad user base looking for a robust method to shorten and brand links. Our platform is trusted by big brands around the world for creating links that are safe, reliable, and never expire. We’ve created billions of short, branded links so far!",
    },
    {
      question: "Can I Use a Domain I Already Own?",
      answer:
        "Certainly, you can! We pride ourselves on offering personalization features and flexibility so users can create fully customized links. Our paid plans let you register or import top-level domains (example.com) or subdomains (subdomain.example.com) provided they don’t have web content built on top of them.",
    },
  ];

  return (
    <div className="flex bg-gray-100 py-16">
      <h1 className="font-bold text-5xl ml-20 mt-50">
        Frequently <br /> Asked <br /> Questions
      </h1>
      <div className="max-w-xl mx-auto">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            {/* Question */}
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center py-6 text-left"
            >
              <span className="text-lg font-semibold text-gray-900">
                {item.question}
              </span>

              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === index ? "max-h-40 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
