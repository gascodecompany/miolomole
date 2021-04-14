import React from 'react';
import PartnerJumbotron from '../../components/PartnerJumbotron';
import PartnerForm from '../../components/PartnerForm';
import PageJustForAdmin from '../../components/PageJustForAdmin';

export default function PartnerPage(props){
  if(props.isLoggedIn){
    return (
    <>
      {/* <PartnerJumbotron {...props} /> */}
      <PartnerForm {...props} />
    </>
  )} else { return <PageJustForAdmin /> }
}
