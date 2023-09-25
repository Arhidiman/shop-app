import { Routes, Route } from "react-router-dom";

export const routePath = {
    home: "/",
    notFound: "*"
}

function AppRouter() {
    return (
        <>
            <Routes>
                    <Route path={"*"} element={null}/>
            </Routes>
        </>
    )
}

export default AppRouter
