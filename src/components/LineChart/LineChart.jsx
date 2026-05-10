import { LineChart as LChart,Line,XAxis,YAxis } from "recharts";
const LineChart = () => {
const data = [
  { id: 1, name: "Bob", math: 78, physics: 70 },
  { id: 2, name: "Alice", math: 65, physics: 75 },
  { id: 3, name: "John", math: 90, physics: 88 },
  { id: 4, name: "Sara", math: 55, physics: 60 },
  { id: 5, name: "David", math: 82, physics: 79 },
  { id: 6, name: "Emma", math: 74, physics: 69 },
  { id: 7, name: "Michael", math: 91, physics: 93 },
  { id: 8, name: "Sophia", math: 68, physics: 72 },
  { id: 9, name: "Daniel", math: 60, physics: 58 },
  { id: 10, name: "Olivia", math: 81, physics: 85 }
];
    return (
        <div>
            <LChart width={800} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke="red" />
                <Line dataKey={'physics'} stroke="yellow" />

            </LChart>
        </div>
    );
};

export default LineChart;