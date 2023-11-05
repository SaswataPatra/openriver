import { FunctionComponent, ReactElement } from "react"
import Navbar from "../navbar";
interface ChildrenProps {
    children : ReactElement | ReactElement[];
}

const BaseLayout : FunctionComponent<ChildrenProps> = ({children})=>{
    return (
        <>
        <Navbar/>
        {children}
        </>
    )
}

export default BaseLayout;