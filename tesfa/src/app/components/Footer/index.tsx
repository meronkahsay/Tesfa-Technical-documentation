"use client"

export default function Footer() {
  return (
    <footer id="contact-us-section" className="bg-[#00353D] text-white px-6 py-3 mt-40  md:px-15">
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-300 md:text-2xl lg:text-[18px]">
        &copy; {new Date().getFullYear()} Tesfa. All Rights Reserved
      </div>
    </footer>
  );
}