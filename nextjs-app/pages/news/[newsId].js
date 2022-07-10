// our-domain/news/something-else
// [newsId] daynamic path

import { useRouter } from "next/router"
import React from "react";
const DetailPage = () => {

    const router = useRouter()
    const newsPath = router.query.newsId
    console.log(newsPath);
    return <h1>This Is Detail Page</h1>
}
export default DetailPage;
