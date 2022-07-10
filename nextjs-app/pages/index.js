
//  our-domain.com/index
import React, { Fragment } from "react";
import Link from "next/link"

const HomePage = () => {
    return <Fragment>
        <ul>
            <li>
                <Link href="/news/next-is-great-language">Next Js IS Great language
                </Link>
            </li>
            <li>Nex Js is The Greaten language </li>
        </ul>
        <h1>This Is Home Page</h1></Fragment>
}
export default HomePage;