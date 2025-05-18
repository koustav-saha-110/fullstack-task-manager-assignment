import React, { useState } from 'react';
import { useTaskStore } from "../store/useTaskStore";
import EditTask from './EditTask';

const Task = ({ task }) => {

    // States
    const [open, setOpen] = useState(false);
    const { deleteTask, markCompleteTask } = useTaskStore();

    return (
        <React.Fragment>
            <li className={`py-5 px-2 transition hover:bg-indigo-50 rounded-xl group`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                        <span className={`inline-block w-3 h-3 rounded-full ${task.isCompleted ? 'bg-green-400' : 'bg-yellow-400'}`} title={task.isCompleted ? 'Completed' : 'Pending'} />
                        <span className={`text-lg font-semibold ${task.isCompleted ? 'text-green-700 line-through' : 'text-indigo-900'}`}>
                            {task.title}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => {
                            markCompleteTask(task._id);
                        }} className={`px-3 py-1 rounded-full text-xs font-medium transition ${task.isCompleted ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}>
                            {task.isCompleted ? 'Mark as Pending' : 'Mark as Complete'}
                        </button>
                        <button onClick={() => {
                            deleteTask(task._id);
                        }} className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 hover:bg-red-200 transition">
                            Delete
                        </button>
                        <button onClick={() => {
                            setOpen((prev) => !prev);
                        }} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                            {
                                open ? "Close" : "Edit"
                            }
                        </button>
                        <span className={`text-xs text-center flex items-center justify-center font-medium px-3 py-1 rounded-full ${task.isCompleted ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {task.isCompleted ? 'Completed' : 'Pending'}
                        </span>
                    </div>
                </div>
                {task.description && (
                    <p className="text-indigo-700 mt-2 ml-6 text-sm">
                        {task.description}
                    </p>
                )}
            </li>
            {
                open && <EditTask title={task.title} taskId={task._id} description={task.description} />
            }
        </React.Fragment>
    );
}

export default Task;
