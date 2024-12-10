import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)
    return (
        <div id="error-page">
            <h1>Oops</h1>
            <p>Désolé: une erreur est survenue</p>
            <p>
                <b>code erreur: {error.status}</b>&nbsp;
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}