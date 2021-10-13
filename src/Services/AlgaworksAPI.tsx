require('dotenv').config()

export default class AlgaworksAPI {
    static get(resource: String) {
        // const apiUrl = process.env.ALGAWORKS_NODE_API;
        // console.log(process.env.ALGAWORKS_NODE_API);

        return fetch("http://localhost:3001" + resource)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }

    static getByName(resource: String, courseName: String) {
        return fetch("http://localhost:3001" + resource + `?name=${courseName}`)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }
}