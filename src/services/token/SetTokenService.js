class SetTokenService {
    static Call(token) {
        localStorage.setItem("token", token);
        localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
    }
}

export default SetTokenService