const checkCredentials = (params) => {
    if (params.username !== 'Admin' || params.password !== '12345') {
        return false;
    }
    return true;
};

export default checkCredentials;
