import Link from "next/link";
export default function Navbar(){
    const navdetails =[
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Login",
            link: "/login"
        },
        {
            name: "register",
            link: "/register"
        },
        {
            name: "Logout",
            link: "/logout"
        }
    ]
    return (
        <div className="w-full flex justify-between gap-4 p-4 px-10">
            <div className="leftnav">
                <h1 className="text-3xl ml-10">ResQCode</h1>
            </div>
            <div className="rightnav flex gap-4 mr-10">
                {navdetails.map((item, index) => (
                    
                <Link key={index} href={item.link}>{item.name}</Link>
                ))}
            </div>
        </div>
    )
}