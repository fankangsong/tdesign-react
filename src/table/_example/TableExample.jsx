import React, { useState } from "react";
import { Table } from "@tdesign/react/table";

const cvmList = [
  {
    instanceId: "ins-4m99aio4",
    instanceName: "Hongkong VPN",
    status: "running",
    area: "香港一区",
    modal: "标准型 S1",
    publicIP: "119.28.142.24",
    privateIP: "10.144.77.75",
  },
  {
    instanceId: "ins-3e7y5ww3",
    instanceName: "Guangzhou Test",
    status: "stopped",
    area: "广州三区",
    modal: "标准型 S1",
    publicIP: "112.30.42.241",
    privateIP: "10.121.72.123",
  },
];

export default function TableExample() {
  return (
    <>
      <Table
        recordKey="instanceId"
        records={cvmList}
        rowDisabled={record => record.status === "stopped"}
        rowClassName={record => record.status}
        columns={[
          {
            key: "instance",
            header: "ID/实例名",
            render: cvm => (
              <>
                <p>
                  <a>{cvm.instanceId}</a>
                </p>
                <p>{cvm.instanceName}</p>
              </>
            ),
          },
          {
            key: "status",
            header: "状态",
            width: 100,
            render: cvm => {
              if (cvm.status === "running") {
                return <span style={{ color: "green" }}>运行中</span>;
              }
              if (cvm.status === "stopped") {
                return <span style={{ color: "red" }}>已关机</span>;
              }
              return cvm.status;
            },
          },
          {
            key: "area",
            header: "可用区域",
          },
          {
            key: "modal",
            header: "主机型号",
          },
          {
            key: "publicIP",
            header: "IP 地址",
          },
        ]}
      />
    </>
  );
}
