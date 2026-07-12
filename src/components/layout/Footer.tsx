export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 md:py-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="text-3xl font-heading font-bold tracking-tight text-white mb-6">
            Pavanputra<span className="text-brand-medical">.</span>
          </div>
          <p className="text-white/50 font-light max-w-sm">
            Pioneering the future of pharmaceutical manufacturing and research globally. Premium quality, uncompromising purity.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Navigation</h4>
          <ul className="space-y-2">
            {["About", "Manufacturing", "Research", "Products", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-white transition-colors text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>info@pavanputra.com</li>
            <li>+1 (555) 123-4567</li>
            <li className="pt-4 mt-4 border-t border-white/10">Global Headquarters<br/>123 Innovation Drive<br/>Medical District</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Pavanputra Pharmachem™. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 text-white/30 text-xs">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
