"use client"
import { useSignIn } from '@clerk/nextjs'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LogInSchema, LogInSchemaType } from '@/schemas/auth/login-schema';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

const UseAuth = () => {
    const { isLoaded, setActive, signIn } = useSignIn();
    const { 
        register,
        handleSubmit, 
        reset,
        formState: { errors } 
    } = useForm({
        resolver: zodResolver(LogInSchema),
        mode: "onBlur",
    });
    
    const router = useRouter();

    const onSubmit = async (formData: LogInSchemaType) => {
        try {
            const {
                data,
                success
            } = LogInSchema.safeParse(formData);

            if(!data) {
                throw new Error("Invalid credentials");
            }
            const { email, password } = data;

            if(!success) {
                throw new Error("Invalid credentials");
            }

            if(!isLoaded) {
                throw new Error("Something went wrong");
            }

            const authenticated = await signIn.create({
                identifier: email,
                password
            })

            if(authenticated.status === "complete"){
                reset();
                await setActive({ session: authenticated.createdSessionId });
                toast.success("Welcome back");
                router.push("/");
            }
            
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    const {
        mutate : InstantiateSignIn,
        isPending
    } = useMutation({
        mutationKey: ["sign-in"],
        mutationFn: (data: LogInSchemaType) => {
            return onSubmit(data);
        },
        onError: (error) => {
            console.error(error);
            toast.error("Something went wrong");
        }
    })

    const onAuthenticateUser = handleSubmit(async (data) => {
        InstantiateSignIn(data);
    })

    return {
        onAuthenticateUser,
        isPending,
        register,
        errors
    }
}

export default UseAuth