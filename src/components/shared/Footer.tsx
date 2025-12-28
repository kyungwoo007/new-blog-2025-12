import { Flame, Mail, Globe, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Flame className="w-6 h-6 text-primary fill-primary" />
                        <span className="text-lg font-bold">Hot Korea Transport</span>
                    </div>
                    <p className="text-sm text-gray-400">
                        Next-generation AI writing tool for the Korean transportation industry.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold">Contact</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4" /> support@hotkoreatransport.com
                        </li>
                        <li className="flex items-center gap-2">
                            <Globe className="w-4 h-4" /> www.hotkoreatransport.com
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Seoul, South Korea
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-primary">About Us</a></li>
                        <li><a href="#" className="hover:text-primary">Pricing</a></li>
                        <li><a href="#" className="hover:text-primary">API Documentation</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 text-center text-xs text-gray-500">
                © 2025 Hot Korea Transport News. All rights reserved.
            </div>
        </footer>
    );
}
