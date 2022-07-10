import { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";



const QuotesDetail = () => {
    const param = useParams();
    const match = useRouteMatch();
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true)
    const { quoteId } = param
    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])


    if (status === "pending") {
        return <div className="centered"> <LoadingSpinner /></div>
    }
    if (error) {
        return <p>{error}</p>
    }

    if (!loadedQuotes) {
        return <p>No Quote Found</p>
    }

    return <Fragment>
        <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
        <Route path={`${match.url}`}>
            <div className="centered">
                <Link className="btn--flat" to={`${match.url}/comment`}>Load  Comments</Link>
            </div>
        </Route>
        <Route path={`${match.path}/comment`}>
            <Comments />
        </Route>
    </Fragment >
}
export default QuotesDetail;