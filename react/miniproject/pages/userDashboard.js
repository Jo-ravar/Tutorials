/**
 * This page wiil be used to create dashboard
 * and use components and actions related to dashboard
 */

import React, { Component } from 'react';
import Head from 'next/head';
import UserDrawer from '../components/userdashboard/userDrawer';
import UserScoreCard from '../components/userdashboard/userScoreCard';
import UserMainCard from '../components/userdashboard/userMainCard';
import Footer from '../components/footer';
import { footer } from '../components/color';

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
              <UserMainCard />
            </div>     
          <Footer/>
        </div>
        <style jsx global>{`
          .completeDiv {
            background-color: #b2ebf2;
          }
        `}</style>
      </div>
    );
  }
}
