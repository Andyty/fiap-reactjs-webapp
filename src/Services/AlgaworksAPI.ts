require('dotenv').config()

const API_URL: string | undefined = process.env.REACT_APP_ALGAWORKS_NODE_API;

export default class AlgaworksAPI {

    static get(resource: String) {
        return fetch((API_URL as string) + resource)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }

    static getCourseById(courseId: number) {
        return fetch((API_URL as string) + `/cursos/${courseId}`)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }

    static getCourseByName(courseName: String) {
        return fetch((API_URL as string) + `/cursos?criteria=${courseName}`)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }

    static getUserByEmail(email: String) {
        return fetch((API_URL as string) + `/usuarios?email=${email}`)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }

    static updateUser(payload: any) {
        const { id } = payload

        return fetch((API_URL as string) + `/usuarios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }
}