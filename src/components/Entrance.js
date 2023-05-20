import React from "react";
import Link from "next/link";
// animasyon gelecek
const Entrance = () => {
    return (
        <div className=' -mt-40'>
            <header className=' text-center lg:text-6xl md:text-4xl sm:text-3xl text-3xl text-black' id='def'>BÜYÜRKEN YANINIZDAYIZ.</header>
                <p id='section_font' className={` text-gray-600 text-center mt-5 lg:text-lg md:text-lg sm:text-sm text-xs lg:px-52 transition-all duration-700`}> <strong>Atlantic Valley Partners</strong>, küresel bir <strong >yönetim danışmanlığı</strong> firmasıdır. Önde gelen işletmelerin, hükümetlerin ve kurumların <strong >güvenilir danışmanıyız</strong>.</p>
                <center>
                    <Link href={'/whoweare'}>
                        <button className={`h-16 bg-black text-white mx-5 my-5 text-center w-44  text-xl font-thin transform transition-all duration-700 hover:scale-105 hover:bg-transparent hover:border hover:border-black hover:text-black rounded-full`} id='section_font' href=''>Biz Kimiz?</button>
                    </Link>
            </center>
        </div>          
    )
}

export default Entrance;