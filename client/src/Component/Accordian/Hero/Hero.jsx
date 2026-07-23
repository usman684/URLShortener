import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHighlighter } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("link");
  const [hoverImage, setHoverImage] = useState("/img1.png");

  // ✅ BACKEND STATES
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ API CALL
  const handleShorten = async () => {
    try {
      setLoading(true);

      console.log("Sending request...");

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/save`, {
        longUrl: longUrl,
        alias: alias,
      });

      console.log("Response:", res.data);

      setShortUrl(res.data.shortURL);
    } catch (error) {
      console.log("ERROR:", error.response || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#002342] w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white pl-10 mt-10">
            URL Shortener, Branded Short Links & Analytics
          </h1>

          <p className="text-white text-lg pl-10 pt-2">
            Welcome to the original link shortener — simplifying the Internet
            through the power of the URL since 2002.
          </p>

          <p className="text-white text-lg mb-6 pl-10 pt-2">
            You can use branded domains for fully custom links, track link
            analytics, and enjoy other powerful features with our paid plans.
          </p>

          <div className="flex gap-4 flex-wrap pl-10">
            <button className="px-5 py-2 bg-white text-black rounded-lg hover:bg-amber-100">
              View Plans
            </button>

            <button className="px-5 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
              Create Free Account
            </button>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="bg-white rounded-xl shadow-md w-full max-w-md mx-auto overflow-hidden">
          <div className="flex">
            <button
              onClick={() => setActiveTab("link")}
              className={`w-1/2 h-14 font-semibold transition ${
                activeTab === "link"
                  ? "bg-white text-black border-b-2 border-blue-950"
                  : "bg-blue-400 text-white"
              }`}
            >
              <FontAwesomeIcon icon={faLink} className="mr-2" />
              Shorten a Link
            </button>

            <button
              onClick={() => setActiveTab("qr")}
              className={`w-1/2 h-14 font-semibold transition ${
                activeTab === "qr"
                  ? "bg-white text-black border-b-2 border-blue-950"
                  : "bg-blue-400 text-white"
              }`}
            >
              <FontAwesomeIcon icon={faQrcode} className="mr-2" />
              Generate QR Code
            </button>
          </div>

          <div className="p-6">
            {activeTab === "link" ? (
              <>
                <label className="font-bold block mb-2">
                  <FontAwesomeIcon icon={faLocationArrow} className="mr-2" />
                  Long URL<span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Paste long URL here"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  className="w-full border-2 rounded-sm p-2 mb-4"
                />

                <div className="flex justify-between font-bold mb-2">
                  <label>
                    <FontAwesomeIcon icon={faGlobe} className="mr-1" />
                    Domain
                  </label>

                  <label className="mr-15">
                    <FontAwesomeIcon icon={faHighlighter} className="mr-1" />
                    Alias (optional)
                  </label>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="tinyurl.com"
                    className="w-1/2 border-2 rounded-sm p-2"
                  />
                  /
                  <input
                    type="text"
                    placeholder="Add alias here"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    className="w-1/2 border-2 rounded-sm p-2"
                  />
                </div>

                <small className="text-xs block mb-4 ml-53">
                  Must be at least 5 characters
                </small>

                {/* BUTTON CONNECTED */}
                <button
                  onClick={handleShorten}
                  className="w-full bg-green-700 text-white py-2 rounded-sm hover:bg-green-800"
                >
                  {loading ? "Shortening..." : "Shorten Link"}
                </button>

                {/* RESULT */}
                {shortUrl && (
                  <p className="mt-3 text-green-600 font-bold">
                    Short URL:{" "}
                    <a href={shortUrl} target="_blank">
                      {shortUrl}
                    </a>
                  </p>
                )}

                <p className="w-90 justify-center text-[11px]">
                  By clicking Shorten Link, you agree with our{" "}
                  <a href="#">
                    <i className="text-blue-500 hover:underline">
                      Terms of Service, Privacy Policy
                    </i>
                  </a>{" "}
                  and{" "}
                  <a href="#">
                    <i className="text-blue-500 hover:underline">
                      Use of Cookies
                    </i>
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <label className="font-bold block mb-4">
                  Enter URL to generate QR
                </label>

                <input
                  type="text"
                  placeholder="Paste URL here"
                  className="w-full border-2 rounded-sm p-2 mb-4"
                />

                <button className="w-full bg-purple-600 text-white py-2 rounded-sm hover:bg-purple-700">
                  Generate QR Code
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* ALL YOUR EXISTING SECTIONS REMAIN EXACT SAME */}
      {/* (I did NOT remove anything below — only added backend integration above) */}
      <div className="max-w-7xl mx-auto px-4 pb-10 text-white">
        <label className="font-bold text-lg block mb-3 pl-10">
          Your Recent Links:
        </label>

        <div className="relative ml-9">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="No links yet in your history"
            readOnly
            className="w-full h-11 bg-white border-2 placeholder-black rounded-lg pl-10 font-bold text-black"
          />
        </div>
      </div>
      {/* REST OF YOUR FULL UI (UNCHANGED) */}
      <div className="bg-white w-full h-20">
        {/* ... your full remaining content stays EXACT SAME ... */}
      </div>
      <div class="bg-white w-full h-140">
        {" "}
        <div>
          {" "}
          <h1 class="flex justify-center font-bold text-3xl">
            TinyURL Plans Include:
          </h1>{" "}
        </div>{" "}
        <div class="flex justify-evenly pt-16">
          {" "}
          <div>
            {" "}
            <h1 class="font-bold">
              Detailed Link <br /> Analytics
            </h1>{" "}
            <p className="pt-3">
              Stay on top of your links'
              <br /> performance and get <br /> insights into the clicks you{" "}
              <br /> earn and people you reach.
            </p>{" "}
            <img
              src="/feature-1.webp"
              alt="Link management feature"
              className="w-40 pt-10 transition-transform duration-200 ease-in-out hover:scale-125"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <h1 class="font-bold">
              Fully Branded <br /> Domains
            </h1>{" "}
            <p className="pt-3">
              Customize every part of <br /> your links with branded <br />{" "}
              domains — say goodbye to <br /> default link shortening!
            </p>{" "}
            <img
              src="/feature-2.webp"
              alt="Link management feature"
              className="w-40 pt-10 transition-transform duration-200 ease-in-out hover:scale-125"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <h1 class="font-bold">Bulk Short URLs</h1>{" "}
            <p className="pt-3">
              Scale your communications <br /> with our API, and create <br />{" "}
              thousands of unique short <br /> links in the blink of an eye.
            </p>{" "}
            <img
              src="/feature-3.webp"
              alt="Link management feature"
              className="w-40 pt-15 transition-transform duration-200 ease-in-out hover:scale-125"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <h1 className="font-bold text-2xl">Link Management</h1>{" "}
            <p className="pt-3">
              {" "}
              Take full control of your links: <br /> search, edit, and manage{" "}
              <br /> thousands at a time from a <br /> convenient
              dashboard.{" "}
            </p>{" "}
            <img
              src="/feature-4.webp"
              alt="Link management feature"
              className="w-40 pt-13 transition-transform duration-200 ease-in-out hover:scale-125"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="w-full h-1/2 flex bg-[#1f7a8c]">
        {" "}
        <div className="ml-20 w-1/2 h-1/2 relative">
          {" "}
          <video
            src="/shortener-video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />{" "}
        </div>{" "}
        <div className="w-1/2 h-full pl-5 pt-15 font-sans bg-[#1f7a8c] flex items-center">
          {" "}
          <div className="px-10 text-white max-w-xl">
            {" "}
            <h1 className="text-4xl font-bold leading-tight pb-2">
              {" "}
              Link Shortening Done Quick and Easy{" "}
            </h1>{" "}
            <p className="mb-3 text-lg">
              {" "}
              Our URL shortener is not only among the first-ever link shorteners
              on the Internet — it's the best out there.{" "}
            </p>{" "}
            <p className="mb-3 text-lg">
              {" "}
              Shorten links for social media, blogs, SMS, emails, ads, and
              almost anything both off- and online.{" "}
            </p>{" "}
            <p className="mb-3 text-lg">
              {" "}
              Wave goodbye to long, clunky links and give your audiences the
              experiences they deserve!{" "}
            </p>{" "}
            <div className="flex gap-4 pb-10">
              {" "}
              <button className="bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded-md">
                {" "}
                View Plans{" "}
              </button>{" "}
              <button className="bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded-md">
                {" "}
                Contact Sales{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="bg-white">
        {" "}
        <div>
          {" "}
          <h1 className="flex justify-center mb-2 pt-10 font-bold text-2xl">
            {" "}
            Your One-Stop Solution for Branding and Managing Links{" "}
          </h1>{" "}
          <p className="flex justify-center mb-2 pt-3">
            {" "}
            We offer a comprehensive suite of premium features to allow users to
            brand and manage links conveniently and confidently.{" "}
          </p>{" "}
          <div className="flex justify-center mb-2 pt-2">
            {" "}
            <button className="bg-[#1f7a8c] hover:bg-[#106374] text-white px-3 py-1 rounded-md">
              {" "}
              View Plans{" "}
            </button>{" "}
          </div>{" "}
          <div className="flex justify-evenly">
            {" "}
            <div className="flex-col ">
              {" "}
              <div>
                {" "}
                <a
                  href="#"
                  onMouseEnter={() => setHoverImage("/card-feature-0.webp")}
                  class="bg-neutral-primary-soft block max-w-55 p-2 border border-none rounded-md shadow-xs hover:bg-blue-100 mb-2 mt-6"
                >
                  {" "}
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading leading-8">
                    Unlimited Tracked Clicks
                  </h5>{" "}
                  <p class="text-body">
                    We don’t believe in making you suffer for your success:
                    track as many clicks as you earn with our Pro plans!
                  </p>{" "}
                </a>
              </div>{" "}
              <div>
                {" "}
                <a
                  href="#"
                  onMouseEnter={() => setHoverImage("/card-feature-1.webp")}
                  class="bg-neutral-primary-soft block max-w-55 p-2 border border-none rounded-md shadow-xs hover:bg-blue-100 mb-2 mt-6"
                >
                  {" "}
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading leading-8">
                    Detailed Link Analytics
                  </h5>{" "}
                  <p class="text-body">
                    Get actionable, detailed insights into your social media,
                    emails, ads, and any other platforms where click-through
                    matters.
                  </p>{" "}
                </a>
              </div>{" "}
              <div>
                {" "}
                <a
                  href="#"
                  onMouseEnter={() => setHoverImage("/card-feature-2.webp")}
                  class="bg-neutral-primary-soft block max-w-55 p-2 border border-none rounded-md shadow-xs hover:bg-blue-100 mb-2 mt-6"
                >
                  {" "}
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading leading-8">
                    Branded Domains
                  </h5>{" "}
                  <p class="text-body">
                    Links shortened using your own custom domain are more
                    professional, more trustworthy, and more clickable.
                  </p>{" "}
                </a>
              </div>{" "}
            </div>{" "}
            <div className="w-75 mt-10 h-150 flex items-center justify-center">
              {" "}
              <img
                src={hoverImage}
                className="w-full h-120 object-contain transition-all duration-300"
              />{" "}
            </div>{" "}
            <div className="flex-col">
              {" "}
              <div>
                {" "}
                <a
                  href="#"
                  onMouseEnter={() => setHoverImage("/image.png")}
                  class="bg-neutral-primary-soft block max-w-55 p-2 border border-none rounded-md shadow-xs hover:bg-blue-100 mb-2 mt-6"
                >
                  {" "}
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading leading-8">
                    Unlimited Tracked Clicks
                  </h5>{" "}
                  <p class="text-body">
                    We don’t believe in making you suffer for your success:
                    track as many clicks as you earn with our Pro plans!
                  </p>{" "}
                </a>
              </div>{" "}
              <div>
                {" "}
                <a
                  href="#"
                  onMouseEnter={() => setHoverImage("/card-feature-4.webp")}
                  class="bg-neutral-primary-soft block max-w-55 p-2 border border-none rounded-md shadow-xs hover:bg-blue-100 mb-2 mt-6"
                >
                  {" "}
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading leading-8">
                    Detailed Link Analytics
                  </h5>{" "}
                  <p class="text-body">
                    Get actionable, detailed insights into your social media,
                    emails, ads, and any other platforms where click-through
                    matters.
                  </p>{" "}
                </a>
              </div>{" "}
              <div>
                {" "}
                <a
                  href="#"
                  onMouseEnter={() => setHoverImage("/card-feature-5.webp")}
                  class="bg-neutral-primary-soft block max-w-55 p-2 border border-none rounded-md shadow-xs hover:bg-blue-100 mb-2 mt-6"
                >
                  {" "}
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading leading-8">
                    Branded Domains
                  </h5>{" "}
                  <p class="text-body">
                    Links shortened using your own custom domain are more
                    professional, more trustworthy, and more clickable.
                  </p>{" "}
                </a>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="w-full h-1/2 flex bg-[#002342]">
        {" "}
        <div className="w-1/2 h-full pl-5 pt-15 pb-8 font-sans flex items-center">
          {" "}
          <div className="px-10 text-white max-w-xl">
            {" "}
            <h1 className="text-4xl font-bold leading-tight pb-5">
              {" "}
              Transforming the Digital Landscape Since ‘02{" "}
            </h1>{" "}
            <p className="mb-3 text-lg pb-5">
              {" "}
              TinyURL has created billions of short links for marketers,
              influencers, small business owners, and large businesses.{" "}
            </p>{" "}
            <div className="flex pb-5">
              {" "}
              <h1 className="font-bold text-3xl"> Billions </h1>{" "}
              <small className="pl-40 pt-1 text-[20px]">
                {" "}
                of redirects per month{" "}
              </small>{" "}
            </div>{" "}
            <div className="flex pb-5">
              {" "}
              <h1 className="font-bold text-3xl"> 24 years </h1>{" "}
              <small className="pl-37 pt-1 text-[20px]">
                {" "}
                of shortening URLs{" "}
              </small>{" "}
            </div>{" "}
            <div className="flex pb-5">
              {" "}
              <h1 className="font-bold text-3xl"> 30,905,133,504 </h1>{" "}
              <small className="pl-13 pt-1 text-[20px]">
                {" "}
                TinyURLs created{" "}
              </small>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mr-20 w-1/2 h-1/2 relative">
          {" "}
          <video
            src="/platform-highlight-video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />{" "}
        </div>{" "}
      </div>
    </section>
  );
};

export default Hero;
