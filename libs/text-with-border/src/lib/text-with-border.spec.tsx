import { render } from '@testing-library/react';

import TextWithBorder from './text-with-border';

describe('TextWithBorder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextWithBorder />);
    expect(baseElement).toBeTruthy();
  });
});
