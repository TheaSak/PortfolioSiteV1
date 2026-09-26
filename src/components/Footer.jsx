export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 py-8 mt-auto text-zinc-600 text-sm text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Thea Monyrithsak. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://github.com/TheaSak" target="_blank" rel="noreferrer" className="hover:text-zinc-950">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/thea-monyrithysak-954166406/" target="_blank" rel="noreferrer" className="hover:text-zinc-950">
            LinkedIn
          </a>
          <a href="mailto:2025466thea@aupp.edu.kh" className="hover:text-zinc-950">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}