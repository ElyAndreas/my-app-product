import React from "react";

const Topbar =() =>{

    const menu = [
        {
            id: "home",
            title: "Home",
        },
        {
            id: "contact",
            title: "Contact",
        },
        {
            id: "profile",
            title: "Profile",
        },
    
    ];
    
    return (
        <div className="flex h-24 bg-sky-900 py-8 px-32 justify-between">
            <h1 className="text-xl font-bold text-white  cursor-pointer">
                Logo
            </h1>
            <ul className="flex space-x-6">
                {menu.map((isi) => (
                    <li key={isi.id} className="text-sm font-bold text-white cursor-pointer">
                        {isi.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Topbar