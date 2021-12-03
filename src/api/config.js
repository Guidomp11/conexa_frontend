export const authConfig = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': ''
    }
}

export const api = process.env.REACT_APP_BASE_URL;