import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/common/AppButton';
import { useLogoutMutation } from '../../auth/hooks/useSession';
import { useSessionStore } from '../../../store/sessionStore';

interface AdminDashboardPageProps {
  groups: {
    id: string;
    label: string;
    items: {
      id: string;
      label: string;
      description: string;
      icon: string;
      path: string;
      requiredPermissions: string[];
    }[];
  }[];
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = () => {
  const user = useSessionStore(state => state.user);
  const logoutMutation = useLogoutMutation();

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="admin-dashboard">
      <header>
        <p>OtaWay</p>
        <h1>Hola, {user.name.split(' ')[0]} 👋</h1>
        <p>
          Descubre los mejores lugares turísticos de Otavalo.
        </p>
      </header>

      <section>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>📍 Lugares turísticos</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Explora los principales destinos turísticos de Otavalo.
            <br />
            <Link to="/admin/tourist-places">
              Ver lugares turísticos →
            </Link>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>🍲 Gastronomía</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Conoce los platos y sabores tradicionales de Otavalo.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>🎉 Eventos culturales</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Descubre las fiestas, ferias y actividades culturales.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>❤️ Mis favoritos</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Guarda los lugares que quieras visitar.
          </IonCardContent>
        </IonCard>
      </section>

      <AppButton
        fill="outline"
        color="medium"
        isLoading={logoutMutation.isPending}
        onClick={() => logoutMutation.mutate()}
      >
        Cerrar sesión
      </AppButton>
    </main>
  );
};

export default AdminDashboardPage;