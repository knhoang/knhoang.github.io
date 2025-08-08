import type { PropsWithChildren } from "react";
import "./Page.css";

function Page(props: PropsWithChildren) {
    return (
        <article className="Page">
            {props.children}
        </article>
    );
}

export default Page;
