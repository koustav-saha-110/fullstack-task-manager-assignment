import React, { useEffect, useState } from 'react';
import TasksSummary from '../components/TasksSummary';
import { useTaskStore } from '../store/useTaskStore';
import { Loader2 } from 'lucide-react';
import AddTask from '../components/AddTask';
import Task from '../components/Task';

const HomePage = () => {

    // States
    const [hideModal, setHideModal] = useState(false);
    const { tasks, loading, getTasks } = useTaskStore();

    // Handlers
    const toggleHideModal = () => setHideModal((prev) => !prev);

    useEffect(() => {
        getTasks();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-200">
                <Loader2 className="animate-spin text-indigo-600 w-16 h-16 mb-4" />
                <span className="text-indigo-700 text-xl font-semibold">Loading your dashboard...</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-200 px-4 py-10 flex flex-col items-center">
            <div className="w-full flex flex-col gap-8 max-w-3xl">
                <h1 className="text-4xl font-extrabold text-center text-indigo-900 drop-shadow-lg tracking-tight mb-2">
                    Task Management Dashboard
                </h1>

                <TasksSummary />
                
                <button
                    onClick={toggleHideModal}
                    className="self-end px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
                >
                    {hideModal ? 'Show Add Task' : 'Hide Add Task'}
                </button>
                {
                    !hideModal && <AddTask />
                }

                <div className="bg-white/90 rounded-3xl shadow-2xl p-8 mt-4">
                    <h2 className="text-2xl font-bold mb-8 text-indigo-800 text-center tracking-wide">
                        Your Tasks
                    </h2>
                    <ul className="divide-y divide-indigo-100">
                        {tasks && tasks.length > 0 ? (
                            tasks.map((task) => (
                                <Task key={task._id} task={task} />
                            ))
                        ) : (
                            <li className="py-12 text-indigo-400 text-center italic text-lg">
                                No tasks available.
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
