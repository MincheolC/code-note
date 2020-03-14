function Unauthorized(message) {
    return {
        statusCode: 401,
        error: 'Unauthorized',
        message: message || 'Authentication missing or invalid',
    };
}

module.exports = {
    Unauthorized,
};
