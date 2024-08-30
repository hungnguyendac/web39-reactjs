import Image from "next/image";
import React from "react";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto">
                <h1>Tối ưu hình ảnh NextJS</h1>

                <Image
                    src="/wallpaperflare.com_wallpaper(3).jpg"
                    width={500}
                    height={500}
                    alt="Ninja"
                    priority
                />

                <h2>Thêm hình ảnh từ url khác</h2>
                <Image
                    src="https://lp-prod.rome2rio.com/assets/drive-500px-BhrEOi-f.webp"
                    width={500}
                    height={500}
                    alt="Ninja"
                    priority
                />
            </div>
        </>
    );
};

export default HomePage;
