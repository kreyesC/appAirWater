import { useEffect, useState } from 'react';
import { Storage } from '@ionic/storage';
import { elements } from 'chart.js';

const USER_KEY = 'user-key'
export function useStorage()  {
    const [store, setStore] = useState<Storage>();
    const [user, setUser] = useState<User[]>([]);

useEffect(() => {
    const initStorage = async () => {
        const newStorage = new Storage({
            name: 'airWaterdb',
        });
        const store = await newStorage.create();
        setStore(store);

        const userStore = await store.get(USER_KEY) || [];

        setUser(userStore);
    }
    initStorage();

}, [])

const addUser = async (users: object) => {
    const newUser = {
        users,
        created: new Date().getTime(),
    }
    const setNewUser = [...user, newUser]
    setUser(setNewUser)
    store?.set(USER_KEY, setNewUser)
}

const updateUsers = async (created: string, users: object) => {
    const updatedUsers = user.map(element => 
        element.created === created ? { ...element, users } : element
    );
    setUser(updatedUsers);
    await store?.set(USER_KEY, updatedUsers);
};
const removeUser = async(created:string) => {
    const deleteUser = user.filter(element => element.created !== created);
    setUser(deleteUser);
    return store?.set(USER_KEY, deleteUser)
}
return {
user,
addUser,
removeUser,
updateUsers 
} 
}