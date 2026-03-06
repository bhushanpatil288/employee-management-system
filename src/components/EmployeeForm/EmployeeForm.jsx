import { useState, useEffect } from 'react'

const DEPARTMENTS = ['Engineering', 'Design', 'HR', 'Marketing', 'Finance', 'Operations']

function EmployeeForm({ employee, onSubmit, onCancel }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        department: 'Engineering',
        designation: '',
        salary: '',
    })

    useEffect(() => {
        if (employee) {
            setForm({
                name: employee.name,
                email: employee.email,
                department: employee.department,
                designation: employee.designation,
                salary: employee.salary,
            })
        }
    }, [employee])

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit({ ...form, salary: Number(form.salary) })
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onCancel}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-slideIn" onClick={(e) => e.stopPropagation()}>
                <div className="px-6 py-4 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800">
                        {employee ? 'Edit Employee' : 'Add New Employee'}
                    </h3>
                </div>

                <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Full Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="border border-gray-200 px-3 py-2 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition text-sm"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="border border-gray-200 px-3 py-2 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition text-sm"
                                placeholder="john@company.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Department</label>
                            <select
                                name="department"
                                value={form.department}
                                onChange={handleChange}
                                className="border border-gray-200 px-3 py-2 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition text-sm bg-white"
                            >
                                {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Designation</label>
                            <input
                                name="designation"
                                value={form.designation}
                                onChange={handleChange}
                                required
                                className="border border-gray-200 px-3 py-2 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition text-sm"
                                placeholder="Software Developer"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700">Salary (₹)</label>
                        <input
                            name="salary"
                            type="number"
                            value={form.salary}
                            onChange={handleChange}
                            required
                            min="1"
                            className="border border-gray-200 px-3 py-2 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition text-sm"
                            placeholder="50000"
                        />
                    </div>

                    <div className="flex justify-end gap-3 mt-2">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-5 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition text-sm font-medium cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:from-blue-700 hover:to-blue-500 transition text-sm cursor-pointer shadow-md"
                        >
                            {employee ? 'Update' : 'Add Employee'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmployeeForm
