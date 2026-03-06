import { useState } from 'react'
import AuthContext from './AuthContext'

const DEFAULT_EMPLOYEES = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul@company.com', department: 'Engineering', designation: 'Frontend Developer', salary: 55000 },
    { id: 2, name: 'Priya Patel', email: 'priya@company.com', department: 'Design', designation: 'UI Designer', salary: 48000 },
    { id: 3, name: 'Amit Kumar', email: 'amit@company.com', department: 'Engineering', designation: 'Backend Developer', salary: 60000 },
    { id: 4, name: 'Sneha Reddy', email: 'sneha@company.com', department: 'HR', designation: 'HR Manager', salary: 52000 },
    { id: 5, name: 'Vikram Singh', email: 'vikram@company.com', department: 'Marketing', designation: 'Marketing Lead', salary: 50000 },
]

function getInitialEmployees() {
    const stored = localStorage.getItem('employees')
    if (stored) return JSON.parse(stored)
    localStorage.setItem('employees', JSON.stringify(DEFAULT_EMPLOYEES))
    return DEFAULT_EMPLOYEES
}

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(localStorage.getItem('user') || null)
    const [employees, setEmployees] = useState(getInitialEmployees)

    function login(email, password) {
        if (email === 'admin@example.com' && password === '123') {
            localStorage.setItem('user', 'admin')
            setUser('admin')
            return true
        }
        return false
    }

    function logout() {
        localStorage.removeItem('user')
        setUser(null)
    }

    function saveEmployees(updated) {
        localStorage.setItem('employees', JSON.stringify(updated))
        setEmployees(updated)
    }

    function addEmployee(emp) {
        const newId = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1
        const updated = [...employees, { ...emp, id: newId }]
        saveEmployees(updated)
    }

    function updateEmployee(id, data) {
        const updated = employees.map(e => e.id === id ? { ...e, ...data } : e)
        saveEmployees(updated)
    }

    function deleteEmployee(id) {
        const updated = employees.filter(e => e.id !== id)
        saveEmployees(updated)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, employees, addEmployee, updateEmployee, deleteEmployee }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider