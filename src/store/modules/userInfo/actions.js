/**
 * Objeto que reúne os Actions que alteram as informações no BusInfo
 */
//Função que altera a Informação do Info
export function changeInfo(info) {
    
    console.log("Action changeInfo");
    //Retorna o Redux Action userInfo/CHANGE_INFO e a informação do Info
    //para alterar o Reducer
    return {
        type: 'userInfo/CHANGE_INFO',
        payload: { info },
    };
}
//Função que altera a Informação do Info
export function getNewInfo() {
    console.log("Action getNewInfo");
    //Retorna o Redux Action userInfo/GET_NEW_INFO
    //para chamar a Saga
    return {
        type: 'userInfo/GET_NEW_INFO',
    };
}