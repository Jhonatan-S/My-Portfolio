"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, User, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebaseConfig";
import { toast } from "react-toastify";


type ContextTypes = {
    handleSignInWithEmailAndPassword: (email: string, password: string) => Promise<void>
    handleCreateUserWithEmailAndPassowrd: (email: string, password: string, name: string, confirmPassword: string) => Promise<void>
    handleSignOut: () => Promise<void>
    handleSignInWithGoogle: () => Promise<void>
    handleSignInWithGithub: () => Promise<void>
    showSectionSignIn: boolean
    setShowSectionSignIn: React.Dispatch<React.SetStateAction<boolean>>
    setSuccess: React.Dispatch<React.SetStateAction<string | null>>
    user: User | null
    error: string | null
    success: string | null
    isLoading: boolean
}


const AuthContext = createContext<ContextTypes | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [showSectionSignIn, setShowSectionSignIn] = useState(true);
    const router = useRouter()

    useEffect(() => {

        const unSub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setShowSectionSignIn(true)
                const docRef = doc(db, "users", user.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {

                    setUser({ ...user, displayName: docSnap.data().name, photoURL: docSnap.data().photoURL })
                } else {
                    setUser(user)
                }
            } else {
                setUser(null)
                setError(null)
   
            }
        })

        return () => unSub();
    }, [user]);

    const handleSignInWithGoogle = async () => {
        setIsLoading(true);
        try {
            await signInWithPopup(auth, new GoogleAuthProvider())

            router.replace("/all-about-me")

        } catch (e) {

            setIsLoading(false);
            return;
        }
        setIsLoading(false);
    }



    const handleSignInWithGithub = async () => {
        setIsLoading(true);
        try {
            await signInWithPopup(auth, new GithubAuthProvider())

           
            router.replace("/all-about-me")
        } catch (e) {
            setIsLoading(false);
            if (e instanceof Error) {
                console.log(e.message)
            }
            return;
        }
        setIsLoading(false);
    }


    const handleSignInWithEmailAndPassword = async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)

        try {
            await signInWithEmailAndPassword(auth, email, password)
            router.replace("/all-about-me")
        }catch(e) {
            if(e instanceof Error && e.message === "Firebase: Error (auth/invalid-credential).") {
                setError("Email ou senha incorreto")
            }else {
                setError("Ocorreu um erro desconhecido")
            }
        }
        setIsLoading(false)
    }


    const handleCreateUserWithEmailAndPassowrd = async (name: string, email: string, password: string, confirmPassword: string) => {
        setIsLoading(true);

        try {

            if (password.length < 6) {
                setError("A senha deve conter no mínimo 6 dígitos.")
                setIsLoading(false)
                return;

            } else if (password != confirmPassword) {
                setError("As senhas não são iguais.")
                setIsLoading(false)
                return;
            }

            else if (password === confirmPassword) {

                const res = await createUserWithEmailAndPassword(auth, email, password);

                await setDoc(doc(db, "users", res.user.uid), {
                    name,
                    email,
                    uid: res.user.uid,
                    photoUrl: null
                })
                setIsLoading(false)
                router.replace("/all-about-me")

            } else {
                setIsLoading(false)
                setError("As senhas não são iguais.");
            }

        } catch (e) {
            if (e instanceof Error) {
                const errorCode = (e as { code?: string }).code;

                if (errorCode === 'auth/email-already-in-use') {
                    setError("O e-mail informado já está em uso.");
                } else {
                    setError("Ocorreu um erro ao criar a conta.");

                }
            }
            setIsLoading(false);

        }

        setIsLoading(false);
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null);

        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
                console.error(e);
            } else {
                setError("An unexpected error occurred.");
                console.error("An unexpected error occurred.", e);
            }
        }
    };

    return (
        <AuthContext.Provider value={{ error, handleCreateUserWithEmailAndPassowrd, handleSignInWithEmailAndPassword, handleSignInWithGithub, handleSignInWithGoogle, handleSignOut, setShowSectionSignIn, setSuccess, showSectionSignIn, success, user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("O elemento pai precisar estar sendo envolvido com o AuthProvider");
    }

    return context;
};