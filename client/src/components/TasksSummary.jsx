import React, { useEffect } from 'react';
import { useTaskStore } from "../store/useTaskStore";

const TasksSummary = () => {

    // States
    const { tasks } = useTaskStore();

    const completedTasks = tasks.filter((task) => task.isCompleted);
    const notCompletedTasks = tasks.filter((task) => !task.isCompleted);

    return (
        <React.Fragment>
            <div className="flex flex-col sm:flex-row justify-between gap-6 mb-10">
                <div className="flex-1 bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-2xl shadow-xl p-6 text-center border-2 border-indigo-300 hover:scale-105 transition-transform duration-200">
                    <h2 className="text-lg font-semibold mb-2 text-indigo-900">Total Tasks</h2>
                    <span className="text-5xl font-extrabold text-indigo-700 drop-shadow">{tasks.length}</span>
                </div>
                <div className="flex-1 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-2xl shadow-xl p-6 text-center border-2 border-emerald-300 hover:scale-105 transition-transform duration-200">
                    <h2 className="text-lg font-semibold mb-2 text-emerald-900">Completed</h2>
                    <span className="text-5xl font-extrabold text-emerald-700 drop-shadow">{completedTasks.length}</span>
                </div>
                <div className="flex-1 bg-gradient-to-br from-rose-200 to-rose-400 rounded-2xl shadow-xl p-6 text-center border-2 border-rose-300 hover:scale-105 transition-transform duration-200">
                    <h2 className="text-lg font-semibold mb-2 text-rose-900">Not Completed</h2>
                    <span className="text-5xl font-extrabold text-rose-700 drop-shadow">{notCompletedTasks.length}</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TasksSummary;
