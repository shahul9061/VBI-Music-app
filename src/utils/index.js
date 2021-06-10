export const truncate = (input,truncateLimit) => input.length > 5 ? `${input.substring(0, truncateLimit)}...` : input;

export const createdAt = () => {
    var m = new Date();
    var dateString =
    m.getUTCFullYear() + "/" +
    ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2);

    return dateString
}

export const shuffleArray = (array) => {
    var copy = [].concat(array);
    copy.sort(function(){
        return 0.5 - Math.random();
    });
    return copy
}

export const firstUpperCase = (input) =>
{
    return input[0].toUpperCase() + input.substr(1);
}

export const mergeById = (a1, a2) =>
    a1.map(itm => ({
    ...a2.find((item) => (item.id === itm.id) && item),
    ...itm
}));