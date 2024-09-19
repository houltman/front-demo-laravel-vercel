import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";
import { verify } from "../auth";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// Middleware para proteger rutas que requieren autenticacion
router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem("access-token");

    if (to.meta.requiresAuth) {
        if (!token) {
            return next({ name: "Login" }); 
        }

        try {
            // Verifica el token enviando una solicitud al backend
            const response = await verify();

            if (response.status === 200) {
                next(); 
            }
        } catch (error) {
            console.error("Token no válido o error en la validación:", error);
            localStorage.removeItem("access-token"); 
            next({ name: "Login" }); 
        }
    } else {
        next(); 
    }
});

export default router;
