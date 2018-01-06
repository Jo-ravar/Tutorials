/**
 * This page wiil be used to create dashboard
 * and use components and actions related to dashboard
 */

import React, { Component } from 'react';
import Head from 'next/head';
import InfoCard from '../components/dashboard/infoCard';
import UserInfoCard from '../components/dashboard/userInfoCard';
import AnalyticsCard from '../components/dashboard/analyticsCard';
import InterviewCard from '../components/dashboard/interviewCard';
import AppDrawer from '../components/dashboard/appBar';
import Footer from '../components/footer';

export default class Table extends Component {
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
          <AppDrawer />
          <div className="col-sm-12 completeDiv">
            <div className="col-sm-4">
              <InfoCard />
            </div>
            <div className="col-sm-8">
              <AnalyticsCard />
            </div>
          </div>
          <div className="col-sm-12 completeDiv">
            <div className="col-sm-6">
              <InterviewCard />
            </div>
            <div className="col-sm-6">
              <UserInfoCard />
            </div>
          </div>
          <Footer />``
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
