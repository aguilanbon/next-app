"use client";

import { Line, ResponsiveLine } from "@nivo/line";

export default function DashboardLineChart() {
  const data = [
    {
      id: "People",
      data: [
        { x: "Jan", y: 10 },
        { x: "Feb", y: 20 },
        { x: "Mar", y: 15 },
        { x: "Apr", y: 25 },
        { x: "May", y: 30 },
        { x: "Jun", y: 28 },
      ],
    },
    {
      id: "Not People",
      data: [
        { x: "Jan", y: 13 },
        { x: "Feb", y: 20 },
        { x: "Mar", y: 4 },
        { x: "Apr", y: 25 },
        { x: "May", y: 30 },
        { x: "Jun", y: 16 },
      ],
    },
  ];
  return (
    <div className="lg:w-1/2 w-full h-full flex">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Total",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        theme={{
          textColor: "white",
          labels: {
            text: {
              color: "#f00505",
            },
          },
        }}
        enableGridX={false}
        colors={{ scheme: "nivo" }}
        lineWidth={2}
        pointSize={4}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            itemTextColor: "rgba(249, 249, 249, 0.927)",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
