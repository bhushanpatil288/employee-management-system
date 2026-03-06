import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../Auth/AuthContext'
import EmployeeForm from '../components/EmployeeForm/EmployeeForm'
import EmployeeTable from '../components/EmployeeTable/EmployeeTable'

function AdminDashboard() {
  const navigate = useNavigate()
  const { user, employees, addEmployee, updateEmployee, deleteEmployee } = useContext(AuthContext)

  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingEmployee, setEditingEmployee] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)

  useEffect(() => {
    if (!user) navigate('/sign-in')
  }, [user, navigate])

  if (!user) return null

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase()) ||
    emp.designation.toLowerCase().includes(search.toLowerCase())
  )

  const departments = [...new Set(employees.map(e => e.department))]

  function handleAdd(data) {
    addEmployee(data)
    setShowForm(false)
  }

  function handleEdit(data) {
    updateEmployee(editingEmployee.id, data)
    setEditingEmployee(null)
  }

  function confirmDelete() {
    deleteEmployee(deleteTarget.id)
    setDeleteTarget(null)
  }

  return (
    <div className="animate-fadeIn py-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Employee Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your team members</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-2 rounded-xl font-medium hover:from-blue-700 hover:to-blue-500 transition cursor-pointer shadow-md flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium uppercase">Total</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{employees.length}</p>
        </div>
        {departments.slice(0, 3).map(dept => (
          <div key={dept} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-500 font-medium uppercase">{dept}</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">
              {employees.filter(e => e.department === dept).length}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h2 className="font-semibold text-gray-800">All Employees ({filtered.length})</h2>
          <div className="relative w-full sm:w-64">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, department..."
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition text-sm"
            />
          </div>
        </div>

        <EmployeeTable
          employees={filtered}
          onEdit={(emp) => setEditingEmployee(emp)}
          onDelete={(emp) => setDeleteTarget(emp)}
        />
      </div>

      {showForm && (
        <EmployeeForm onSubmit={handleAdd} onCancel={() => setShowForm(false)} />
      )}

      {editingEmployee && (
        <EmployeeForm employee={editingEmployee} onSubmit={handleEdit} onCancel={() => setEditingEmployee(null)} />
      )}

      {deleteTarget && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={() => setDeleteTarget(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-slideIn" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Delete Employee</h3>
              <p className="text-gray-500 text-sm mb-6">
                Are you sure you want to delete <span className="font-semibold text-gray-700">{deleteTarget.name}</span>? This action cannot be undone.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setDeleteTarget(null)}
                  className="px-5 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition text-sm font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-5 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition text-sm cursor-pointer shadow-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
