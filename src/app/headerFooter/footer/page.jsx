import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer style={{ background: "#2d5a45" }} className="px-10 pt-12 pb-6 font-sans">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-white text-6xl font-bold tracking-tight mb-3">KeenKeeper</h1>
                    <p className="text-white/70 text-sm">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                <div className="text-center mb-6">
                    <p className="text-white text-sm font-medium mb-3">Social Links</p>
                    <div className="flex justify-center gap-3">
                        <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                            <Image src="/images/facebook.png" alt="icon" width={100} height={100}></Image>
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                            <Image src="/images/instagram.png" alt="icon" width={100} height={100}></Image>
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="black">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/15 pt-5 flex justify-between items-center flex-wrap gap-3 min-w-full!">
                    <p className="text-white/55 text-sm">© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-5">
                        <Link href="/privacy" className="text-white/70 text-sm hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/70 text-sm hover:text-white">Terms of Service</Link>
                        <Link href="/cookies" className="text-white/70 text-sm hover:text-white">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;