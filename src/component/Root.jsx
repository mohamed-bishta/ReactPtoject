import { Outlet } from "react-router-dom";
import Links from "./Links";
import Content from "./Content";

 
export default function Root() {
    return (
        <>
            <Outlet />
            {/* <Links /> */}
            {/* <Content /> */}
        </>
    )
}
