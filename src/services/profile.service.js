import fb from '@/firebase';

export const profileService = {
    login, logout
}

function login(serviceProvider) {
    return fb.login(serviceProvider);
}

function logout() {
    return fb.logout();
}