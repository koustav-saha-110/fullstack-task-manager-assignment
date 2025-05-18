import React, { useState } from 'react';
import { useTaskStore } from '../store/useTaskStore';

const EditTask = (props) => {

    // States
    const [title, setTitle] = useState(props.title || "");
    const [description, setDescription] = useState(props.description || "");
    const { editTask } = useTaskStore();

    // Handlers
    const submitHandler = (e) => {
        e.preventDefault();
        const credentials = {
            title,
            description
        };

        editTask(props.taskId, credentials);
    }

    return (
        <React.Fragment>
            <form onSubmit={submitHandler} className="py-4 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" name="title" placeholder="Task title" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" name="description" placeholder="Task description" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" rows={4}></textarea>
                </div>
                <button type="submit" className="w-max bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Save Changes
                </button>
            </form>
        </React.Fragment>
    )
}

export default EditTask;
