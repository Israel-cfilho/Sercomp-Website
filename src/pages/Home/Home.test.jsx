import { render, screen } from '@testing-library/react';
import Home from './Home';

vi.mock('../../components/Countdown/Countdown', () => ({
  default: () => <div data-testid="mock-countdown" />,
}));


describe('Home component', () => {
  test('o botão "Inscreva-se" deve estar dentro de um link com o href correto', () => {
    render(<Home />);
    
    const button = screen.getByRole('button', { name: /inscreva-se/i });

    expect(button.closest('a')).toHaveAttribute('href', 'https://eventflow.com.br/sign-in');
  });
});
