import Link from "next/link";

const NavLink = ({ href, title }) => {
    if (title === "Download CV") {
        return (
            <a
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
                {title}
            </a>
        );
    }
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
            {title}
        </Link>
    );
};

export default NavLink;