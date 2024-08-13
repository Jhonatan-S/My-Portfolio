import { useAuth } from '@/lib/contexts/authContext.tsx/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const withAuth = (WrappedComponent: React.FC) => {
  const Wrapper = (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.replace('/credential/auth');
      }
    }, [user, router]);

    if (!user) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;