import { describe, expect, it, } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('Clicker', () => {
    it('renders the App', () => {
        render(<App />);
        expect(screen.getByText('Clic Counter')).toBeVisible;
    });

    it('increments on interaction', () => {
        const { container } = render(<App />);

        fireEvent.click(container.querySelector("button[data-action='increment']"));
    })
})