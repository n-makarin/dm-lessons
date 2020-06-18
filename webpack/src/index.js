import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './fonts/libre-baskerville-v5-latin-regular.woff';
import './fonts/libre-baskerville-v5-latin-regular.woff2';

import './index.html';
import './index.scss';
import './scripts/script';

import './lessons/2/index.scss';
import './lessons/3/index.scss';
import './homeworks/2/index.scss';

// eslint-disable-next-line import/extensions
import lesson3 from './lessons/3/index.js';

lesson3();

OfflinePluginRuntime.install();
