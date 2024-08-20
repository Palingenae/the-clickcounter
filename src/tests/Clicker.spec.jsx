import { describe, expect, it, } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Clicker', () => {
    it('renders the App', () => {
        render(<App />);
        expect(screen.getByText('Clic Counter')).toBeVisible;
    });

    it('renders the click amount in its initial state', () => {
        render(<App />);

        expect(screen.getByText(0)).toBeVisible;
    })
    it('renders the increment button', () => {
        const { container } = render(<App />);

        expect(screen.getByText('Ajouter')).toBeVisible;
        expect(container.querySelector(`button[data-action="increment"]`).toBeVisible)
    })
    it('renders the decrement button', () => {
        const { container } = render(<App />);

        expect(screen.getByText('Retirer')).toBeVisible;
        expect(container.querySelector(`button[data-action="decrement"]`).toBeVisible)
    })
})