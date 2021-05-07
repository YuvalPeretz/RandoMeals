import React, { useEffect, useState } from "react"

const RecipesAdd = () => {
    const [lngs, setLngs] = useState({
        en: {}
    })

    async function SetVals() {
        await fetch("/locales/en/translation.json")
            .then(lng => lng.json())
            .then(json => setLngs({en: json}))
    }

    useEffect(() => { SetVals() }, [])

    return (
        <div>
            {console.log(lngs.en)}
        </div>
    );
}

export default RecipesAdd;