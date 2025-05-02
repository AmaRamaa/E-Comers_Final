import React, { useEffect, useState } from 'react';
import { supabase } from '../../db/supabaseClient.js'; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Tags = () => {
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [storageOptions, setStorageOptions] = useState([]);

    const [newCategory, setNewCategory] = useState('');
    const [newColor, setNewColor] = useState('');
    const [newStorage, setNewStorage] = useState('');

    const [editingCategory, setEditingCategory] = useState({ index: null, value: '' });
    const [editingColor, setEditingColor] = useState({ index: null, value: '' });
    const [editingStorage, setEditingStorage] = useState({ index: null, value: '' });

    useEffect(() => {
        const fetchTags = async () => {
            const { data, error } = await supabase.from('Tags').select('*').eq('id', 1);
            if (error) {
                console.error('Error fetching tags:', error);
            } else if (data && data.length > 0) {
                const row = data[0];
                setCategories(Array.isArray(row.category) ? row.category : []);
                setColors(Array.isArray(row.colors) ? row.colors : []);
                setStorageOptions(Array.isArray(row.storage) ? row.storage : []);
            }
        };

        fetchTags();
    }, []);

    const addCategory = () => {
        if (newCategory.trim()) {
            setCategories([...categories, newCategory]);
            setNewCategory('');
        }
    };

    const editCategory = (index) => {
        setEditingCategory({ index, value: categories[index] });
    };

    const saveCategory = () => {
        const updatedCategories = [...categories];
        updatedCategories[editingCategory.index] = editingCategory.value;
        setCategories(updatedCategories);
        setEditingCategory({ index: null, value: '' });
    };

    const deleteCategory = (index) => {
        setCategories(categories.filter((_, i) => i !== index));
    };

    const addColor = () => {
        if (newColor.trim()) {
            setColors([...colors, newColor]);
            setNewColor('');
        }
    };

    const editColor = (index) => {
        setEditingColor({ index, value: colors[index] });
    };

    const saveColor = () => {
        const updatedColors = [...colors];
        updatedColors[editingColor.index] = editingColor.value;
        setColors(updatedColors);
        setEditingColor({ index: null, value: '' });
    };

    const deleteColor = (index) => {
        setColors(colors.filter((_, i) => i !== index));
    };

    const addStorage = () => {
        if (newStorage.trim()) {
            setStorageOptions([...storageOptions, newStorage]);
            setNewStorage('');
        }
    };

    const editStorage = (index) => {
        setEditingStorage({ index, value: storageOptions[index] });
    };

    const saveStorage = () => {
        const updatedStorageOptions = [...storageOptions];
        updatedStorageOptions[editingStorage.index] = editingStorage.value;
        setStorageOptions(updatedStorageOptions);
        setEditingStorage({ index: null, value: '' });
    };

    const deleteStorage = (index) => {
        setStorageOptions(storageOptions.filter((_, i) => i !== index));
    };

    const updateTagsInDatabase = async (updatedData) => {
        const { error } = await supabase
            .from('Tags')
            .update({
                category: categories,
                colors: colors,
                storage: storageOptions,
                ...updatedData
            })
            .eq('id', 1); // Assuming the row with id=1 is the one you're updating
    
        if (error) {
            console.error('Error updating tags:', error);
        } else {
            console.log('Tags updated successfully');
        }
    };

    const handleSaveChanges = async () => {
        await updateTagsInDatabase();
    };
    

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Tags Page</h1>

            <section className="mb-5">
                <h2>Categories</h2>
                <ul className="list-group mb-3">
                    {categories.map((category, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {editingCategory.index === index ? (
                                <>
                                    <input
                                        type="text"
                                        className="form-control me-2"
                                        value={editingCategory.value}
                                        onChange={(e) =>
                                            setEditingCategory({ ...editingCategory, value: e.target.value })
                                        }
                                    />
                                    <button className="btn btn-success btn-sm" onClick={saveCategory}>
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    {category}
                                    <div>
                                        <button
                                            className="btn btn-primary btn-sm me-2"
                                            onClick={() => editCategory(index)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteCategory(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Add new category"
                    />
                    <button className="btn btn-primary" onClick={addCategory}>
                        Add
                    </button>
                </div>
            </section>

            <section className="mb-5">
                <h2>Colors</h2>
                <ul className="list-group mb-3">
                    {colors.map((color, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {editingColor.index === index ? (
                                <>
                                    <input
                                        type="text"
                                        className="form-control me-2"
                                        value={editingColor.value}
                                        onChange={(e) =>
                                            setEditingColor({ ...editingColor, value: e.target.value })
                                        }
                                    />
                                    <button className="btn btn-success btn-sm" onClick={saveColor}>
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    {color}
                                    <div>
                                        <button
                                            className="btn btn-primary btn-sm me-2"
                                            onClick={() => editColor(index)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteColor(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)}
                        placeholder="Add new color"
                    />
                    <button className="btn btn-primary" onClick={addColor}>
                        Add
                    </button>
                </div>
            </section>

            <section className="mb-5">
                <h2>Storage Options</h2>
                <ul className="list-group mb-3">
                    {storageOptions.map((storage, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {editingStorage.index === index ? (
                                <>
                                    <input
                                        type="text"
                                        className="form-control me-2"
                                        value={editingStorage.value}
                                        onChange={(e) =>
                                            setEditingStorage({ ...editingStorage, value: e.target.value })
                                        }
                                    />
                                    <button className="btn btn-success btn-sm" onClick={saveStorage}>
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    {storage}
                                    <div>
                                        <button
                                            className="btn btn-primary btn-sm me-2"
                                            onClick={() => editStorage(index)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteStorage(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={newStorage}
                        onChange={(e) => setNewStorage(e.target.value)}
                        placeholder="Add new storage option"
                    />
                    <button className="btn btn-primary" onClick={addStorage}>
                        Add
                    </button>
                </div>
            </section>
            <button className="btn btn-success mt-3" onClick={handleSaveChanges}>
                Save All Changes
            </button>
        </div>
    );
};

export default Tags;