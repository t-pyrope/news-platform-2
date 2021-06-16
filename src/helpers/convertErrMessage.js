const convertErrMessage = (msg) => {
    switch (msg) {
        case 'wrong_email_or_password':
            return 'Wrong email or password';
        case 'Error: Network Error':
            return 'No internet connection detected';
        case 'user_not_found':
            return 'User not found';
        default:
            return 'Something went wrong. Please, try again';
    }
};

export default convertErrMessage;
