exports.success = (res, message, data, code = 200) => {
    res.status(code).json({
        success: true,
        message: message,
        data: data,
        code: code,
        version: 1
    });
}

exports.fail = (res, message, code = 500) => {
    res.status(code).json({
        success: true,
        message: message,
        code: code,
        version: 1
    });
}