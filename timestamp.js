function getDateJson(value) {
    var date = value ? parseDateString(value) : new Date();
    return date ? {
        "unix": date.getTime(),
        "utc": date.toUTCString()
    } : {
        "error": "Invalid Date"
    };
}

function parseDateString (value) {
    var timestamp = Date.parse(value);
    if (isNaN(timestamp)) {
        return null;
    }
    return new Date(timestamp);
}

module.exports = {
    getDateJson
};