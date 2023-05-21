const getCurrentMounth = () => {
    const now = new Date();
    return now.getMonth() + 1
};

module.exports = getCurrentMounth