
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  updateProfile,
  User as FirebaseUser,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { User } from '@/lib/auth';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  name?: string;
}

const convertFirebaseUser = (firebaseUser: FirebaseUser): User => ({
  id: firebaseUser.uid,
  email: firebaseUser.email || '',
  name: firebaseUser.displayName || undefined,
  avatar: firebaseUser.photoURL || undefined,
  role: 'user',
  createdAt: firebaseUser.metadata.creationTime || new Date().toISOString(),
});

export const authService = {
  // Login user
  async login(credentials: LoginCredentials) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        credentials.email, 
        credentials.password
      );
      
      const user = convertFirebaseUser(userCredential.user);
      
      return {
        success: true,
        data: { user, token: await userCredential.user.getIdToken() }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Login failed'
      };
    }
  },

  // Register new user
  async signup(credentials: SignupCredentials) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        credentials.email, 
        credentials.password
      );

      // Update the user's display name if provided
      if (credentials.name) {
        await updateProfile(userCredential.user, {
          displayName: credentials.name
        });
      }

      const user = convertFirebaseUser(userCredential.user);
      
      return {
        success: true,
        data: { user, token: await userCredential.user.getIdToken() }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Signup failed'
      };
    }
  },

  // Google Sign In
  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      
      const user = convertFirebaseUser(userCredential.user);
      
      return {
        success: true,
        data: { user, token: await userCredential.user.getIdToken() }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Google sign in failed'
      };
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const user = convertFirebaseUser(currentUser);
        return {
          success: true,
          data: user
        };
      } else {
        return {
          success: false,
          error: 'No user logged in'
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get current user'
      };
    }
  },

  // Logout user
  async logout() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Logout failed'
      };
    }
  },

  // Refresh token
  async refreshToken() {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const token = await currentUser.getIdToken(true);
        return {
          success: true,
          data: { token }
        };
      } else {
        return {
          success: false,
          error: 'No user logged in'
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Token refresh failed'
      };
    }
  },
};
