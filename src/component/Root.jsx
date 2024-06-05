import { Outlet } from "react-router-dom";
import NavPar from "./NavPar";


export default function Root() {
    return (
        <>
            <NavPar />
            <Outlet />
        </>
    )
}
