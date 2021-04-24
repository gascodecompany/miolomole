import React from 'react';
import PartnerForm from '../../components/PartnerForm';
import PageJustForAdmin from '../../components/PageJustForAdmin';
import { useAppProvider } from '../../store/appProvider';

export default function PartnerPage(props){
  const { isLoggedIn } = useAppProvider();
  if(isLoggedIn){ return <PartnerForm {...props} />} else { return <PageJustForAdmin /> }
}
