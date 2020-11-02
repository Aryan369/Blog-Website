exports.getYear = function () {

    const newDate = new Date();

    const opt = {
        year: "numeric"
    };

    return newDate.toLocaleDateString("en-US", opt);
}