/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import Top from 'src/pages';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Top />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Top />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText('Button'));
    expect(window.alert).toHaveBeenCalledWith('Hello, World!');
  });
});
