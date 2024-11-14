import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data=useLoaderData();
  return (
    <div className="mb-40">
      <div className="bg-[#9538E2] text-center text-white">
        <h2 className="text-2xl my-4 font-bold pt-10">Statistics</h2>
        <p className="pb-10">
          Explore the latest gadgets that will take your experience to the next
          level. From smart <br /> devices to the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="w-full md:w-10/12 mx-auto p-3 md:p-10 rounded-md bg-base-100 shadow-xl mt-20 h-[400px]">
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="price"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="rating"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
