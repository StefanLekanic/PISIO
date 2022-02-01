import React from "react";
import { Typography } from "antd";
import {
  Content,
  StyledTable,
  Toolbar,
} from "../../components/BasicStyledComponents";
import { Link } from "react-router-dom";

const Konferencija = () => {
  const konferencije = [
    {
      key: "1",
      id: "1",
      vrijemePocetka: "2022-01-23T11:00:00.000+00:00",
      vrijemeKraja: "2022-01-24T16:00:00.000+00:00",
      naziv: "dasd",
      opis: "dsada",
    },
  ];

  const columns = [
    {
      title: "Naziv",
      dataIndex: "naziv",
      // eslint-disable-next-line
      render: (text, record) => <Link to={{ pathname: `konferencije/${record.id}/sesije`, state: record.id}}>{text}</Link>,
    },
    {
      title: "Opis",
      dataIndex: "opis",
    },
    {
      title: "Vrijeme pocetka",
      dataIndex: "vrijemePocetka",
    },
    {
      title: "Vrijeme zavrsetka",
      dataIndex: "vrijemeKraja",
    },
  ];

  return (
    <Content>
      <Toolbar>
        <Typography.Title level={3}>{"Konferencije"}</Typography.Title>
      </Toolbar>
      <StyledTable
        key="id"
        dataSource={konferencije}
        columns={columns}
        scroll={{ y: "calc(100vh - 250px)" }}
      />
    </Content>
  );
};
export default Konferencija;
