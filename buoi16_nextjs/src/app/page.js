import Header from "@/components/header/Header";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const HomePage = async() => {
    const posts = await getPosts()

    return (
        <>
            <Header />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {posts.map(post => {
                            return (
                                <div className="col mb-5" key={post.id}>
                                    <div className="card h-100">
                                        <Link href={`/blog/${post.id}`}>
                                            <Image
                                                alt="image - 1"
                                                priority
                                                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                                width={400}
                                                height={400}
                                            />
                                        </Link>
                                        {/* Product details*/}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* Product name*/}
                                                <h5 className="fw-bolder">
                                                    {post.title}
                                                </h5>
                                                {/* Product price*/}
                                                $40.00 - $80.00
                                            </div>
                                        </div>
                                        {/* Product actions*/}
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                <a
                                                    className="btn btn-outline-dark mt-auto"
                                                    href="#"
                                                >
                                                    View options
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
