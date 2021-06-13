const success = (message, data, code = 200) => {
    return {
        success: true,
        message: message,
        data: data,
        code: code,
        version: 1
    }
}

const fail = (message, code = 500) => {
    return {
        success: false,
        message: message,
        code: code,
        version: 1
    }
}

export default {
    success,
    fail
}