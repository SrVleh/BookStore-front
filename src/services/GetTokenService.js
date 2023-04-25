class GetTokenService {
    static Call() {
        let now = new Date(Date.now()).getTime();
        let thirtyMinutes = 1000 * 60 * 30;
        let timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
        if (timeSinceLastLogin < thirtyMinutes) {
            return localStorage.getItem("token");
        }
    }
}

export default GetTokenService