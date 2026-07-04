import { useState } from "react";

const DrinkList = () => {
    const [drinks, setDrinks] = 
            useState<string[]>(["사이다", "녹차", "주스"]);

    return(
        <div>
            <h3>음료 목록</h3>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    )
}

export default DrinkList;