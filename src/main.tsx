import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import App from "./app/App.tsx";

import "./styles/index.css";
import {ScrollToTop} from "@/entites/ScrollToTop";

const rootElement = document.getElementById("root");
if(!rootElement) {
    throw new Error('Could not find root element to mount to')
}

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <ScrollToTop/>
                <App/>
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>
)