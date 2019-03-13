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
    var date = new Date(value);
    if (isNaN(date.getTime())) {
        return null;
    }
    return date;
}

module.exports = {
    getDateJson
};