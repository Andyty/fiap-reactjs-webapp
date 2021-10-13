require('dotenv').config()

// const apiUrl = process.env.ALGAWORKS_NODE_API;
// console.log(process.env.ALGAWORKS_NODE_API);

export default class AlgaworksAPI {
    static get(resource: String) {
        return fetch("http://localhost:3001" + resource)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }

    static getCourseById(courseId: number) {
        return fetch(`http://localhost:3001/courses/${courseId}`)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }

    static getCourseByName(courseName: String) {
        return fetch(`http://localhost:3001/courses?name=${courseName}`)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }

    static getUserByEmail(email: String) {
        return fetch(`http://localhost:3001/users?email=${email}`)
            .then(response => response.json())
            .catch(reason => console.log(reason))
    }
}