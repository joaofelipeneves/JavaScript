import React, {useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './CustomTextField'

import {commerce} from '../../lib/commerce';


const AddressForm = ({checkoutToken}) => {
  const [shippingCountries,  setShippingCountries] = useState([]);
  const [shippingCountry,  setShippingCountry] = useState('');
  const [shippingSubdivisions,  setShippingSubdivisions] = useState([]);
  const [shippingSubdivision,  setShippingSubdivision] = useState('');
  const [shippingOptions,  setShippingOptions] = useState([]);
  const [shippingOption,  setShippingOption] = useState('');

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}))

  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries[0]));
  }



  const fetchSubdivisions = async (checkoutTokenId, countryCode) => {
    const {subdvisions} = await commerce.services.localeListSubdivisions(checkoutTokenId, countryCode);
      setShippingSubdivisions(subdvisions);
      setShippingSubdivision(Object.keys(subdvisions)[0]);
  }






 useEffect (() => {
   fetchShippingCountries(checkoutToken.id)
 }, []);

 useEffect (() => {
  if(shippingCountry) fetchSubdivisions(shippingCountry);
 }, [shippingCountry])

  return (
    <>
    
      <Typography variant = "h6" gutterBottom> Shipping address </Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing = {3}>
                <FormInput required name = "firstName" label = "First Name" />
                <FormInput required name = "lastName" label = "Last Name" />
                <FormInput required name = "address" label = "Adress" />
                <FormInput required name = "email" label = "Email" />
                <FormInput required name = "city" label = "City" />
                <FormInput required name = "zip" label = "Zip / Postal Code" />
                <Grid item xs = {12} sm = {6}>
                  <InputLabel> Shipping country </InputLabel>
                  <Select value = {shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                    {countries.map((country) => (
                      <MenuItem key={country.id} value = {country.id}>
                        {country.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs = {12} sm = {6}>
                  <InputLabel> Shipping Subidivision </InputLabel>
                  <Select value = {shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                    {subdivisions.map((subdivision) => (
                      <MenuItem key={subdivision.id} value = {subdivision.id}>
                        {subdivision.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
          </Grid>
        </form>
      
      </FormProvider>
    
    </>
  );
}

export default AddressForm
