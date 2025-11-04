"use client"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts"
type Job = {
 id:number;
  name:string;
  number:number;
}
const data:Job[]= [
  {id:1, name: "Software Developer", number: 40 },
  {id:2,  name: "Accountancy", number: 30 },
  {id:3, name: "Marketer", number: 20 },
  {id:4, name: "HR Manager", number: 10 },
  {id:3, name: "Marketer", number: 20 },
]

const COLORS = ["#32CD32", "#FFD700", "#FF8C00", "#00CED1"]

export default function DashboardCharts() {
  return (
    <div style={{marginTop:70}} className="grid grid-cols-1 md:grid-cols-1 gap-8 p-6  rounded-2xl w-full max-w-5xl mx-auto">
      
      
      <div className="p-4 rounded-xl " style={{ backgroundColor:'rgb(5, 5, 28)'}}>
        <h2 className="text-center font-semibold text-gray-700 mb-4">
          Inventory Distribution
        </h2>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="number"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill="green" />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>



    </div>
  )
}
