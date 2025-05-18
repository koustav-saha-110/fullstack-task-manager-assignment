import React, { useState } from 'react';
import { useTaskStore } from '../store/useTaskStore';
import { Loader2 } from 'lucide-react';

const AddTask = () => {

    // States
    const { addTask, addTaskLoading } = useTaskStore();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Handlers
    const submitHandler = (e) => {
        e.preventDefault();
        const credentials = {
            title,
            description
        };

        addTask(credentials);
        setTitle("");
        setDescription("");
    }

    return (
        <React.Fragment>
            <div className="w-full bg-white/90 rounded-3xl shadow-2xl p-10 border border-indigo-100">
                <h2 className="text-3xl font-extrabold mb-8 text-indigo-700 text-center tracking-tight drop-shadow">
                    Add New Task
                </h2>
                <form className="flex flex-col gap-6" onSubmit={submitHandler}>
                    <input name="title" type="text" placeholder="Task title" className="border border-indigo-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg transition" required value={title} onChange={e => setTitle(e.target.value)} autoComplete="off" />
                    <textarea name="description" placeholder="Task description (optional)" className="border border-indigo-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none text-base transition" rows={4} value={description} onChange={e => setDescription(e.target.value)} />
                    <button disabled={addTaskLoading} type="submit" className={`bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold rounded-xl px-8 py-3 transition flex items-center justify-center shadow-lg w-full disabled:opacity-60 disabled:cursor-not-allowed`} >
                        {addTaskLoading ? (
                            <Loader2 className="animate-spin w-6 h-6" />
                        ) : (
                            "Add Task"
                        )}
                    </button>
                </form>
            </div>
        </React.Fragment >
    );
}

export default AddTask;
