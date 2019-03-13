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
    var unix = parseInt(value);
    if (!isNaN(unix)){
        return new Date(unix);
    }
    var timestamp = Date.parse(value);
    if (!isNaN(timestamp)) {
        return new Date(timestamp);
    }
    return null;
}

module.exports = {
    getDateJson
};