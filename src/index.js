import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import

import './index.css';
import './i18n.js';

import App from './App';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.Suspense fallback='loading...'> {/* Place React.Suspense here */}
    <App />
  </React.Suspense>
);
