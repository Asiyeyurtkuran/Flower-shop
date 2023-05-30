const API_URL = process.env.REACT_APP_API_URL

async function login(email, password) {
    return await post('login', { email, password }, false)
}

async function register(email, password, firstName, lastName, phone) {
    return await post('user', { email, password, firstName, lastName, phone }, false)
}

// async function createProfile(userId, firstName, lastName, email, password, phone) {
//     return await patch(`users/${userId}`, { firstName, lastName, email, password, phone })
// }


async function updateProfile(userId, firstName, lastName, email, password, phone) {
    return await patch(`profile/${userId}`, { firstName, lastName, email, password, phone }, true)
}

async function post(endpoint, data, auth = true) {
    return await request('POST', endpoint, data, auth)
}



async function del(endpoint, data, auth = true) {
    return await request('DELETE', endpoint, data, auth)
}

async function patch(endpoint, data) {
    return await request('PATCH', endpoint, data)
}

async function get(endpoint, auth = true) {
    return await request('GET', endpoint, null, auth)
}

async function request(method, endpoint, data, auth = true) {
    const opts = {
        headers: {
            'Content-Type': 'application/json'
        },
        method
    }

    console.log(data)
    if (method.toUpperCase() !== 'GET') {
        opts.body = JSON.stringify(data)
    }

    if (auth) {
        opts.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    }

    const response = await fetch(`${API_URL}/${endpoint}`, opts)

    return response.json()
}

export {
    login,
    updateProfile,
    register,
    //createProfile,
    get,
    post,
    patch,
    del
}