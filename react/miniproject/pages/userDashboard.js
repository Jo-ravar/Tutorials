/**
 * This page wiil be used to create dashboard
 * and use components and actions related to dashboard
 */

import React, { Component } from 'react';
import Head from 'next/head';
import UserDrawer from '../components/userdashboard/userDrawer';
import UserScoreCard from '../components/userdashboard/userScoreCard';
import UserMainCard from '../components/userdashboard/userMainCard';

export default class UserDashboard extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>MiniProject</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          />
        </Head>
        <div>  
            <UserDrawer/>   
            <div className="col-sm-12 completeDiv">
              <UserScoreCard />
              <UserMainCard/>
            </div>     
          <div className="col-sm-12 footer">
            COPYRIGHT &emsp; SMARTHYRE PVT. LTD
          </div>
        </div>
        <style jsx global>{`
          .footer {
            height: 100%;
            text-align: center;
            color: white;
            font-size: 1.5em;
            font-weight: bold;
            padding: 20px 20px;
            background-color: #006064;
          }
          .completeDiv {
            background-color: #b2ebf2;
          }
        `}</style>
      </div>
    );
  }
}
