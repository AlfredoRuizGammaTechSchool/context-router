import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * 
 * @returns 
 */
export const Label = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="label--main">
            <p className={`label--text label--${theme}`}> {theme === "dark"? "Light" : "Dark"} </p>
        </div>
    )
}