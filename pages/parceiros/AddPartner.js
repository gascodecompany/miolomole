import React from 'react';
import PartnerJumbotron from '../../components/PartnerJumbotron';
import PartnerForm from '../../components/PartnerForm';
import PageJustForAdmin from '../../components/PageJustForAdmin';
import { useAppProvider } from '../../store/appProvider';

export default function PartnerPage(props){
  const { isLoggedIn } = useAppProvider();
  if(isLoggedIn){
    return (
      <>
        {/* <PartnerJumbotron {...props} /> */}
        <PartnerForm {...props} />
      </>
    )
  } else { return <PageJustForAdmin /> }
}
