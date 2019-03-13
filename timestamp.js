function getDateJson(value) {
    var date = value ? new Date(value) : new Date();
    try {
        return {
            "unix": date.getTime(),
            "utc": date.toUTCString()
        };
    } catch (ex) {
        return {
            "error": "Invalid Date"
        };
    }
}

module.exports = {
    getDateJson
};