import { render, screen } from '@testing-library/react';
import { IonApp } from '@ionic/react';
import AdminDashboardPage from './AdminDashboardPage';

describe('AdminDashboardPage', () => {
  it('muestra el contenido principal de OtaWay', () => {
    render(
      <IonApp>
        <AdminDashboardPage groups={[]} />
      </IonApp>,
    );

    expect(screen.getByText('OtaWay')).toBeInTheDocument();
    expect(screen.getByText(/Descubre los mejores lugares turísticos de Otavalo/i)).toBeInTheDocument();
  });
}); 