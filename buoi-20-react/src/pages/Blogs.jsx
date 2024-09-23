import React, { Suspense } from "react";
import Content from "../components/Content";
// import Comment from "../components/Comment";

const Comment = React.lazy(() =>import("../components/Comment"));

const Blogs = () => {
    return (
        <>
            <div
                style={{
                    width: "80%",
                    margin: "auto",
                }}
            >
                <Content />

                <Suspense fallback="Loading">
                    <Comment />
                </Suspense>
            </div>
        </>
    );
};

export default Blogs;
