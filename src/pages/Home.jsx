import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { Button } from "../components/Button";
import { Label } from "../components/Label";


export function Home() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => { }, [theme])
    

    return (
        <div className="Home">
            <Label />
            <Button />
        </div>
    );
}

export default Home;
