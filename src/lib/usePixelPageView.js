// src/lib/usePixelPageView.js
// Fires a Meta Pixel PageView on initial load and on every route change.
// The base snippet in index.html only calls fbq('init') — this hook owns
// ALL PageView events, so nothing double-counts.
//
// Note: in local dev, React 18 StrictMode mounts effects twice, so you may
// see doubled PageViews on localhost. Production builds fire once.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePixelPageView() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'PageView');
        }
    }, [pathname]);
}
