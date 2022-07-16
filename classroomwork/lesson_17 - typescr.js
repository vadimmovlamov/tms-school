/* пренести задачу в 16 урок */

const dummyRequest = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Success'), 10000)
    })
}

const rejection = (delay) => {
    new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Oops')), delay)
    })
}

const makeRequest = async (request, delay) => {
    try {
        const result = await Promise.race([request(), rejection(delay)])
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

makeRequest(dummyRequest, 5000)