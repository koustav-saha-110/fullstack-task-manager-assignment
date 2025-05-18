import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Loader2 } from 'lucide-react';

const SignUpForm = () => {

    // States
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, loading } = useAuthStore();

    // Handlers
    const submitHandler = (e) => {
        e.preventDefault();
        const credentials = {
            username,
            email,
            password
        };

        signup(credentials);
    }

    // Cleanup Function
    useEffect(() => {
        return () => {
            setUsername("");
            setEmail("");
            setPassword("");
        }
    }, []);

    return (
        <React.Fragment>
            <form onSubmit={submitHandler} className="w-full flex flex-col gap-4">
                <div className='flex flex-col gap-1'>
                    <label htmlFor="username" className="block text-gray-700 font-semibold">
                        Username:
                    </label>
                    <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className="block text-gray-700 font-semibold">
                        Email:
                    </label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="block text-gray-700 font-semibold">
                        Password:
                    </label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <button disabled={loading} type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center">
                    {
                        loading ? <Loader2 className='animate-spin' /> : "Create new Account"
                    }
                </button>
            </form>
        </React.Fragment>
    );
}

export default SignUpForm;
