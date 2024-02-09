import React, { useState } from "react";
import Blog from "./Blog";

const LightDarkMode = () => {
    const [theme, setTheme] = useState("light");
    return (
        <div>
            <Blog theme={"light"} />
        </div>
    );
};

export default LightDarkMode;
