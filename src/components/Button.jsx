import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Button que recibe el texto, la funcion y un style para agregarlo a la class
 *  
 * @returns 
 */
export const Button = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const turnLight = (theme) => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <button className={`button--main button--${theme}`}
            onClick={() => turnLight(theme)}
        >
            <p className="button--text">{theme === "dark"? "Dark" : "Light"}</p>
        </button>
    )
}