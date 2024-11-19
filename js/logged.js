if (localStorage.getItem('user') !== null) {
    if (window.location.pathname === "/pages/login.html" || window.location.pathname === "/pages/register.html") {
        window.location.href = "/pages/home.html";
    }
} else {
    if (window.location.pathname !== "/pages/login.html" && window.location.pathname !== "/pages/register.html") {
        window.location.href = "/pages/login.html";
    }
}