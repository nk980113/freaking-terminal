import React from 'react';

import { render } from 'ink';
import { Frame } from './components/Frame';

process.stdout.write('\x1b[?1049h\x1b[?25l');
const { clear, waitUntilExit } = render(<Frame />);
waitUntilExit().then(() => {
    process.stdout.write('\x1b[?1049l\x1b[?25h');
    clear();
});

export { clear };