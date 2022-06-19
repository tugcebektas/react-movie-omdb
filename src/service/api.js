const url = "https://www.omdbapi.com/?apikey=8fadf8f1"

const get = async (params) => {
    return(
        await fetch(url + params.url).then(response=>response.json()).then(data=> {
            return data
        })
    )
}

export const api = {get}


