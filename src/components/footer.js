export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Yasir Mohammed Ahmed. All rights
          reserved.
        </p>
        <p className="text-sm mt-2">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
