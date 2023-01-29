import React from 'react';

import { render } from 'ink';
import { App } from './App';

process.stdout.write('\x1b[?1049h');
const { clear, waitUntilExit } = render(<App />);
waitUntilExit().then(() => {
    process.stdout.write('\x1b[?1049l');
    clear();
    process.exit(0);
});

// export { clear };
