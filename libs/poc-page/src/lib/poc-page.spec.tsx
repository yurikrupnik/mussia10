import { render } from '@testing-library/react';

import PocPage from './poc-page';

describe('PocPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PocPage />);
    expect(baseElement).toBeTruthy();
  });
});
