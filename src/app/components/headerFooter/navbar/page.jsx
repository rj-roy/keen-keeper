import { Activity, Home, Watch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const links = (
        <>
            <li><Link className="flex font-bold gap-1" href="/"><Home />Home</Link></li>
            <li><Link className="flex font-bold gap-1" href="/timeline"><Watch />Timeline</Link></li>
            <li><Link className="flex font-bold gap-1" href="/stats"><Activity /> Stats</Link></li>
        </>
    );

    return (
        <div className="shadow-sm">
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center p-5">
                <div className="">
                    <Link href="/" className="text-xl">
                        <Image src="/images/logo.png" alt="keen-Keeper"
                            width={150}
                            height={150}
                            style={{width:"auto"}}
                        ></Image>
                    </Link>
                </div>
                <div className="hidden sm:flex justify-end">
                    <ul className="px-1 flex gap-4">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;