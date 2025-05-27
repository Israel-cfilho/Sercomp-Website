import { render, screen } from '@testing-library/react';
import Footer from '../Footer/Footer';

describe('Componente Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('deve renderizar o componente corretamente', () => {
    expect(screen.getByText('SERCOMP')).toBeInTheDocument();
    expect(screen.getByText('Permalinks')).toBeInTheDocument();
    expect(screen.getByText('Privacidade')).toBeInTheDocument();
    
    // Verifica se existe pelo menos um elemento com o texto "Contato"
    expect(screen.getAllByText('Contato').length).toBeGreaterThan(0);
  });

  describe('Seção Permalinks', () => {
    it('deve ter o link correto para Início', () => {
      const link = screen.getByRole('link', { name: /início/i });
      expect(link).toHaveAttribute('href', '/');
    });

    it('deve ter o link correto para Programação', () => {
      const link = screen.getByRole('link', { name: /programação/i });
      expect(link).toHaveAttribute('href', 'timeline');
    });

    it('deve ter o link correto para Sobre', () => {
      const link = screen.getByRole('link', { name: /sobre/i });
      expect(link).toHaveAttribute('href', 'about');
    });

    it('deve ter o link correto para Contato', () => {
      // Busca específica pelo link de contato na seção Permalinks
      const links = screen.getAllByRole('link', { name: /contato/i });
      const contatoLink = links.find(link => 
        link.closest('ul')?.className.includes('permalinks')
      );
      
      expect(contatoLink).toHaveAttribute('href', 'contact');
    });
  });

  describe('Seção Privacidade', () => {
    it('deve ter o link correto para Políticas Gerais', () => {
      const link = screen.getByRole('link', { name: /políticas gerais/i });
      expect(link).toHaveAttribute('href', 'privacy');
    });
  });

  describe('Links sociais', () => {
    it('deve ter o link correto para o Instagram', () => {
      const instagramLink = screen.getByRole('link', { name: /instagram/i });
      expect(instagramLink).toHaveAttribute(
        'href',
        'https://instagram.com/SERCOMPpb?igshid=YmMyMTA2M2Y='
      );
      expect(instagramLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Link da logo', () => {
    it('deve ter o link correto para a logo SERCOMP', () => {
      const logoLink = screen.getByRole('link', { name: 'SERCOMP' });
      expect(logoLink).toHaveAttribute('href', '/');
    });
  });
});