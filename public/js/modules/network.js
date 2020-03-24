export async function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("service-worker.js", {
                scope: "./"
            });
            console.log("Service worker registrated:", registration);
        } catch(error) {
            console.warn("Service worker failed to register:", error);
        }
    } else {
        console.info("ServiceWorker not supported");
    }
}